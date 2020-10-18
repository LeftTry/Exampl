require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

var TOKEN = "NzY2NjkzODM3MDk1MDQzMTAz.X4nFRw.DGuhYFRtGaliJZ-e206gBdqPbKk";

//const TOKEN = process.env.TOKEN;

var prefix = "Bob"
bot.login(TOKEN);

const fs = require('fs');
const dir = './Assets/Gifs/Hugs/';

fs.readdir(dir, (err, files) => {
  //console.log(files.length);
 folderlen = files.length;
 
});


bot.on('message', async message => {

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cont = args.shift().toLowerCase();
  const txtchnl = message.channel;

  if (message.author.username !== message.author.bot) {
    if (cont === "hug") {
      if (args[0] = message.mentions.members.first()) {
        mentionedusr = message.mentions.users.first();
        const mentionname = mentionedusr.username;
        let randomnum = Math.floor(Math.random() * folderlen);
        stringnum = randomnum.toString();
        gifurl = (`./Assets/Gifs/Hugs/${stringnum}.gif`);
        const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} gives ${mentionname} a hug.\nHow wholesome`)
        .attachFiles([gifurl])
        .setImage(`attachment://${stringnum}.gif`)
        message.channel.send({embed});

      }
      else{
        let randomnum = Math.floor(Math.random() * folderlen);
        stringnum = randomnum.toString();
        var fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
        var dest = fs.createWriteStream('/tmp/resume.pdf');
        drive.files.export({
        fileId: fileId,
        mimeType: 'application/pdf'
        })
          .on('end', function () {
            console.log('Done');
          })
          .on('error', function (err) {
            console.log('Error during download', err);
          })
    .pipe(dest);
        gifurl = (`./Assets/Gifs/Hugs/${stringnum}.gif`);
        const embed = new Discord.MessageEmbed()
        .setTitle(`Here is a hug from Bob Ross, ${message.author.username}`)
        .attachFiles([gifurl])
        .setImage(`attachment://${stringnum}.gif`)
        message.channel.send({embed});
      }
    }
  }
});