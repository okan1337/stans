const Discord = require('discord.js');

module.exports = {
kod: ["e", "erkek"],
async run (client, message, args) {

  let kız = ('827921455458287626')
  let kayıtsız = ('827921457375084555')
  let yetkili = ('827921384495251478')


  if (!yetkili) return
  if (!kız) return
  if(!message.member.roles.cache.has(yetkili)) {
     const hata = new Discord.MessageEmbed()
     .setAuthor(':(', message.author.avatarURL())
     .setDescription(`Bu Komutu Kullanabilmek İçin <@&${yetkili}> Rolüne Sahip Olmalısınız`)
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
