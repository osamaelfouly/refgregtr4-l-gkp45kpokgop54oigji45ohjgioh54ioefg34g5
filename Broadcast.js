const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
      client.user.setGame(`Qoudra Bot`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')


});


client.on('message', message => {
  
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'bc') {
        if(!message.channel.guild) return;
        if (!args[1]) {
    message.channel.send(`\`${prefix}bc <message>\``).then(m => m.delete(5000));
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                
                m.send(`${m}`);
                m.send(args);
              
            });
             message.channel.send('\`BroadCast Sent To '+message.guild.memberCount+' User\`');
        }
        } else {
            return;
        }
    });

  
  


 client.login('NDkxMjU5MjAwMTU3MjUzNjMz.DoFSDA.M8tWIy3YDs6GDOMg-fjMuA3na54');

