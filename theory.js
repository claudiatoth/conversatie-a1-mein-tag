// ============================================
// TEORIE - Mein Tag (Conversație A1)
// Claudia Toth · rutina zilnică + ora (Uhrzeit) + verbe separabile
// Sursă: vocabular A1 standard (PONS) · conținut 100% original
// ============================================

const theoryHTML = `
    <!-- 0: Situație + sarcină -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Situația & sarcina ta</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Astăzi vorbim despre <strong>ziua mea</strong>! ⏰ Înveți să spui ce faci și la ce oră: te trezești, iei micul dejun, mergi la facultate… Două lucruri noi și foarte utile: <strong>ora în germană</strong> (Wie spät ist es?) și <strong>verbele separabile</strong> (Ich stehe um 7 Uhr <em>auf</em>). Îi povestesc prietenei mele <strong>Carolina</strong> cum arată o zi obișnuită. La final îți descrii TU ziua cu voce tare!</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📍 Situation</h4>
                <p>🇩🇪 Andreea trifft ihre Freundin Carolina im Café. Carolina fragt sie, wie ein normaler Tag bei ihr aussieht.</p>
                <p style="margin-top:6px;">🇷🇴 Andreea se întâlnește cu prietena ei Carolina la cafenea. Carolina o întreabă cum arată o zi obișnuită la ea.</p>
            </div>

            <div class="theory-box" style="background:#ecfdf5;border-color:#10b981;">
                <h4>🎯 Aufgabe / Sarcina</h4>
                <p>🇩🇪 Beschreibe deinen Tagesablauf: was du machst und um wie viel Uhr.</p>
                <p style="margin-top:6px;">🇷🇴 Descrie-ți programul zilnic: ce faci și la ce oră.</p>
            </div>

            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>✍️ Notă despre diacritice</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>der Frühstück</em>… de fapt <em>das Frühstück</em>) sau cu varianta de înlocuire (<em>Fruehstueck</em>). Ambele sunt acceptate peste tot în lecție.</p>
            </div>
        </div>
    </div>

    <!-- 1: Wortschatz — Tagesablauf & Tageszeiten -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📖 2. Vocabular: ziua & perioadele zilei (Tagesablauf & Tageszeiten)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-wortschatz.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">2.1 🔁 Tagesablauf (activitățile zilei)</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">aufstehen</td><td>a se scula / a se trezi (din pat)</td></tr>
                    <tr><td class="verb">duschen</td><td>a face duș</td></tr>
                    <tr><td class="verb">frühstücken</td><td>a lua micul dejun</td></tr>
                    <tr><td class="verb">zur Uni / zur Arbeit gehen</td><td>a merge la facultate / la muncă</td></tr>
                    <tr><td class="verb">arbeiten / lernen</td><td>a lucra / a învăța</td></tr>
                    <tr><td class="verb">zu Mittag essen</td><td>a lua prânzul</td></tr>
                    <tr><td class="verb">einkaufen</td><td>a face cumpărături</td></tr>
                    <tr><td class="verb">kochen</td><td>a găti</td></tr>
                    <tr><td class="verb">fernsehen</td><td>a se uita la televizor</td></tr>
                    <tr><td class="verb">schlafen gehen</td><td>a se duce la culcare</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">2.2 🌅 Tageszeiten (perioadele zilei)</h4>
            <table class="grammar-table">
                <thead><tr><th>Substantiv</th><th>Când? (Wann?)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Morgen</td><td>am Morgen</td><td>dimineața</td></tr>
                    <tr><td class="verb">der Vormittag</td><td>am Vormittag</td><td>înainte de amiază</td></tr>
                    <tr><td class="verb">der Mittag</td><td>am Mittag</td><td>la prânz / amiaza</td></tr>
                    <tr><td class="verb">der Nachmittag</td><td>am Nachmittag</td><td>după-amiaza</td></tr>
                    <tr><td class="verb">der Abend</td><td>am Abend</td><td>seara</td></tr>
                    <tr><td class="verb">die Nacht</td><td>in der Nacht</td><td>noaptea</td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background:#fffbeb;border-color:#f59e0b;">
                <h4>⚠️ Capcană: „am" sau „in der"?</h4>
                <p>La aproape toate perioadele spui <strong>am</strong> (am Morgen, am Abend) — pentru că sunt masculine (der). Excepție: <strong>die Nacht</strong> e feminin → <strong>in der Nacht</strong> (noaptea).</p>
            </div>
        </div>
    </div>

    <!-- 2: Gramatică — Uhrzeit & trennbare Verben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🧩 3. Gramatica de bază: ora (Uhrzeit) & verbe separabile</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-grammatik.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">3.1 🕗 Wie spät ist es? (cât e ceasul)</h4>
            <p style="margin-bottom:8px;">Întrebi: <strong>Wie spät ist es?</strong> Răspunzi: <strong>Es ist … Uhr.</strong> Ca să spui la ce oră faci ceva, folosești <strong>um … Uhr</strong>.</p>
            <table class="grammar-table">
                <thead><tr><th>Ora</th><th>Oficial</th><th>Uzual (vorbit)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">8:00</td><td>acht Uhr</td><td>acht Uhr</td></tr>
                    <tr><td class="verb">8:15</td><td>acht Uhr fünfzehn</td><td>Viertel nach acht</td></tr>
                    <tr><td class="verb">8:30</td><td>acht Uhr dreißig</td><td>halb neun</td></tr>
                    <tr><td class="verb">8:45</td><td>acht Uhr fünfundvierzig</td><td>Viertel vor neun</td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background:#fffbeb;border-color:#f59e0b;">
                <h4>⚠️ Capcana „halb"</h4>
                <p><strong>halb neun = 8:30</strong>, NU 9:30! În germană „halb" arată spre ora următoare (jumătate de drum SPRE nouă). Deci halb sieben = 6:30, halb zehn = 9:30.</p>
            </div>

            <h4 style="color:#065f46;margin:16px 0 8px;">3.2 🔗 Verbe separabile (regula KLAMMER)</h4>
            <p style="margin-bottom:8px;">Unele verbe au un <strong>prefix care se desparte</strong> și sare la <strong>finalul propoziției</strong>. Verbul conjugat stă pe locul 2, prefixul la coadă — ca o „paranteză" (Klammer).</p>
            <table class="grammar-table">
                <thead><tr><th>Infinitiv</th><th>Prefix</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">aufstehen</td><td><strong>auf</strong></td><td><em>Ich stehe um 7 Uhr <strong>auf</strong>. (Mă scol la 7.)</em></td></tr>
                    <tr><td class="verb">einkaufen</td><td><strong>ein</strong></td><td><em>Ich kaufe am Nachmittag <strong>ein</strong>.</em></td></tr>
                    <tr><td class="verb">fernsehen</td><td><strong>fern</strong></td><td><em>Ich sehe am Abend <strong>fern</strong>.</em></td></tr>
                    <tr><td class="verb">anfangen</td><td><strong>an</strong></td><td><em>Der Kurs fängt um 9 Uhr <strong>an</strong>.</em></td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Truc: dacă vezi un infinitiv ca <strong>auf|stehen, ein|kaufen, fern|sehen</strong>, prima parte (auf, ein, fern) zboară la finalul propoziției când conjugi. Verbul rămâne pe locul 2, prefixul închide propoziția. 💡</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Fraze utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🗣️ 4. Fraze utile pe situații (Nützliche Phrasen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-phrasen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">4.1 Ca să-ți spui rutina</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Ich stehe um sieben Uhr auf.</td><td>Mă scol la șapte.</td></tr>
                    <tr><td class="verb">Dann dusche ich und frühstücke.</td><td>Apoi fac duș și iau micul dejun.</td></tr>
                    <tr><td class="verb">Um halb neun gehe ich zur Uni.</td><td>La opt și jumătate merg la facultate.</td></tr>
                    <tr><td class="verb">Am Abend sehe ich fern.</td><td>Seara mă uit la televizor.</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.2 Ca să întrebi</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Wie spät ist es?</td><td>Cât e ceasul?</td></tr>
                    <tr><td class="verb">Wann stehst du auf?</td><td>Când te scoli?</td></tr>
                    <tr><td class="verb">Um wie viel Uhr fängt der Kurs an?</td><td>La ce oră începe cursul?</td></tr>
                    <tr><td class="verb">Was machst du am Nachmittag?</td><td>Ce faci după-amiaza?</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.3 Cuvinte de ordine (Reihenfolge)</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">zuerst</td><td>mai întâi</td></tr>
                    <tr><td class="verb">dann</td><td>apoi</td></tr>
                    <tr><td class="verb">danach</td><td>după aceea</td></tr>
                    <tr><td class="verb">am Ende / zum Schluss</td><td>la final</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Mini-ghid -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🧭 5. Cum îți descrii ziua în 5 pași</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-ghid.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🔑 Rețeta unei zile descrise (A1)</h4>
                <ol style="margin-left:22px;">
                    <li><strong>Începe cu dimineața:</strong> „Am Morgen stehe ich um 7 Uhr auf."</li>
                    <li><strong>Continuă pe ordine:</strong> „Dann dusche ich und frühstücke."</li>
                    <li><strong>Spune orele:</strong> „Um halb neun gehe ich zur Uni."</li>
                    <li><strong>Folosește cuvinte de ordine:</strong> zuerst, dann, danach.</li>
                    <li><strong>Încheie cu seara:</strong> „Am Abend sehe ich fern und gehe um 11 Uhr schlafen."</li>
                </ol>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Acum ascultă cum Andreea îi povestește Carolinei ziua ei — vei auzi orele și verbele separabile la lucru. Apoi treci la exerciții și, la final, îți descrii TU ziua cu voce tare. O activitate, o oră, atât! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
