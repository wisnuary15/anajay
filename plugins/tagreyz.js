import { sticker5 } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker5(null, `https://telegra.ph/file/4749ebddec8e60a5c3b8d.png`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
conn.reply(m.chat,'ada yang nyariin lu @6283181666350',m)   
}

handler.customPrefix = /^(reyz|rey|reyzxd)$/i;
handler.command = new RegExp();
export default handler