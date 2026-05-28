import { type Client, Collection } from "discord.js";
import type { Command } from "./structures/Command.js";

export type Configuration = {
     bot?: Client,
     commands: Collection<string, Command>
};

export const configuration: Configuration = {
     commands: new Collection<string, Command>()
};
