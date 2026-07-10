import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "revolution-francaise",
  titre: "La Révolution française et l'Empire",
  matiere: "histoire-geo",
  niveau: "4eme",
  description:
    "Comprendre pourquoi la Révolution éclate en 1789, comment la France passe de la monarchie absolue à la République, puis à l'Empire de Napoléon, et retenir les grandes dates de cette période fondatrice.",
  objectifs: [
    "Expliquer les causes de la Révolution (société d'ordres, crise financière)",
    "Connaître les grands événements de 1789 : États généraux, 14 juillet, 4 août, DDHC",
    "Comprendre le passage de la monarchie constitutionnelle à la Ière République (1792)",
    "Savoir ce qu'est la Terreur et comment Napoléon arrive au pouvoir",
    "Mémoriser les repères : 1789, 26 août 1789, 21 septembre 1792, 1804",
  ],
  slides: [
    {
      titre: "La France d'avant 1789 : la société d'ordres",
      illustration: "⚖️",
      visuel: "3 ordres",
      contenu: [
        "La société est divisée en trois ordres : clergé, noblesse, tiers état",
        "Clergé et noblesse ont des privilèges (pas d'impôts, honneurs)",
        "Le tiers état (97 % des Français) paie presque tous les impôts",
        "Le roi Louis XVI gouverne en monarque absolu",
      ],
      voixOff:
        "Avant 1789, la société française est divisée en trois ordres. Le clergé et la noblesse possèdent des privilèges : ils ne paient presque pas d'impôts et occupent les meilleures places. Le tiers état, qui représente environ quatre-vingt-dix-sept pour cent des Français, paie presque tous les impôts. Au sommet, le roi Louis XVI gouverne en monarque absolu.",
    },
    {
      titre: "Les causes de la Révolution",
      illustration: "💸",
      visuel: "Crise + injustice",
      contenu: [
        "L'État est ruiné : dettes énormes, notamment après la guerre d'Amérique",
        "Mauvaises récoltes en 1788 : le pain devient très cher",
        "Les idées des Lumières critiquent l'absolutisme et les privilèges",
        "Le tiers état exprime son mécontentement dans les cahiers de doléances",
      ],
      voixOff:
        "Plusieurs causes se combinent. L'État est ruiné par ses dettes, notamment à cause de la guerre d'indépendance américaine. Les mauvaises récoltes de 1788 font grimper le prix du pain. Les idées des philosophes des Lumières critiquent l'absolutisme et les privilèges. Dans les cahiers de doléances, les Français expriment leurs plaintes et leurs espoirs de réforme.",
    },
    {
      titre: "Mai-juin 1789 : les États généraux",
      illustration: "🏛️",
      visuel: "5 mai 1789",
      contenu: [
        "Le 5 mai 1789, Louis XVI réunit les États généraux à Versailles",
        "Le vote par ordre défavorise le tiers état",
        "17 juin : les députés du tiers état se proclament Assemblée nationale",
        "20 juin : serment du Jeu de paume, ils jurent de donner une constitution à la France",
      ],
      voixOff:
        "Pour résoudre la crise financière, Louis XVI réunit les États généraux à Versailles le cinq mai 1789. Mais le vote par ordre défavorise le tiers état. Le dix-sept juin, ses députés se proclament Assemblée nationale. Le vingt juin, réunis dans la salle du Jeu de paume, ils jurent de ne pas se séparer avant d'avoir donné une constitution à la France. La souveraineté change de mains.",
    },
    {
      titre: "Le 14 juillet 1789 : la prise de la Bastille",
      illustration: "🏰",
      visuel: "14 juillet 1789",
      contenu: [
        "Le peuple de Paris craint que le roi n'écrase l'Assemblée par la force",
        "Le 14 juillet 1789, les Parisiens prennent la forteresse de la Bastille",
        "La Bastille est le symbole de l'arbitraire royal",
        "Repère à retenir : 14 juillet 1789",
      ],
      voixOff:
        "À Paris, la peur monte : le roi rassemble des troupes et le peuple craint qu'il n'écrase l'Assemblée. Le quatorze juillet 1789, les Parisiens partent chercher des armes et s'emparent de la Bastille, une forteresse-prison qui symbolise l'arbitraire royal. Cet événement marque le début de la Révolution populaire. C'est un repère de date essentiel.",
    },
    {
      titre: "L'été 1789 : la fin de l'Ancien Régime",
      illustration: "📜",
      visuel: "4 août + 26 août 1789",
      contenu: [
        "Nuit du 4 août 1789 : l'Assemblée abolit les privilèges",
        "26 août 1789 : Déclaration des droits de l'homme et du citoyen",
        "Liberté, égalité devant la loi, souveraineté de la nation",
        "L'Ancien Régime (société d'ordres, absolutisme) s'effondre",
      ],
      voixOff:
        "Dans la nuit du quatre août 1789, les députés abolissent les privilèges : la société d'ordres disparaît. Le vingt-six août, ils adoptent la Déclaration des droits de l'homme et du citoyen, qui proclame la liberté, l'égalité devant la loi et la souveraineté de la nation. En quelques semaines, l'Ancien Régime s'est effondré.",
    },
    {
      titre: "La monarchie constitutionnelle (1789-1792)",
      illustration: "👑",
      visuel: "Constitution de 1791",
      contenu: [
        "La Constitution de 1791 limite les pouvoirs du roi",
        "L'Assemblée vote les lois, le roi dirige le gouvernement",
        "Juin 1791 : Louis XVI tente de fuir, il est arrêté à Varennes",
        "La confiance envers le roi est brisée ; la guerre éclate en avril 1792",
      ],
      voixOff:
        "La France devient une monarchie constitutionnelle : la Constitution de 1791 partage le pouvoir entre le roi et une assemblée élue. Mais en juin 1791, Louis XVI tente de fuir à l'étranger et il est arrêté à Varennes : la confiance est brisée. En avril 1792, la France déclare la guerre à l'Autriche, et les défaites aggravent la crise.",
    },
    {
      titre: "1792 : la Ière République",
      illustration: "🇫🇷",
      visuel: "21-22 septembre 1792",
      contenu: [
        "10 août 1792 : le peuple prend le palais des Tuileries, le roi est suspendu",
        "21 septembre 1792 : la Convention abolit la royauté",
        "22 septembre 1792 : début de la Ière République",
        "21 janvier 1793 : Louis XVI, condamné pour trahison, est guillotiné",
      ],
      voixOff:
        "Le dix août 1792, les Parisiens prennent d'assaut le palais des Tuileries et le roi est suspendu. Une nouvelle assemblée, la Convention, élue au suffrage universel masculin, abolit la royauté le vingt-et-un septembre 1792 : c'est le début de la Première République. Jugé pour trahison, Louis XVI est guillotiné le vingt-et-un janvier 1793.",
    },
    {
      titre: "La Terreur (1793-1794)",
      illustration: "🗡️",
      visuel: "1793-1794",
      contenu: [
        "La République est menacée : guerre étrangère, révoltes intérieures (Vendée)",
        "Robespierre et le Comité de salut public imposent la Terreur",
        "Les suspects sont jugés et souvent guillotinés",
        "27 juillet 1794 (9 thermidor an II) : Robespierre est renversé et exécuté",
      ],
      voixOff:
        "En 1793, la République est en danger : guerre contre l'Europe, révoltes comme celle de Vendée. Robespierre et le Comité de salut public gouvernent alors par la Terreur : les suspects sont arrêtés, jugés rapidement et souvent guillotinés. Le vingt-sept juillet 1794, le neuf thermidor selon le calendrier révolutionnaire, Robespierre est renversé et exécuté à son tour. La Terreur prend fin.",
    },
    {
      titre: "Napoléon : du Consulat à l'Empire",
      illustration: "🦅",
      visuel: "2 décembre 1804",
      contenu: [
        "9-10 novembre 1799 (18 brumaire) : coup d'État du général Bonaparte",
        "Consul, il rétablit l'ordre et fait rédiger le Code civil (1804)",
        "2 décembre 1804 : Napoléon se fait sacrer empereur à Notre-Dame de Paris",
        "L'Empire conserve l'égalité devant la loi mais limite les libertés",
      ],
      voixOff:
        "Le dix-huit brumaire, c'est-à-dire les neuf et dix novembre 1799, le général Napoléon Bonaparte prend le pouvoir par un coup d'État. Devenu Premier consul, il rétablit l'ordre et fait rédiger le Code civil en 1804, qui garantit l'égalité devant la loi. Le deux décembre 1804, il se fait sacrer empereur des Français à Notre-Dame de Paris. L'Empire conserve certains acquis de la Révolution, mais limite fortement les libertés.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌",
      contenu: [
        "Causes : société d'ordres injuste, crise financière, idées des Lumières",
        "1789 : États généraux, 14 juillet, abolition des privilèges (4 août), DDHC (26 août)",
        "1792 : chute de la monarchie, proclamation de la Ière République",
        "1793-1794 : la Terreur ; 1804 : Napoléon empereur, Code civil",
      ],
      voixOff:
        "Résumons. La Révolution naît de l'injustice de la société d'ordres, de la crise financière et des idées des Lumières. En 1789, tout bascule : États généraux, prise de la Bastille le quatorze juillet, abolition des privilèges le quatre août, Déclaration des droits de l'homme le vingt-six août. En 1792, la monarchie tombe et la Première République est proclamée. Après la Terreur, Napoléon prend le pouvoir et se fait sacrer empereur en 1804. Bravo, tu maîtrises les grandes étapes de la Révolution et de l'Empire !",
    },
  ],
  fiche: {
    intro:
      "Entre 1789 et 1815, la France passe de la monarchie absolue à la République puis à l'Empire. La Révolution française détruit l'Ancien Régime et fonde une société nouvelle basée sur la liberté et l'égalité devant la loi.",
    sections: [
      {
        titre: "Les causes de la Révolution",
        points: [
          "Société d'ordres inégalitaire : clergé et noblesse privilégiés, tiers état qui paie l'impôt",
          "Crise financière : l'État est endetté (notamment par la guerre d'Amérique)",
          "Crise économique : mauvaises récoltes de 1788, pain très cher",
          "Idées des Lumières contre l'absolutisme et les privilèges ; cahiers de doléances",
        ],
      },
      {
        titre: "L'année 1789",
        points: [
          "5 mai : ouverture des États généraux à Versailles",
          "17 juin : Assemblée nationale ; 20 juin : serment du Jeu de paume",
          "14 juillet : prise de la Bastille par le peuple de Paris",
          "Nuit du 4 août : abolition des privilèges ; 26 août : Déclaration des droits de l'homme et du citoyen",
        ],
      },
      {
        titre: "De la monarchie constitutionnelle à la République",
        points: [
          "Constitution de 1791 : le roi partage le pouvoir avec une assemblée élue",
          "Juin 1791 : fuite du roi arrêtée à Varennes ; avril 1792 : guerre contre l'Autriche",
          "10 août 1792 : prise des Tuileries, chute de la monarchie",
          "21 septembre 1792 : abolition de la royauté, la Ière République commence ; 21 janvier 1793 : exécution de Louis XVI",
        ],
      },
      {
        titre: "La Terreur (1793-1794)",
        points: [
          "République menacée : guerre étrangère et révoltes intérieures (Vendée)",
          "Robespierre et le Comité de salut public gouvernent par la Terreur : arrestations et exécutions des suspects",
          "27 juillet 1794 (9 thermidor) : chute et exécution de Robespierre",
        ],
      },
      {
        titre: "Napoléon Bonaparte",
        points: [
          "Coup d'État du 18 brumaire (9-10 novembre 1799) : Bonaparte devient Premier consul",
          "1804 : Code civil, qui fixe l'égalité devant la loi",
          "2 décembre 1804 : sacre de Napoléon Ier, empereur des Français",
          "L'Empire garde des acquis de 1789 mais restreint les libertés ; il s'effondre en 1815 (Waterloo)",
        ],
      },
      {
        titre: "Repères de dates",
        points: [
          "14 juillet 1789 : prise de la Bastille",
          "26 août 1789 : Déclaration des droits de l'homme et du citoyen",
          "21-22 septembre 1792 : proclamation de la Ière République",
          "1804 : sacre de Napoléon et Code civil",
        ],
      },
    ],
    audio:
      "Fiche de révision : la Révolution française et l'Empire. En 1789, la France est une monarchie absolue avec une société divisée en trois ordres, où le tiers état paie presque tous les impôts. La crise financière et les idées des Lumières poussent Louis XVI à réunir les États généraux le 5 mai 1789. Les députés du tiers état se proclament Assemblée nationale, puis le peuple prend la Bastille le 14 juillet 1789. Dans la nuit du 4 août, les privilèges sont abolis, et le 26 août est adoptée la Déclaration des droits de l'homme et du citoyen. Après l'échec de la monarchie constitutionnelle et la fuite du roi à Varennes, la royauté est abolie le 21 septembre 1792 : c'est la Première République. Louis XVI est guillotiné en janvier 1793, puis Robespierre impose la Terreur jusqu'en 1794. Enfin, Napoléon Bonaparte prend le pouvoir en 1799, fait rédiger le Code civil et se fait sacrer empereur le 2 décembre 1804.",
  },
  memoCards: [
    { recto: "Quels sont les trois ordres de la société d'Ancien Régime ?", verso: "Le clergé, la noblesse et le tiers état (environ 97 % de la population)." },
    { recto: "Que se passe-t-il le 14 juillet 1789 ?", verso: "Le peuple de Paris prend la Bastille, symbole de l'arbitraire royal." },
    { recto: "Que se passe-t-il dans la nuit du 4 août 1789 ?", verso: "L'Assemblée nationale abolit les privilèges : fin de la société d'ordres." },
    { recto: "Qu'est-ce que la DDHC et sa date ?", verso: "La Déclaration des droits de l'homme et du citoyen, adoptée le 26 août 1789 : liberté, égalité devant la loi, souveraineté de la nation." },
    { recto: "Qu'est-ce que le serment du Jeu de paume ?", verso: "Le 20 juin 1789, les députés jurent de ne pas se séparer avant d'avoir donné une constitution à la France." },
    { recto: "Quand la Ière République est-elle proclamée ?", verso: "La royauté est abolie le 21 septembre 1792 ; la République commence le 22 septembre 1792." },
    { recto: "Qu'est-ce que la Terreur ?", verso: "Politique menée par Robespierre et le Comité de salut public en 1793-1794 : arrestation et exécution des suspects pour sauver la République." },
    { recto: "Que se passe-t-il le 21 janvier 1793 ?", verso: "Louis XVI, condamné pour trahison par la Convention, est guillotiné à Paris." },
    { recto: "Que se passe-t-il le 2 décembre 1804 ?", verso: "Napoléon Bonaparte se fait sacrer empereur des Français à Notre-Dame de Paris." },
    { recto: "Qu'est-ce que le Code civil (1804) ?", verso: "Recueil de lois voulu par Napoléon : il garantit l'égalité devant la loi et la propriété, encore en vigueur aujourd'hui." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel ordre paie presque tous les impôts avant 1789 ?",
      choix: ["Le clergé", "La noblesse", "Le tiers état", "Les trois ordres à égalité"],
      bonneReponse: 2,
      explication: "Le tiers état, environ 97 % de la population, supporte presque toute la charge fiscale, contrairement aux deux ordres privilégiés.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Que prend le peuple de Paris le 14 juillet 1789 ?",
      choix: ["Le château de Versailles", "La Bastille", "Les Tuileries", "Notre-Dame"],
      bonneReponse: 1,
      explication: "Le 14 juillet 1789, les Parisiens s'emparent de la Bastille, forteresse-prison symbole de l'arbitraire royal.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "À quelle date la Déclaration des droits de l'homme et du citoyen est-elle adoptée ?",
      reponse: "Le 26 août 1789.",
      explication: "La DDHC, adoptée le 26 août 1789, proclame la liberté, l'égalité devant la loi et la souveraineté de la nation.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Qui se fait sacrer empereur des Français le 2 décembre 1804 ?",
      choix: ["Louis XVI", "Robespierre", "Napoléon Bonaparte", "Louis XVIII"],
      bonneReponse: 2,
      explication: "Napoléon Bonaparte se fait sacrer empereur à Notre-Dame de Paris le 2 décembre 1804.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux causes de la Révolution française.",
      reponse:
        "Par exemple : l'injustice de la société d'ordres (privilèges du clergé et de la noblesse), la crise financière de l'État, la cherté du pain après les mauvaises récoltes de 1788, ou la diffusion des idées des Lumières.",
      explication: "La Révolution résulte de causes sociales, financières, économiques et intellectuelles qui se combinent en 1789.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Que jurent les députés lors du serment du Jeu de paume (20 juin 1789) ?",
      choix: [
        "De renverser le roi",
        "De ne pas se séparer avant d'avoir donné une constitution à la France",
        "De supprimer les impôts",
        "De déclarer la guerre à l'Autriche",
      ],
      bonneReponse: 1,
      explication: "Les députés jurent de rester unis jusqu'à ce que la France ait une constitution : c'est un acte fondateur de la souveraineté nationale.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Que se passe-t-il dans la nuit du 4 août 1789 et pourquoi est-ce important ?",
      reponse:
        "L'Assemblée nationale abolit les privilèges. C'est la fin de la société d'ordres : tous les Français deviennent égaux en droits, l'Ancien Régime s'effondre.",
      explication: "L'abolition des privilèges met fin à des siècles d'inégalités juridiques entre les ordres.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quel événement provoque la perte de confiance envers Louis XVI en juin 1791 ?",
      choix: [
        "La prise de la Bastille",
        "Sa fuite arrêtée à Varennes",
        "Le sacre de Napoléon",
        "La nuit du 4 août",
      ],
      bonneReponse: 1,
      explication: "En juin 1791, Louis XVI tente de fuir à l'étranger ; arrêté à Varennes, il apparaît comme un traître à la Révolution.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique pourquoi la monarchie tombe en 1792.",
      reponse:
        "La fuite à Varennes (juin 1791) a brisé la confiance envers le roi. La guerre déclarée à l'Autriche en avril 1792 tourne mal et le roi est soupçonné de trahison. Le 10 août 1792, le peuple prend les Tuileries et le roi est suspendu. Le 21 septembre 1792, la Convention abolit la royauté et la Ière République est proclamée.",
      explication: "La chute de la monarchie s'explique par la trahison supposée du roi et par la guerre, qui radicalisent la Révolution.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Qu'est-ce que la Terreur ? Donne ses dates, son principal acteur et sa fin.",
      reponse:
        "La Terreur (1793-1794) est une politique d'exception menée par Robespierre et le Comité de salut public pour sauver la République menacée par la guerre et les révoltes : les suspects sont arrêtés et souvent guillotinés. Elle prend fin avec la chute et l'exécution de Robespierre le 27 juillet 1794 (9 thermidor an II).",
      explication: "La Terreur sacrifie les libertés au nom du salut de la République ; elle s'arrête au 9 thermidor.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Comment Napoléon Bonaparte prend-il le pouvoir en novembre 1799 ?",
      choix: [
        "Il est élu président de la République",
        "Il est sacré empereur par le pape",
        "Par le coup d'État du 18 brumaire",
        "Il hérite du trône de Louis XVI",
      ],
      bonneReponse: 2,
      explication: "Les 9 et 10 novembre 1799 (18 brumaire an VIII), le général Bonaparte renverse le Directoire par un coup d'État et devient Premier consul.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Montre que Napoléon conserve certains acquis de la Révolution mais en abandonne d'autres.",
      reponse:
        "Il conserve l'égalité devant la loi et la fin des privilèges, inscrites dans le Code civil de 1804, ainsi que la propriété garantie. Mais il abandonne la liberté politique : presse censurée, opposants surveillés, et il rétablit un pouvoir personnel héréditaire en se faisant sacrer empereur en 1804.",
      explication: "Napoléon stabilise l'héritage social de 1789 (égalité, Code civil) tout en supprimant la liberté politique et la République.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "En quelle année commence la Révolution française ?",
      choix: ["1789", "1792", "1799", "1804"],
      bonneReponse: 0,
      explication: "La Révolution commence en 1789, avec les États généraux puis la prise de la Bastille le 14 juillet.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Que proclame la Déclaration des droits de l'homme et du citoyen ?",
      reponse: "La liberté, l'égalité devant la loi et la souveraineté de la nation.",
      explication: "Adoptée le 26 août 1789, la DDHC fonde les principes de la France nouvelle.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quand la royauté est-elle abolie en France ?",
      choix: ["Le 14 juillet 1789", "Le 21 septembre 1792", "Le 21 janvier 1793", "Le 2 décembre 1804"],
      bonneReponse: 1,
      explication: "La Convention abolit la royauté le 21 septembre 1792 ; la Ière République commence le 22 septembre.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Qui dirige la France pendant la Terreur ?",
      reponse: "Robespierre et le Comité de salut public (1793-1794).",
      explication: "Robespierre domine le Comité de salut public jusqu'à sa chute le 27 juillet 1794.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Cite deux réalisations de Napoléon en 1804.",
      reponse: "Le Code civil (égalité devant la loi) et son sacre comme empereur des Français le 2 décembre 1804.",
      explication: "1804 est l'année du Code civil et du sacre : un repère à connaître.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — La Révolution française et l'Empire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Pourquoi Louis XVI réunit-il les États généraux le 5 mai 1789 ?",
          choix: [
            "Pour déclarer la guerre à l'Angleterre",
            "Pour résoudre la crise financière de l'État",
            "Pour abolir la monarchie",
            "Pour rédiger le Code civil",
          ],
          bonneReponse: 1,
          explication: "L'État est ruiné : le roi convoque les États généraux pour trouver de nouvelles ressources, notamment de nouveaux impôts.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quels sont les trois ordres de la société française avant 1789 ?",
          reponse: "Le clergé, la noblesse et le tiers état.",
          explication: "Les deux premiers ordres sont privilégiés ; le tiers état regroupe environ 97 % des Français.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Classe ces événements de 1789 dans l'ordre chronologique :",
          choix: [
            "Bastille → États généraux → DDHC → 4 août",
            "États généraux → Bastille → 4 août → DDHC",
            "DDHC → 4 août → Bastille → États généraux",
            "États généraux → DDHC → Bastille → 4 août",
          ],
          bonneReponse: 1,
          explication: "5 mai : États généraux ; 14 juillet : Bastille ; nuit du 4 août : abolition des privilèges ; 26 août : DDHC.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Qu'est-ce qu'une monarchie constitutionnelle ? Quand la France en devient-elle une ?",
          reponse:
            "Un régime où les pouvoirs du roi sont limités par une constitution : le roi gouverne mais une assemblée élue vote les lois. La France devient une monarchie constitutionnelle avec la Constitution de 1791.",
          explication: "La Constitution de 1791 met fin à la monarchie absolue en séparant les pouvoirs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Pourquoi Louis XVI est-il exécuté le 21 janvier 1793 ?",
          reponse:
            "Après la chute de la monarchie le 10 août 1792, la Convention le juge pour trahison (notamment ses contacts avec les ennemis de la France en guerre) et le condamne à mort. Il est guillotiné le 21 janvier 1793.",
          explication: "Le procès du roi marque la rupture définitive avec la monarchie.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : montre comment l'année 1789 met fin à l'Ancien Régime (une quinzaine de lignes, avec des dates précises).",
          reponse:
            "Introduction : en quelques mois, l'année 1789 détruit la monarchie absolue et la société d'ordres. Première partie : la souveraineté change de mains ; le 5 mai, les États généraux s'ouvrent à Versailles, le 17 juin les députés du tiers état se proclament Assemblée nationale et jurent le 20 juin, au Jeu de paume, de donner une constitution à la France. Deuxième partie : le peuple entre en révolution ; le 14 juillet, les Parisiens prennent la Bastille, symbole de l'arbitraire royal, et les campagnes s'embrasent pendant la Grande Peur. Troisième partie : l'Ancien Régime est aboli en droit ; dans la nuit du 4 août, les privilèges sont supprimés, et le 26 août la Déclaration des droits de l'homme et du citoyen proclame la liberté, l'égalité devant la loi et la souveraineté de la nation. Conclusion : à la fin de l'été 1789, la monarchie absolue et la société d'ordres ont disparu ; une France nouvelle commence.",
          explication:
            "Le développement construit doit être organisé (introduction, parties, conclusion) et s'appuyer sur les dates clés : 5 mai, 20 juin, 14 juillet, 4 août, 26 août 1789.",
        },
      ],
    },
    {
      titre: "Examen 2 — La Révolution française et l'Empire",
      dureeMinutes: 30,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel document adopté le 26 août 1789 proclame la liberté et l'égalité ?",
          choix: [
            "La Constitution de 1791",
            "Le Code civil",
            "La Déclaration des droits de l'homme et du citoyen",
            "Les cahiers de doléances",
          ],
          bonneReponse: 2,
          explication: "La DDHC du 26 août 1789 proclame les droits naturels : liberté, égalité devant la loi, souveraineté nationale.",
        },
        {
          type: "ouverte",
          difficulte: "facile",
          question: "Quand la Ière République est-elle proclamée ?",
          reponse: "La royauté est abolie le 21 septembre 1792 et la République commence le 22 septembre 1792.",
          explication: "Septembre 1792 est un repère de date essentiel du programme.",
        },
        {
          type: "qcm",
          difficulte: "moyen",
          question: "Pourquoi la Terreur est-elle mise en place en 1793 ?",
          choix: [
            "Pour préparer le sacre de Napoléon",
            "Parce que la République est menacée par la guerre et les révoltes",
            "Pour rétablir Louis XVI sur le trône",
            "Pour abolir les privilèges",
          ],
          bonneReponse: 1,
          explication: "Face à la guerre étrangère et aux révoltes intérieures comme la Vendée, la Convention adopte des mesures d'exception : la Terreur.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Comment se termine la Terreur ?",
          reponse: "Par la chute de Robespierre, arrêté et guillotiné le 27 juillet 1794 (9 thermidor an II).",
          explication: "Le 9 thermidor met fin à la Terreur et ouvre une nouvelle phase de la Révolution.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Cite deux acquis de la Révolution conservés par Napoléon et une liberté qu'il supprime ou limite.",
          reponse:
            "Il conserve l'égalité devant la loi et l'abolition des privilèges (inscrites dans le Code civil de 1804). En revanche, il limite la liberté de la presse et la liberté politique (censure, surveillance des opposants).",
          explication: "L'Empire consolide l'héritage social de 1789 mais établit un pouvoir autoritaire.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question:
            "Développement construit : raconte comment Napoléon Bonaparte arrive au pouvoir et transforme la France entre 1799 et 1804.",
          reponse:
            "Introduction : après la Terreur et le Directoire, la France cherche la stabilité ; un général ambitieux en profite. Première partie : la prise du pouvoir ; auréolé de ses victoires militaires, Bonaparte renverse le Directoire par le coup d'État du 18 brumaire (9-10 novembre 1799) et devient Premier consul, concentrant l'essentiel du pouvoir. Deuxième partie : la réorganisation de la France ; il rétablit l'ordre et la paix religieuse, crée les lycées et la Banque de France, et fait rédiger le Code civil (1804), qui garantit l'égalité devant la loi et la propriété. Troisième partie : vers l'Empire ; le 2 décembre 1804, il se fait sacrer empereur des Français à Notre-Dame de Paris ; le régime devient autoritaire et héréditaire, les libertés sont limitées. Conclusion : en cinq ans, Napoléon passe de général à empereur, stabilisant certains acquis de la Révolution tout en mettant fin à la République.",
          explication:
            "On attend les étapes datées (18 brumaire 1799, Code civil 1804, sacre du 2 décembre 1804) et l'idée d'un pouvoir de plus en plus personnel.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Causes de la Révolution : société d'ordres injuste, crise financière, cherté du pain, idées des Lumières.",
    "Repère brevet : 14 juillet 1789, prise de la Bastille ; nuit du 4 août 1789, abolition des privilèges.",
    "Repère brevet : 26 août 1789, Déclaration des droits de l'homme et du citoyen (liberté, égalité, souveraineté de la nation).",
    "Repère brevet : 21-22 septembre 1792, proclamation de la Ière République ; 21 janvier 1793, exécution de Louis XVI.",
    "1793-1794 : la Terreur, menée par Robespierre et le Comité de salut public, s'achève au 9 thermidor (27 juillet 1794).",
    "Repère brevet : 1804, Napoléon Ier sacré empereur (2 décembre) et Code civil ; l'Empire garde l'égalité mais limite les libertés.",
  ],
};

export default chapitre;
