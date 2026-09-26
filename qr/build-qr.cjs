const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const base = 'https://viyskova-osvita.com.ua/';
const campaign = 'vvnz_2027_kryvyi_rih_raion';

function link(source, medium, content) {
    const query = new URLSearchParams({
        utm_source: source,
        utm_medium: medium,
        utm_campaign: campaign,
        utm_content: content
    });
    return `${base}?${query.toString()}`;
}

const cards = [
    ['facebook', 'Facebook', link('facebook', 'organic', 'page')],
    ['site', 'Сайт', base],
    ['telegram', 'Telegram', link('telegram', 'social', 'channel')]
];

const dir = path.join(__dirname, 'codes');
fs.mkdirSync(dir, { recursive: true });

(async () => {
    const ready = [];
    for (const [id, title, url] of cards) {
        const file = path.join(dir, `${id}.svg`);
        await QRCode.toFile(file, url, { type: 'svg', margin: 1, width: 280 });
        ready.push({ id, title, url });
    }
    const keep = new Set(ready.map(card => `${card.id}.svg`));
    for (const name of fs.readdirSync(dir)) {
        if (name.endsWith('.svg') && !keep.has(name)) fs.unlinkSync(path.join(dir, name));
    }
    fs.writeFileSync(path.join(__dirname, 'cards.json'), JSON.stringify(ready, null, 2));
    console.log(`wrote ${ready.length}`);
})();
