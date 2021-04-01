const Discord = require("discord.js");
module.exports = {
kod: ["server-info", "server", "sunucu-bilgi", "s"],
async run (client, message, args) {
      const { MessageEmbed } = require('discord.js')
      let day = message.guild.createdAt.getDate()
      let month = 1 + message.guild.createdAt.getMonth()
      let year = message.guild.createdAt.getFullYear()
      let sicon = message.guild.iconURL;

   var guild = message.guild
   var kanallar = guild.channels.cache
   var üyeler = guild.members.cache
   var emojiler = guild.emojis.cache
   var roller = guild.roles.cache

       let serverembed = new Discord.MessageEmbed()

       .setTitle('Server Info')

       .setColor("#070707")

       .setThumbnail(guild.iconURL({dynamic: true}))

       .addField('Server Name', guild.name, true)
       .addField("Server ID", guild.id, true)
       .addField("Owner","<@" + guild.owner.id + ">", true)
       .addField("Members", guild.memberCount, true)
       .addField("Channels", kanallar.size, true)
       .addField("Total Roles", roller.size, true)
       .addField("Emojis", emojiler.size, true)
       .addField("Total Channels", kanallar.size + " total channels: " + kanallar.filter(kanal => kanal.type === 'category').size + " catagories " + kanallar.filter(kanal => kanal.type === 'text').size + " text, " + kanallar.filter(kanal => kanal.type === 'voice').size + " voice ", true)

       message.channel.send(serverembed);

    }
 }
