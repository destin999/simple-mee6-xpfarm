const Discord = require('discord.js');
const client = new Discord.Client();

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

async function sendAndDelete(clnt) {
  var g = clnt.guilds.get("SERVER ID"); // guild id
  var c = g.channels.find(chan => chan.name === "CHANNEL NAME"); // channel name
  
  var msg = await c.send("Farming message here."); // message you want to be sent
  await sleep(5000); // time to wait before deleting the message that was sent
  msg.delete();
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(async function(){await sendAndDelete(client);}, 65000); // time for sending the message in miliseconds, right now it's 65 seconds you can edit it. 
});

client.login('TOKEN HERE'); // user token
