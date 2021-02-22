const  Discord = require("discord.js");
module.exports = {
    name: "sesteki-yetkililer",
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
		    .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setThumbnail(message.author.avatarURL)
			.setFooter('Developed by Soulfly');
			
        if (!client.config.üstYönetim.some(id => message.member.roles.cache.has(id))&& (!message.member.hasPermission("ADMINISTRATOR"))) {
            return message.channel.send(embed.setDescription("Bu Komut İçin Yetkin Bulunmuyor.")).then(x => x.delete({ timeout: 3000 }))
        }
        let sesteolmayan = message.guild.members.cache.filter(s => s.roles.cache.has('mod rol id')).filter(s => !s.voice.channel).map(s => s).join(' ')
        let sesteolan = message.guild.members.cache.filter(s => s.roles.cache.has('mod rol id')).filter(s => s.voice.channel).map(s => s).join(', ')
        message.channel.send(sesteolmayan)
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor("Sesteki Yetkililer", message.author.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setDescription(`${sesteolan}`)
            .setColor("RED"))
    }
}
