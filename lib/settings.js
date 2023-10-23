require("./module")

global.owner = "6285267762732"
global.namabot = "VAUNDY SHOP"
global.namaCreator = "VAUNDY SHOP"
global.autoJoin = false
global.antilink = false
global.codeInvite = "-"
global.thumb = fs.readFileSync("./logo.jpg")
global.audionya = fs.readFileSync("./lib/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "By VAUNDY SHOP"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})