module.exports = {
   kod: "kick",
   async run(client, message, args) {


         if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.");
         const args1 = message.content.split(' ').slice(2)
         const neden = args1.join(" ")
         const user = message.mentions.users.first();
         const { MessageEmbed } = require('discord.js')
         if (user) {
           const member = message.guild.member(user);
           if (member) {
             member
               .kick()
               .then(() => {
                 const kanal = message.guild.channels.cache.find(ch => ch.name === "kick-log")
                 const embed = new MessageEmbed()
                 .setColor('#070707')
                    .setTitle('Kick Log')
                    .setThumbnail(client.user.avatarURL())
                    .addField('`Atılan Kullanıcı` ', `<@${member.id}>-[${member.id}]`)
                    .addField('`Atan Yetkili`: ', `<@${message.author.id}>-[${message.author.id}]`)
                    .addField('`Atma Nedeni`: ', `${neden}`)
                  kanal.send(embed)
               })
               .catch(err => {
                 message.reply('Bunu yapamam.');
                 console.error(err);
               });
           } else {
             message.reply("Bahsettiğin kişi sunucuda bulunmuyor");
           }
         } else {
           message.reply("Atılacak kişiyi yazmadın");
         }
       }

   }
