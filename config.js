import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+62 838-0568-5278', 'MarclGaGanz'],
  ['+62 838-0568-5278'],
  ['+62 838-0568-5278']
]



 // ['6283805685278', '6283805685278', '6283805685278']

  // [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  violetics: 'https://violetics.pw',
  rrul: 'https://api-rull.herokuapp.com',
  hadi: 'http://hadi-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta'
}

/* global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]
*/

// Sticker WM
global.packname = `\t\tã ArullOfc ã\n\t\tã IG: sahrulwara_____ ã\n\t\t\t\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
global.author = ''
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = 'SaxiaBotz-MD'
global.str = '-------------'
global.l = 'ã'
global.r = 'ã'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ð§¬',
      limit: 'ð',
      health: 'â¤ï¸',
      exp: 'âï¸',
      money: 'ðµ',
      potion: 'ð¥¤',
      diamond: 'ð',
      common: 'ð¦',
      uncommon: 'ð',
      mythic: 'ð³ï¸',
      legendary: 'ðï¸',
      pet: 'ð',
      trash: 'ð',
      armor: 'ð¥¼',
      sword: 'âï¸',
      wood: 'ðªµ',
      rock: 'ðª¨',
      string: 'ð¸ï¸',
      horse: 'ð',
      cat: 'ð',
      dog: 'ð',
      fox: 'ð¦',
      petFood: 'ð',
      iron: 'âï¸',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
