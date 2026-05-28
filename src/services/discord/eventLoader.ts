import type { Client } from "discord.js";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export async function loadEvents(client: Client): Promise<void> {
     const eventsPath = path.join(process.cwd(), "dist", "events");

     if (!fs.existsSync(eventsPath)) {
          throw new Error(`Events folder not found: ${eventsPath}`);
     }

     const folders = fs.readdirSync(eventsPath);

     for (const folder of folders) {
          const folderPath = path.join(eventsPath, folder);

          if (!fs.statSync(folderPath).isDirectory()) continue;

          const files = fs
               .readdirSync(folderPath)
               .filter((file) => file.endsWith(".js"));

          for (const file of files) {
               const filePath = path.join(folderPath, file);
               const fileUrl = pathToFileURL(filePath).href;

               const eventModule = await import(fileUrl);
               const event = eventModule.default;

               if (!event?.trigger || !event?.execute) continue;

               if (event.once) {
                    client.once(event.trigger, (...args) =>
                         event.execute(...args)
                    );
               } else {
                    client.on(event.trigger, (...args) =>
                         event.execute(...args)
                    );
               }
          }
     }
}
