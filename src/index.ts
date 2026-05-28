import "dotenv/config";

import { Client, GatewayIntentBits } from "discord.js";
import { configuration } from "./config.js";
import { loadCommands } from "./services/discord/commandLoader.js";
import { loadEvents } from "./services/discord/eventLoader.js";

configuration.bot = new Client({
     intents: [GatewayIntentBits.Guilds]
});

await loadCommands();
await loadEvents(configuration.bot);

configuration.bot.login(process.env.DISCORD_TOKEN);
