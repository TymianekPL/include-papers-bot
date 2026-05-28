import { configuration } from "../../config.js";

export const prepareDatabase = async () => {
     configuration.database.pragma("journal_mode = WAL");
};
