/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require("fs");
const chalk = require("chalk");


//—————「 Setting Owner 」—————//
global.numberowner = "6289671842736"; // Owner Utama
global.owner = ["6289671842736"]; // Owner Lainnya
global.namaowner = "Zannnyx."; // Nama Owner
global.premium = ["62895347198105"]; // Premium User


//—————「 Setting Bot 」—————//
global.namabot = "Rem Bot"; // NickBot
global.autoread = true; // ReadChat
global.autobio = false; // AutoBio
global.autoblok212 = true; // AutoBlock Nomer +212
global.onlyindo = false; // AutoBlock Selain Nomer Indo
global.packname = "Copyright © 2025"; // Watermark Sticker
global.author = "Zannnyx."; // Watermark Sticker
// global.pairing = "ZANNKECE" // Custom Kode Pairing
global.nobot = "6283182754711"


//—————「 Setting Message 」—————//
global.mess = {
  done: "Done ✅",
  prem: "Feature Only For User _*PREMIUM*_",
  admin: "Feature Only for _*Admin Group*_",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "Feature Only for _*owner*_",
  group: "Feature Only for _*Group Chat*_",
  private: "Feature Only for _*Private Chat*_",
  wait: "Wait a Moment, for Process",
  error: "_*Sorry Features Error*_",
};


//—————「 Setting Thumbnail 」—————//
global.thumb = fs.readFileSync("./system/database/media/quoted.jpg");
global.menu = fs.readFileSync("./system/database/media/menu.jpg");


//—————「 Setting Url 」—————//
global.link = "https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ";

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
