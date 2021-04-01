const moment = require('moment')
require('moment-duration-format')
module.exports = {
  kod: ["user", "i", "info", "bilgi", "kullanıcı-bilgi", "kullanıcı"],
  async run (client, message, args){
  const { MessageEmbed } = require('discord.js')
  let stans = message.mentions.users.first()
  if(stans){
    let durum = stans.presence.status
    .replace("online", "Çevrimiçi")
    .replace("idle", "Boşta")
    .replace("dnd", "Rahatsız Etmeyin")
    .replace("offline", "Offline")

    var aylar = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
      }
      var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")

   const embed = new MessageEmbed()
     .setThumbnail(stans.displayAvatarURL({dynamic: true}))
     .setColor("#070707")
     .setTitle(`${stans.tag}  ( ${stans.id} ) `)
     .setDescription(`**__Kullanıcı Bilgisi__**\n **ID** : ${stans.id}\n **Profil** : <@${stans.id}>\n **Durum** : ${durum}\n **Oluşturulma Tarihi** : ${(`${moment(stans.createdAt).format('DD')} ${aylar[moment(stans.createdAt).format('MM')]} ${moment(stans.createdAt).format('YYYY HH:mm:ss')}`)}\n\n **__Üyelik Bilgisi__**\n **Son Mesaj** : ${stans.lastMessage} \n **Son Mesaj ID** : ${stans.lastMessageID} \n**Roller: ** ${message.guild.members.cache.get(stans.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ')} `)
  message.channel.send(embed)
  } else {
    stans = message.author
    let durum = stans.presence.status
    .replace("online", "Çevrimiçi")
    .replace("idle", "Boşta")
    .replace("dnd", "Rahatsız Etmeyin")
    .replace("offline", "Offline")

    var aylar = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
      }
      var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")

   const embed = new MessageEmbed()
     .setThumbnail(stans.displayAvatarURL({dynamic: true}))
     .setColor("#070707")
     .setTitle(`${stans.tag}  ( ${stans.id} ) `)
     .setDescription(`**__Kullanıcı Bilgisi__**\n **ID** : ${stans.id}\n **Profil** : <@${stans.id}>\n **Durum** : ${durum}\n **Oluşturulma Tarihi** : ${(`${moment(stans.createdAt).format('DD')} ${aylar[moment(stans.createdAt).format('MM')]} ${moment(stans.createdAt).format('YYYY HH:mm:ss')}`)}\n\n **__Üyelik Bilgisi__**\n **Son Mesaj** : ${stans.lastMessage} \n **Son Mesaj ID** : ${stans.lastMessageID} \n**Roller: ** ${message.guild.members.cache.get(stans.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ')} `)
  message.channel.send(embed)
  }
 }
}
