
module.exports = {
   kod: "mute",
   async run(client, message, args) {


         if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.");
         const args1 = message.content.split(' ').slice(2)
         const neden = args1.join(" ")
         const user = message.mentions.users.first();
         const { MessageEmbed } = require('discord.js')
         if (user) {
           const member = message.guild.member(user);
           if (member) {
             member
             let role = ('827921458499420170')
             let stans = message.mentions.members.first();
             stans.roles.add(role)
                 const kanal = message.guild.channels.cache.find(ch => ch.name === "mute-log")
                 const embed = new MessageEmbed()
                 .setColor('#070707')
                    .setTitle('Mute Log')
                    .setThumbnail(client.user.avatarURL())
                    .addField('`Mute Atılan Kullanıcı` ', `<@${member.id}>-[${member.id}]`)
                    .addField('`Mute Atan Yetkili`: ', `<@${message.author.id}>-[${message.author.id}]`)
                    .addField('`Mute Atma Nedeni`: ', `${neden}`)
                  kanal.send(embed)
                  msg.send(embed)
        

               }

   }
     }
   };
