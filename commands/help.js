const { SlashCommand } = require('slash-create');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "help",
            description: "See available commands",

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        const { client } = require('..');

        await ctx.defer();

        

        return void ctx.sendFollowUp({
            embeds: [
                {
                    title: "Help",
                    description: `Commands : `,
                    fields: [
                        {
                            name: "play[query]",
                            value: "play a song with query",
                        },
						{
							name: "pause",
							value: "Pause the current song",
						},
						{
							name: "stop",
							value: "Stops the current song",
						}
                    ],
                    color: 0xffffff
                }
            ]
        });
    }
}
