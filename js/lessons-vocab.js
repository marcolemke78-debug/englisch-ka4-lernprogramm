/**
 * Modul 1 - Wortschatz Unit 4 "California dreams".
 * Vokabeln aus dem Textbook S. 202-205 (bis "trend", wie auf dem Lernzettel).
 *
 * Pro Lektion:
 *   - kurze Erklärung mit Lerntipp
 *   - vocab-trainer (deutsches Wort sehen, englisches tippen = Produktion)
 *   - matching (Wiedererkennen, gut für längere Ausdrücke)
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 1: California dreams - Wortschatz (Way in, S. 74-75)
  // ===================================================================
  {
    id: 1,
    title: "California dreams - Wortschatz",
    explanation: {
      html: `
        <h2>Wortschatz rund um Kalifornien</h2>
        <p>Das sind die Wörter aus dem Einstieg von Unit 4 - es geht um Kalifornien,
        den Westen der USA, Natur und Sehenswürdigkeiten.</p>

        <div class="analogy-box">
          <strong>So lernst du Vokabeln am besten:</strong> Sprich jedes Wort beim Tippen
          <em>laut</em> mit. Dein Gehirn merkt sich ein Wort viel besser, wenn du es
          <em>hörst, siehst und schreibst</em> - so wie du dir einen Liedtext eher merkst,
          wenn du mitsingst, statt ihn nur zu lesen.
        </div>

        <div class="why-context">
          <strong>Warum dieser Wortschatz?</strong> In der Klassenarbeit kommen Texte über
          das Leben in Kalifornien vor (Gold Rush, Golden Gate Bridge, Hollywood). Wenn du
          diese Wörter kennst, verstehst du die Texte schneller und kannst selbst Sätze bilden.
        </div>

        <p><strong>Tipp zum Tippen:</strong> Bei Verben kannst du das <code>to</code>
        weglassen - <em>surf</em> wird genauso akzeptiert wie <em>to surf</em>.</p>
      `
    },
    exercises: [
      {
        type: "vocab-trainer",
        question: "<strong>Vokabeltraining 1:</strong> Lies das deutsche Wort und tippe das englische.",
        words: [
          { de: "dicht", en: "dense" },
          { de: "bevölkert; besiedelt", en: "populated" },
          { de: "im Freien; in der freien Natur", en: "outdoors" },
          { de: "Wellenreiten; Surfen", en: "surfing" },
          { de: "altmodisch", en: "old-fashioned", alternatives: ["old fashioned"] },
          { de: "Berg; Hügel", en: "hill" },
          { de: "golden; Gold-", en: "golden" },
          { de: "Bucht", en: "bay" },
          { de: "Nebel", en: "fog" },
          { de: "Fahrspur; Weg; Gasse", en: "lane" }
        ]
      },
      {
        type: "vocab-trainer",
        question: "<strong>Vokabeltraining 2:</strong> Weiter geht's - tippe das englische Wort.",
        words: [
          { de: "besiedeln; sich niederlassen", en: "to settle", alternatives: ["settle"] },
          { de: "(sich) entwickeln", en: "to develop", alternatives: ["develop"] },
          { de: "Aufregung", en: "excitement" },
          { de: "Studio", en: "studio" },
          { de: "Länge; Dauer", en: "length" },
          { de: "streichen; anmalen; malen", en: "to paint", alternatives: ["paint"] },
          { de: "Architekt; Architektin", en: "architect" },
          { de: "rosten", en: "to rust", alternatives: ["rust"] }
        ]
      },
      {
        type: "matching",
        question: "Ordne die längeren Ausdrücke richtig zu (Englisch &harr; Deutsch):",
        pairs: [
          { left: "redwood (tree)", right: "Mammutbaum" },
          { left: "to take a ride", right: "fahren / eine Fahrt machen" },
          { left: "cable car", right: "Seilbahn" },
          { left: "high-tech", right: "Hightech-" },
          { left: "show-business", right: "Unterhaltungsindustrie" },
          { left: "safety net", right: "Sicherheitsnetz" }
        ],
        explanation: "Diese zusammengesetzten Wörter kommen oft in Texten über Kalifornien vor (z.B. <em>cable car</em> in San Francisco)."
      }
    ]
  },

  // ===================================================================
  // Lektion 2: Werbung & Anzeigen - Wortschatz (Station 1, S. 76-79)
  // ===================================================================
  {
    id: 2,
    title: "Werbung & Anzeigen - Wortschatz",
    explanation: {
      html: `
        <h2>Wortschatz: Werbung gestalten (ads)</h2>
        <p>In Station 1 geht es darum, eine Werbeanzeige (<em>an ad</em>) zu beschreiben und
        selbst zu gestalten. Dafür brauchst du Adjektive, die eine Werbung bewerten,
        und Wörter rund ums Gestalten.</p>

        <div class="analogy-box">
          <strong>Eselsbrücke für die Adjektive:</strong> Stell dir vor, du bist Jurorin
          in einer Werbe-Castingshow. Du vergibst Urteile: <em>catchy</em> (eingängig - bleibt
          im Kopf), <em>dull</em> (langweilig), <em>pointless</em> (sinnlos). Verbinde jedes
          Adjektiv mit einem Daumen hoch oder runter - das macht sie greifbar.
        </div>

        <div class="why-context">
          <strong>Warum wichtig?</strong> Ein typischer KA-Aufgabentyp ist "Designing an ad" -
          du sollst eine Anzeige beschreiben oder bewerten. Mit diesen Wörtern kannst du
          schreiben, <em>warum</em> eine Werbung gut oder schlecht ist.
        </div>
      `
    },
    exercises: [
      {
        type: "vocab-trainer",
        question: "<strong>Adjektive für Werbung:</strong> So bewertest du eine Anzeige.",
        words: [
          { de: "eingängig; einprägsam", en: "catchy" },
          { de: "informativ", en: "informative" },
          { de: "klar; eindeutig; deutlich", en: "clear" },
          { de: "faszinierend", en: "fascinating" },
          { de: "sinnlos", en: "pointless" },
          { de: "langweilig", en: "dull" },
          { de: "ansprechend", en: "appealing" },
          { de: "uninteressant; nicht ansprechend", en: "unappealing" }
        ]
      },
      {
        type: "vocab-trainer",
        question: "<strong>Wörter rund ums Gestalten und Reisen:</strong>",
        words: [
          { de: "buchen; reservieren", en: "to book", alternatives: ["book"] },
          { de: "Reservierung", en: "reservation" },
          { de: "schlendern; bummeln", en: "to stroll", alternatives: ["stroll"] },
          { de: "alt; altertümlich", en: "ancient" },
          { de: "Erde; Erdboden; Boden", en: "earth" },
          { de: "Layout; Anordnung", en: "layout" },
          { de: "Design; Gestaltung", en: "design" },
          { de: "Überschrift; Schlagzeile", en: "headline" },
          { de: "Slogan; Werbespruch", en: "slogan" },
          { de: "Botschaft", en: "message" }
        ]
      },
      {
        type: "vocab-trainer",
        question: "<strong>Weitere Wörter aus Station 1:</strong>",
        words: [
          { de: "Experte; Expertin", en: "expert" },
          { de: "Klettern", en: "climbing" },
          { de: "scherzen", en: "to joke", alternatives: ["joke"] },
          { de: "Anruf; Ruf", en: "call" },
          { de: "Schwimmer; Schwimmerin", en: "swimmer" },
          { de: "Pilot; Pilotin", en: "pilot" },
          { de: "dauern; andauern; anhalten", en: "to last", alternatives: ["last"] }
        ]
      },
      {
        type: "matching",
        question: "Ordne die zusammengesetzten Wörter und Ausdrücke zu:",
        pairs: [
          { left: "to chill out", right: "chillen; sich entspannen" },
          { left: "lifetime", right: "Leben; Lebenszeit" },
          { left: "mountain bike", right: "Mountainbike" },
          { left: "helicopter", right: "Helikopter; Hubschrauber" }
        ],
        explanation: "<em>the holiday of a lifetime</em> heißt \"der Urlaub des Lebens\" - ein typischer Werbe-Spruch."
      }
    ]
  },

  // ===================================================================
  // Lektion 3: Social Media & Trends - Wortschatz (Station 2 + S.205-Block)
  // ===================================================================
  {
    id: 3,
    title: "Social Media & Trends - Wortschatz",
    explanation: {
      html: `
        <h2>Wortschatz: Social Media und Trends</h2>
        <p>In Station 2 geht es um soziale Medien, das Internet und um Trends. Viele Wörter
        kennst du schon aus dem Alltag (<em>post, follower, selfie</em>) - hier lernst du die
        englische Schreibweise und ein paar neue dazu.</p>

        <div class="analogy-box">
          <strong>Vorsicht, falsche Freunde:</strong> Viele dieser Wörter benutzen wir auch
          auf Deutsch - aber die Schreibweise ist oft anders! <em>account</em> (nicht "akount"),
          <em>cyberbullying</em> mit Doppel-L. Tippe sie bewusst, dann sitzt die Schreibweise
          für die Klassenarbeit.
        </div>

        <div class="why-context">
          <strong>Achtung Amerikanisch:</strong> <em>favorite</em> wird im amerikanischen
          Englisch (AE) ohne "u" geschrieben - im britischen Englisch (BE) wäre es
          <em>favourite</em>. Im Buch steht die AE-Form.
        </div>
      `
    },
    exercises: [
      {
        type: "vocab-trainer",
        question: "<strong>Social Media 1:</strong> Tippe das englische Wort.",
        words: [
          { de: "soziale Medien", en: "social media" },
          { de: "hier: Seite (im Internet)", en: "site" },
          { de: "Konto", en: "account" },
          { de: "online stellen; posten", en: "to post", alternatives: ["post"] },
          { de: "teilen", en: "to share", alternatives: ["share"] },
          { de: "Video", en: "video" },
          { de: "Clip; Ausschnitt; Kurzfilm", en: "clip" },
          { de: "Anleitung; Tutorial", en: "tutorial" },
          { de: "Bildschirm", en: "screen" },
          { de: "Link", en: "link" }
        ]
      },
      {
        type: "vocab-trainer",
        question: "<strong>Social Media 2:</strong> Weiter geht's.",
        words: [
          { de: "mobil; tragbar; beweglich", en: "mobile" },
          { de: "Smartphone", en: "smartphone" },
          { de: "Tablet", en: "tablet" },
          { de: "Post (online gestellte Nachricht)", en: "post" },
          { de: "Blogger; Bloggerin", en: "blogger" },
          { de: "nicht mögen", en: "to dislike", alternatives: ["dislike"] },
          { de: "Anfrage", en: "request" },
          { de: "Follower; Anhänger; Anhängerin", en: "follower" },
          { de: "abonnieren", en: "to subscribe", alternatives: ["subscribe"] },
          { de: "Status", en: "status" }
        ]
      },
      {
        type: "vocab-trainer",
        question: "<strong>Social Media 3 & Trends:</strong>",
        words: [
          { de: "trendsetzend; im Trend", en: "trending" },
          { de: "updaten; auf den neuesten Stand bringen", en: "to update", alternatives: ["update"] },
          { de: "Selfie", en: "selfie" },
          { de: "Innovation; Neuheit", en: "innovation" },
          { de: "Computerspiele(n); Gaming", en: "gaming" },
          { de: "seit; seitdem", en: "since" },
          { de: "beeinflussen", en: "to influence", alternatives: ["influence"] },
          { de: "Lieblings- (AE)", en: "favorite", alternatives: ["favourite"] },
          { de: "veraltet", en: "outdated" },
          { de: "trendig; modisch", en: "trendy" },
          { de: "Trend; Entwicklung; Richtung", en: "trend" },
          { de: "streamen (im Internet)", en: "to stream", alternatives: ["stream"] },
          { de: "Programm; Sendung (AE)", en: "program", alternatives: ["programme"] },
          { de: "Tätowierung", en: "tattoo" },
          { de: "Vegetarismus", en: "vegetarianism" },
          { de: "so (Betonung), z.B. not that nice", en: "that" }
        ]
      },
      {
        type: "matching",
        question: "Ordne die kniffligen Ausdrücke zu:",
        pairs: [
          { left: "to friend", right: "jdn. zur Freundesliste hinzufügen" },
          { left: "to unfriend", right: "jdn. von der Freundesliste streichen" },
          { left: "cyberbullying", right: "Cyber-Mobbing" },
          { left: "to communicate", right: "kommunizieren; sich verständigen" },
          { left: "to imagine", right: "sich (etwas) vorstellen" },
          { left: "right away", right: "sofort; gleich" },
          { left: "jumping fitness", right: "Jumping Fitness (Trendsport)" },
          { left: "out of fashion", right: "altmodisch; nicht mehr aktuell" }
        ],
        explanation: "<em>to friend</em> und <em>to unfriend</em> sind Verben, die erst durch Social Media entstanden sind - im Deutschen sagt man eher \"hinzufügen\" und \"entfernen\"."
      }
    ]
  }

]);
