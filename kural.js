const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.RichEmbed()
    
      .setColor('RED')
      .addField(`Kurallar`, [`
      
 <a:tac:743420016053190658> Cury Bot Kuralları <a:tac:743420016053190658>

<a:yonleme:743371331260645376> - Küfür, Argo , Hakaret İçerici Sözler kullanmak yasaktır;

<a:yonleme:743371331260645376> - Ailevi , Dini , Irki Küfürler Yasaktır 

<a:yonleme:743371331260645376> - Yetkiliye Akıl vermek yasaktır.

<a:yonleme:743371331260645376> - Sunucuda tartışma çıkartmak yasaktır.

<a:yonleme:743371331260645376> - Sunucu içerisinde spam flood caps lock kullanımı yasaktır.

<a:yonleme:743371331260645376> - Trol yapmak, insanları rahatsız etmek bass vb. programlar açmak yasaktır.

<a:yonleme:743371331260645376> - Reklam Kesinlikle Yasaktır.

||@everyone|| ||@here||
**Youtuber Tagı Almak İstiyenler İçin Şartlar**
<a:igne:731829245302669343> 30 Abone Üstü
<a:igne:731829245302669343> Sunucumuzun Tanıtımı
<a:igne:731829245302669343> Botlarımızın Tanıtımı
Bunu yapan herkese youtuber tagı anında verilecektir.
<a:tac:743420016053190658> KURALLARI OKUMUŞ SAYILDINIZ <a:tac:743420016053190658>

      `])

       message.delete();
      //message.react("🔴");

    return message.channel.send(rules).then(keleS => keleS.react("🔴"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kural'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}