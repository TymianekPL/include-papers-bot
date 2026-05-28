import { type Event } from "../../structures/Event.js";

export default {
     execute: async (message) => {
          if (message.author.bot) return;
          let content = message.content.trim();
          if (!content.startsWith(`<@${process.env.CLIENT_ID}>`)) return;
          content = content
               .substring(`<@${process.env.CLIENT_ID}>`.length)
               .trim();
          if (content.length === 0) return;

          const args = content.split(" ");
          if (args.length === 0) return;
          const command = args.pop();
          switch (command) {
               case "search": {
                    break;
               }
          }
     },
     trigger: "messageCreate",
} satisfies Event<"messageCreate">;
