import { type Event } from "../../structures/Event.js";

export default {
     execute: async (message) => {
          if (message.author.bot) return;
          let content = message.content.trim();

          const papers = content.match(/\[[PN]\d\d\d\d(R\d+)?\]/gi);
          if (papers) {
               const built = papers.reduce(
                    (built, paper, index) =>
                         `${built}${
                              index === 0 ? "" : ","
                         } [${paper}](<https://wg21.link/${paper.toUpperCase().substring(1, paper.length - 1)}>)`,
                    "",
               );
               await message.reply(built);
          }

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
