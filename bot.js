const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const fs = require('fs');
const { readdirSync } = require('fs'); // tanımlamalar
const işaret = require('./işaret.json');

  const prefix = işaret.prefix // prefix

const log = message => {
  console.log(`BOT: ${message}`);
};

  const { join } = require('path'); // tanımlamalar


  client.commands= new Discord.Collection(); // komutları alıyoruz


  const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

  for (const file of commandFiles) {
      const command = require(join(__dirname, "komutlar", `${file}`));
    if (typeof command.kod === "object"){
     command.kod.forEach(x => {
       client.commands.set(x, command)
     })

    } else {
        client.commands.set(command.kod, command)
      }
    }



  client.on("error", console.error);

  client.on('ready', () => {
      console.log('Aktif')
  });


  client.on("message", async message => {

      if(message.author.bot) return;

      if(message.content.startsWith(prefix)) {
          const args = message.content.slice(prefix.length).trim().split(/ +/);

          const command = args.shift().toLowerCase();

          if(!client.commands.has(command)) return;


          try {
              client.commands.get(command).run(client, message, args);

          } catch (error){
              console.error(error);
          }
      }
  })




client.on('ready', () => {
  client.channels.cache.get('827922494794891264').join()
})

client.on('message', msg => {
  if (msg.content === 'elma') {
    msg.channel.send('hop takla');
  }
});

var game = [


    "pırt",
    "🌹",
    "ataturk olmedı kalbımızde yasıyor :rose:"

    ];

  setInterval(function() {

      var random = Math.floor(Math.random()*(game.length));

      client.user.setActivity(game[random]);
      }, 4000);



client.login('');
