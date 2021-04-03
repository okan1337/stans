module.exports = {
kod: "unmute",
async run (client, message, args) {

  let role = ('827921458499420170')
  let stans = message.mentions.members.first();
  stans.roles.remove(role)
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.");
const args1 = message.content.split(' ').slice(2)
const neden = args1.join(" ")
const user = message.mentions.users.first();
const { MessageEmbed } = require('discord.js')
if (user) {
  const member = message.guild.member(user);
  if (member) {
    member
const kanal = message.guild.channels.cache.find(ch => ch.name === "mute-log")
const embed = new MessageEmbed()
.setColor('#070707')
   .setTitle('Mute Log')
   .setThumbnail(client.user.avatarURL())
   .addField('`Mutesi Kaldırılan Kullanıcı` ', `<@${member.id}>-[${member.id}]`)
   .addField('`Mutesini Kaldıran Yetkili`: ', `<@${message.author.id}>-[${message.author.id}]`)
   .addField('`Mute Açılma Nedeni`: ', `${neden}`)
 kanal.send(embed);
 message.channel.send('off acıyom mutesını tmm sus')
}
}
}
}
