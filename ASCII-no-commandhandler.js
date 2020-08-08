const discord = require('discord.js');
const figlet = require('figlet');

if(message.content === `${prefix}ascii`){
if(!args[0]) return message.channel.send("Please specify a text!");

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
    if(data.length > 2000) return message.channel.send("Please make shure, your text was under 2000 symbols!")

    message.channel.send('```' + data + '```')
    })
   }
