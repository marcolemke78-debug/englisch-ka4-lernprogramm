/**
 * Modul 3 - Fit für die Klassenarbeit.
 *   L7 Gemischte Übungen (KA-Format: Lückentext, Sätze bilden, Q&A, Schreiben)
 *   L8 Hörverstehen (Listening - Browser liest vor)
 *   L9 Probe-Klassenarbeit (simuliert die echte KA mit allen Aufgabentypen)
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 7: Gemischte Übungen (KA-Format)
  // ===================================================================
  {
    id: 7,
    title: "Gemischte Übungen (KA-Format)",
    explanation: {
      html: `
        <h2>Alles zusammen - so wie in der Klassenarbeit</h2>
        <p>In der KA kommen die Themen nicht einzeln, sondern <em>gemischt</em> vor: ein Text
        mit Lücken in verschiedenen Zeitformen, Sätze zum Bilden, Fragen zum Beantworten und
        eine Schreibaufgabe. Genau das übst du hier.</p>

        <div class="why-context">
          <strong>So gehst du in der KA vor:</strong> Lies bei einem Lückentext immer den
          <em>ganzen</em> Satz, bevor du einträgst - oft steht das entscheidende Signalwort
          erst danach (z.B. <em>yet, every day, right now</em>).
        </div>

        <div class="tip-box">
          <strong>Deine Werkzeuge aus Modul 2:</strong><br>
          - Gegenwart: regelmäßig &rarr; simple present, gerade jetzt &rarr; present progressive<br>
          - Adjektiv (Was für ein?) oder Adverb (Wie?)<br>
          - present perfect: have/has + 3. Form, Signalwörter just/yet/ever/since/for
        </div>
      `
    },
    exercisesIntro: "Gemischte Aufgaben - hier ist alles dabei. Lass dir Zeit und denk an die Signalwörter.",
    exercises: [
      {
        type: "fill-in-blank",
        question: "<strong>Lückentext:</strong> Setze die richtige Zeitform ein (ein kleiner Blog-Eintrag).",
        text: "Hi everyone! I {{blank}} (live) in California. Every morning I {{blank}} (go) to the beach before school. Right now I {{blank}} (sit) in the sun and I {{blank}} (write) this post on my phone.",
        blanks: [
          { correct: "live" },
          { correct: "go" },
          { correct: "am sitting" },
          { correct: "am writing" }
        ],
        prompts: ["live", "go", "sit", "write"],
        explanation: "<em>Every morning</em> = regelmäßig &rarr; simple present (go). Auch <em>live</em> beschreibt einen Dauerzustand &rarr; simple present. <em>Right now</em> &rarr; present progressive (am sitting, am writing)."
      },
      {
        type: "fill-in-blank",
        question: "<strong>Adjektiv oder Adverb?</strong> Setze die richtige Form ein.",
        text: "The ad is very {{blank}} (catchy). The music plays {{blank}} (loud) and the people in it look {{blank}} (happy).",
        blanks: [
          { correct: "catchy" },
          { correct: "loudly" },
          { correct: "happy" }
        ],
        prompts: ["catchy", "loud", "happy"],
        explanation: "<em>ad</em> = Sache &rarr; Adjektiv catchy. <em>plays</em> = Tätigkeit (Wie?) &rarr; Adverb loudly. Nach <em>look</em> steht ein Adjektiv &rarr; happy."
      },
      {
        type: "fill-in-blank",
        question: "<strong>present perfect:</strong> have/has + 3. Form, achte auf die Signalwörter.",
        text: "{{blank}} (you / ever / be) to the USA? - No, I {{blank}} (never / be) there, but I {{blank}} (just / book) a flight to Los Angeles!",
        blanks: [
          { correct: "have you ever been", alternatives: ["have you ever been?"] },
          { correct: "have never been" },
          { correct: "have just booked" }
        ],
        prompts: ["you ever be", "never be", "just book"],
        explanation: "Frage: Have you ever been ... ? - Antwort: I have never been ... / I have just booked ... (just zwischen have und der 3. Form)."
      },
      {
        type: "ordering",
        question: "<strong>Satz bilden:</strong> Bringe die Teile in die richtige Reihenfolge.",
        items: ["She", "has", "already", "posted", "three photos", "today"],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "present perfect mit already: Subjekt + has + already + 3. Form + Rest. &rarr; <em>She has already posted three photos today.</em>"
      },
      {
        type: "free-text",
        question: "<strong>Schreiben:</strong> Schreibe 3-4 Sätze über einen Trend, den du magst (z.B. eine App, einen Sport, Musik). Benutze mindestens ein Adjektiv und ein present perfect.",
        hint: "Bausteine: <em>I think ... is really trendy/cool. I have used/watched/played ... for ... I have just ...</em>",
        minWords: 15,
        modelAnswer: "I think TikTok is really trendy at the moment. I have used it for two years. I have already made a few short videos with my friends. It is a fun and creative app, but you have to be careful with your data."
      },
      {
        type: "free-text",
        question: "<strong>Fragen & Antworten:</strong> Beantworte in ganzen Sätzen: <em>Have you ever been to another country? What did you like there?</em>",
        hint: "Antworte mit present perfect: <em>Yes, I have been to ... / No, I have never been ...</em> und dann ein, zwei Sätze mehr.",
        minWords: 12,
        modelAnswer: "Yes, I have been to Italy with my family. I have visited Rome and I have seen the Colosseum. The food was fantastic and the people were very friendly. I have never been to America, but I would love to go there one day."
      }
    ]
  },

  // ===================================================================
  // Lektion 8: Hörverstehen (Listening)
  // ===================================================================
  {
    id: 8,
    title: "Hörverstehen (Listening)",
    explanation: {
      html: `
        <h2>Hörverstehen üben</h2>
        <p>In der Klassenarbeit gibt es einen Listening-Teil: Du hörst einen kurzen Text und
        beantwortest Fragen dazu. Hier liest dir der Browser englische Texte vor - du kannst
        sie <strong>so oft abspielen, wie du willst</strong> und auch langsamer hören.</p>

        <div class="analogy-box">
          <strong>Erst hören, dann lesen:</strong> Versuch die Frage zuerst nur durchs
          <em>Hören</em> zu beantworten - wie in der echten KA. Den Text zum Nachlesen kannst
          du unten aufklappen, aber erst zur Kontrolle danach.
        </div>

        <div class="tip-box">
          <strong>Hör-Strategie:</strong> Lies <em>zuerst</em> die Frage und die Antwort-Möglichkeiten.
          Dann weißt du beim Hören genau, worauf du achten musst. Das spart Zeit und Nerven.
        </div>

        <p><em>Hinweis: Tippe oben auf <strong>Abspielen</strong>. Wenn nichts zu hören ist,
        prüf die Lautstärke deines Geräts.</em></p>
      `
    },
    exercisesIntro: "Hör dir jeden Text an (mehrmals erlaubt!) und beantworte dann die Frage. Mit <strong>Langsam</strong> geht es Wort für Wort.",
    exercises: [
      {
        type: "listening",
        audioText: "Hello! My name is Sandra. I live in San Francisco in California. Every weekend I go surfing at the beach with my friends. Right now I am sitting on the bus to the city centre.",
        question: "Where does Sandra live?",
        options: ["In San Francisco", "In Los Angeles", "In New York", "In London"],
        correct: 0,
        explanation: "Sandra sagt: \"I live in San Francisco in California.\"",
        wrongExplanations: {
          1: "Los Angeles wird nicht genannt - sie sagt San Francisco.",
          2: "New York liegt nicht in Kalifornien und wird nicht genannt.",
          3: "London kommt im Text nicht vor."
        }
      },
      {
        type: "listening",
        audioText: "Look at this great new ad for a holiday in California! The pictures are beautiful and the slogan is really catchy. It says: Come and chill out in the sunny west! I think it is very appealing.",
        question: "What does the speaker think about the ad?",
        options: ["It is appealing and catchy.", "It is boring and dull.", "It is pointless.", "It is too long."],
        correct: 0,
        explanation: "Die Person sagt, der Slogan sei \"catchy\" und die Werbung \"very appealing\" - also ansprechend.",
        wrongExplanations: {
          1: "Das Gegenteil ist gemeint - die Person findet die Werbung gut, nicht langweilig.",
          2: "\"pointless\" (sinnlos) wird nicht gesagt - im Gegenteil, sie gefällt der Person.",
          3: "Über die Länge sagt die Person nichts."
        }
      },
      {
        type: "listening",
        audioText: "I use social media every day. I have got an account on three different apps. I have just posted a new selfie and I already have ten likes. But I have never been a victim of cyberbullying, and that is important to me.",
        question: "How many social media accounts does the speaker have?",
        options: ["Three", "One", "Ten", "Two"],
        correct: 0,
        explanation: "\"I have got an account on three different apps.\" - also drei Accounts.",
        wrongExplanations: {
          1: "Nur einen? Nein - die Person nennt \"three different apps\".",
          2: "Zehn ist die Zahl der Likes, nicht der Accounts.",
          3: "Es sind drei Apps, nicht zwei."
        }
      },
      {
        type: "listening",
        audioText: "The Golden Gate Bridge in San Francisco is one of the most famous sights in the USA. It is nearly two miles long and it has a beautiful red colour. Builders have painted it many times because the salty fog from the bay makes the metal rust.",
        instruction: "Hör gut zu. Es geht um eine berühmte Brücke. Du kannst mehrmals abspielen.",
        question: "Why have the builders painted the bridge many times?",
        options: ["Because the fog makes the metal rust.", "Because they do not like the colour.", "Because it is too short.", "Because tourists asked for it."],
        correct: 0,
        explanation: "\"...the salty fog from the bay makes the metal rust.\" Deshalb muss die Brücke immer wieder gestrichen werden.",
        wrongExplanations: {
          1: "Über die Farbe als Problem wird nichts gesagt - im Gegenteil, die rote Farbe wird gelobt.",
          2: "Die Brücke ist fast zwei Meilen lang, also nicht zu kurz.",
          3: "Touristen werden in diesem Text nicht erwähnt."
        }
      }
    ]
  },

  // ===================================================================
  // Lektion 9: Probe-Klassenarbeit
  // ===================================================================
  {
    id: 9,
    title: "Probe-Klassenarbeit",
    explanation: {
      html: `
        <h2>Probe-Klassenarbeit Unit 4</h2>
        <p>Hier kommt alles zusammen - so ähnlich könnte deine echte Klassenarbeit am
        <strong>8. Juni</strong> aussehen. Arbeite die Aufgaben der Reihe nach durch, so wie
        in der echten KA.</p>

        <div class="tip-box">
          <strong>So machst du den größten Lerneffekt:</strong> Mach diese Probe-KA möglichst
          <em>am Stück</em> und ohne nachzuschauen. Wo du hängst, gehst du danach nochmal ins
          passende Modul. Am besten 1-2 Tage vor der echten Arbeit als Generalprobe.
        </div>

        <div class="why-context">
          <strong>Aufgabenteile wie in der KA:</strong> Hörverstehen, Wortschatz, Grammatik
          (Lückentext + Sätze bilden), Fragen beantworten und ein kleiner Schreibteil.
        </div>
      `
    },
    exercisesIntro: "<strong>Viel Erfolg!</strong> Nimm dir Zeit und arbeite konzentriert - genau wie in der echten Arbeit.",
    exercises: [
      {
        type: "listening",
        audioText: "Hi, I am Mike. I have lived in Los Angeles for ten years. I work in the film industry, so I have met some famous actors. Right now I am working on a new movie. It is hard work, but I love it.",
        instruction: "<strong>Teil 1 - Listening:</strong> Hör gut zu und beantworte die Frage.",
        question: "How long has Mike lived in Los Angeles?",
        options: ["For ten years", "Since ten years", "For ten months", "Since he was a child"],
        correct: 0,
        explanation: "\"I have lived in Los Angeles for ten years.\" - Bei einer Zeitdauer benutzt man for + ten years.",
        wrongExplanations: {
          1: "Knapp daneben: Bei einer Dauer (zehn Jahre) heißt es <em>for</em>, nicht since.",
          2: "Es sind Jahre (years), nicht Monate (months).",
          3: "Das sagt Mike nicht - er nennt konkret zehn Jahre."
        }
      },
      {
        type: "matching",
        question: "<strong>Teil 2 - Wortschatz:</strong> Ordne die Vokabeln richtig zu.",
        pairs: [
          { left: "catchy", right: "eingängig" },
          { left: "to settle", right: "sich niederlassen" },
          { left: "follower", right: "Anhänger/in" },
          { left: "fog", right: "Nebel" },
          { left: "to last", right: "andauern" },
          { left: "outdated", right: "veraltet" }
        ],
        explanation: "Das sind typische Unit-4-Vokabeln aus allen drei Stationen."
      },
      {
        type: "fill-in-blank",
        question: "<strong>Teil 3a - Grammatik (Lückentext):</strong> Setze die richtige Zeitform ein.",
        text: "My name is Emma. I {{blank}} (love) California. Every summer my family {{blank}} (visit) my aunt in San Diego. Look at this photo - here I {{blank}} (surf) for the first time! I {{blank}} (never / be) so happy in my life!",
        blanks: [
          { correct: "love" },
          { correct: "visits" },
          { correct: "am surfing" },
          { correct: "have never been" }
        ],
        prompts: ["love", "visit", "surf", "never be"],
        explanation: "love (Fakt, simple present), visits (Every summer, he/she/it +s), am surfing (Foto-Beschreibung im Moment, present progressive), have never been (Erfahrung bis jetzt, present perfect mit never)."
      },
      {
        type: "fill-in-blank",
        question: "<strong>Teil 3b - Adjektiv oder Adverb?</strong>",
        text: "The surfer is very {{blank}} (good). She rides the waves {{blank}} (perfect) and she always stays {{blank}} (calm).",
        blanks: [
          { correct: "good" },
          { correct: "perfectly" },
          { correct: "calm" }
        ],
        prompts: ["good", "perfect", "calm"],
        explanation: "good beschreibt die Surferin (Adjektiv). perfectly beschreibt <em>rides</em> (Wie? Adverb). Nach <em>stays</em> (wie bei feel/look) steht ein Adjektiv: calm."
      },
      {
        type: "ordering",
        question: "<strong>Teil 4 - Satz bilden:</strong> Bilde eine Frage im present perfect.",
        items: ["Have", "you", "ever", "tried", "Mexican food?"],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "Have + you + ever + 3. Form (tried) + Rest. &rarr; <em>Have you ever tried Mexican food?</em>"
      },
      {
        type: "free-text",
        question: "<strong>Teil 5 - Schreiben:</strong> Eine Freundin fragt dich nach deinem Lieblings-Social-Media. Schreibe ihr 4-5 Sätze: Welche App nutzt du? Seit wann? Was machst du dort? Benutze present perfect und mindestens zwei Adjektive.",
        hint: "Bausteine: <em>My favourite app is ... I have used it for/since ... I have posted/watched ... It is really ... but you have to be careful ...</em>",
        minWords: 25,
        modelAnswer: "My favourite social media app is Instagram. I have used it for about a year. Every day I look at posts from my friends and I have already shared a lot of photos. I think it is a fun and creative app. But I have never given out my personal information, because that is dangerous. You always have to be careful online."
      }
    ]
  }

]);
