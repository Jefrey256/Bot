const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`
╭─〔🤍𝐃𝐎𝐍𝐎𝐒 𝐃𝐎 𝐁𝐎𝐓🤍〕─╮
├───────────────
│🤍𝐔𝐒𝐔: @${sender.split("@")[0]}
│🤍𝐃𝐎𝐍𝐎: 𝖵𝖺𝗌𝗈 𝖣𝖾𝗏.
│🤍𝐃𝐎𝐍𝐎: 𝖬𝖺𝗍𝗁𝖾𝗎𝗌 </>
│🤍𝐁𝐎𝐓: ${NomeDoBot} 
│🤍𝐀𝐃𝐐𝐔𝐈𝐑𝐈𝐑: wa.me/553891164328
╰─〔𝐁𝐘: 𝐊𝐈𝐌𝐎𝐑𝐈 𝐃𝐎𝐌𝐈𝐍𝐀〕─╯
`
}

exports.infodono = infodono