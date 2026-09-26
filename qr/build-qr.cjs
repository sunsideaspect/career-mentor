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
    ['poster', 'Загальний QR', link('qr', 'qr', 'poster')],
    ['pilot-a-student', 'Пілот A · учні', link('school', 'qr', 'pilot_a_student')],
    ['pilot-a-parent', 'Пілот A · батьки', link('school', 'qr', 'pilot_a_parent')],
    ['pilot-b-student', 'Пілот B · учні', link('school', 'qr', 'pilot_b_student')],
    ['pilot-b-parent', 'Пілот B · батьки', link('school', 'qr', 'pilot_b_parent')],
    ['pilot-c-student', 'Пілот C · учні', link('school', 'qr', 'pilot_c_student')]
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
    fs.writeFileSync(path.join(__dirname, 'cards.json'), JSON.stringify(ready, null, 2));
    console.log(`wrote ${ready.length}`);
})();
