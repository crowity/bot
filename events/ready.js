const Discord = require('discord.js');
const db = require("quick.db")
module.exports = client => {

  setInterval(() => {
var aktivite = [    
,"Coded by Star Team"
];
 var rastgeleOyun = Math.floor(Math.random() * aktivite.length);
  client.user.setActivity(aktivite[rastgeleOyun],  {type: 'PLAYING'}) 
}, 12000);
   console.log(`${client.user.username} başarıyla giriş yaptı.`);


// nerde kodluyorsun

}

// { type: 'STREAMING' ,  url: 'https://twitch.tv/.' } yayın yapıyor
 //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR