import "dotenv/config";

import { REST, Routes } from "discord.js";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const commands: unknown[] = [];

const commandsPath = path.join(process.cwd(), "dist", "commands");

for (const folder of fs.readdirSync(commandsPath)) {
     const folderPath = path.join(commandsPath, folder);

     for (const file of fs.readdirSync(folderPath)) {
          if (!file.endsWith(".js")) continue;

          const filePath = path.join(folderPath, file);
          const fileUrl = pathToFileURL(filePath).href;

          const commandModule = await import(fileUrl);

          const command = commandModule.default;

          if (!command?.data) continue;

          commands.push(command.data.toJSON());
     }
}

const rest = new REST({ version: "10" }).setToken(
     process.env.DISCORD_TOKEN!
);

await rest.put(
     Routes.applicationCommands(
          process.env.CLIENT_ID!
     ),
     {
          body: commands
     }
);

console.log(`Deployed ${commands.length} commands.`);
