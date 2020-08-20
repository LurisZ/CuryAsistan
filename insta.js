const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.RichEmbed()
    
      .setColor('YELLOW')
      .addField(`İnstagram`, [`
      
      <a:insta:743415505502863360> lin.luris <a:kelebek:731829206492774453>

      `])

       message.delete();
      //message.react("🔴");

    return message.channel.send(rules).then(keleS => keleS.react(""));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['insta'],
    permLevel: 0
}

exports.help = {
    name : 'instagram',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}