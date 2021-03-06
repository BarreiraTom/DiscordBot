const Discord= require('discord.js');
const fs= require('fs');

require('dotenv').config()

const client= new Discord.Client();

const prefix= '#';

const clientLogin = process.env.CLIENT_LOGIN;
console.log(`Token - ${clientLogin}`);

client.commands= new Discord.Collection();

// const commandFiles= fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command= require(`./commands/${file}`)
// }


client.once('ready', ()=> {
    console.log("The servant is online");
});

client.on('message', message=> {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args= message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send('Oi cunt!');
            break;
    
        default:
            message.channel.send('What are you talkin\' aboot?');
            break;
    }
});

client.login(clientLogin);