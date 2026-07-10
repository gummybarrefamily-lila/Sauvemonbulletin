import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "alphabet-cyrillique",
  titre: "L'alphabet cyrillique : lire et écrire",
  matiere: "russe",
  niveau: "5eme",
  description:
    "Découvrir les 33 lettres de l'alphabet cyrillique, apprendre à les lire sans les confondre avec les lettres françaises, déchiffrer ses premiers mots russes et écrire son prénom.",
  objectifs: [
    "Connaître les 33 lettres de l'alphabet cyrillique par groupes",
    "Reconnaître les lettres identiques au français (А К М О Т)",
    "Ne plus se laisser piéger par les lettres trompeuses (В Н Р С У Х)",
    "Lire les lettres nouvelles, les chuintantes et les signes Ь et Ъ",
    "Déchiffrer des mots transparents (спорт, балет, театр) et écrire son prénom",
  ],
  slides: [
    {
      titre: "33 lettres pour tout dire",
      illustration: "🇷🇺",
      visuel: "А Б В Г Д … Э Ю Я",
      contenu: [
        "L'alphabet russe s'appelle l'alphabet cyrillique",
        "Il compte 33 lettres : 10 voyelles, 21 consonnes et 2 signes",
        "Il a été créé au IXe siècle par les moines Cyrille et Méthode",
        "Bonne nouvelle : beaucoup de lettres se lisent très facilement",
      ],
      voixOff:
        "Bienvenue dans le monde du russe ! L'alphabet russe s'appelle l'alphabet cyrillique, en hommage au moine Cyrille qui l'a inspiré au neuvième siècle. Il compte trente-trois lettres : dix voyelles, vingt-et-une consonnes et deux signes. Rassure-toi : en les classant par groupes, on apprend à tout lire en quelques séances.",
    },
    {
      titre: "Les lettres amies : identiques au français",
      illustration: "🤝",
      visuel: "А К М О Т",
      contenu: [
        "А (a) : se lit comme le a français",
        "К (k) : comme dans « kilo »",
        "М (m) : comme dans « maman »",
        "О (o) : comme dans « or » — Т (t) : comme dans « tarte »",
      ],
      voixOff:
        "Commençons par les lettres amies : elles s'écrivent et se lisent comme en français. A, ka, èmm, o, té : cinq lettres que tu connais déjà ! Avec elles, tu peux déjà lire des syllabes russes comme ma, to ou kot, qui veut dire chat. Un excellent départ sans effort.",
    },
    {
      titre: "Attention aux fausses amies !",
      illustration: "⚠️",
      visuel: "В Н Р С У Х",
      contenu: [
        "В (v) : ressemble à B mais se lit V",
        "Н (n) : ressemble à H mais se lit N — Р (r) : ressemble à P mais se lit R roulé",
        "С (s) : ressemble à C mais se lit toujours S",
        "У (ou) : ressemble à Y mais se lit OU — Х (kh) : ressemble à X mais se lit comme la jota espagnole",
      ],
      voixOff:
        "Voici le piège numéro un du cyrillique : les lettres trompeuses. Elles ressemblent à des lettres françaises mais se prononcent autrement. Le В se lit vé, le Н se lit ène, le Р se lit erre roulé, le С se lit esse, le У se lit ou, et le Х se lit kha, un h très soufflé. Retiens bien : ce qui ressemble à un B se lit V, et ce qui ressemble à un P se lit R !",
    },
    {
      titre: "Les nouvelles consonnes",
      illustration: "✨",
      visuel: "Б Г Д Ж З Л П Ф",
      contenu: [
        "Б (b) : le vrai B russe — Г (g) : comme dans « gare »",
        "Д (d) : comme dans « danse » — З (z) : comme dans « zèbre »",
        "Л (l) : comme dans « lac » — П (p) : le vrai P russe",
        "Ф (f) : comme dans « fête » — Ж (j) : comme dans « journée »",
      ],
      voixOff:
        "Passons aux lettres complètement nouvelles. Le Б est le vrai b russe, à ne pas confondre avec В qui se lit vé. Le Г fait gue, le Д fait de, le З fait ze, le Л fait le, le П est le vrai p, le Ф fait effe et le Ж fait je, comme dans journée. Leurs formes sont nouvelles, mais leurs sons existent tous en français.",
    },
    {
      titre: "Les chuintantes et les sifflantes",
      illustration: "🐍",
      visuel: "Ц Ч Ш Щ",
      contenu: [
        "Ц (ts) : comme dans « tsar »",
        "Ч (tch) : comme dans « tchat »",
        "Ш (ch) : comme dans « chat »",
        "Щ (chtch) : un ch long et mouillé — чай (tchaï) : le thé",
      ],
      voixOff:
        "Quatre lettres font des sons qui sifflent ou qui chuintent. Le Ц fait tsé comme dans tsar, le Ч fait tché comme dans tchat, le Ш fait che comme dans chat, et le Щ fait un chtch long et mouillé. Avec le Ч, tu peux déjà lire tchaï, le thé, l'une des boissons préférées des Russes !",
    },
    {
      titre: "Les nouvelles voyelles",
      illustration: "🎵",
      visuel: "И Ы Э Ю Я",
      contenu: [
        "И (i) : comme dans « ici »",
        "Ы (y) : un i dur, prononcé au fond de la gorge",
        "Э (è) : comme dans « mère »",
        "Ю (iou) : comme dans « caillou » — Я (ia) : comme dans « piano »",
      ],
      voixOff:
        "Côté voyelles, le И se lit i, et le Э se lit è. Le Ы est le son le plus exotique du russe : un i dur, prononcé au fond de la gorge, à mi-chemin entre i et ou. Enfin, deux voyelles doubles : le Ю se lit iou et le Я se lit ia. Le Я est d'ailleurs un mot à lui tout seul : ya, qui veut dire je !",
    },
    {
      titre: "Ё, Й et les deux signes Ь et Ъ",
      illustration: "🔧",
      visuel: "Ё Й Ь Ъ",
      contenu: [
        "Ё (io) : comme dans « yoga », toujours accentué",
        "Й (ï) : un i très bref, comme le y de « boy »",
        "Ь : le signe mou — il ne se prononce pas, il adoucit la consonne d'avant",
        "Ъ : le signe dur — très rare, il sépare deux sons",
      ],
      voixOff:
        "Terminons l'alphabet avec quatre lettres particulières. Le Ё se lit io et porte toujours l'accent du mot. Le Й est un i très bref, comme à la fin de tramway. Puis viennent les deux signes, qui ne font aucun son : le signe mou adoucit la consonne qui le précède, et le signe dur, très rare, sépare deux sons. Bravo, tu connais maintenant les trente-trois lettres !",
    },
    {
      titre: "Lire ses premiers mots",
      illustration: "📖",
      visuel: "спорт • балет • театр",
      contenu: [
        "спорт (sport) : le sport",
        "балет (baliet) : le ballet",
        "театр (tiéatr) : le théâtre",
        "парк (park) : le parc — класс (klass) : la classe",
      ],
      voixOff:
        "À toi de jouer : le russe a emprunté beaucoup de mots au français et à l'anglais, on les appelle les mots transparents. Déchiffre lettre par lettre : sport, le sport. Baliet, le ballet, un mot que tu connais bien ! Tiéatr, le théâtre. Park, le parc, et klass, la classe. Tu lis déjà du russe !",
    },
    {
      titre: "Écrire son prénom en cyrillique",
      illustration: "✍️",
      visuel: "Léa → Лея",
      contenu: [
        "On transcrit les sons du prénom, pas ses lettres",
        "Marie → Мари (les sons m-a-r-i)",
        "Léa → Лея — Emma → Эмма",
        "Thomas → Тома : le s final, muet en français, ne s'écrit pas",
      ],
      voixOff:
        "Pour écrire ton prénom en cyrillique, on transcrit les sons, pas les lettres françaises. Marie devient Мари : èmm, a, erre roulé, i. Léa devient Лея, Emma devient Эмма avec le è cyrillique. Attention aux lettres muettes : Thomas s'écrit Тома, sans h et sans s, car on ne les entend pas. Entraîne-toi avec ton prénom et ceux de ta famille !",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 33 lettres, 3 groupes",
      contenu: [
        "5 lettres identiques au français : А К М О Т",
        "6 lettres trompeuses : В (v), Н (n), Р (r), С (s), У (ou), Х (kh)",
        "Des lettres nouvelles, dont les chuintantes Ж Ц Ч Ш Щ et le fameux Ы",
        "Deux signes muets : Ь adoucit, Ъ sépare — et tu sais lire балет !",
      ],
      voixOff:
        "Résumons. L'alphabet cyrillique compte trente-trois lettres, classées en trois groupes : les lettres identiques au français comme А, К, М, О, Т ; les lettres trompeuses comme В qui se lit vé et Р qui se lit erre ; et les lettres nouvelles, dont les chuintantes et le i dur Ы. Les signes mou et dur ne se prononcent pas. Et surtout : tu sais déjà lire sport, baliet et tiéatr. Félicitations !",
    },
  ],
  fiche: {
    intro:
      "L'alphabet cyrillique compte 33 lettres : 10 voyelles, 21 consonnes et 2 signes muets. Pour l'apprendre vite, on classe les lettres en trois groupes : identiques, trompeuses et nouvelles.",
    sections: [
      {
        titre: "Les lettres identiques au français",
        points: [
          "А (a), К (k), М (m), О (o), Т (t) : elles se lisent comme en français",
          "Elles permettent de lire tout de suite des syllabes : ма, то, кот (chat)",
        ],
      },
      {
        titre: "Les lettres trompeuses (fausses amies)",
        points: [
          "В se lit V (pas B) — Н se lit N (pas H)",
          "Р se lit R roulé (pas P) — С se lit S (pas C/K)",
          "У se lit OU (pas Y) — Х se lit KH (h soufflé, pas X)",
        ],
      },
      {
        titre: "Les lettres nouvelles",
        points: [
          "Consonnes : Б (b), Г (g), Д (d), Ж (j), З (z), Л (l), П (p), Ф (f)",
          "Chuintantes : Ц (ts), Ч (tch), Ш (ch), Щ (chtch)",
          "Voyelles : И (i), Ы (i dur), Э (è), Ю (iou), Я (ia), Ё (io), plus Й (ï bref)",
        ],
      },
      {
        titre: "Les deux signes muets",
        points: [
          "Ь (signe mou) : ne se prononce pas, il adoucit la consonne précédente",
          "Ъ (signe dur) : très rare, il sépare deux sons à l'intérieur d'un mot",
        ],
      },
      {
        titre: "Lire et écrire ses premiers mots",
        points: [
          "Mots transparents : спорт (sport), балет (ballet), театр (théâtre), парк (parc), класс (classe)",
          "Pour écrire son prénom : on transcrit les SONS, pas les lettres — Thomas → Тома (sans h ni s muets)",
        ],
      },
    ],
    audio:
      "Fiche de révision : l'alphabet cyrillique. L'alphabet russe compte trente-trois lettres, que l'on classe en trois groupes. Premier groupe, les lettres identiques au français : А, К, М, О et Т se lisent exactement comme chez nous. Deuxième groupe, les lettres trompeuses : В ressemble à un B mais se lit vé, Н ressemble à un H mais se lit ène, Р ressemble à un P mais se lit erre roulé, С se lit esse, У se lit ou et Х se lit kha. Troisième groupe, les lettres nouvelles : les consonnes comme Б, Г, Д ou Ж, les chuintantes tsé, tché, che et chtch, et les voyelles i, i dur, è, iou et ia. Deux signes ne se prononcent pas : le signe mou adoucit la consonne, le signe dur sépare deux sons. Grâce aux mots transparents comme sport, baliet ou tiéatr, on lit très vite ses premiers mots russes, et on peut même écrire son prénom en transcrivant ses sons.",
  },
  memoCards: [
    { recto: "В (cyrillique)", verso: "Se lit V, pas B ! Ex : Виктор (Viktor) = Victor" },
    { recto: "Р (cyrillique)", verso: "Se lit R roulé, pas P ! Ex : Рома (Roma) = Roma" },
    { recto: "Н (cyrillique)", verso: "Se lit N, pas H ! Ex : Нина (Nina) = Nina" },
    { recto: "С (cyrillique)", verso: "Se lit toujours S. Ex : спорт (sport) = le sport" },
    { recto: "У (cyrillique)", verso: "Se lit OU, pas Y ! Ex : урок (ourok) = la leçon" },
    { recto: "Х (cyrillique)", verso: "Se lit KH, un h très soufflé (comme la jota espagnole). Ex : хор (khor) = le chœur" },
    { recto: "Quelle différence entre Ш et Щ ?", verso: "Ш = ch dur (chat) ; Щ = chtch, un ch long et mouillé." },
    { recto: "Ы (cyrillique)", verso: "Le i dur : un son entre i et ou, prononcé au fond de la gorge. N'existe pas en français." },
    { recto: "À quoi sert le signe mou Ь ?", verso: "Il ne se prononce pas : il adoucit (mouille) la consonne qui le précède." },
    { recto: "балет (baliet)", verso: "Le ballet. Mot transparent : б-а-л-е-т se déchiffre lettre par lettre." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment se lit la lettre russe В ?",
      choix: ["B", "V", "N", "R"],
      bonneReponse: 1,
      explication: "В est une fausse amie : elle ressemble à un B mais se lit toujours V.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quelle lettre russe fait le son « ou » ?",
      choix: ["О", "Ы", "У", "Ю"],
      bonneReponse: 2,
      explication: "У se lit « ou » : урок (ourok) = la leçon. Elle ressemble à un Y mais n'en est pas un.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Lis le mot russe спорт et donne sa traduction.",
      reponse: "Il se lit « sport » et signifie le sport.",
      explication: "с = s, п = p, о = o, р = r, т = t : un mot transparent, identique au français.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Parmi ces lettres, laquelle se lit exactement comme en français ?",
      choix: ["Р", "К", "Н", "С"],
      bonneReponse: 1,
      explication: "К se lit bien « k ». Р (r), Н (n) et С (s) sont des lettres trompeuses.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle lettre russe fait le son « tch » ?",
      choix: ["Ц", "Ш", "Ч", "Щ"],
      bonneReponse: 2,
      explication: "Ч = tch, comme dans чай (tchaï), le thé. Ц = ts, Ш = ch, Щ = chtch.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Lis le mot russe театр et donne sa traduction.",
      reponse: "Il se lit « tiéatr » et signifie le théâtre.",
      explication: "т = t, е = ié, а = a, т = t, р = r roulé. Attention : le р final est un R, pas un P !",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris le prénom Anna en cyrillique.",
      reponse: "Анна",
      explication: "On transcrit les sons : А (a) + н (n) + н (n) + а (a). Attention, le N russe s'écrit Н.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Le mot russe хор se lit :",
      choix: ["xor", "khor", "hor", "kor"],
      bonneReponse: 1,
      explication: "Х se lit « kh », un h très soufflé : хор (khor) = le chœur.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Déchiffre le mot Москва et dis de quelle ville il s'agit.",
      reponse: "Il se lit « Moskva » : c'est Moscou, la capitale de la Russie.",
      explication: "М = m, о = o, с = s, к = k, в = v, а = a. Le в au milieu se lit V, pas B.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans le mot борщ (la soupe russe), les lettres б et щ se lisent :",
      choix: ["v et ch", "b et chtch", "b et ch", "v et ts"],
      bonneReponse: 1,
      explication: "Б est le vrai B russe et Щ se lit chtch : борщ = « borchtch ».",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "À quoi sert le signe mou Ь dans un mot comme мать (la mère) ?",
      reponse: "Il ne se prononce pas : il adoucit (mouille) la consonne précédente, ici le т final.",
      explication: "Ь est un signe muet. мать se lit « mat' », avec un t adouci, comme un tout petit i collé au t.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Écris le prénom Thomas en cyrillique et explique ton choix.",
      reponse: "Тома : on transcrit les sons t-o-m-a ; le h et le s, muets en français, ne s'écrivent pas.",
      explication: "En cyrillique, on écrit ce qu'on entend. Les lettres muettes du français disparaissent.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Combien de lettres compte l'alphabet cyrillique ?",
      choix: ["26", "30", "33", "36"],
      bonneReponse: 2,
      explication: "33 lettres : 10 voyelles, 21 consonnes et 2 signes muets.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "La lettre russe Р se lit :",
      choix: ["P", "R", "B", "D"],
      bonneReponse: 1,
      explication: "Р est une fausse amie : elle se lit R roulé, jamais P.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Lis et traduis : балет.",
      reponse: "« baliet » : le ballet.",
      explication: "б = b, а = a, л = l, е = ié, т = t. Un mot transparent bien utile en danse-études !",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Quelle est la différence entre Б et В ?",
      reponse: "Б se lit B ; В se lit V (même si elle ressemble à un B français).",
      explication: "C'est la confusion classique du débutant : le vrai B russe est Б.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Écris le prénom Marie en cyrillique.",
      reponse: "Мари",
      explication: "On transcrit les sons m-a-r-i : М + а + р + и. Le e final muet ne s'écrit pas.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — L'alphabet cyrillique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel groupe contient uniquement des lettres identiques au français ?",
          choix: ["А К М О Т", "В Н Р С У", "Б Г Д Ж З", "Ц Ч Ш Щ"],
          bonneReponse: 0,
          explication: "А, К, М, О et Т se lisent comme en français. Les autres groupes sont trompeurs ou nouveaux.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "La lettre С dans спорт se lit :",
          choix: ["k", "ts", "s", "ch"],
          bonneReponse: 2,
          explication: "С se lit toujours S en russe : спорт = sport.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Lis et traduis les deux mots : парк et класс.",
          reponse: "парк = « park » (le parc) ; класс = « klass » (la classe).",
          explication: "Ce sont des mots transparents : chaque lettre se déchiffre une à une.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Classe ces lettres en deux colonnes « trompeuses » / « nouvelles » : Н, Ж, У, Ы, Х, Ч.",
          reponse: "Trompeuses : Н (n), У (ou), Х (kh). Nouvelles : Ж (j), Ы (i dur), Ч (tch).",
          explication: "Les trompeuses ressemblent à des lettres françaises ; les nouvelles ont une forme inconnue en français.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Écris le prénom Emma en cyrillique.",
          reponse: "Эмма",
          explication: "Le son è s'écrit Э, puis м + м + а. On transcrit les sons du prénom.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Le mot щи désigne une soupe au chou. Explique comment il se prononce et pourquoi il ne se lit pas « chi ».",
          reponse: "Il se lit « chtchi » : Щ n'est pas Ш, c'est un ch long et mouillé (chtch).",
          explication: "Щ (chtch) et Ш (ch) sont deux lettres différentes : la petite jambe de Щ change tout !",
        },
      ],
    },
    {
      titre: "Examen 2 — L'alphabet cyrillique",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quelle lettre russe fait le son « j » comme dans « journée » ?",
          choix: ["З", "Ж", "Ч", "Г"],
          bonneReponse: 1,
          explication: "Ж = j. З = z, Ч = tch et Г = g.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Le pronom russe я (une seule lettre !) se lit et signifie :",
          choix: ["« a » = un", "« ia » = je", "« i » = et", "« ou » = où"],
          bonneReponse: 1,
          explication: "Я se lit « ia » et signifie « je ». C'est le mot le plus court pour parler de soi !",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Vrai ou faux : la lettre Ё se lit « io » et porte toujours l'accent du mot. Justifie.",
          reponse: "Vrai : Ё se lit « io » et est toujours accentuée (ex. : ёлка, « iolka », le sapin).",
          explication: "C'est la seule lettre russe toujours accentuée, ce qui aide à prononcer le mot.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un camarade lit le mot ресторан « pectopah ». Corrige-le et traduis le mot.",
          reponse: "Il se lit « restoran » : le restaurant. Р = r, е = ié/e, с = s, н = n.",
          explication: "L'erreur classique : lire les lettres trompeuses à la française. Р = R, С = S, Н = N.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Quelle est la différence entre le signe mou Ь et le signe dur Ъ ?",
          reponse: "Aucun des deux ne se prononce : Ь adoucit la consonne précédente ; Ъ, très rare, sépare deux sons.",
          explication: "Ex. : мать (mat', t adouci) ; объект (ob-iekt, le Ъ sépare le b du son ié).",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Écris en cyrillique le prénom Nina, puis déchiffre le mot балерина.",
          reponse: "Nina → Нина. балерина se lit « baliérina » : la ballerine.",
          explication: "Le N s'écrit Н en russe. балерина se déchiffre б-а-л-е-р-и-н-а, un mot précieux en danse-études !",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "L'alphabet cyrillique compte 33 lettres : on l'apprend par groupes (identiques, trompeuses, nouvelles).",
    "Lettres identiques au français : А, К, М, О, Т.",
    "Erreur classique à éviter : confondre В et B, et Р et P — В se lit V et Р se lit R roulé !",
    "Les chuintantes : Ц (ts), Ч (tch), Ш (ch), Щ (chtch) — la petite jambe de Щ change le son.",
    "Ь (signe mou) et Ъ (signe dur) sont muets : l'un adoucit, l'autre sépare.",
    "Pour écrire son prénom, on transcrit les sons, pas les lettres : Thomas → Тома, sans lettres muettes.",
  ],
};

export default chapitre;
