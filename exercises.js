// ============================================
// EXERCIȚII - Mein Tag (Conversație A1)
// Claudia Toth · 4 exerciții gradate + producere orală liberă (Ex5)
// Sursă: vocabular A1 standard · conținut 100% original
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
// ===== click-match =====
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}
// ===== multiple-choice =====
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}

// ============================================
// EX1: Vocabular — potrivește activitatea/perioada (DE ↔ RO)
// ============================================
const ex1Pairs = [
    { de: 'aufstehen', ro: 'a se scula' },
    { de: 'frühstücken', ro: 'a lua micul dejun' },
    { de: 'einkaufen', ro: 'a face cumpărături' },
    { de: 'fernsehen', ro: 'a se uita la TV' },
    { de: 'arbeiten', ro: 'a lucra' },
    { de: 'duschen', ro: 'a face duș' },
    { de: 'kochen', ro: 'a găti' },
    { de: 'der Morgen', ro: 'dimineața' },
    { de: 'der Abend', ro: 'seara' },
    { de: 'die Nacht', ro: 'noaptea' }
];
function buildEx1() { buildClickMatch('ex1', ex1Pairs, '<strong>📖 Potrivește cuvântul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Wort', '🇷🇴 Traducere'); }
function checkEx1() { const s = dmState['ex1']; return { correct: Object.keys(s.matched).length, total: ex1Pairs.length }; }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Cât e ceasul? (Uhrzeit)
// ============================================
const ex2Items = [
    { id: 'a', q: 'Cât e ceasul? <strong>8:00</strong>', options: ['Es ist acht Uhr', 'Es ist halb acht', 'Es ist Viertel nach acht', 'Es ist Viertel vor acht'], correct: 0, explanation: '8:00 = acht Uhr.' },
    { id: 'b', q: 'Cât e ceasul? <strong>8:30</strong>', options: ['Es ist halb acht', 'Es ist halb neun', 'Es ist neun Uhr', 'Es ist Viertel nach acht'], correct: 1, explanation: '8:30 = halb neun (jumătate SPRE nouă!).' },
    { id: 'c', q: 'Cât e ceasul? <strong>8:15</strong>', options: ['Viertel vor acht', 'Viertel nach acht', 'halb acht', 'acht Uhr'], correct: 1, explanation: '8:15 = Viertel nach acht.' },
    { id: 'd', q: 'Cât e ceasul? <strong>8:45</strong>', options: ['Viertel nach acht', 'halb neun', 'Viertel vor neun', 'neun Uhr'], correct: 2, explanation: '8:45 = Viertel vor neun.' },
    { id: 'e', q: 'Cât e ceasul? <strong>7:00</strong>', options: ['Es ist sieben Uhr', 'Es ist sechs Uhr', 'Es ist halb sieben', 'Es ist acht Uhr'], correct: 0, explanation: '7:00 = sieben Uhr.' },
    { id: 'f', q: 'Cât e ceasul? <strong>6:30</strong>', options: ['sechs Uhr', 'halb sieben', 'Viertel nach sechs', 'halb sechs'], correct: 1, explanation: '6:30 = halb sieben (SPRE șapte!).' },
    { id: 'g', q: 'Cât e ceasul? <strong>9:00</strong>', options: ['acht Uhr', 'halb neun', 'neun Uhr', 'zehn Uhr'], correct: 2, explanation: '9:00 = neun Uhr.' },
    { id: 'h', q: 'Cât e ceasul? <strong>10:30</strong>', options: ['zehn Uhr', 'halb zehn', 'elf Uhr', 'halb elf'], correct: 3, explanation: '10:30 = halb elf (SPRE unsprezece!).' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🕗 Cât e ceasul?</strong><br>Atenție la „halb": halb neun = 8:30 (jumătate SPRE nouă)!'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Verbe separabile — scrie prefixul la final (KLAMMER)
// ============================================
const ex3Items = [
    { id: 'a', sentence: 'Ich stehe um 7 Uhr ____ .', verb: 'aufstehen', answer: 'auf' },
    { id: 'b', sentence: 'Ich kaufe am Nachmittag ____ .', verb: 'einkaufen', answer: 'ein' },
    { id: 'c', sentence: 'Ich sehe am Abend ____ .', verb: 'fernsehen', answer: 'fern' },
    { id: 'd', sentence: 'Der Kurs fängt um 9 Uhr ____ .', verb: 'anfangen', answer: 'an' },
    { id: 'e', sentence: 'Ich rufe meine Mutter ____ .', verb: 'anrufen', answer: 'an' },
    { id: 'f', sentence: 'Ich wache um 6 Uhr ____ .', verb: 'aufwachen', answer: 'auf' },
    { id: 'g', sentence: 'Kommst du heute ____ ?', verb: 'mitkommen', answer: 'mit' },
    { id: 'h', sentence: 'Ich komme um 5 Uhr ____ .', verb: 'zurückkommen', answer: 'zurück', accept: ['zurueck'] }
];
function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🔗 Scrie prefixul la finalul propoziției.</strong><br>Verbele separabile își trimit prefixul la coadă (regula KLAMMER). Infinitivul e dat în paranteză.</div>`;
    ex3Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.sentence} <em>(${item.verb})</em><br><input type="text" id="ex3-${item.id}" placeholder="prefix..." style="width:140px;display:inline-block;margin-top:6px;"></label></div><div class="feedback" id="ex3-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx3() { return checkTextItems(ex3Items, 'ex3'); }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Wann? — în ce parte a zilei
// ============================================
const ex4Items = [
    { id: 'a', q: 'Wann frühstückt man?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 0, explanation: 'Man frühstückt am Morgen.' },
    { id: 'b', q: 'Wann schläft man tief?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 3, explanation: 'Man schläft in der Nacht (atenție: in der, nu am!).' },
    { id: 'c', q: 'Wann isst man zu Mittag?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 1, explanation: 'Man isst am Mittag zu Mittag.' },
    { id: 'd', q: 'Wann sieht Andreea fern?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 2, explanation: 'Andreea sieht am Abend fern.' },
    { id: 'e', q: 'Wann steht man auf?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 0, explanation: 'Man steht am Morgen auf.' },
    { id: 'f', q: 'Wann ist es dunkel und still?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 3, explanation: 'In der Nacht ist es dunkel.' },
    { id: 'g', q: 'Wann geht man schlafen?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 2, explanation: 'Man geht meistens am Abend schlafen.' },
    { id: 'h', q: 'Wann macht man Mittagspause?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 1, explanation: 'Mittagspause = am Mittag.' }
];
function buildEx4() { buildMC('ex4', ex4Items, '<strong>🌅 Când? (în ce parte a zilei)</strong><br>Reține: am Morgen / Mittag / Abend, DAR in der Nacht.'); }
function checkEx4() { return checkMC('ex4', ex4Items); }
function resetEx4() { ex4Items.forEach(i => delete mcPicked['ex4-' + i.id]); buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); });
