const db = require('quick.db');

module.exports = {
    name: "sicil-temizle",
    run: async(client, message, args) => {
        if(message.guild.ownerID !== message.author.id) return;

        let member = message.mentions.members.first();
        if (!member) return message.channel.send("kullanıcı belirt.")

        db.delete(`${member.id}_sicil`)
        message.channel.send("Kullanıcının Tüm Sicileri Silindi.")

    }
}
