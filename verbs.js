// ============================================
// VERB-KONJUGATION - Mein Tag (Conversație A1)
// Claudia Toth · 5 verbe esențiale · DOAR PRÄSENS (potrivit nivelului A1)
// PONS-verified. Verbele separabile arată prefixul cu „... " (regula KLAMMER).
// ============================================

const verbsData = [
    {
        infinitiv: 'aufstehen', ro: 'a se scula / a se trezi', type: 'weak',
        praesens: [
            { p: 'ich', f: 'stehe ... auf', ro: 'mă scol' },
            { p: 'du', f: 'stehst ... auf', ro: 'te scoli' },
            { p: 'er/sie/es', f: 'steht ... auf', ro: 'se scoală' },
            { p: 'wir', f: 'stehen ... auf', ro: 'ne sculăm' },
            { p: 'ihr', f: 'steht ... auf', ro: 'vă sculați' },
            { p: 'sie/Sie', f: 'stehen ... auf', ro: 'se scoală / vă sculați' }
        ],
        beispiel: { de: 'Ich stehe jeden Tag um sieben Uhr auf.', ro: 'Mă scol în fiecare zi la șapte.' },
        notes: '🔗 SEPARABIL (auf | stehen): prefixul „auf" sare la FINALUL propoziției (regula KLAMMER). Terminațiile sunt regulate.'
    },
    {
        infinitiv: 'frühstücken', ro: 'a lua micul dejun', type: 'weak',
        praesens: [
            { p: 'ich', f: 'frühstücke', ro: 'iau micul dejun' },
            { p: 'du', f: 'frühstückst', ro: 'iei micul dejun' },
            { p: 'er/sie/es', f: 'frühstückt', ro: 'ia micul dejun' },
            { p: 'wir', f: 'frühstücken', ro: 'luăm micul dejun' },
            { p: 'ihr', f: 'frühstückt', ro: 'luați micul dejun' },
            { p: 'sie/Sie', f: 'frühstücken', ro: 'iau / luați micul dejun' }
        ],
        beispiel: { de: 'Ich frühstücke um halb acht.', ro: 'Iau micul dejun la șapte și jumătate.' },
        notes: 'Verb REGULAT și NEseparabil (deși pare lung). Substantivul: „das Frühstück" = micul dejun.'
    },
    {
        infinitiv: 'fernsehen', ro: 'a se uita la TV', type: 'strong',
        praesens: [
            { p: 'ich', f: 'sehe ... fern', ro: 'mă uit la TV' },
            { p: 'du', f: 'siehst ... fern', ro: 'te uiți la TV' },
            { p: 'er/sie/es', f: 'sieht ... fern', ro: 'se uită la TV' },
            { p: 'wir', f: 'sehen ... fern', ro: 'ne uităm la TV' },
            { p: 'ihr', f: 'seht ... fern', ro: 'vă uitați la TV' },
            { p: 'sie/Sie', f: 'sehen ... fern', ro: 'se uită / vă uitați la TV' }
        ],
        beispiel: { de: 'Am Abend sehe ich fern.', ro: 'Seara mă uit la televizor.' },
        notes: '🔗 SEPARABIL (fern | sehen) + NEREGULAT (e→ie: du siehst, er sieht). Prefixul „fern" la final.'
    },
    {
        infinitiv: 'anfangen', ro: 'a începe', type: 'strong',
        praesens: [
            { p: 'ich', f: 'fange ... an', ro: 'încep' },
            { p: 'du', f: 'fängst ... an', ro: 'începi' },
            { p: 'er/sie/es', f: 'fängt ... an', ro: 'începe' },
            { p: 'wir', f: 'fangen ... an', ro: 'începem' },
            { p: 'ihr', f: 'fangt ... an', ro: 'începeți' },
            { p: 'sie/Sie', f: 'fangen ... an', ro: 'încep / începeți' }
        ],
        beispiel: { de: 'Der Kurs fängt um neun Uhr an.', ro: 'Cursul începe la ora nouă.' },
        notes: '🔗 SEPARABIL (an | fangen) + NEREGULAT (a→ä: du fängst, er fängt). Prefixul „an" la final.'
    },
    {
        infinitiv: 'arbeiten', ro: 'a lucra', type: 'weak',
        praesens: [
            { p: 'ich', f: 'arbeite', ro: 'lucrez' },
            { p: 'du', f: 'arbeitest', ro: 'lucrezi' },
            { p: 'er/sie/es', f: 'arbeitet', ro: 'lucrează' },
            { p: 'wir', f: 'arbeiten', ro: 'lucrăm' },
            { p: 'ihr', f: 'arbeitet', ro: 'lucrați' },
            { p: 'sie/Sie', f: 'arbeiten', ro: 'lucrează / lucrați' }
        ],
        beispiel: { de: 'Ich arbeite von neun bis fünf.', ro: 'Lucrez de la nouă la cinci.' },
        notes: 'Verb REGULAT, dar cu -e- de legătură (rădăcina se termină în -t): du arbeit-E-st, er arbeit-E-t.'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#fffbeb;border-left:4px solid #f59e0b">
            <h4>📌 5 verbe esențiale pentru ziua ta</h4>
            <p>La nivelul A1 ne concentrăm pe <strong>Präsens (prezent)</strong>. <strong>aufstehen, fernsehen, anfangen</strong> sunt <strong>separabile</strong> (🔗) — prefixul (...) sare la finalul propoziției. <strong>frühstücken</strong> și <strong>arbeiten</strong> sunt regulate (arbeiten cu -e- de legătură).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'NEREGULAT' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens (prezent)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">💬 Exemplu din zi</h4>
                    <div class="example-box"><div class="de">${v.beispiel.de}</div><div class="ro">${v.beispiel.ro}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#f0fdf4"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
