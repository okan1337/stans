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
  client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};







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
  client.channels.cache.get('827152406890020874').join()
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

      client.on("message", async message => {
          if (message.member.hasPermission('MANAGE_GUILD')) return;
          let links = message.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
          if (!links) return;
          if (message.deletable) message.delete();

      })
client.login('ODA0NzcyNTQxMzEzOTc0Mjgz.YBRM1Q.9F04mAOEmdbOEO1QSPBVoP9uJ8k');
