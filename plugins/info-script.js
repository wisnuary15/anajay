import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
var handler = async(m, { conn, text, usedPrefix, command }) => {
    let delay = time => new Promise(res => setTimeout(res, time))
    let str = `s.id/elaina-ai_fix_v6_no_enc`
    let waifu = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/waifu.txt')
    let chen = await waifu.text()
    let ran = chen.split('\n')
    let yae = ran[Math.floor(Math.random() * ran.length)]
    let thumb = await(await fetch(yae)).buffer()
    await conn.reply(m.chat, str, m, global.fakeig)
    await conn.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 120,
                           title: '🐾 pencet aja 🐾'
                        }
                    }, {})
                    let stiker = await sticker(null, global.API(`https://telegra.ph/file/64cbeccd8b371daf4746a.jpg`), global.packname, global.author)
    await delay(3000) 
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
                }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
