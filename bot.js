const Discord = require('discord.js');
const perfix = "#"
const Fouly = new Discord.Client ();
const anti_spam = require("discord-anti-spam");
let banse = new Set();

Fouly.on('ready', () => {
	    Fouly.user.setGame(`QUADRA SERVER`,'https://www.twitch.tv/v5bz');
console.log('Fouly is Here 🛡')
console.log('=============')
console.log('Fouly is Here 🛡')
console.log('=============')
console.log('Fouly is Here 🛡')
});



var anti_spam1 = require("discord-anti-spam");

anti_spam(Fouly, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "stop spamming or I'll whack your head off 🛡.", // Warning message send to the user indicating they are going to fast.
  banMessage: "has been banned for spamming, anyone else 🛡 ?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
});
//Fouly softban
Fouly.on('guildMemberRemove', async function(member) {
  try {
    await member.ban({
      days: 7,
      reason: 'Automatic Softban to Remove Messages'//Fouly Forever
    });
    await member.guild.unban(member, 'Automatic Softban to Remove Messages');//Fouly Forever
  } catch (e) {
    console.log(e);
  }
})
Fouly.on('message', message => {
let perm = message.guild.member(message.author).hasPermission('ADMINISTRATOR') || message.guild.member(message.author).hasPermission('BAN_MEMBERS')
if (!perm) return message.reply(':x: | **You don\'t have `BAN_MEMBERS` permission to use this command**.')
if(message.content.startsWith(prefix + 'softban')) {
let member = message.mentions.members.first();
  let reason = message.content.split(" ").slice(3).join(" ");
  if (member.displayName) {
    member.ban(reason)
    message.channel.send(`Alright, I softbanned ${member.displayName}!`).then(m => m.delete(5000))
    message.guild.unban(member.id)
  } else {
    member.ban(reason)
    message.channel.send(`Alright, I just softbanned ${member.username}!`).then(m => m.delete(5000))
    message.guild.unban(member.id)
  }
}})
//anti links
var prefix = "#"
Fouly.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '486303346391646218'; // <=============== Your fucking server ID
        if(message.content.includes('discord.gg/')) {
            var member = Fouly.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});
Fouly.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("🛡 يمنع النشر في هذا السيرفر")
	}
	});
//close channels
Fouly.on('message', message => {

    if (message.content === "mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' 🛡 ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("🛡 تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});
//Ban Fake accounts
const moment = require("moment")
Fouly.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
    };
});
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
};

function datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
};
//Fouly Forever
  
client.login(process.env.BOT_TOKEN);
