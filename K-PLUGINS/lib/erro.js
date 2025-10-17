const axios = require('axios');

async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data, "utf-8");
}

async function erroDetalhado(e, { from, selo = null, command = 'Desconhecido', kimorin }) {
    try {
        const agora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        const mensagemErro = e?.message || String(e) || '❌ Mensagem não disponível';
        const stackLimpo = e?.stack ? e.stack.split('\n').slice(0, 5).join('\n ') : '❌ Stack não disponível';

        const msg = `🔍 *DEPURAÇÃO DE ERRO*
🧠 *Mensagem:* ${mensagemErro}
📌 *Stack:*
${stackLimpo}`;

        console.error(`[ERRO]:`, e);

        await kimorin.sendMessage(from, {
            text: msg,
            contextInfo: {
                externalAdReply: {
                    title: '🔧 ERRO DETECTADO',
                    body: 'Verifique abaixo o erro ocorrido.',
                    thumbnail: await getBuffer('https://files.catbox.moe/htbzbv.jpeg'),
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    sourceUrl: 'https://files.catbox.moe/htbzbv.jpeg'
                }
            }
        }, { quoted: selo });

    } catch (err2) {
        console.error("📛 Erro ao enviar a mensagem de depuração:", err2);
    }
}

module.exports = erroDetalhado;