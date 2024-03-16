import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `ᴛʜᴀɴᴋs ᴛᴏᴏ :
	
- sʜɪʀᴏᴋᴀᴍɪʀʏᴢɴ
- ʙᴏᴄʜɪʟɢᴀᴍɴɢ
- xᴄᴛ𝟶𝟶𝟽
- ᴇᴋᴜᴢɪᴋᴀ
- ɴᴜʀᴜᴛᴏᴍᴏ
- ɪᴍʏᴀɴxɪᴀᴏ
- ᴠʏɴᴀᴀᴄʜᴀɴ
- xᴛʀᴀᴍ-ᴛᴇᴀᴍ
- ʀᴇʏᴢ ʜᴀʏᴀɴᴀsɪ
- ᴠʏᴢᴛᴇʀ ɪᴍᴘᴀᴄᴛ
- ᴀʀɪʟ
- ʀᴀᴘɪᴋᴢ
`;
	await conn.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: tqto
                        }
                    }, {})
                }
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|credit|thanksto|credit)$/i;

export default handler;
