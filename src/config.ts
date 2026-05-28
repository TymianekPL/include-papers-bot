import { type Client, Collection } from "discord.js";
import type { Command } from "./structures/Command.js";
import Database from "better-sqlite3";

export type Configuration = {
     bot?: Client;
     commands: Collection<string, Command>;
     database: Database.Database;
};

export const configuration: Configuration = {
     commands: new Collection<string, Command>(),
     database: new Database("app.db"),
};
