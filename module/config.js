const fs = require("fs")

global.ownerNumber = ["6283863668404@s.whatsapp.net"]
global.nomerOwner = "6283863668404"
global.nomorOwner = ['6283863668404']
global.namaDeveloper = "ZaaXxyZzModDev"
global.namaBot = "ZaaXxyZz BotZz"
global.packname = ""
global.author = "Sticker By ZaaXxyZz"
global.thumb = fs.readFileSync("./img/logo.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/