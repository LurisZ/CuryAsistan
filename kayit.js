const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.RichEmbed()
    
      .setColor('YELLOW')
      .addField(`KAYIT OLMAK`, [`
      
      <a:tac:743420016053190658> **Kayıt Olmak İçin Emojiye Basmayı UNUTMAYINIZ ✅**

      `])

       message.delete();
      //message.react("🔴");

    return message.channel.send(rules).then(keleS => keleS.react(""));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayit'],
    permLevel: 0
}

exports.help = {
    name : 'kayit',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}