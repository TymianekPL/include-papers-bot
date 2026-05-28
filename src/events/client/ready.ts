import type { Client } from "discord.js";
import { type Event } from "../../structures/Event.js";

export default {
     execute: (client: Client) => {
          console.log(`Logged in as ${client.user?.tag}!`);
     },
     trigger: "clientReady"
} satisfies Event<"clientReady">;
