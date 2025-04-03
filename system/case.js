/*
   Created By ArxzyDev
*/

require("../system/config/settings")
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@fizzxydev/baileys-pro");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const { createCanvas, loadImage, registerFont } = require('canvas')
const { Sticker } = require('wa-sticker-formatter')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("../system/lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("../system/lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  tanggal,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize,
} = require("../system/lib/myfunc");
 //=======================================//

     // SCRAPEKU

     const { muslimai, mediaFire, text2img, chat, transcribe, xhentai, remini } = require("../system/lib/scrapeku")
     
     // SCRAPE MODULE
     const fg = require('api-dylux')
     const { ttdl, igdl, fbdown, twitter, youtube } = require("btch-downloader");
     
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
let afk = require("../system/lib/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("../system/lib/premiun");


let premium = JSON.parse(fs.readFileSync("./system/database/src/data/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./system/database/src/data/owner.json"));
let _user = JSON.parse(fs.readFileSync("./system/database/src/data/user.json"));
let _afk = JSON.parse(fs.readFileSync("./system/database/src/data/user/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./system/database/src/total-hit-user.json"));
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id");

const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (waktu < "23:59:00") {
  var ucapanWaktu = "Selamat Malam 🏙️";
}
if (waktu < "19:00:00") {
  var ucapanWaktu = "Selamat Petang 🌆";
}
if (waktu < "18:00:00") {
  var ucapanWaktu = "Selamat Sore 🌇";
}
if (waktu < "15:00:00") {
  var ucapanWaktu = "Selamat Siang 🌤️";
}
if (waktu < "10:00:00") {
  var ucapanWaktu = "Selamat Pagi 🌄";
}
if (waktu < "05:00:00") {
  var ucapanWaktu = "Selamat Subuh 🌆";
}
if (waktu < "03:00:00") {
  var ucapanWaktu = "Selamat Tengah Malam 🌃";
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = conn = async (conn, m, msg, chatUpdate, store) => {
  try {
    /* ~~~~~~~~~ BASE ARXZYDEV ~~~~~~~~~ */
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectm.reply.selectedRowId
        : m.mtype == "templateButtonm.replyMessage"
        ? m.message.templateButtonm.replyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectm.reply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = [".", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa;
    const isCmd = body.startsWith(prefix, "");
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await conn.decodeJid(conn.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isText = type == "textMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : ".";
    const isAsu = body.startsWith(pric);
    const isCommand = isAsu
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    const isAfkOn = afk.checkAfkUser(m.sender, _afk);
    const isAdrian = "6289513081052@s.whatsapp.net".includes(m.sender);
    /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await conn.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
    const isCreator = [numberowner, ..._owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium =
      isCreator || isCreator || checkPremiumUser(m.sender, premium);
    const isUser = _user.includes(m.sender);
    expiredCheck(conn, m, premium);
    /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
    if (!conn.public) {
      if (isCreator && !m.key.fromMe) return;
    }
    if (autoread) {
      conn.readMessages([m.key]);
    }
    if (autobio) {
      conn.updateProfileStatus(`-`).catch((_) => _);
    }
    if (chatUpdate["messages.upsert"]) {
      const upsert = chatUpdate["messages.upsert"];
      for (let msg of upsert.messages) {
        if (
          msg.key.remoteJid == "status@broadcast" &&
          !msg.key.fromMe &&
          !msg.message?.protocolMessage
        ) {
          console.log(
            `Lihat status ${msg.pushName} ${
              msg.key.participant.split("@")[0]
            }\n`,
          );
          conn.readMessages([msg.key]);
        }
      }
    }
    if (isCommand) {
      let titida = ["composing", "recording"];
      yte = titida[Math.floor(titida.length * Math.random())];
      conn.sendPresenceUpdate(yte, from);
    }
    if (m.sender.startsWith("212") && global.autoblok212 === true) {
      return conn.updateBlockStatus(m.sender, "block");
    }
    if (!m.sender.startsWith("62") && global.onlyindo === true) {
      return conn.updateBlockStatus(m.sender, "block");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: conn.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${conn.getName(i + "@s.whatsapp.net")}\n
FN:${conn.getName(i + "@s.whatsapp.net")}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@conn.my.id\n
item2.X-ABLabel:Email\n
item3.URL:https://profile.conndev.xyz\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
      });
    }
    if (isCmd && !isUser) {
      _user.push(sender);
      fs.writeFileSync("./system/database/src/data/user.json", JSON.stringify(_user, null, 2));
    }
    /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
    if (isCommand) {
      console.log(`<================>`);
      console.log(
        chalk.black(
          chalk.bgWhite(!isCommand ? "<> MESSAGE </>" : "<> COMMAND </>"),
        ),
        chalk.black(chalk.bgGreen(hariini)),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat),
      );
      console.log(`<================>`);
      const cmdadd = () => {
        hit[0].hit_cmd += 1;
        fs.writeFileSync("./system/database/src/total-hit-user.json", JSON.stringify(hit));
      };
      cmdadd();
      const totalhit = JSON.parse(
        fs.readFileSync("./system/database/src/total-hit-user.json"),
      )[0].hit_cmd;
    }
      
     // ======= UPLOADER ========
      async function uploadUguu(filePath) {
    return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
            if (error) return reject('Gagal mengunggah ke Uguu');
            try {
                let jsonResponse = JSON.parse(stdout);
                resolve({ status: 'Done', result: jsonResponse.files[0].url });
            } catch (err) {
                reject('Gagal mengunggah ke Uguu');
            }
        });
    });
}

// ================== API GEMINI =======

let apiGemini = [
"AIzaSyBr6V2qFR84EcZtFb9UsrGsSBqO-RNIejA",
"AIzaSyAz7xxo_DKbjQ0kqtMC4DbWXnOL9CDgG2Y",
"AIzaSyBO4F7XMEnwWk5JzlIZuMGMjPkxRJmAHOg",
"AIzaSyA5hnrDfa8GCC91DdO64q_1Fw7oR-Ze9y8",
"AIzaSyB7LsLDhcyZxOr-ELMxBARW_O_2dYZZ5G0",
]
const API_GOOGLE = apiGemini[Math.floor(Math.random(), apiGemini.length)]
    
    /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
    if (m.isGroup && !m.key.fromMe) {
      let mentionUser = [
        ...new Set([
          ...(m.mentionedJid || []),
          ...(m.quoted ? [m.quoted.sender] : []),
        ]),
      ];
      for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
          let getId2 = afk.getAfkId(ment, _afk);
          let getReason2 = afk.getAfkReason(getId2, _afk);
          let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
          let heheh2 = ms(getTimee);
          m.reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`);
        }
      }
      if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk);
        let getReason = afk.getAfkReason(getId, _afk);
        let getTime = Date.now() - afk.getAfkTime(getId, _afk);
        let heheh = ms(getTime);
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
        fs.writeFileSync("./system/database/src/data/user/afk-user.json", JSON.stringify(_afk));
        conn.sendTextWithMentions(
          m.chat,
          `@${m.sender.split("@")[0]} telah kembali dari afk`,
          m,
        );
      }
    }
    switch (isCommand) {
    case "menu":
      case "help":{
        let menunya = `${hariini}

Hello ${pushname} 👋

ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./system/database/src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}
${readmore}
ダ Owner Menu
${prefix}update
${prefix}delsesi
${prefix}join
${prefix}shutdown  
${prefix}restart
${prefix}autoread *[option]*
${prefix}autobio *[option]*
${prefix}mode *[option]*
${prefix}setppbot
${prefix}block
${prefix}unblock 
${prefix}backup
${prefix}getcase

ダ Convert Sound
${prefix}bass
${prefix}blown
${prefix}deep
${prefix}arrape
${prefix}fast
${prefix}fat
${prefix}nightcore
${prefix}reverse
${prefix}robot
${prefix}slow
${prefix}smooth
${prefix}tupai

ダ Group Menu
${prefix}closetime
${prefix}opentime
${prefix}kick
${prefix}add
${prefix}promote
${prefix}demote
${prefix}setdecs
${prefix}setppgc
${prefix}tagall
${prefix}hidetag
${prefix}totag
${prefix}gruop *[option]*
${prefix}editinfo
${prefix}linkgc
${prefix}revoke

ダ Main Menu
${prefix}botstatus 
${prefix}speedtest
${prefix}runtime
${prefix}owner
${prefix}tqto

ダ Convert Menu
${prefix}sticker
${prefix}vidbrat
${prefix}brat
${prefix}furrybrat
${prefix}smeme
${prefix}swm
${prefix}toimage
${prefix}tovideo
${prefix}toaudio
${prefix}tomp3
${prefix}tovn
${prefix}togif
${prefix}tourl
${prefix}toqr
${prefix}toviewonce
${prefix}fliptext

ダ Anime / Hentai
${prefix}hentai
${prefix}catgirl
${prefix}genshin
${prefix}swimsuit
${prefix}schoolswimsuit
${prefix}white
${prefix}barefoot
${prefix}touhou
${prefix}gamecg
${prefix}hololive
${prefix}uncensored
${prefix}sunglasses
${prefix}glasses
${prefix}weapon
${prefix}shirtlift
${prefix}chain
${prefix}fingering
${prefix}flatchest
${prefix}torncloth
${prefix}bondage
${prefix}demon
${prefix}pantypull
${prefix}headdress
${prefix}headphone
${prefix}anusview
${prefix}shorts
${prefix}stokings
${prefix}topless
${prefix}beach
${prefix}bunnygirl
${prefix}bunnyear
${prefix}vampire
${prefix}nobra
${prefix}bikini
${prefix}whitehair
${prefix}blonde
${prefix}pinkhair
${prefix}bed
${prefix}ponytail
${prefix}nude
${prefix}dress
${prefix}underwear
${prefix}foxgirl
${prefix}uniform
${prefix}skirt
${prefix}breast
${prefix}twintail
${prefix}spreadpussy
${prefix}seethrough
${prefix}breasthold
${prefix}fateseries
${prefix}spreadlegs
${prefix}openshirt
${prefix}headband
${prefix}nipples
${prefix}erectnipples
${prefix}greenhair
${prefix}wolfgirl

ダ Downloader
${prefix}tiktok
${prefix}play
${prefix}twitter
${prefix}mediafire
${prefix}instagram
${prefix}hd

ダ Other Menu
${prefix}qc
${prefix}hijabkan
${prefix}hitamkan
${prefix}ghibli
${prefix}get`;
       await conn.sendMessage(m.chat, {

        image: { url: fotomenu }, // Ganti dengan URL gambar Anda

        caption: menunya,

        footer: `Powered by ${namaowner}`,

        contextInfo: {

            mentionedJid: [m.sender],

            forwardingScore: 20,

            isForwarded: true,

            externalAdReply: {

                showAdAttribution: true,

                title: namabot,

                body: "Bot Simpel Made By Nodejs",

                thumbnailUrl: bannermenu, // Ganti dengan URL thumbnail Anda

                sourceUrl: "zann.my.id", // Ganti dengan URL sumber Anda

                mediaType: 1,

                renderLargerThumbnail: true

            }

        },

        buttons: [

            {

     buttonId: '.ping',

     buttonText: {

       displayText: 'Kecepatan'

     },

     type: 1

   },

   {

     buttonId: '.owner',

     buttonText: {

       displayText: 'Pemilik Bot'

     },

     type: 1

   },
     {

     buttonId: '.botinfo',

     buttonText: {

       displayText: 'Info Bot'

     },

     type: 1

   },

        ],

        headerType: 1,

        viewOnce: true

    });
        }
        break;
            
            case 'update':{
if (!isCreator) return m.reply(mess.owner);
if (!args[0]) return m.reply("⚠️ Masukin link raw file yang mau diupdate!");
const fs = require("fs");
const fetch = require("node-fetch");
let updatedFiles = [];
const updateFile = async (url) => {
try {
let splitUrl = url.split("/main/"); 
if (splitUrl.length < 2) throw new Error("Format URL salah!");
let path = splitUrl[1];
if (!path) throw new Error("Path file tidak ditemukan!");
let res = await fetch(url);if (!res.ok) throw new Error("Gagal fetch file!");
let fileData = await res.text();
fs.writeFileSync(`./${path}`, fileData);
updatedFiles.push(`🗃️ Updated: ./${path}`);
} catch (err) {
updatedFiles.push(`❌ Error: ${err.message}`);
}
};

(async () => {
await Promise.all(args.map(updateFile));
m.reply(`🔄 **UPDATE SELESAI!**\n\n${updatedFiles.join("\n")}\n\n⏳ Restarting bot...`);

setTimeout(() => {
process.exit(1);
}, 3000);
})();

     }
     break
      
      case "status":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (args.length < 1) return m.reply("perilah apa?");
          if (q === "image") {
            let imgSw = await conn.downloadAndSaveMediaMessage(quoted);
            await conn.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (/video/.test(mime)) {
            let VidSw = await conn.downloadAndSaveMediaMessage(quoted);
            await conn.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (/audio/.test(mime)) {
            let VnSw = await conn.downloadAndSaveMediaMessage(quoted);
            await conn.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#FF000000", statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (q) {
            conn.sendMessage(
              "status@broadcast",
              { text: q },
              { backgroundColor: "#FF000000", font: 3, statusJidList: _user },
            );
          } else {
            m.reply(
              "Replay Media Jika Mau Dengan Caption Ketik .status caption",
            );
          }
        }
        break;
      
      
      case "addprem":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 2)
          return m.reply(
            `Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`,
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          m.reply("Sukses Premium");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          m.reply("Sukses Via Nomer");
        }
        break;
      case "delprem":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./system/database/src/data/premium.json",
              JSON.stringify(premium),
            );
          }
          m.reply("Sukses Delete");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1,
          );
          fs.writeFileSync("./system/database/src/data/premium.json", JSON.stringify(premium));
          m.reply("Sukses Via Nomer");
        }
        break;
      case "listprem":
        {
          if (!isCreator) return m.reply(mess.owner);
          let data = require("./system/database/src/data/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let i of data) {
            txt += `Nomer : ${i.id}\n`;
            txt += `Expired : ${i.expired} Second\n`;
          }
          conn.sendMessage(
            m.chat,
            {
              text: txt,
              mentions: i,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "delsesi":
      case "clearsession":
        {
          if (!isCreator) return m.reply(mess.owner);
          fs.readdir("./system/database/session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return m.reply("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state"),
            );
            console.log(filteredArray.length);
            let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
            if (filteredArray.length == 0) return m.reply(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            m.reply(teks);
            await sleep(2000);
            m.reply("Menghapus file sampah...");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            m.reply("Berhasil menghapus semua sampah di folder session");
          });
        }
        break;
      case "join":
        try {
          if (!isCreator) return m.reply(mess.owner);
          if (!text) return m.reply("Masukkan Link Group!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return m.reply("Link Invalid!");
          m.reply(mess.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await conn
            .groupAcceptInvite(result)
            .then((res) => m.reply(json(res)))
            .catch((err) => m.reply(json(err)));
        } catch {
          m.reply("Gagal Masuk Ke Group");
        }
        break;
     
      case "ambilsesi":
      case "getsesi":
        if (!isCreator) return m.reply(mess.owner);
        m.reply("Tunggu Sebentar, Sedang mengambil file sesi mu");
        let sesi = fs.readFileSync("./system/database/src/total-hit-user.json");
        conn.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "total-hit-user.json",
          },
          {
            quoted: m,
          },
        );
        break;
      
      case "shutdown":
        if (!isCreator) return m.reply(mess.owner);
        m.reply(`Otsukaresama deshita🖐`);
        await sleep(3000);
        process.exit();
        break;
      case "restart":
        if (!isCreator) return m.reply(mess.owner);
        m.reply("Proses....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Contoh ${prefix + command} on/off`);
        if (q === "on") {
          autoread = true;
          m.reply(`Berhasil mengubah autoread ke ${q}`);
        } else if (q === "off") {
          autoread = false;
          m.reply(`Berhasil mengubah autoread ke ${q}`);
        }
        break;
      case "autobio":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Example ${prefix + command} on/off`);
        if (q == "on") {
          autobio = true;
          m.reply(`Berhasil Mengubah AutoBio Ke ${q}`);
        } else if (q == "off") {
          autobio = false;
          m.reply(`Berhasil Mengubah AutoBio Ke ${q}`);
        }
        break;
      case "mode":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Example ${prefix + command} public/self`);
        if (q == "public") {
          conn.public = true;
          m.reply(mess.done);
        } else if (q == "self") {
          conn.public = false;
          m.reply(mess.done);
        }
        break;
      case "setexif":
        if (!isCreator) return m.reply(mess.owner);
        if (!text)
          return m.reply(`Contoh : ${prefix + command} packname|author`);
        global.packname = text.split("|")[0];
        global.author = text.split("|")[1];
        m.reply(
          `Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`,
        );
        break;
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!isCreator) return m.reply(mess.owner);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await conn.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await conn.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await conn.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case "block":
        if (!isCreator) return m.reply(mess.owner);
        let blockw = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .updateBlockStatus(blockw, "block")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "unblock":
        if (!isCreator) return m.reply(mess.owner);
        let blockww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .updateBlockStatus(blockww, "unblock")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "leave":
        if (!isCreator) return m.reply(mess.owner);
        if (!m.isGroup) return m.reply(mess.group);
        m.reply("Dadah Semuanya 🥺");
        await conn.groupLeave(m.chat);
        break;
      case "backup":
        if (!isCreator) return m.reply(mess.owner);
        if (m.isGroup) return m.reply(mess.private);
        m.reply(mess.wait);
        exec("zip backup.zip *");
        let malas = await fs.readFileSync("./backup.zip");
        await conn.sendMessage(
          m.chat,
          {
            document: malas,
            mimetype: "application/zip",
            fileName: "backup.zip",
          },
          {
            quoted: m,
          },
        );
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (!text)
            return m.reply(
              `Text mana?\n\nContoh : ${prefix + command} Besok Libur `,
            );
          let getGroups = await conn.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          m.reply(
            `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${
              anu.length * 1.5
            } detik`,
          );
          for (let i of anu) {
            await sleep(1500);
            let a = "```" + `\n\n${text}\n\n` + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            conn.sendMessage(i, {
              text: a,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Broadcast By Owner",
                  body: `Telah Terkirim ${i.length} Group`,
                  thumbnailUrl:
                    "https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          }
          m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
        }
        break;
      case "getcase":
      case "ambilcase":
        if (!isCreator) return m.reply(mess.owner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("./system/case.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        m.reply(`${getCase(q)}`);
        break;

            
            
            
            
            
// =================== GROUP MENU ===================

      case "closetime":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "announcement");
          m.reply(close);
        }, timer);
        break;
      case "opentime":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "not_announcement");
          m.reply(open);
        }, timer);
        break;
      case "kick":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwww], "remove")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "add":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwwww], "add")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "promote":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "demote":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwwwwwa], "demote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "setname":
      case "setsubject":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return "Text ?";
        await conn
          .groupUpdateSubject(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case "setdesc":
      case "setdesk":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return "Text ?";
        await conn
          .groupUpdateDescription(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await conn.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await conn.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await conn.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case "tagall":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let teks = `ダ TAG FOR ADMIN ダ
 
                  *MESSAGE: ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `◈ @${mem.id.split("@")[0]}\n`;
        }
        conn.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case "hidetag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        conn.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case "totag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!isAdmins) return m.reply(mess.admin);
        if (!m.quoted)
          return m.reply(`Reply pesan dengan caption ${prefix + command}`);
        conn.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case "group":
      case "grup":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "close") {
          await conn
            .groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses Menutup Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "open") {
          await conn
            .groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => m.reply(`Sukses Membuka Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        break;
      case "editinfo":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "open") {
          await conn
            .groupSettingUpdate(m.chat, "unlocked")
            .then((res) => m.reply(`Sukses Membuka Edit Info Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "close") {
          await conn
            .groupSettingUpdate(m.chat, "locked")
            .then((res) => m.reply(`Sukses Menutup Edit Info Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let response = await conn.groupInviteCode(m.chat);
        conn.sendText(
          m.chat,
          `👥 *INFO LINK GROUP*\n📛 *Nama :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "@" + groupMetadata.owner.split`@`[0]
              : "Tidak diketahui"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          },
        );
        break;
      case "revoke":
      case "resetlink":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        await conn
          .groupRevokeInvite(m.chat)
          .then((res) => {
            m.reply(
              `Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`,
            );
          })
          .catch((err) => m.reply(json(err)));
        break;
      case "listonline":
      case "liston":
        if (!m.isGroup) m.reply(mess.group);
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        let online = [...Object.keys(store.presences[id]), botNumber];
        conn.sendText(
          m.chat,
          "⏰ List Online:\n\n" +
            online.map((v) => "🌱 @" + v.replace(/@.+/, "")).join`\n`,
          m,
          {
            mentions: online,
          },
        );
        break;

            
            
            
     // ================= MAIN MENU =================
      case "ping":
      case "botstatus":
      case "statusbot":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0,
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            },
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key],
      )}`,
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times,
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}`,
  )
  .join("\n\n")}`
    : ""
}
`.trim();
          await conn.sendMessage(
            m.chat,
            {
              text: respon,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "STATUS SERVER",
                  body: `${latensi.toFixed(4)} Second`,
                  thumbnailUrl:
                    "https://telegra.ph/file/05c3b67e766b157ca655f.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
     

      case "speedtest":
        {
          m.reply("Testing Speed...");
          let cp = require("child_process");
          let { promisify } = require("util");
          let exec = promisify(cp.exec).bind(cp);
          let o;
          try {
            o = await exec("python speed.py");
          } catch (e) {
            o = e;
          } finally {
            let { stdout, stderr } = o;
            if (stdout.trim())
              conn.sendMessage(
                m.chat,
                {
                  text: stdout,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "SPEED TEST",
                      body: `FORGET DONATE`,
                      thumbnailUrl:
                        "https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg",
                      sourceUrl: global.link,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                },
              );
            if (stderr.trim())
              conn.sendMessage(
                m.chat,
                {
                  text: stderr,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "SPEED TEST",
                      body: `FORGET DONATE`,
                      thumbnailUrl:
                        "https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg",
                      sourceUrl: global.link,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                },
              );
          }
        }
        break;
      case "runtime":
        let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`;
        conn.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "RUNTIME",
                body: `FORGET DONATE`,
                thumbnailUrl:
                  "https://telegra.ph/file/e293453cd41317e7cf2a4.jpg",
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          },
        );
        break;
     
     
      case "owner":
        {
          conn.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list,
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tqto":
        m.reply(
          `*Terima Kasih Kepada*\n\n>| 1. Zannnyx ( Author )\n>| 2. Siputx ( Rest APIs )\n>| 3. Penyedia Module\n\n\n\n\n\n Powered By WhatsApp`,
        );
        break;
            
            
            
            
            

// ===================== CONVERT MENU ======================
      case "sticker":
      case "stiker":
      case "s":
        {
          if (!quoted)
            return m.reply(
              `Balas Video/Image Dengan Caption ${prefix + command}`,
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else if (isVideo || /video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return m.reply("Maksimal 10 detik!");
            let media = await quoted.download();
            let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else {
            return m.reply(
              `Kirim Gambar/Video Dengan Caption ${
                prefix + command
              }\nDurasi Video 1-9 Detik`,
            );
          }
        }
        break;
        case "qc": {
        	if (!text) return m.reply(`teks mana bang`)
let teks = m.quoted ? quoted.text : text
 try {
   try {
                    pic = await conn.profilePictureUrl(m.sender, 'image')
                } catch {
                    pic = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
         const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
               "entities": [],
               "avatar": true,
               "from": {
                  "id": 1,
                  "name": pushname ,
                  "photo": {
                     "url": pic
                  }
               },
               "text": text,
               "replyMessage": {}
            }]
         }
         const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
 const buffer = Buffer.from(json.data.result.image, 'base64') 
conn.sendImageAsSticker(m.chat, buffer, m, {
                  packname: global.packname , author: global.author
               })    //m.reply(util.format(json.data.result.image))
      } catch (e) {
         console.log(e)
         m.reply(`${e}\n\nServer sedang eror, coba lagi tahun depan`)
      }
      }
      break
        case 'vidbrat': {
    if (!text) return m.reply(mess.input);
    const apiUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true&delay=500$`;
    await conn.sendVideoAsSticker(m.chat, apiUrl, m, {
        packname: global.packname,
        author: global.author
    });
    }
    break
        case 'brat': {
    if (!text) return m.reply(mess.input);
    const apiUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;
    await conn.sendImageAsSticker(m.chat, apiUrl, m, {
        packname: global.packname,
        author: global.author
    });
    break;
}
case 'furrybrat': {
    if (!text) return m.reply(mess.input);
    const apiUrl = `https://furrbrats.vercel.app/generate?text=${encodeURIComponent(text)}`;
    await conn.sendImageAsSticker(m.chat, apiUrl, m, {
        packname: global.packname,
        author: global.author
    });
    break;
}
      case "smeme":
        {
          let respond = `Kirim/Reply image/sticker dengan caption ${
            prefix + command
          } text1|text2`;
          if (!/image/.test(mime)) return m.reply(respond);
          if (!text) return m.reply(respond);
          m.reply(mess.wait);
          atas = text.split("|")[0] ? text.split("|")[0] : "-";
          bawah = text.split("|")[1] ? text.split("|")[1] : "-";
          let dwnld = await conn.downloadAndSaveMediaMessage(qmsg);
          let fatGans = await uploadUguu(dwnld);
          let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(
            bawah,
          )}/${encodeURIComponent(atas)}.png?background=${fatGans.result}`;
          let pop = await conn.sendImageAsSticker(m.chat, smeme, m, {
            packname: packname,
            author: author,
          });
          fs.unlinkSync(pop);
        }
        break;
      case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
           
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `Reply sticker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            conn.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              },
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `m.reply stiker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await conn.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `Kirim/m.reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          conn.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `Kirim/m.reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          conn.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `Arxzy-MD.mp3`,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `m.reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          conn.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "togif":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `m.reply stiker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await conn.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case 'tourl': {
    if (!quoted) return m.reply(`Send/Reply Media With Captions ${prefix + command}`);
    
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        if (!q.download) return reply("Media tidak dapat diunduh. Pastikan Anda mereply media (gambar/video/stiker/audio).");

        let media = await q.download();
        if (!media || media.length === 0) return m.reply("Error: Media tidak terunduh dengan benar.");

        const { fromBuffer } = require('file-type');
        const fileType = await fromBuffer(media);
        const ext = fileType ? fileType.ext : 'bin';

        // Top4top
        async function uploadTop4top(buffer, ext) {
            const request = require("request");
            const cheerio = require('cheerio');

            return new Promise((resolve, reject) => {
                let req = request({
                    url: "https://top4top.io/index.php",
                    method: "POST",
                    headers: {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "cache-control": "max-age=0",
                        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
                        'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
                    }
                }, function (error, response, body) {
                    if (error) return resolve({ status: 'error', result: 'Upload failed' });

                    const $ = cheerio.load(body);
                    let result = $('div.alert.alert-warning > ul > li > span a').attr('href');
                    if (!result) {
                        resolve({ status: "error", result: "Gagal memperoleh URL. Coba unggah file lain." });
                    } else {
                        resolve({ status: "Done", result });
                    }
                });

                let form = req.form();
                form.append('file_1_', buffer, { filename: `${Math.floor(Math.random() * 10000)}.${ext}` });
                form.append('submitr', '[ رفع الملفات ]');
            });
        }

        // Uguu
        async function uploadUguu(buffer, ext) {
            const { exec } = require('child_process');
            const fs = require('fs');
            const path = require('path');
            const mediaFilePath = path.join(__dirname, `${Math.floor(Math.random() * 10000)}.${ext}`);
            fs.writeFileSync(mediaFilePath, buffer);

            const execPromise = (command) => {
                return new Promise((resolve, reject) => {
                    exec(command, (error, stdout, stderr) => {
                        if (error) reject(error);
                        else resolve(stdout.trim());
                    });
                });
            };

            let response = await execPromise(`curl -s -F files[]=@${mediaFilePath} https://uguu.se/upload`);
            fs.unlinkSync(mediaFilePath);

            try {
                let jsonResponse = JSON.parse(response);
                return { status: 'Done', result: jsonResponse.files[0].url };
            } catch (error) {
                return { status: 'error', result: 'Gagal mengunggah ke Uguu' };
            }
        }

//yang stiker eror ck, fix sendiri aja
        let uploadResult;
        if (/video|image|audio|gif|sticker/g.test(mime)) {
            // eror ngabs🗿
            if (/sticker/g.test(mime)) {
                media = await q.download();
                ext = 'png';r
            }
            uploadResult = await uploadTop4top(media, ext);
            if (uploadResult.status === 'error') {
                uploadResult = await uploadUguu(media, ext);
            }
        } else {
            return m.reply('Format media tidak didukung untuk konversi URL.');
        }
        if (uploadResult.status === 'Done') {
            let caption = `*[ UPLOAD SUCCESS ]*\n\n🔗 URL: ${uploadResult.result}\n📦 *UKURAN :* ${media.length} Byte`;
            return m.reply(caption);
        } else {
            return m.reply(`Gagal mengunggah media: ${uploadResult.result}`);
        }

    } catch (error) {
        console.log(error);
        return m.reply("Error: " + error.message);
    }
}
break;

        break;
      case "toonce":
      case "toviewonce":
        {
          if (!quoted) return m.reply(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await conn.downloadAndSaveMediaMessage(quoted);
            conn.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: `Here you go!`,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          } else if (/video/.test(mime)) {
            anuanuan = await conn.downloadAndSaveMediaMessage(quoted);
            conn.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: `Here you go!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;
      case "toqr":
        {
          if (!q) return m.reply(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, {
            scale: 35,
          });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64",
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await conn.sendMessage(
            from,
            {
              image: medi,
              caption: "Here you go!",
            },
            {
              quoted: m,
            },
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "fliptext":
        {
          if (args.length < 1)
            return m.reply(`Example:\n${prefix}fliptext ArxzyDev`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          m.reply(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`,
          );
        }
        break;
     
// ============= Anime and Hentai ========

case 'genshin':
        case 'swimsuit':
        case 'schoolswimsuit':
        case 'white':
        case 'barefoot':
        case 'touhou':
        case 'gamecg':
        case 'hololive':
        case 'uncensored':
        case 'sunglasses':
        case 'glasses':
        case 'weapon':
        case 'shirtlift':
        case 'chain':
        case 'fingering':
        case 'flatchest':
        case 'torncloth':
        case 'bondage':
        case 'demon':
        case 'pantypull':
        case 'headdress':
        case 'headphone':
        case 'anusview':
        case 'shorts':
        case 'stokings':
        case 'topless':
        case 'beach':
        case 'bunnygirl':
        case 'bunnyear':
        case 'vampire':
        case 'nobra':
        case 'bikini':
        case 'whitehair':
        case 'blonde' :
        case 'pinkhair':
        case 'bed':
        case 'ponytail':
        case 'nude':
        case 'dress':
        case 'underwear' :
        case 'foxgirl' :
        case 'uniform':
        case 'skirt':
        case 'breast':
        case 'twintail':
        case 'spreadpussy':
        case 'seethrough':
        case 'breasthold':
        case 'fateseries':
        case 'spreadlegs':
        case 'openshirt':
        case 'headband':
        case 'nipples':
        case 'erectnipples':
        case 'greenhair':
        case 'wolfgirl':
        case 'catgirl':
        let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Error';
  conn.sendMessage(m.chat, {image: {url: json.url}, caption: mess.done}, {quoted: m})
  break
      
  case "hentai":{
    m.reply(`halo, perintah ${command} sudah di berikan oleh ${namabot} untuk chat ke private, selamat menikmati untuk yang coli hehe`)
    let cr = await xhentai(text);
    let tan = cr[Math.floor(Math.random(), cr.length)]
    let vap = `
⭔ Title : ${tan.title}
⭔ Category : ${tan.category}
⭔ Mimetype : ${tan.type}
⭔ Views : ${tan.views_count}
⭔ Shares : ${tan.share_count}
⭔ Source : ${tan.link}
⭔ Media Url : ${tan.video_1}
`
conn.sendMessage(m.sender, { video: { url: tan.video_1 }, caption: vap }, { quoted: m})
};
break


// ================= BASS MENU ===================


      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "tupai":
        {
          try {
            let set;
            if (/bass/.test(command))
              set = "-af equalizer=f=54:width_type=o:width=2:g=20";
            if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
            if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
            if (/earrape/.test(command)) set = "-af volume=12";
            if (/fast/.test(command))
              set = '-filter:a "atempo=1.63,asetrate=44100"';
            if (/fat/.test(command))
              set = '-filter:a "atempo=1.6,asetrate=22100"';
            if (/nightcore/.test(command))
              set = "-filter:a atempo=1.06,asetrate=44100*1.25";
            if (/reverse/.test(command)) set = '-filter_complex "areverse"';
            if (/robot/.test(command))
              set =
                "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
            if (/slow/.test(command))
              set = '-filter:a "atempo=0.7,asetrate=44100"';
            if (/smooth/.test(command))
              set =
                "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
            if (/tupai/.test(command))
              set = '-filter:a "atempo=0.5,asetrate=65100"';
            if (/audio/.test(mime)) {
              m.reply(mess.wait);
              let media = await conn.downloadAndSaveMediaMessage(qmsg);
              let ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${media} ${set} ${ran}`,
                (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return m.reply(err);
                  let buff = fs.readFileSync(ran);
                  conn.sendMessage(
                    m.chat,
                    {
                      audio: buff,
                      mimetype: "audio/mpeg",
                    },
                    {
                      quoted: m,
                    },
                  );
                  fs.unlinkSync(ran);
                },
              );
            } else
              m.reply(
                `Balas audio yang ingin diubah dengan caption *${
                  prefix + command
                }*`,
              );
          } catch (e) {
            m.reply(e);
          }
        }
        break;
            
            
            
        
  // ============== DONLOT MENU ================
            
            
            case 'tt':
     case 'tiktok':{
     if (!text) return m.reply('url input')
     let api = await ttdl(text);
     let captionx = `
     *Title:* ${api.title}
     *Title Audio:* ${api.title_audio}`
     conn.sendMessage(m.chat, { video: { url: api.video }, caption: captionx })
     conn.sendMessage(m.chat, { audio: { url: api.audio }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
     }
     break
     
     // Instagram 
     case 'ig':
     case 'instagram':{
     if (!text) return m.reply('url input')
     const mediaUrl = await igdl(text);
     const urlmedia = mediaUrl[0].url;
     try {
        const response = await axios.head(urlmedia); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await conn.sendMessage(m.chat, { image: { url: urlmedia}, caption: mess.done }, { quoted: m });
            return
        } else {
            await conn.sendMessage(m.chat, { video: { url: urlmedia}, caption: mess.done }, { quoted: m });
            return 
        }
     } catch(e) {
        return m.reply(mess.error)
     }
     }
     break
     
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
if (/remini/.test(command)) cap = `*Type :* Ai Remini 🖼️\n*Result :* Succes ✅`
if (/hd/.test(command)) cap = `*Type :* Ai HD Foto 📸\n*Result :* Succes ✅`
if (/hdr/.test(command)) cap = `*Type :* Ai HDR 🖼️\n*Result :* Succes ✅`
let media = await conn.downloadAndSaveMediaMessage(quoted);
try {
let catBoxUrl = await uploadUguu(media);
console.log('CatBox URL:', catBoxUrl);
let anjai = await fetchJson(`https://api.vreden.my.id/api/artificial/hdr?url=${catBoxUrl.result}&pixel=4`)
let result = anjai.result.data.downloadUrls[0]
conn.sendMessage(m.chat, { image: { url: result }, caption: cap }, { quoted: m })
} catch (error) {
console.error(error);
}
}
break
            
 case 'play': {
if (!text) return m.reply('nama lagu pengen di search!')
try {
const { search } = require('yt-search')
const get = await search(text)
const result = get.all[0]

if (result === 0) {
 m.reply('maaf ga ketemu...')
}

let deku = `⏤͟͟͞͞╳── *[ ᴘʟᴀʏ - ʏᴏᴜᴛᴜʙᴇ ]* ── .々─ᯤ\n`
deku += `│    =〆 ᴛɪᴛʟᴇ: ${result.title}\n`
deku += `│    =〆 ɪᴅ: ${result.videoId}\n`
deku += `│    =〆 ᴅᴜʀᴀsɪ: ${result.timestamp}\n`
deku += `│    =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${result.description}\n`
deku += `│    =〆 ᴜʀʟ: ${result.url}\n`
deku += `⏤͟͟͞͞╳────────── .✦`

const a = await conn.sendMessage(m.chat, {
  text: deku,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: result.title,
      mediaType: 1,
      previewType: 1,
      body: `views: ${result.views} / durasi: ${result.timestamp}`,
      //previewType: "PHOTO",
      thumbnailUrl: result.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: result.url,
      sourceUrl: result.url
    }
  }
}, { quoted: m })

let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${result.url}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

 
conn.sendMessage(m.chat, { audio: { url: crot }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch (err) {
					console.error(err);
					m.reply(`*Terjadi kesalahan!*`);
				}


}
break
     
     case 'twitter': case 'x':{
  if (!args[0]) return m.reply(`*url Twitter*`)
  const sender = m.sender.split('@')[0];
  const url = args[0];
 
  try {
    let downloadResult = (await axios.get(`https://api.ryzendesu.vip/api/downloader/twitter?url=${url}`)).data;
 
    if (!downloadResult.status || !downloadResult.media || downloadResult.media.length === 0) {
      const tempResult = (await axios.get(`https://api.ryzendesu.vip/api/downloader/v2/twitter?url=${url}`)).data;
      downloadResult = Array.isArray(tempResult) && tempResult.length > 0
        ? { status: true, media: tempResult }
        : { status: false, media: [] };
    }
 
    if (!downloadResult.status || !downloadResult.media || downloadResult.media.length === 0) {
      throw 'Gagal mendownload konten dari Twitter';
    }
 
    const type = downloadResult.type || 'video';
 
    if (type === 'image') {
      for (let i = 0; i < downloadResult.media.length; i++) {
        const mediaUrl = downloadResult.media[i];
        const { data: imageBuffer } = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const caption = i === 0 ? `Ini kak fotonya @${sender}` : '';
        await conn.sendMessage(
          m.chat,
          {
            image: imageBuffer,
            caption: caption,
            fileName: `image_${i + 1}.jpg`,
            mentions: i === 0 ? [m.sender] : [],
          },
          { quoted: m }
        );
      }
    } else {
      const mediaUrl = downloadResult.media[0].url || downloadResult.media[0];
      const { data: videoBuffer } = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
      const caption = `Ini kak videonya @${sender}`;
      await conn.sendMessage(
        m.chat,
        {
          video: videoBuffer,
          mimetype: 'video/mp4',
          fileName: 'video.mp4',
          caption: caption,
          mentions: [m.sender],
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error('Handler Error:', error);
    m.reply(`An error occurred: ${error}`)
  }
}
break
            
            case 'mediafire':
     case 'mf':{
     if (!text) return m.reply('text input')
     let hasil = await mediaFire(text)
     let massage = `Nama: ${hasil.title}\nSize: ${hasil.size}`
     conn.sendMessage(m.chat, {document: {url:hasil.url}, mimetype: 'application/zip', fileName: hasil.filename, caption: massage}, {quoted:m});
     }
     break
     
     
     
     
// ========== TOOLS MENU ============
      case "reactch": {
    if (!text) return m.reply("Format salah! Gunakan: .reactch <idsaluran>|<message_id>|<emoji>");

let args = text.split('.')
const channelId = args[0];
const messageId = args[1];
const emoji = args[2];

    try {
        await conn.newsletterReactMessage(channelId, messageId, emoji);
        m.reply(`Berhasil mengirim reaksi ${emoji} ke pesan dengan ID ${messageId} di saluran ${channelId}.`);
    } catch (error) {
        console.error("Gagal mengirim reaksi:", error);
        m.reply("Gagal mengirim reaksi. Pastikan ID saluran dan pesan benar.");
    }
    break;
}

case 'hytam':
case 'hitamkan': {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 
 let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam";
 
 if (!mime) return m.reply(`Kirim/reply gambar dengan caption *${usedPrefix + command}*`);
 if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
 
 let promptText = text || defaultPrompt;
 
 m.reply("Otw Menghitam...");
 
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI(API_GOOGLE);
 
 const base64Image = imgData.toString("base64");
 
 const contents = [
 { text: promptText },
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 
 const response = await model.generateContent(contents);
 
 let resultImage;
 let resultText = "";
 
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 
 if (resultImage) {
 const tempPath = path.join(process.cwd(), "tmp", `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 
 await conn.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Wahaha Makan Nih Hytam*`
 }, { quoted: m });
 
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch {}
 }, 30000);
 } else {
 m.reply("Gagal Menghitamkan.");
 }
 } catch (error) {
 console.error(error);
 m.reply(`Error: ${error.message}`);
 }
};
break

case 'hijabkan': case 'hijab': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let defaultPrompt = "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Diberikan Hijab Warna Putih Hijab Ala Orang Indonesia Dan Jangan Sampai Rambutnya Terlihat, Semua Tertutup";
    if (!mime) {
        m.reply("Tidak ada gambar yang direply, membuat gambar default...");
        mime = "image/png";
        q = { msg: { mimetype: mime }, download: async () => fs.readFileSync("default_image.png") };
    }
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
    let promptText = text || defaultPrompt;
    m.reply("Otw Di Hijabkan...");
    try {
        let imgData = await q.download();
        let genAI = new GoogleGenerativeAI(API_GOOGLE);
        const base64Image = imgData.toString("base64");
        const contents = [
            { text: promptText },
            {
                inlineData: {
                    mimeType: mime,
                    data: base64Image
                }
            }
        ];
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"]
            },
        });
        const response = await model.generateContent(contents);
        let resultImage;
        let resultText = "";
        for (const part of response.response.candidates[0].content.parts) {
            if (part.text) {
                resultText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
            }
        }
        if (resultImage) {
            const tmpDir = path.join(process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
            }
            let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
            fs.writeFileSync(tempPath, resultImage);
            await conn.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*Waifu Halal Halal*`
            }, { quoted: m });
            setTimeout(() => {
                try {
                    fs.unlinkSync(tempPath);
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }, 30000);
        } else {
            m.reply("Gagal Di Hijabkan Dosa Nya Ke gedean Ini Mah.");
        }
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
}
break
 
case 'ghibli': case 'ghiblistyle': case 'toghibli':{
 try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (!mime) return conn.sendMessage(m.chat, { text: 'Takda gambar, reply gambar/beri caption digambar' }, { quoted: m });
 if (!mime.startsWith('image')) return conn.sendMessage(m.chat, { text: 'hanya gambar bre!' }, { quoted: m });
 const media = await q.download();
 const base64Image = media.toString('base64');
 await conn.sendMessage(m.chat, { text: '⏳ proses bre..' }, { quoted: m });
 const axios = require('axios');
 const response = await axios.post(
 'https://ghiblistyleimagegenerator.cc/api/generate-ghibli', 
 { image: base64Image }, 
 { headers: {
 'authority': 'ghiblistyleimagegenerator.cc',
 'origin': 'https://ghiblistyleimagegenerator.cc',
 'referer': 'https://ghiblistyleimagegenerator.cc/',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 } 
 }
 );
 if (!response.data.success) return conn.sendMessage(m.chat, { text: 'gagal buay gambar' }, { quoted: m });
 const ghibliImageUrl = response.data.ghibliImage; 
 const form = new FormData();
 form.append('reqtype', 'fileupload');
 form.append('userhash', '');
 form.append('fileToUpload', Buffer.from(media), 'ghibli.jpg'); 
 const upres = await axios.post('https://catbox.moe/user/api.php', form, {
 headers: form.getHeaders()
 });
 const upUrl = upres.data.trim();
 await conn.sendMessage(m.chat, {
 image: { url: ghibliImageUrl },
 caption: '🎨 *Ghibli Style Image Generated*',
 mentions: [m.sender]
 }, { quoted: m });
 } catch (error) {
 console.error('Error:', error);
 await conn.sendMessage(m.chat, { text: `Error: ${error.message}` || 'gagal proses gmbr'}, { quoted: m });
 }
}
 break

case 'get': {
    if (!text) return m.reply(`Contoh: ${command} linknya`)
	if (!text.includes('http')) return m.reply(`Contoh: ${command} linknya`)
	
	try {
		const data = await axios.get(text)
		const contentType = data.headers["content-type"]

		if (contentType.startsWith('image/')) {
			conn.sendMessage(m.chat, {
				image: { url: text },
				caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
			}, { quoted: m })

		} else if (contentType.startsWith('video/')) {
			conn.sendMessage(m.chat, {
				video: { url: text },
				caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
			}, { quoted: m })

		} else if (contentType.startsWith('audio/')) {
			conn.sendMessage(m.chat, {
				audio: { url: text },
				mimetype: 'audio/mpeg'
			}, { quoted: m })

		} else {
			m.reply(util.format(data.data))

			const saveFileToDisk = async (url, outputPath) => {
				const response = await axios.get(url, { responseType: 'arraybuffer' })
				const contentType = response.headers['content-type']
				const ext = contentType.split('/')[1] || 'bin'
				const filePath = `${outputPath}.${ext}`

				return new Promise((resolve, reject) => {
					fs.writeFile(filePath, response.data, (err) => {
						if (err) reject(err)
						else resolve({ file: filePath, ext, mime: contentType })
					})
				})
			}

			try {
				const buffer = await conn.downloadAndSaveMediaMessage(m.quoted || m)
				await sleep(2000)

				const mimeType = await getMimeType(buffer)
				conn.sendMessage(m.chat, {
					document: fs.readFileSync(buffer),
					mimetype: mimeType,
					fileName: `get-data.${mimeType}`
				}, { quoted: m })

				fs.unlinkSync(buffer)
			} catch (error) {
				console.error('Gagal menyimpan:', error)
			}
		}
	} catch (error) {
		m.reply(error)
		console.error('Error:', error)
	}
}
break

        case "botinfo": {
      const uptime = runtime(process.uptime())
     const nodeVersion = process.version;
    const packageJson = require('../package.json');
    const baileysVersion = packageJson.dependencies['@fizzxydev/baileys-pro'] || packageJson.devDependencies['@fizzxydev/baileys-pro'];
    const botStatus = conn.public ? 'Public' : 'Self';
            
            let pesan = `
*VERSI:* 1.2
*NODEJS:* ${nodeVersion}
*BAILEYS:* ${baileysVersion}
*SERVER RUN:* ${uptime}
`
            m.reply(pesan)
        }
        break
            
      default:

          
        if (budy.startsWith("=>")) {
          if (!isCreator) return m.reply(mess.owner);

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            );
          } catch (e) {
            m.reply(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return m.reply(mess.owner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return m.reply(mess.owner);
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(err);
            if (stdout) return m.reply(stdout);
          });
        }
    }
  } catch (err) {
    console.log(util.format(err))
        let e = String(err)
        if (!m.isGroup && !m.key.fromMe) {
        const pushname = m.pushName || "No Name";
    let pesan = `『 REPORT MESSAGE 』
    
» Sent Time : ${waktu}
» Sender Name : ${pushname}
» Chat ID : ${m.chat.split('@')[0]}
» Chat Name : ${budy}
» Message Type : ${m.mtype}
» Message TypeError : 

${util.format(err)}

» Author By : Zann
`;

    conn.sendMessage("6289671842736@s.whatsapp.net", {
        text: pesan,
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true
        }
    }); 
};
}
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
