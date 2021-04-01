const Discord = require('discord.js');

module.exports = {
kod: ["e", "erkek"],
async run (client, message, args) {

  let kız = ('810579839669108736')
  let kayıtsız = ('810569332353662987')
  let yetkili = ('810584481953349662')


  if (!yetkili) return
  if (!kız) return
  if(!message.member.roles.cache.has(yetkili)) {
     const hata = new Discord.MessageEmbed()
     .setAuthor(':(', message.author.avatarURL())
     .setDescription(`Bu Komutu Kullanabilmek İçin <@&810584481953349662> Rolüne Sahip Olmalısınız`)
     .setColor('#070707')
     .setTimestamp()
     return message.channel.send(hata)
       }
       let kisi = message.mentions.members.first()
     if(!kisi)  {
       const hata = new Discord.MessageEmbed()
       .setAuthor(':(', message.author.avatarURL())
       .setDescription(`Lütfen bir kullanıcı belirtin`)
       .setColor('#070707')
       .setTimestamp()
       return message.channel.send(hata)
         }

         const embed22 = new Discord.MessageEmbed()
          .setTitle(`Onay Verildi`)
          .setThumbnail(message.author.avatarURL({dynamic: true}))
          .setColor("#070707")
          message.channel.send(embed22)


 kisi.roles.add(kız).then(y => y.roles.remove(kayıtsız))
}
}
