const Discord = require('discord.js');
const db = require("quick.db")
module.exports = client => {

  setInterval(() => {
var aktivite = [    
"Coded by Star Coders Team",
];
 var rastgeleOyun = aktivite[Math.floor(Math.random() * aktivite.length)]
if(!rastgeleOyun || rastgeleOyun == "") rastgeleOyun = "0 Düşme"

  client.user.setActivity(rastgeleOyun,  {type: 'PLAYING'}) 
}, 12000);
setTimeout(() => {
console.log(`${client.user.username} başarıyla giriş yaptı.`);
}, 500)
   


}

// { type: 'STREAMING' ,  url: 'https://twitch.tv/.' } yayın yapıyor
 //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR