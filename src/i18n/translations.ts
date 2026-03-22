export type Language = "el" | "en" | "de";

export const translations = {
  nav: {
    symptoms: { el: "Συμπτώματα", en: "Symptoms", de: "Symptome" },
    benefits: { el: "Οφέλη", en: "Benefits", de: "Vorteile" },
    approach: { el: "Η Προσέγγισή μας", en: "Our Approach", de: "Unser Ansatz" },
    contact: { el: "Επικοινωνία", en: "Contact", de: "Kontakt" },
    cta: { el: "Κλείσε Ραντεβού", en: "Book a Call", de: "Beratung" },
  },
  hero: {
    tagline: {
      el: "Επιστημονικά τεκμηριωμένο · Φυσικά αποτελεσματικό",
      en: "Scientifically proven · Naturally effective",
      de: "Wissenschaftlich fundiert · Natürlich wirksam",
    },
    title1: { el: "Η υγεία ξεκινά", en: "Health begins", de: "Gesundheit beginnt" },
    title2: { el: "από το κύτταρο", en: "in the cell", de: "in der Zelle" },
    subtitle: {
      el: "Ανακάλυψε πώς μπορείς να φέρεις τον οργανισμό σου σε ισορροπία μέσα σε 120 ημέρες, με εξατομικευμένη προσέγγιση βασισμένη σε εξειδικευμένες αιματολογικές εξετάσεις.",
      en: "Discover how you can bring your body back into balance within 120 days, through a personalized approach based on specialized blood analysis.",
      de: "Entdecke, wie du deinen Körper in 120 Tagen ins Gleichgewicht bringen kannst — mit einem personalisierten Ansatz basierend auf spezialisierten Blutanalysen.",
    },
    ctaPrimary: { el: "Μάθε περισσότερα", en: "Learn more", de: "Mehr erfahren" },
    ctaSecondary: { el: "Κλείσε ραντεβού", en: "Book a call", de: "Beratung buchen" },
  },
  symptoms: {
    tag: { el: "Αναγνωρίζεις κάτι;", en: "Sound familiar?", de: "Kommt dir das bekannt vor?" },
    title1: { el: "Αυτά τα συμπτώματα", en: "These symptoms", de: "Diese Symptome" },
    title2: { el: "δεν είναι τυχαία", en: "are not random", de: "sind kein Zufall" },
    subtitle: {
      el: "Οι χρόνιες φλεγμονές χαμηλού βαθμού είναι η αθόρυβη αιτία πίσω από πολλά καθημερινά προβλήματα υγείας. Το σώμα σου σου στέλνει σήματα — μάθε να τα ακούς.",
      en: "Chronic low-grade inflammation is the silent cause behind many everyday health problems. Your body is sending you signals — learn to listen.",
      de: "Chronische niedriggradige Entzündungen sind die stille Ursache hinter vielen alltäglichen Gesundheitsproblemen. Dein Körper sendet dir Signale — lerne, sie zu hören.",
    },
    items: [
      {
        title: {
          el: "Ξαφνική υπνηλία μετά το φαγητό",
          en: "Sudden drowsiness after eating",
          de: "Plötzliche Müdigkeit nach dem Essen",
        },
        description: {
          el: "Όταν τρως και νιώθεις αμέσως εξαντλημένος, δεν φταίει απλά η πέψη. Οι χρόνιες φλεγμονές χαμηλού βαθμού επηρεάζουν τον τρόπο που τα κύτταρά σου μεταβολίζουν την ενέργεια. Το ανοσοποιητικό σου αντιδρά στο φαγητό σαν να είναι απειλή, δημιουργώντας μια αλυσιδωτή φλεγμονώδη αντίδραση που σε αφήνει χωρίς δυνάμεις.",
          en: "When you eat and immediately feel drained, it's not just digestion. Chronic low-grade inflammation affects how your cells metabolize energy. Your immune system reacts to food as if it were a threat, creating a cascade of inflammatory responses that leaves you exhausted.",
          de: "Wenn du nach dem Essen sofort erschöpft bist, liegt es nicht nur an der Verdauung. Chronische niedriggradige Entzündungen beeinflussen, wie deine Zellen Energie verstoffwechseln. Dein Immunsystem reagiert auf Nahrung wie auf eine Bedrohung und erzeugt eine entzündliche Kettenreaktion.",
        },
        icon: "moon",
      },
      {
        title: {
          el: "Συχνοί πονοκέφαλοι",
          en: "Frequent headaches",
          de: "Häufige Kopfschmerzen",
        },
        description: {
          el: "Οι επίμονοι πονοκέφαλοι συχνά οφείλονται σε φλεγμονώδεις ουσίες που κυκλοφορούν στο αίμα σου. Όταν υπάρχει χρόνια φλεγμονή, τα αγγεία στον εγκέφαλο διαστέλλονται ανώμαλα και τα νευρικά κύτταρα ερεθίζονται. Δεν χρειάζεσαι παυσίπονα — χρειάζεσαι να αντιμετωπίσεις τη ρίζα του προβλήματος.",
          en: "Persistent headaches are often caused by inflammatory substances circulating in your blood. When chronic inflammation is present, blood vessels in the brain dilate irregularly and nerve cells become irritated. You don't need painkillers — you need to address the root cause.",
          de: "Anhaltende Kopfschmerzen werden oft durch entzündliche Substanzen im Blut verursacht. Bei chronischen Entzündungen dehnen sich die Blutgefäße im Gehirn unregelmäßig aus und Nervenzellen werden gereizt. Du brauchst keine Schmerzmittel — du musst die Ursache angehen.",
        },
        icon: "brain",
      },
      {
        title: {
          el: "Κούραση χωρίς λόγο",
          en: "Unexplained fatigue",
          de: "Unerklärliche Müdigkeit",
        },
        description: {
          el: "Κοιμάσαι αρκετά αλλά ξυπνάς κουρασμένος; Οι χρόνιες φλεγμονές χαμηλού βαθμού καταστρέφουν τα μιτοχόνδρια — τα εργοστάσια ενέργειας των κυττάρων σου. Όταν τα μιτοχόνδρια δεν λειτουργούν σωστά, η ενέργεια που παράγει ο οργανισμός σου πέφτει δραματικά, ανεξάρτητα από τον ύπνο.",
          en: "Sleeping enough but waking up tired? Chronic low-grade inflammation destroys your mitochondria — the energy factories of your cells. When mitochondria don't function properly, your body's energy production drops dramatically, regardless of how much you sleep.",
          de: "Du schläfst genug, wachst aber müde auf? Chronische niedriggradige Entzündungen zerstören deine Mitochondrien — die Energiefabriken deiner Zellen. Wenn sie nicht richtig funktionieren, sinkt deine Energieproduktion dramatisch.",
        },
        icon: "battery-low",
      },
      {
        title: {
          el: "Αυτοάνοσα νοσήματα",
          en: "Autoimmune conditions",
          de: "Autoimmunerkrankungen",
        },
        description: {
          el: "Τα αυτοάνοσα νοσήματα δεν εμφανίζονται ξαφνικά. Είναι το αποτέλεσμα χρόνιας φλεγμονής που ξεφεύγει από τον έλεγχο. Το ανοσοποιητικό σύστημα, κάτω από συνεχή φλεγμονώδη πίεση, αρχίζει να μπερδεύει τα δικά σου κύτταρα με εξωτερικές απειλές. Η πρόληψη ξεκινά από τη μείωση αυτής της σιωπηλής φλεγμονής.",
          en: "Autoimmune diseases don't appear suddenly. They are the result of chronic inflammation spiraling out of control. Your immune system, under constant inflammatory pressure, begins to confuse your own cells with external threats. Prevention starts with reducing this silent inflammation.",
          de: "Autoimmunerkrankungen entstehen nicht plötzlich. Sie sind das Ergebnis chronischer Entzündungen, die außer Kontrolle geraten. Dein Immunsystem beginnt unter ständigem entzündlichen Druck, eigene Zellen mit Bedrohungen zu verwechseln. Prävention beginnt mit der Reduzierung dieser stillen Entzündung.",
        },
        icon: "shield-alert",
      },
      {
        title: {
          el: "Έλλειψη συγκέντρωσης",
          en: "Lack of concentration",
          de: "Konzentrationsmangel",
        },
        description: {
          el: "Δυσκολεύεσαι να συγκεντρωθείς, ξεχνάς εύκολα, νιώθεις σαν ομίχλη στο μυαλό; Οι φλεγμονώδεις κυτοκίνες περνούν τον αιματοεγκεφαλικό φραγμό και επηρεάζουν άμεσα τη λειτουργία των νευρώνων. Η «ομίχλη εγκεφάλου» δεν είναι ψυχολογική — είναι βιοχημική.",
          en: "Struggling to focus, forgetting easily, feeling brain fog? Inflammatory cytokines cross the blood-brain barrier and directly affect neuron function. Brain fog isn't psychological — it's biochemical.",
          de: "Schwierigkeiten, sich zu konzentrieren, vergesslich, Gehirnnebel? Entzündliche Zytokine überwinden die Blut-Hirn-Schranke und beeinflussen direkt die Neuronenfunktion. Gehirnnebel ist nicht psychologisch — er ist biochemisch.",
        },
        icon: "focus",
      },
      {
        title: {
          el: "Νεύρα και ξεσπάσματα παιδιών",
          en: "Children's irritability & outbursts",
          de: "Nervosität & Ausbrüche bei Kindern",
        },
        description: {
          el: "Τα «νεύρα» και τα ξεσπάσματα των παιδιών δεν είναι πάντα θέμα χαρακτήρα ή αγωγής. Οι χρόνιες φλεγμονές χαμηλού βαθμού στον παιδικό οργανισμό μπορούν να επηρεάσουν τους νευροδιαβιβαστές, δημιουργώντας ανισορροπίες που εκδηλώνονται ως ευερεθιστότητα, θυμό ή υπερκινητικότητα. Η λύση δεν είναι η τιμωρία — είναι η κυτταρική ισορροπία.",
          en: "Children's tantrums and irritability aren't always about character or discipline. Chronic low-grade inflammation in a child's body can affect neurotransmitters, creating imbalances that manifest as irritability, anger, or hyperactivity. The solution isn't punishment — it's cellular balance.",
          de: "Wutanfälle und Reizbarkeit bei Kindern sind nicht immer eine Frage des Charakters. Chronische niedriggradige Entzündungen im kindlichen Körper können Neurotransmitter beeinflussen und Ungleichgewichte erzeugen, die sich als Reizbarkeit, Wut oder Hyperaktivität äußern. Die Lösung ist zelluläre Balance.",
        },
        icon: "baby",
      },
    ],
  },
  benefits: {
    tag: { el: "Οφέλη", en: "Benefits", de: "Vorteile" },
    title1: { el: "Το σώμα σου αξίζει", en: "Your body deserves", de: "Dein Körper verdient" },
    title2: { el: "το καλύτερο", en: "the best", de: "das Beste" },
    items: [
      {
        title: { el: "Κυτταρική ενέργεια", en: "Cellular energy", de: "Zelluläre Energie" },
        description: {
          el: "Βελτιστοποίησε τη λειτουργία των μιτοχονδρίων σου και αύξησε το φυσικό σου επίπεδο ενέργειας σε κυτταρικό επίπεδο.",
          en: "Optimize your mitochondrial function and boost your natural energy levels at a cellular level.",
          de: "Optimiere deine Mitochondrien-Funktion und steigere dein natürliches Energielevel auf zellulärer Ebene.",
        },
      },
      {
        title: { el: "Ανοσοποιητικό", en: "Immune defense", de: "Immunabwehr" },
        description: {
          el: "Ενίσχυσε το ανοσοποιητικό σου σύστημα μέσω στοχευμένης θρέψης των κυττάρων σου για μέγιστη προστασία.",
          en: "Strengthen your immune system through targeted cellular nutrition for maximum protection.",
          de: "Stärke dein Immunsystem durch gezielte Nährstoffversorgung deiner Zellen für maximalen Schutz.",
        },
      },
      {
        title: { el: "Anti-Aging", en: "Anti-Aging", de: "Anti-Aging" },
        description: {
          el: "Επιβράδυνε τη γήρανση μέσω κυτταρικής αναγέννησης και αντιοξειδωτικής προστασίας.",
          en: "Slow down aging through cellular regeneration and antioxidant protection.",
          de: "Verlangsame den Alterungsprozess durch zelluläre Regeneration und antioxidativen Schutz.",
        },
      },
      {
        title: { el: "Φυσική βάση", en: "Natural basis", de: "Natürliche Basis" },
        description: {
          el: "100% φυσικά, επιστημονικά ερευνημένα συστατικά υψηλής ποιότητας και βιοδιαθεσιμότητας.",
          en: "100% natural, scientifically researched ingredients of the highest quality and bioavailability.",
          de: "100% natürliche, wissenschaftlich erforschte Inhaltsstoffe höchster Qualität und Bioverfügbarkeit.",
        },
      },
    ],
  },
  approach: {
    tag: { el: "Η Προσέγγισή μας", en: "Our Approach", de: "Unser Ansatz" },
    title1: { el: "120 ημέρες", en: "120 days", de: "120 Tage" },
    title2: { el: "προς την ισορροπία", en: "to balance", de: "zur Balance" },
    p1: {
      el: "Πιστεύουμε ότι η αληθινή υγεία ξεκινά σε κυτταρικό επίπεδο. Γι' αυτό η προσέγγισή μας είναι εντελώς εξατομικευμένη — βασισμένη σε εξειδικευμένες αιματολογικές εξετάσεις ξηρού αίματος που αποκαλύπτουν αυτό που οι κλασικές εξετάσεις δεν μπορούν.",
      en: "We believe true health starts at the cellular level. That's why our approach is completely personalized — based on specialized dry blood analysis that reveals what standard tests cannot.",
      de: "Wir glauben, dass wahre Gesundheit auf zellulärer Ebene beginnt. Deshalb ist unser Ansatz vollständig personalisiert — basierend auf spezialisierten Trockenblutanalysen, die enthüllen, was Standardtests nicht können.",
    },
    p2: {
      el: "Οι εξετάσεις γίνονται σε ανεξάρτητο εργαστήριο του εξωτερικού με πιστοποιήσεις CE, ISO 9001, IVD και άλλες, εξασφαλίζοντας αξιοπιστία και ακρίβεια στα αποτελέσματα. Οι χρόνιες φλεγμονές χαμηλού βαθμού δεν φαίνονται στις κλασικές αιματολογικές — εμείς τις βρίσκουμε.",
      en: "Tests are conducted in an independent laboratory abroad certified with CE, ISO 9001, IVD and other standards, ensuring reliability and accuracy. Chronic low-grade inflammation doesn't show up in standard blood work — we find it.",
      de: "Die Tests werden in einem unabhängigen, zertifizierten Labor im Ausland durchgeführt (CE, ISO 9001, IVD u.a.), was Zuverlässigkeit und Genauigkeit gewährleistet. Chronische niedriggradige Entzündungen zeigen sich nicht in Standardbluttests — wir finden sie.",
    },
    stat1: { el: "120", en: "120", de: "120" },
    stat1Label: { el: "Ημέρες για ισορροπία", en: "Days to balance", de: "Tage zur Balance" },
    stat2: { el: "CE", en: "CE", de: "CE" },
    stat2Label: { el: "ISO 9001 · IVD", en: "ISO 9001 · IVD", de: "ISO 9001 · IVD" },
    stat3: { el: "100%", en: "100%", de: "100%" },
    stat3Label: { el: "Εξατομικευμένη", en: "Personalized", de: "Personalisiert" },
    cellQuote: { el: "«Κάθε κύτταρο μετράει»", en: '"Every cell counts"', de: '"Jede Zelle zählt"' },
  },
  process: {
    tag: { el: "Η Διαδικασία", en: "The Process", de: "Der Prozess" },
    title1: { el: "Πώς φτάνουμε", en: "How we reach", de: "Wie wir das" },
    title2: { el: "στην ισορροπία", en: "balance", de: "Gleichgewicht erreichen" },
    subtitle: {
      el: "Τέσσερα απλά βήματα που σε οδηγούν σε μια ζωή χωρίς χρόνιες φλεγμονές — με επιστημονική ακρίβεια και προσωπική καθοδήγηση.",
      en: "Four simple steps that lead you to a life free from chronic inflammation — with scientific precision and personal guidance.",
      de: "Vier einfache Schritte, die dich zu einem Leben ohne chronische Entzündungen führen — mit wissenschaftlicher Präzision und persönlicher Begleitung.",
    },
    steps: [
      {
        title: {
          el: "Ελέγχουμε το τώρα",
          en: "Assess the present",
          de: "Den Ist-Zustand prüfen",
        },
        description: {
          el: "Ξεκινάμε με μια εξειδικευμένη εξέταση ξηρού αίματος σε πιστοποιημένο εργαστήριο του εξωτερικού, για να δούμε ακριβώς πού βρίσκεται ο οργανισμός σου σήμερα. Αυτό που οι κλασικές εξετάσεις δεν δείχνουν, εμείς το βρίσκουμε.",
          en: "We start with a specialized dry blood analysis at a certified laboratory abroad, to see exactly where your body stands today. What standard tests don't reveal, we find.",
          de: "Wir beginnen mit einer spezialisierten Trockenblutanalyse in einem zertifizierten Labor im Ausland, um genau zu sehen, wo dein Körper heute steht. Was Standardtests nicht zeigen, finden wir.",
        },
      },
      {
        title: {
          el: "Βρίσκουμε τι χρειάζεται",
          en: "Identify the needs",
          de: "Den Bedarf ermitteln",
        },
        description: {
          el: "Αναλύουμε τα αποτελέσματα και εντοπίζουμε τις ελλείψεις, τις φλεγμονές και τις ανισορροπίες του οργανισμού σου. Κάθε άνθρωπος είναι μοναδικός — γι' αυτό και η ανάλυση είναι πάντα προσωπική.",
          en: "We analyze the results and identify deficiencies, inflammation, and imbalances in your body. Every person is unique — that's why the analysis is always personal.",
          de: "Wir analysieren die Ergebnisse und identifizieren Defizite, Entzündungen und Ungleichgewichte in deinem Körper. Jeder Mensch ist einzigartig — deshalb ist die Analyse immer persönlich.",
        },
      },
      {
        title: {
          el: "Εξατομικευμένη προσέγγιση",
          en: "Personalized approach",
          de: "Personalisierter Ansatz",
        },
        description: {
          el: "Σχεδιάζουμε ένα πρόγραμμα αποκλειστικά για εσένα, βασισμένο στα δικά σου αποτελέσματα. Στοχευμένη κυτταρική θρέψη και καθοδήγηση που ταιριάζει στον δικό σου οργανισμό.",
          en: "We design a program exclusively for you, based on your own results. Targeted cellular nutrition and guidance tailored to your unique body.",
          de: "Wir erstellen ein Programm exklusiv für dich, basierend auf deinen eigenen Ergebnissen. Gezielte zelluläre Ernährung und Begleitung, die zu deinem Körper passt.",
        },
      },
      {
        title: {
          el: "Επανέλεγχος σε 120 ημέρες",
          en: "Recheck at 120 days",
          de: "Kontrolle nach 120 Tagen",
        },
        description: {
          el: "Μετά από 120 ημέρες κάνουμε νέα εξέταση ξηρού αίματος για να δούμε μαζί την πρόοδό σου. Τα αποτελέσματα μιλούν από μόνα τους — ο οργανισμός σου επιστρέφει σε ισορροπία.",
          en: "After 120 days, we conduct a new dry blood test so we can see your progress together. The results speak for themselves — your body returns to balance.",
          de: "Nach 120 Tagen führen wir eine neue Trockenblutanalyse durch, damit wir gemeinsam deinen Fortschritt sehen. Die Ergebnisse sprechen für sich — dein Körper kehrt ins Gleichgewicht zurück.",
        },
      },
    ],
  },
  cta: {
    tag: { el: "Ξεκίνα τώρα", en: "Start now", de: "Starte jetzt" },
    title1: { el: "Έτοιμος για την", en: "Ready for your", de: "Bereit für deine" },
    title2: { el: "κυτταρική σου μεταμόρφωση;", en: "cellular transformation?", de: "zelluläre Transformation?" },
    subtitle: {
      el: "Συμπλήρωσε τα στοιχεία σου και θα επικοινωνήσω μαζί σου προσωπικά για μια δωρεάν συνεδρία γνωριμίας.",
      en: "Fill in your details and I will personally contact you for a free introductory session.",
      de: "Hinterlasse deine Daten und ich melde mich persönlich bei dir für ein kostenloses Kennenlerngespräch.",
    },
    nameLabel: { el: "Ονοματεπώνυμο", en: "Full name", de: "Vollständiger Name" },
    namePlaceholder: { el: "Το όνομά σου", en: "Your name", de: "Dein Name" },
    emailLabel: { el: "Email", en: "Email", de: "E-Mail" },
    emailPlaceholder: { el: "Το email σου", en: "Your email", de: "Deine E-Mail" },
    phoneLabel: { el: "Τηλέφωνο", en: "Phone", de: "Telefon" },
    phonePlaceholder: { el: "Το τηλέφωνό σου", en: "Your phone", de: "Deine Telefonnummer" },
    messageLabel: { el: "Μήνυμα (προαιρετικό)", en: "Message (optional)", de: "Nachricht (optional)" },
    messagePlaceholder: {
      el: "Πες μου λίγα λόγια για την κατάστασή σου...",
      en: "Tell me a bit about your situation...",
      de: "Erzähl mir ein wenig über deine Situation...",
    },
    submit: { el: "Θέλω να με καλέσεις", en: "I want you to call me", de: "Ruf mich an" },
    privacy: {
      el: "Τα στοιχεία σου προστατεύονται και χρησιμοποιούνται αποκλειστικά για να επικοινωνήσω μαζί σου προσωπικά. Δεν κοινοποιούνται σε τρίτους.",
      en: "Your data is protected and used exclusively for me to contact you personally. It is never shared with third parties.",
      de: "Deine Daten sind geschützt und werden ausschließlich verwendet, um dich persönlich zu kontaktieren. Sie werden niemals an Dritte weitergegeben.",
    },
    success: {
      el: "Ευχαριστώ! Θα επικοινωνήσω μαζί σου σύντομα.",
      en: "Thank you! I will contact you soon.",
      de: "Danke! Ich melde mich bald bei dir.",
    },
  },
  footer: {
    name: "Effie Makri",
    role: {
      el: "Σύμβουλος κυτταρικής υγείας και ευεξίας",
      en: "Cellular Health & Wellness Consultant",
      de: "Beraterin für zelluläre Gesundheit und Wohlbefinden",
    },
    tagline: { el: "Η υγεία ξεκινά από το κύτταρο", en: "Health begins in the cell", de: "Gesundheit beginnt in der Zelle" },
    imprint: { el: "Νομικά", en: "Imprint", de: "Impressum" },
    privacy: { el: "Απόρρητο", en: "Privacy", de: "Datenschutz" },
    contact: { el: "Επικοινωνία", en: "Contact", de: "Kontakt" },
    copyright: {
      el: "Cellular Health & Wellness. Με επιφύλαξη παντός δικαιώματος.",
      en: "Cellular Health & Wellness. All rights reserved.",
      de: "Cellular Health & Wellness. Alle Rechte vorbehalten.",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;
