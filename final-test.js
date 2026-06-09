// ============================================
// TEST FINAL - Mein Tag (Conversație A1)
// Claudia Toth · 15 întrebări (vocab, ora, verbe separabile, perioade, dialog)
// REGULĂ QA: fără ghilimele interioare ASCII în stringuri de date.
// ============================================

const finalTestData = [
    { type: 'multiple', category: '📖 Vocabular', question: 'Ce înseamnă „aufstehen"?', options: ['a se culca', 'a se scula', 'a găti', 'a lucra'], correct: 'a se scula', explanation: 'aufstehen = a se scula / a se trezi (din pat).' },
    { type: 'multiple', category: '📖 Vocabular', question: 'Ce înseamnă „frühstücken"?', options: ['a prânzi', 'a lua micul dejun', 'a face duș', 'a cumpăra'], correct: 'a lua micul dejun', explanation: 'frühstücken = a lua micul dejun.' },
    { type: 'multiple', category: '📖 Vocabular', question: 'Ce înseamnă „fernsehen"?', options: ['a citi', 'a se uita la televizor', 'a dormi', 'a învăța'], correct: 'a se uita la televizor', explanation: 'fernsehen = a se uita la televizor (verb separabil).' },
    { type: 'multiple', category: '🕗 Uhrzeit', question: 'Cât e ceasul? 8:30', options: ['halb acht', 'halb neun', 'acht Uhr', 'neun Uhr'], correct: 'halb neun', explanation: '8:30 = halb neun (jumătate SPRE nouă!).' },
    { type: 'multiple', category: '🕗 Uhrzeit', question: 'Cât e ceasul? 8:15', options: ['Viertel vor acht', 'Viertel nach acht', 'halb neun', 'acht Uhr'], correct: 'Viertel nach acht', explanation: '8:15 = Viertel nach acht.' },
    { type: 'multiple', category: '🕗 Uhrzeit', question: '„halb sieben" — ce oră e?', options: ['7:30', '6:30', '7:00', '6:00'], correct: '6:30', explanation: 'halb sieben = 6:30 (jumătate SPRE șapte).' },
    { type: 'luckentext', category: '🔗 Verbe separabile', question: 'Completează prefixul:', sentence: 'Ich stehe um 7 Uhr ______.', translation: 'Mă scol la ora 7. (aufstehen)', accept: ['auf'], correct: 'auf', explanation: 'aufstehen → prefixul „auf" la finalul propoziției.' },
    { type: 'luckentext', category: '🔗 Verbe separabile', question: 'Completează prefixul:', sentence: 'Der Kurs fängt um 9 Uhr ______.', translation: 'Cursul începe la ora 9. (anfangen)', accept: ['an'], correct: 'an', explanation: 'anfangen → prefixul „an" la final.' },
    { type: 'multiple', category: '🔗 Verbe separabile', question: 'Care propoziție e corectă?', options: ['Ich einkaufe am Abend.', 'Ich kaufe am Abend ein.', 'Ich ein kaufe am Abend.', 'Ich kaufe ein am Abend Uhr.'], correct: 'Ich kaufe am Abend ein.', explanation: 'einkaufen: verbul pe locul 2 (kaufe), prefixul „ein" la final.' },
    { type: 'multiple', category: '🌅 Tageszeiten', question: 'Wann schläft man?', options: ['am Morgen', 'am Mittag', 'am Abend', 'in der Nacht'], correct: 'in der Nacht', explanation: 'Man schläft in der Nacht (atenție: in der, nu am!).' },
    { type: 'luckentext', category: '🌅 Tageszeiten', question: 'Completează:', sentence: '______ Morgen stehe ich auf.', translation: 'Dimineața mă scol.', accept: ['am'], correct: 'am', explanation: 'der Morgen → am Morgen.' },
    { type: 'multiple', category: '🌅 Tageszeiten', question: 'Cum întrebi cât e ceasul?', options: ['Wie alt bist du?', 'Wie spät ist es?', 'Wo ist es?', 'Wer ist es?'], correct: 'Wie spät ist es?', explanation: 'Wie spät ist es? = Cât e ceasul?' },
    { type: 'multiple', category: '🎬 Dialog', question: 'Wann steht Andreea auf?', options: ['um sechs Uhr', 'um sieben Uhr', 'um acht Uhr', 'um neun Uhr'], correct: 'um sieben Uhr', explanation: 'Andreea: „Ich stehe um sieben Uhr auf."' },
    { type: 'multiple', category: '🎬 Dialog', question: 'Wann fängt der Unterricht an?', options: ['um acht Uhr', 'um halb neun', 'um neun Uhr', 'um zehn Uhr'], correct: 'um neun Uhr', explanation: 'Andreea: „Der Unterricht fängt um neun Uhr an."' },
    { type: 'multiple', category: '🎬 Dialog', question: 'Was macht Andreea am Abend?', options: ['einkaufen', 'kochen', 'fernsehen oder ein Buch lesen', 'arbeiten'], correct: 'fernsehen oder ein Buch lesen', explanation: 'Andreea: „Am Abend sehe ich fern oder lese ein Buch."' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong>: vocabular, ora (Uhrzeit), verbe separabile, perioadele zilei și înțelegerea dialogului.</p>
            <ul class="test-info-list">
                <li>📋 O întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ 6-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress"><div class="test-progress-info"><span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span><span id="progress-category"></span></div><div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div></div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}
function startFinalTest() { testStarted = true; testCompleted = false; currentQuestionIndex = 0; userAnswers = {}; document.getElementById('test-intro').style.display = 'none'; document.getElementById('test-wizard').style.display = 'block'; document.getElementById('test-results').style.display = 'none'; showQuestion(0); }
function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container'), feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn'), nextBtn = document.getElementById('test-next-btn'), prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback'; feedback.textContent = '';
    let qh = '';
    if (q.type === 'multiple' || q.type === 'matching') { let o = ''; q.options.forEach((opt, i) => { o += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; }); qh = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${o}</div></div>`; }
    else if (q.type === 'luckentext') { qh = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`; }
    container.innerHTML = qh;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple' || q.type === 'matching') { const r = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`); if (r) r.checked = true; }
        else { const inp = document.getElementById('test-answer'); if (inp) inp.value = userAnswers[index].answer; }
        if (userAnswers[index].checked) { displayFeedback(index); checkBtn.disabled = true; setAnswerDisabled(q.type, true); }
        else { checkBtn.disabled = false; setAnswerDisabled(q.type, false); }
    } else { checkBtn.disabled = false; setAnswerDisabled(q.type, false); }
}
function setAnswerDisabled(type, disabled) { if (type === 'multiple' || type === 'matching') { document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled); } else { const el = document.getElementById('test-answer'); if (el) el.disabled = disabled; } }
function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let ua = '';
    if (q.type === 'multiple' || q.type === 'matching') { const sel = document.querySelector('input[name="test-answer"]:checked'); ua = sel ? sel.value : ''; }
    else { const inp = document.getElementById('test-answer'); ua = inp ? inp.value.trim() : ''; }
    if (!ua) { const fb = document.getElementById('test-feedback'); fb.className = 'feedback incorrect'; fb.textContent = 'Te rog să răspunzi înainte de verificare!'; return; }
    function norm(s) { return s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't').replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ').replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ').replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim(); }
    let ok = false;
    if (q.type === 'multiple' || q.type === 'matching') ok = ua.toLowerCase() === q.correct.toLowerCase();
    else { const u = norm(ua); ok = q.accept.some(a => norm(a) === u); }
    userAnswers[currentQuestionIndex] = { answer: ua, correct: ok, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true; setAnswerDisabled(q.type, true);
}
function displayFeedback(index) { const q = finalTestData[index], ans = userAnswers[index], fb = document.getElementById('test-feedback'); if (ans.correct) { fb.className = 'feedback correct'; fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`; } else { fb.className = 'feedback incorrect'; fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`; } }
function nextQuestion() { if (currentQuestionIndex === finalTestData.length - 1) finishTest(); else { currentQuestionIndex++; showQuestion(currentQuestionIndex); scrollToTest(); } }
function prevQuestion() { if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); scrollToTest(); } }
function scrollToTest() { const w = document.getElementById('test-wizard'); if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function finishTest() {
    testCompleted = true;
    let correct = 0; finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length, percentage = Math.round((correct / total) * 100), passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const cs = {}; finalTestData.forEach((q, i) => { const c = q.category; if (!cs[c]) cs[c] = { correct: 0, total: 0 }; cs[c].total++; if (userAnswers[i] && userAnswers[i].correct) cs[c].correct++; });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const c in cs) statsHTML += `<li>${c}: <strong>${cs[c].correct}/${cs[c].total}</strong> (${Math.round((cs[c].correct / cs[c].total) * 100)}%)</li>`;
    statsHTML += '</ul></div>';
    let mistakesHTML = ''; const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) { mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>'; mistakes.forEach(m => { mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`; }); mistakesHTML += '</div>'; }
    const wizard = document.getElementById('test-wizard'), results = document.getElementById('test-results');
    wizard.style.display = 'none'; results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}"><div class="test-result-emoji">${emoji}</div><div class="test-result-badge">${badge}</div><div class="test-result-score">${correct} / ${total}</div><div class="test-result-percentage">${percentage}%</div><div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}</div>
        ${statsHTML}${mistakesHTML}
        <div class="test-final-actions"><button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function restartTest() { if (confirm('Sigur vrei să reiei testul?')) { currentQuestionIndex = 0; userAnswers = {}; testCompleted = false; document.getElementById('test-results').style.display = 'none'; document.getElementById('test-wizard').style.display = 'block'; showQuestion(0); scrollToTest(); } }
function goBackToTheory() { const t = document.getElementById('main-section-0'), a = document.querySelectorAll('.arrow')[0]; if (t && !t.classList.contains('active')) { t.classList.add('active'); if (a) a.classList.add('rotated'); } const s = document.getElementById('teorie'); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
