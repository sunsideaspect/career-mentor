import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const html = readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../index.html'), 'utf8');
const start = html.indexOf('function intakeChannel');
const end = html.indexOf('function intakeRequestId');
const context = {};
vm.createContext(context);
vm.runInContext(`${html.slice(start, end)}\nthis.intakeSource = intakeSource;`, context);

function params(query) {
    return new URLSearchParams(query);
}

test('facebook, telegram and a direct visit map to three CRM sources', () => {
    assert.equal(context.intakeSource(params('utm_source=facebook&utm_medium=organic&utm_content=page')), 'Facebook');
    assert.equal(context.intakeSource(params('utm_source=fb')), 'Facebook');
    assert.equal(context.intakeSource(params('utm_source=telegram&utm_medium=social&utm_content=channel')), 'Telegram');
    assert.equal(context.intakeSource(params('utm_source=tg')), 'Telegram');
    assert.equal(context.intakeSource(params('utm_source=qr&utm_medium=qr&utm_content=poster')), 'Сайт');
    assert.equal(context.intakeSource(params('utm_source=school&utm_medium=qr&utm_content=pilot_a_parent')), 'Сайт');
    assert.equal(context.intakeSource(params('')), 'Сайт');
});
