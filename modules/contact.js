const mh = require("../helper/messages.js")

module.exports = (bot, msg, options, Discord) => {
		
		var embed = mh.prepare(Discord)
		
		embed.setTitle("Contact options")
		embed.addField("Discord Server", "Join the Fox-Server and contact me there: https://discord.gg/xY4jwrQ")
		embed.addField("Discord DM", "Fox#6800 (or directly <@218803587491299328> if we share a server)")
		embed.addField("Ingame", "EU-PC: @it's.fox")
		embed.addField("Code contribution", "EU-PC: @it's.fox, @woeler; NA-PC: @seri")
		embed.addField("ESO Forums", "Join the [Forum discussion](https://forums.elderscrollsonline.com/en/discussion/334414/discord-bot-with-eso-information/p1)")
					
        mh.send(msg, embed, options);

};
