const Discord = require('discord.js');
module.exports = {
kod: ["clear", "purge", "sil"],
async run (client, message, args) {


let args95 = message.content.split(' ').slice(1)
let amount = args95.join(" ")
const yetkinyok = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setColor('#070707')
.setDescription('**Yeterli derecede yetkin yok**')
const hata = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setColor('#070707')
.setDescription('**Lütfen Sayı Girin**')
const ikiyüz = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setColor('#070707')
.setDescription('Lütfen **2-100** Arasında Bir Sayı Yazın.')
const silinen = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setColor('#070707')
.setDescription(`**Başarıyla Mesajlarınız Silindi**  \n\n**Silinen Mesaj Sayısı:** ${amount} \n\n**Mesaj Sildiren :**<@${message.author.id}>`)
if (!message.member.hasPermission('MANAGE_MESSAGES')) {
  return message.channel.send(yetkinyok)
}
if (isNaN(amount)) {
  return message.channel.send(hata);
} else if (amount < 2 || amount > 100) {
  return message.channel.send(ikiyüz);
}
message.channel.bulkDelete(amount);
message.channel.send(silinen)
}
}
