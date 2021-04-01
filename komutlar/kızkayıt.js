const Discord = require('discord.js');

module.exports = {
kod: ["k", "kız", "kadın"],
async run (client, message, args) {

  let kız = ('826745661118480404')
  let kayıtsız = ('826745275007762474')
  let yetkili = ('826557303628365856')


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
