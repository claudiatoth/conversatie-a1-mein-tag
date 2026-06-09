// ============================================
// FLASHCARDS - Mein Tag (Conversație A1)
// Claudia Toth · 32 carduri (activități + ora + perioade + fraze) cu TTS
// REGULĂ QA: fără ghilimele interioare în stringuri (CAPS/paranteze pentru emfază)
// ============================================

const flashcardsData = [
    // Activitățile zilei
    { de: "aufstehen", ro: "a se scula / a se trezi" },
    { de: "duschen", ro: "a face duș" },
    { de: "frühstücken", ro: "a lua micul dejun" },
    { de: "arbeiten", ro: "a lucra" },
    { de: "lernen", ro: "a învăța" },
    { de: "einkaufen", ro: "a face cumpărături" },
    { de: "kochen", ro: "a găti" },
    { de: "fernsehen", ro: "a se uita la televizor" },
    { de: "schlafen gehen", ro: "a se duce la culcare" },
    { de: "anfangen", ro: "a începe" },
    // Perioadele zilei
    { de: "der Morgen", ro: "dimineața" },
    { de: "der Vormittag", ro: "înainte de amiază" },
    { de: "der Mittag", ro: "amiaza / prânzul" },
    { de: "der Nachmittag", ro: "după-amiaza" },
    { de: "der Abend", ro: "seara" },
    { de: "die Nacht", ro: "noaptea" },
    // Ora (Uhrzeit)
    { de: "Wie spät ist es?", ro: "Cât e ceasul?" },
    { de: "Es ist acht Uhr.", ro: "Este ora opt." },
    { de: "halb neun", ro: "opt și jumătate (8:30)" },
    { de: "Viertel nach acht", ro: "opt și un sfert (8:15)" },
    { de: "Viertel vor neun", ro: "nouă fără un sfert (8:45)" },
    { de: "um sieben Uhr", ro: "la ora șapte" },
    // Fraze utile
    { de: "Ich stehe um 7 Uhr auf.", ro: "Mă scol la ora 7." },
    { de: "Dann frühstücke ich.", ro: "Apoi iau micul dejun." },
    { de: "Der Kurs fängt um 9 Uhr an.", ro: "Cursul începe la ora 9." },
    { de: "Am Abend sehe ich fern.", ro: "Seara mă uit la televizor." },
    { de: "Wann stehst du auf?", ro: "Când te scoli?" },
    { de: "Was machst du am Nachmittag?", ro: "Ce faci după-amiaza?" },
    { de: "zuerst, dann, danach", ro: "mai întâi, apoi, după aceea" },
    { de: "Um elf Uhr gehe ich schlafen.", ro: "La ora 11 mă duc la culcare." },
    { de: "Ich gehe zur Uni.", ro: "Merg la facultate." },
    { de: "Ein voller Tag!", ro: "O zi plină!" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: activități, ora, perioadele zilei + fraze utile pentru rutina ta.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
