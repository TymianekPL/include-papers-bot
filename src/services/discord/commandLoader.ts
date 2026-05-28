import fs from "node:fs";
import path from "node:path";
import { configuration } from "../../config.js";
import type { Command } from "../../structures/Command.js";

export async function loadCommands() {
     const commandsPath = path.join(process.cwd(), "src/commands");

     const folders = fs.readdirSync(commandsPath);

     for (const folder of folders) {
          const folderPath = path.join(commandsPath, folder);

          const files = fs
               .readdirSync(folderPath)
               .filter((file) => file.endsWith(".ts"));

          for (const file of files) {
               const filePath = path.join(folderPath, file);

               const command = await import(filePath);

               configuration.commands.set(
                    command.default.data.name,
                    command.default as Command,
               );
          }
     }
}
