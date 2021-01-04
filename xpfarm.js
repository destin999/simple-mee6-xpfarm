const Discord = require('discord.js');
const client = new Discord.Client();

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

async function sendAndDelete(clnt) {
  var g = clnt.guilds.get("SERVER ID");
  var c = g.channels.find(chan => chan.name === "CHANNEL NAME");
  
  var msg = await c.send("Farming message here.");
  await sleep(5000);
  msg.delete();
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(async function(){await sendAndDelete(client);}, 65000);
});

client.login('TOKEN HERE');
