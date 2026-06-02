/**
 * Modul 2 - Grammatik Unit 4.
 *   G9  Simple present & present progressive (TB S. 164)
 *   G10 Adjektiv oder Adverb? (TB S. 165)
 *   G11 Present perfect (TB S. 166)
 *
 * Jede Lektion: Erklärung (mit Analogie/Tipp/Warnung) -> Beispiel -> Übungen.
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 4: Simple present & present progressive (G9)
  // ===================================================================
  {
    id: 4,
    title: "Simple present & present progressive",
    explanation: {
      html: `
        <h2>Zwei Gegenwartsformen - wann nimmt man welche?</h2>
        <p>Im Englischen gibt es <strong>zwei</strong> Formen für die Gegenwart. Welche du
        nimmst, hängt davon ab, <em>wann</em> etwas passiert.</p>

        <div class="analogy-box">
          <strong>Stundenplan oder Livestream?</strong><br>
          - <strong>Simple present</strong> ist dein <em>Stundenplan</em>: Dinge, die
          <em>immer wieder</em> oder <em>regelmäßig</em> passieren. <em>"I go to school every day."</em><br>
          - <strong>Present progressive</strong> ist ein <em>Livestream</em>: was
          <em>genau jetzt, in diesem Moment</em> passiert. <em>"Look! I am going to school right now."</em>
        </div>

        <h3>1. Simple present - das Regelmäßige</h3>
        <p>Benutzt du für Gewohnheiten, Fakten und Dinge, die immer wieder passieren.</p>
        <div class="info-card">
          <strong>Form:</strong> I / you / we / they + Grundform &nbsp;&middot;&nbsp;
          he / she / it + Grundform <strong>+ s</strong><br>
          <em>I play. &nbsp; She play<strong>s</strong>. &nbsp; They work.</em>
        </div>
        <p><strong>Signalwörter:</strong> always, usually, often, sometimes, never,
        every day, on Mondays.</p>

        <h3>2. Present progressive - das Jetzt</h3>
        <p>Benutzt du für Dinge, die <em>gerade in diesem Augenblick</em> ablaufen.</p>
        <div class="info-card">
          <strong>Form:</strong> am / is / are + Verb<strong>-ing</strong><br>
          <em>I <strong>am</strong> play<strong>ing</strong>. &nbsp; She <strong>is</strong>
          read<strong>ing</strong>. &nbsp; They <strong>are</strong> work<strong>ing</strong>.</em>
        </div>
        <p><strong>Signalwörter:</strong> now, right now, at the moment, Look!, Listen!</p>

        <div class="tip-box">
          <strong>Schreibweise -ing:</strong> Bei kurzem Wort mit einem Konsonanten am Ende wird
          dieser verdoppelt: <em>run &rarr; running, sit &rarr; sitting</em>. Bei stummem -e fällt
          es weg: <em>make &rarr; making, ride &rarr; riding</em>.
        </div>

        <div class="warning-box">
          <strong>Typischer Fehler:</strong> Das <strong>-s</strong> in der 3. Person Singular
          (he/she/it) im simple present vergessen! Es heißt <em>he play<strong>s</strong></em>,
          nicht "he play". Eselsbrücke: <em>He, she, it - das s muss mit!</em>
        </div>
      `
    },
    example: {
      title: "Beispiel: Sandras E-Mail",
      steps: [
        {
          label: "Die Aufgabe",
          html: `<p>Setze die richtige Gegenwartsform ein:</p>
            <p><em>"Every day I (1) ___ (get up) at seven. But right now I (2) ___ (sit)
            on the beach and the sun (3) ___ (shine)!"</em></p>`
        },
        {
          label: "Lücke 1 - simple present",
          html: `<p><em>"Every day"</em> ist ein Signalwort für etwas Regelmäßiges
            &rarr; <strong>simple present</strong>. "I" + Grundform: <strong>get up</strong>.<br>
            &rarr; <em>Every day I <strong>get up</strong> at seven.</em></p>`
        },
        {
          label: "Lücke 2 - present progressive",
          html: `<p><em>"right now"</em> &rarr; es passiert genau jetzt &rarr;
            <strong>present progressive</strong>: am + sit<strong>ting</strong>
            (Konsonant verdoppelt!).<br>
            &rarr; <em>Right now I <strong>am sitting</strong> on the beach.</em></p>`
        },
        {
          label: "Lücke 3 - present progressive",
          html: `<p>Auch jetzt gerade &rarr; "the sun" ist he/she/it &rarr;
            <strong>is</strong> + shin<strong>ing</strong> (stummes e fällt weg).<br>
            &rarr; <em>...and the sun <strong>is shining</strong>!</em></p>`
        }
      ]
    },
    exercisesIntro: "Jetzt du! Achte immer zuerst auf die <strong>Signalwörter</strong> - sie verraten dir die richtige Zeitform.",
    exercises: [
      {
        type: "multiple-choice",
        question: "<em>\"Listen! The baby ___ .\"</em> Welche Form ist richtig?",
        options: ["is crying", "cries", "cry", "crys"],
        correct: 0,
        explanation: "Richtig! <em>Listen!</em> ist ein Signalwort für present progressive - es passiert genau jetzt: <strong>is crying</strong>.",
        wrongExplanations: {
          1: "<em>cries</em> ist simple present (Regelmäßiges). Aber <em>Listen!</em> zeigt: Es passiert genau jetzt &rarr; present progressive.",
          2: "<em>cry</em> ist die Grundform - hier brauchst du wegen <em>Listen!</em> die -ing-Form mit is.",
          3: "Schreibweise falsch und falsche Zeit: nach Konsonant + y wird es <em>cries</em> - aber hier brauchst du sowieso present progressive (is crying)."
        }
      },
      {
        type: "multiple-choice",
        question: "<em>\"My brother ___ football every Saturday.\"</em>",
        options: ["plays", "is playing", "play", "playing"],
        correct: 0,
        explanation: "Genau! <em>every Saturday</em> = regelmäßig &rarr; simple present. \"My brother\" ist he &rarr; play<strong>s</strong> mit -s.",
        wrongExplanations: {
          1: "<em>is playing</em> wäre \"spielt gerade jetzt\". Aber <em>every Saturday</em> heißt regelmäßig &rarr; simple present.",
          2: "Fast! Bei he/she/it braucht das simple present ein <strong>-s</strong>: play<strong>s</strong>.",
          3: "<em>playing</em> alleine geht nie - es braucht immer am/is/are davor. Hier ist aber simple present richtig: plays."
        }
      },
      {
        type: "fill-in-blank",
        question: "Setze simple present oder present progressive ein:",
        text: "On normal days Tom {{blank}} (walk) to school. But today it {{blank}} (rain), so he {{blank}} (take) the bus right now.",
        blanks: [
          { correct: "walks" },
          { correct: "is raining" },
          { correct: "is taking" }
        ],
        prompts: ["walk", "rain", "take"],
        explanation: "<em>On normal days</em> = regelmäßig &rarr; walk<strong>s</strong>. <em>today / right now</em> = gerade jetzt &rarr; is raining, is taking."
      },
      {
        type: "fill-in-blank",
        question: "Achte auf das Signalwort und die richtige Form:",
        text: "Sandra {{blank}} (surf) every weekend. Look - she {{blank}} (ride) a big wave at the moment!",
        blanks: [
          { correct: "surfs" },
          { correct: "is riding" }
        ],
        prompts: ["surf", "ride"],
        explanation: "<em>every weekend</em> &rarr; simple present (surfs). <em>Look ... at the moment</em> &rarr; present progressive (is riding - das e von ride fällt weg)."
      },
      {
        type: "ordering",
        question: "Bringe die Wörter in die richtige Reihenfolge (present progressive):",
        items: ["My friends", "are", "watching", "a film", "right now"],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "Wortstellung: Subjekt + am/is/are + Verb-ing + Rest. &rarr; <em>My friends are watching a film right now.</em>"
      }
    ]
  },

  // ===================================================================
  // Lektion 5: Adjektiv oder Adverb? (G10)
  // ===================================================================
  {
    id: 5,
    title: "Adjektiv oder Adverb?",
    explanation: {
      html: `
        <h2>Adjektiv oder Adverb?</h2>
        <p>Beide beschreiben etwas - aber sie beschreiben <em>verschiedene Dinge</em>.</p>

        <div class="analogy-box">
          <strong>Die Test-Frage entscheidet:</strong><br>
          - Fragst du <strong>"Was für ein...?"</strong> (beschreibt eine Person oder Sache)
          &rarr; <strong>Adjektiv</strong>: <em>Sandra is a <strong>good</strong> surfer.</em>
          (Was für eine Surferin? Eine gute.)<br>
          - Fragst du <strong>"Wie?"</strong> (beschreibt eine Tätigkeit/ein Verb)
          &rarr; <strong>Adverb</strong>: <em>Sandra surfs <strong>well</strong>.</em>
          (Wie surft sie? Gut.)
        </div>

        <h3>So bildest du das Adverb</h3>
        <p>Meistens hängst du einfach <strong>-ly</strong> an das Adjektiv an:</p>
        <div class="info-card">
          quick &rarr; quick<strong>ly</strong> &nbsp;&middot;&nbsp;
          slow &rarr; slow<strong>ly</strong> &nbsp;&middot;&nbsp;
          careful &rarr; careful<strong>ly</strong> &nbsp;&middot;&nbsp;
          quiet &rarr; quiet<strong>ly</strong>
        </div>

        <div class="tip-box">
          <strong>Wichtige Ausnahmen (unregelmäßig):</strong><br>
          good &rarr; <strong>well</strong> (nicht "goodly"!) &nbsp;&middot;&nbsp;
          fast &rarr; <strong>fast</strong> (bleibt gleich) &nbsp;&middot;&nbsp;
          hard &rarr; <strong>hard</strong> (bleibt gleich)
        </div>

        <h3>Aufgepasst: feel, look, seem, sound</h3>
        <p>Nach diesen Verben steht ein <strong>Adjektiv</strong>, kein Adverb - denn sie
        beschreiben, <em>wie jemand/etwas IST</em>, nicht wie etwas <em>getan wird</em>.</p>
        <div class="info-card">
          to feel <strong>sad</strong> &nbsp;&middot;&nbsp;
          to look <strong>good</strong> &nbsp;&middot;&nbsp;
          to seem <strong>easy</strong> &nbsp;&middot;&nbsp;
          to sound <strong>great</strong>
        </div>

        <div class="warning-box">
          <strong>Typischer Fehler:</strong> <em>"She sings good."</em> ist falsch!
          <em>sing</em> ist eine Tätigkeit (Wie singt sie?) &rarr; Adverb:
          <em>She sings <strong>well</strong>.</em>
        </div>
      `
    },
    example: {
      title: "Beispiel: gut oder gut?",
      steps: [
        {
          label: "Die Aufgabe",
          html: `<p>Adjektiv oder Adverb? <em>"Tom is a (1) ___ (quick) runner. He runs very (2) ___ (quick)."</em></p>`
        },
        {
          label: "Lücke 1",
          html: `<p>Es beschreibt <em>"runner"</em> - eine Person/Sache. Frage: Was für ein Läufer?
            &rarr; <strong>Adjektiv: quick</strong>.<br>&rarr; <em>Tom is a <strong>quick</strong> runner.</em></p>`
        },
        {
          label: "Lücke 2",
          html: `<p>Es beschreibt <em>"runs"</em> - eine Tätigkeit. Frage: Wie läuft er?
            &rarr; <strong>Adverb: quickly</strong> (mit -ly).<br>&rarr; <em>He runs very <strong>quickly</strong>.</em></p>`
        }
      ]
    },
    exercisesIntro: "Frag dich bei jeder Lücke: Beschreibt es eine <strong>Person/Sache</strong> (Adjektiv) oder eine <strong>Tätigkeit</strong> (Adverb)?",
    exercises: [
      {
        type: "multiple-choice",
        question: "<em>\"He is a ___ driver.\"</em> Was passt?",
        options: ["careful", "carefully", "more careful", "carefuly"],
        correct: 0,
        explanation: "Richtig! Es beschreibt <em>driver</em> (eine Person) &rarr; Adjektiv: <strong>careful</strong>.",
        wrongExplanations: {
          1: "<em>carefully</em> ist das Adverb (Wie?). Hier wird aber <em>driver</em> (eine Person) beschrieben &rarr; Adjektiv careful.",
          2: "Das ist eine Steigerung (\"vorsichtiger\") - hier nicht gefragt. Es braucht das einfache Adjektiv: careful.",
          3: "Schreibfehler: Das Adjektiv heißt <em>careful</em> (mit voll ausgeschriebenem -ful)."
        }
      },
      {
        type: "multiple-choice",
        question: "<em>\"She sings really ___ .\"</em>",
        options: ["well", "good", "well-", "goodly"],
        correct: 0,
        explanation: "Genau! <em>sing</em> ist eine Tätigkeit (Wie singt sie?) &rarr; Adverb. Und good wird unregelmäßig zu <strong>well</strong>.",
        wrongExplanations: {
          1: "Häufiger Fehler! <em>good</em> ist das Adjektiv. Bei einer Tätigkeit (singt wie?) brauchst du das Adverb - und good wird zu <strong>well</strong>.",
          2: "<em>well</em> ist richtig, aber ohne Bindestrich.",
          3: "\"goodly\" gibt es nicht. Das Adverb zu good ist unregelmäßig: <strong>well</strong>."
        }
      },
      {
        type: "fill-in-blank",
        question: "Adjektiv oder Adverb? Setze die richtige Form ein:",
        text: "Anna is a {{blank}} (quiet) girl. She always speaks very {{blank}} (quiet).",
        blanks: [
          { correct: "quiet" },
          { correct: "quietly" }
        ],
        prompts: ["quiet", "quiet"],
        explanation: "<em>girl</em> = Person &rarr; Adjektiv quiet. <em>speaks</em> = Tätigkeit (Wie?) &rarr; Adverb quietly."
      },
      {
        type: "fill-in-blank",
        question: "Denk an die Verben feel / look / seem (danach Adjektiv!):",
        text: "This exercise {{blank}} (seem) easy. The pizza {{blank}} (smell) good and I {{blank}} (feel) happy.",
        blanks: [
          { correct: "seems" },
          { correct: "smells" },
          { correct: "feels" }
        ],
        prompts: ["seem", "smell", "feel"],
        explanation: "Nach seem/smell/feel steht ein Adjektiv (easy, good, happy) - und das Verb selbst steht im simple present mit -s (he/she/it: it seems, it smells, I feel)."
      },
      {
        type: "matching",
        question: "Ordne jedem Adjektiv das passende Adverb zu:",
        pairs: [
          { left: "good", right: "well" },
          { left: "quick", right: "quickly" },
          { left: "happy", right: "happily" },
          { left: "fast", right: "fast" },
          { left: "easy", right: "easily" }
        ],
        explanation: "Merke: <em>good &rarr; well</em> und <em>fast &rarr; fast</em> sind unregelmäßig. Bei <em>happy/easy</em> wird das -y zu -ily."
      }
    ]
  },

  // ===================================================================
  // Lektion 6: Present perfect (G11)
  // ===================================================================
  {
    id: 6,
    title: "Present perfect",
    explanation: {
      html: `
        <h2>Das present perfect</h2>
        <p>Das present perfect verbindet die <strong>Vergangenheit</strong> mit dem
        <strong>Jetzt</strong>. Es geht um etwas, das <em>passiert ist</em> und jetzt noch
        wichtig oder spürbar ist.</p>

        <div class="analogy-box">
          <strong>Die Brücke zwischen Damals und Jetzt:</strong><br>
          <em>"I have lost my key."</em> - Verloren habe ich ihn vorhin (Vergangenheit),
          aber das Ergebnis zählt <em>jetzt</em>: Ich stehe ohne Schlüssel da.
          Das present perfect ist wie eine Brücke: ein Ereignis von früher, das bis ins Jetzt reicht.
        </div>

        <h3>So bildest du es</h3>
        <div class="info-card">
          <strong>have / has + 3. Form des Verbs (past participle)</strong><br>
          I / you / we / they &rarr; <strong>have</strong> &nbsp;&middot;&nbsp;
          he / she / it &rarr; <strong>has</strong><br>
          <em>I <strong>have played</strong>. &nbsp; She <strong>has gone</strong>. &nbsp;
          We <strong>have seen</strong> it.</em>
        </div>
        <p>Die <strong>3. Form</strong> ist bei regelmäßigen Verben einfach <em>+ed</em>
        (play &rarr; played). Bei unregelmäßigen Verben musst du sie lernen:</p>
        <div class="info-card">
          be &rarr; <strong>been</strong> &nbsp;&middot;&nbsp;
          go &rarr; <strong>gone</strong> &nbsp;&middot;&nbsp;
          see &rarr; <strong>seen</strong> &nbsp;&middot;&nbsp;
          write &rarr; <strong>written</strong> &nbsp;&middot;&nbsp;
          do &rarr; <strong>done</strong> &nbsp;&middot;&nbsp;
          take &rarr; <strong>taken</strong>
        </div>

        <h3>Die Signalwörter - dein bester Hinweis</h3>
        <div class="icon-table">
          <table>
            <tr><td><strong>just</strong></td><td>gerade eben</td><td><em>I have <strong>just</strong> posted a photo.</em></td></tr>
            <tr><td><strong>already</strong></td><td>schon</td><td><em>She has <strong>already</strong> seen it.</em></td></tr>
            <tr><td><strong>yet</strong></td><td>schon / noch (Frage + Verneinung)</td><td><em>Have you finished <strong>yet</strong>? - Not <strong>yet</strong>.</em></td></tr>
            <tr><td><strong>ever</strong></td><td>jemals (Frage)</td><td><em>Have you <strong>ever</strong> been to California?</em></td></tr>
            <tr><td><strong>never</strong></td><td>noch nie</td><td><em>I have <strong>never</strong> been there.</em></td></tr>
            <tr><td><strong>since</strong></td><td>seit (Zeit<em>punkt</em>)</td><td><em>...<strong>since</strong> 2019.</em></td></tr>
            <tr><td><strong>for</strong></td><td>seit (Zeit<em>dauer</em>)</td><td><em>...<strong>for</strong> two years.</em></td></tr>
          </table>
        </div>

        <div class="tip-box">
          <strong>since oder for?</strong> <em>since</em> + Zeitpunkt (since Monday, since 2019).
          <em>for</em> + Zeitdauer (for two hours, for a week). Eselsbrücke:
          <em>for</em> = wie lange (Dauer), <em>since</em> = ab wann (Punkt).
        </div>

        <div class="warning-box">
          <strong>Stellung im Satz:</strong> <em>just, already, never</em> stehen
          <em>zwischen</em> have/has und der 3. Form: <em>I have <strong>just</strong> eaten.</em>
          Aber <em>yet</em> steht am <em>Satzende</em>: <em>I haven't eaten <strong>yet</strong>.</em>
        </div>
      `
    },
    example: {
      title: "Beispiel: Fragen und Antworten",
      steps: [
        {
          label: "Eine Frage bilden",
          html: `<p>"Warst du jemals in Kalifornien?" &rarr; <strong>Have</strong> you
            <strong>ever been</strong> to California?<br>
            (Frage: have/has nach vorne, ever vor die 3. Form, be &rarr; been.)</p>`
        },
        {
          label: "Verneint antworten",
          html: `<p>"Nein, ich war noch nie dort." &rarr; No, I <strong>have never been</strong>
            to California. / No, I <strong>haven't been</strong> there <strong>yet</strong>.
            (yet steht am Ende!)</p>`
        },
        {
          label: "Mit Ergebnis im Jetzt",
          html: `<p>"Ich habe gerade ein Foto gepostet." &rarr; I <strong>have just posted</strong>
            a photo. (just zwischen have und der 3. Form posted.)</p>`
        }
      ]
    },
    exercisesIntro: "Achte auf die <strong>Signalwörter</strong> (just, yet, ever, since, for) und auf die richtige <strong>3. Form</strong> des Verbs.",
    exercises: [
      {
        type: "multiple-choice",
        question: "<em>\"___ you ever ___ sushi?\"</em> Welche Form ist richtig?",
        options: ["Have / eaten", "Have / eat", "Has / eaten", "Did / eaten"],
        correct: 0,
        explanation: "Richtig! <em>ever</em> ist ein Signalwort fürs present perfect. Frage mit \"you\" &rarr; <strong>Have</strong> + 3. Form von eat = <strong>eaten</strong>.",
        wrongExplanations: {
          1: "Fast! Im present perfect brauchst du die 3. Form: eat &rarr; <strong>eaten</strong>, nicht \"eat\".",
          2: "Bei \"you\" heißt es <strong>have</strong>, nicht has. (has nur bei he/she/it.)",
          3: "<em>did</em> wäre simple past. Aber <em>ever</em> verlangt present perfect: Have ... eaten."
        }
      },
      {
        type: "fill-in-blank",
        question: "Setze das present perfect ein (have/has + 3. Form):",
        text: "I {{blank}} (just / finish) my homework, but my sister {{blank}} (not / start) hers yet.",
        blanks: [
          { correct: "have just finished" },
          { correct: "has not started", alternatives: ["hasn't started"] }
        ],
        prompts: ["just finish", "not start"],
        explanation: "<em>just</em> steht zwischen have und finished. Verneinung bei \"my sister\" (she): <em>has not started</em> / <em>hasn't started</em> - und <em>yet</em> steht am Ende."
      },
      {
        type: "fill-in-blank",
        question: "since oder for? Setze das richtige Wort ein:",
        text: "Mia has lived in this town {{blank}} five years. She has been at her school {{blank}} 2021.",
        blanks: [
          { correct: "for" },
          { correct: "since" }
        ],
        explanation: "<em>five years</em> ist eine Zeitdauer &rarr; <strong>for</strong>. <em>2021</em> ist ein Zeitpunkt &rarr; <strong>since</strong>."
      },
      {
        type: "ordering",
        question: "Bilde die Frage im present perfect (richtige Reihenfolge):",
        items: ["Have", "you", "ever", "been", "to London?"],
        correctOrder: [0, 1, 2, 3, 4],
        explanation: "Frage-Stellung: Have + Subjekt + ever + 3. Form + Rest. &rarr; <em>Have you ever been to London?</em>"
      },
      {
        type: "matching",
        question: "Ordne jedem Verb seine 3. Form (past participle) zu:",
        pairs: [
          { left: "go", right: "gone" },
          { left: "see", right: "seen" },
          { left: "write", right: "written" },
          { left: "be", right: "been" },
          { left: "take", right: "taken" },
          { left: "do", right: "done" }
        ],
        explanation: "Diese unregelmäßigen 3. Formen musst du auswendig können - sie kommen im present perfect ständig vor."
      }
    ]
  }

]);
