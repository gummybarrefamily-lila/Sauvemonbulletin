import type { Chapitre } from "../types";

export const chapitre: Chapitre = {
  slug: "ropa-compras",
  titre: "Les vêtements et les achats",
  matiere: "espagnol",
  niveau: "4eme",
  langueVoix: "es-ES",
  description:
    "Faire du shopping en espagnol : le vocabulaire des vêtements et des couleurs, les démonstratifs (este/ese/aquel), la construction « me queda bien/mal », les comparatifs et le verbe costar pour parler des prix.",
  objectifs: [
    "Nommer les vêtements et accorder les couleurs en genre et en nombre",
    "Utiliser les démonstratifs este, ese, aquel selon la distance",
    "Employer la construction me queda/te queda/le queda bien/mal",
    "Comparer avec más… que, menos… que, tan… como",
    "Demander et comprendre un prix avec el verbe costar (o>ue)",
  ],
  slides: [
    {
      titre: "Le vocabulaire des vêtements",
      illustration: "👗",
      visuel: "La camisa, el pantalón, los zapatos",
      contenu: [
        "La camisa, la camiseta : la chemise, le tee-shirt",
        "El pantalón, la falda, el vestido : le pantalon, la jupe, la robe",
        "La chaqueta, el abrigo, el jersey : la veste, le manteau, le pull",
        "Los zapatos, las zapatillas : les chaussures, les baskets",
      ],
      voixOff:
        "Voici le vocabulaire des vêtements. La camisa, la chemise, et la camiseta, le tee-shirt. El pantalón, le pantalon, la falda, la jupe, et el vestido, la robe. Pour le froid, on porte la chaqueta, la veste, el abrigo, le manteau, ou el jersey, le pull. Aux pieds, on met los zapatos, les chaussures, ou las zapatillas, les baskets.",
    },
    {
      titre: "Les couleurs et leur accord",
      illustration: "🎨",
      visuel: "Rojo/roja, verde, azul",
      contenu: [
        "Couleurs en -o : rojo/roja/rojos/rojas (accord en genre et nombre)",
        "Couleurs en -e ou consonne : verde/verdes, azul/azules (invariables en genre)",
        "Una camisa blanca, unos zapatos negros",
        "Naranja et rosa restent souvent invariables : camisas naranja",
      ],
      voixOff:
        "Les couleurs sont des adjectifs qui s'accordent avec le nom. Celles qui se terminent en -o changent au féminin : rojo devient roja, et au pluriel rojos, rojas. Celles qui se terminent en -e ou en consonne, comme verde ou azul, ne changent pas au féminin, mais prennent un s au pluriel : verdes, azules. On dit una camisa blanca, une chemise blanche, ou unos zapatos negros, des chaussures noires. Attention, naranja et rosa restent souvent invariables.",
    },
    {
      titre: "Les démonstratifs : este, ese, aquel",
      illustration: "👉",
      visuel: "Este / Ese / Aquel",
      contenu: [
        "Este/esta/estos/estas : ce…-ci (près de moi)",
        "Ese/esa/esos/esas : ce…-là (près de toi)",
        "Aquel/aquella/aquellos/aquellas : ce…-là (loin de nous deux)",
        "Este vestido es bonito, pero aquella falda es más elegante",
      ],
      voixOff:
        "Pour désigner un vêtement, on utilise un démonstratif qui indique la distance. Este, esta, estos, estas désignent ce qui est près de moi : este vestido. Ese, esa, esos, esas désignent ce qui est près de toi : ese pantalón. Aquel, aquella, aquellos, aquellas désignent ce qui est loin de nous deux : aquella falda. Par exemple, este vestido es bonito, pero aquella falda es más elegante.",
    },
    {
      titre: "Aller faire du shopping",
      illustration: "🛍️",
      visuel: "Probarse / La talla",
      contenu: [
        "Probarse (o>ue, pronominal) : essayer — Me pruebo la chaqueta",
        "La talla : la taille (vêtements) — El número : la pointure (chaussures)",
        "¿Tiene esta camisa en talla M? : avez-vous cette chemise en taille M ?",
        "El probador : la cabine d'essayage",
      ],
      voixOff:
        "Dans un magasin, on utilise le verbe probarse, essayer, qui est à la fois pronominal et à diphtongue o>ue : me pruebo, te pruebas, se prueba. On demande la talla pour un vêtement, la taille, et el número pour des chaussures, la pointure. Une phrase utile : ¿tiene esta camisa en talla M?, avez-vous cette chemise en taille M ? Et pour essayer, on va dans el probador, la cabine d'essayage.",
    },
    {
      titre: "Me queda bien / mal",
      illustration: "✅",
      visuel: "Esta camisa te queda bien",
      contenu: [
        "Construction comme gustar : pronom + queda(n) + sujet",
        "Esta camisa me queda bien : cette chemise me va bien",
        "Estos pantalones te quedan mal : ce pantalon te va mal",
        "¿Cómo me queda este vestido? : comment me va cette robe ?",
      ],
      voixOff:
        "Pour dire si un vêtement te va bien, on utilise quedar, qui se construit exactement comme gustar : le pronom d'objet indirect vient avant, et le verbe s'accorde avec le vêtement. Esta camisa me queda bien, cette chemise me va bien. Estos pantalones te quedan mal, ce pantalon te va mal — au pluriel, on ajoute un n. Pour demander un avis, on dit ¿cómo me queda este vestido?, comment me va cette robe ?",
    },
    {
      titre: "Comparer les vêtements",
      illustration: "⚖️",
      visuel: "Más… que / Tan… como",
      contenu: [
        "Más + adjectif + que : plus… que — Este jersey es más caro que ese",
        "Menos + adjectif + que : moins… que — Es menos elegante que aquel vestido",
        "Tan + adjectif + como : aussi… que — Es tan bonita como la otra",
        "Mejor / peor : meilleur / pire (comparatifs irréguliers)",
      ],
      voixOff:
        "Pour comparer deux vêtements, on utilise más suivi de l'adjectif puis que : este jersey es más caro que ese, ce pull est plus cher que celui-là. Avec menos, on exprime l'infériorité : es menos elegante que aquel vestido. Pour dire que deux choses sont égales, on utilise tan suivi de l'adjectif puis como : es tan bonita como la otra. Enfin, mejor et peor, meilleur et pire, sont des comparatifs irréguliers.",
    },
    {
      titre: "Demander le prix : costar",
      illustration: "💶",
      visuel: "¿Cuánto cuesta?",
      contenu: [
        "Costar (o>ue) : cuesta (il/elle coûte), cuestan (ils/elles coûtent)",
        "¿Cuánto cuesta esta camiseta? : combien coûte ce tee-shirt ?",
        "Cuesta quince euros / Cuestan treinta euros",
        "Es barato/a / Es caro/a : c'est bon marché / c'est cher",
      ],
      voixOff:
        "Pour parler du prix, le verbe costar suit la diphtongue o>ue : cuesta pour un seul objet, cuestan pour plusieurs. ¿Cuánto cuesta esta camiseta?, combien coûte ce tee-shirt ? On répond cuesta quince euros, ou cuestan treinta euros pour plusieurs articles. On qualifie aussi le prix avec es barato, c'est bon marché, ou es caro, c'est cher.",
    },
    {
      titre: "Dialogue dans la boutique",
      illustration: "🛒",
      visuel: "En la tienda",
      contenu: [
        "— Hola, ¿puedo probarme esta chaqueta? — Sí, el probador está allí.",
        "— ¿Qué tal te queda? — Me queda un poco grande.",
        "— ¿Tiene una talla más pequeña? — Sí, aquí tiene.",
        "— Perfecto. ¿Cuánto cuesta? — Cuesta cuarenta euros.",
      ],
      voixOff:
        "Voici un dialogue en boutique. Hola, ¿puedo probarme esta chaqueta?, bonjour, puis-je essayer cette veste ? Sí, el probador está allí, oui, la cabine d'essayage est là-bas. ¿Qué tal te queda? Me queda un poco grande, comment te va-t-elle ? Elle me va un peu grande. ¿Tiene una talla más pequeña? Sí, aquí tiene, avez-vous une taille plus petite ? Oui, voici. Perfecto, ¿cuánto cuesta? Cuesta cuarenta euros.",
    },
    {
      titre: "Ce qu'il faut retenir",
      illustration: "🏆",
      visuel: "📌 Este/ese/aquel + queda + costar",
      contenu: [
        "Les couleurs s'accordent en genre et nombre : rojo/roja, verde/verdes",
        "Démonstratifs : este (ici), ese (là), aquel (là-bas)",
        "Quedar fonctionne comme gustar : me queda bien / te quedan mal",
        "Comparer : más/menos… que, tan… como — Prix : ¿cuánto cuesta/cuestan?",
      ],
      voixOff:
        "Résumons. Les couleurs s'accordent en genre et en nombre avec le vêtement, sauf certaines comme naranja. Les démonstratifs este, ese et aquel indiquent la distance : ici, là, ou là-bas. Le verbe quedar fonctionne exactement comme gustar : me queda bien, te quedan mal. Pour comparer, utilise más… que, menos… que ou tan… como. Et pour le prix, pose la question ¿cuánto cuesta? ou ¿cuánto cuestan? selon le nombre d'articles.",
    },
  ],
  fiche: {
    intro:
      "Pour faire du shopping en espagnol, il faut connaître le vocabulaire des vêtements et des couleurs, savoir utiliser les démonstratifs, la construction quedar bien/mal, les comparatifs et le verbe costar.",
    sections: [
      {
        titre: "Vêtements et couleurs",
        points: [
          "La camisa, el pantalón, la falda, el vestido, la chaqueta, los zapatos",
          "Couleurs en -o : rojo/roja — Couleurs en -e/consonne : verde, azul (invariables en genre)",
        ],
      },
      {
        titre: "Les démonstratifs",
        points: [
          "Este/esta/estos/estas : ce…-ci, près de moi",
          "Ese/esa/esos/esas : ce…-là, près de toi",
          "Aquel/aquella/aquellos/aquellas : ce…-là, loin de nous deux",
        ],
      },
      {
        titre: "Quedar bien/mal et les comparatifs",
        points: [
          "Quedar se construit comme gustar : me queda bien, te quedan mal",
          "Más… que (plus que), menos… que (moins que), tan… como (aussi que)",
          "Mejor/peor : comparatifs irréguliers de bueno/malo",
        ],
      },
      {
        titre: "Faire du shopping",
        points: [
          "Probarse (o>ue, pronominal) : essayer — La talla, el número, el probador",
          "Costar (o>ue) : ¿Cuánto cuesta/cuestan? — Es barato/caro",
        ],
      },
    ],
    audio:
      "Fiche de révision : les vêtements et les achats en espagnol. Le vocabulaire clé comprend la camisa, el pantalón, la falda, el vestido, la chaqueta et los zapatos. Les couleurs s'accordent : rojo devient roja au féminin, mais verde et azul restent invariables en genre. Les démonstratifs este, ese et aquel indiquent la distance : este est proche de moi, ese est proche de toi, aquel est loin de nous deux. Le verbe quedar fonctionne comme gustar : esta camisa me queda bien, estos pantalones te quedan mal. Pour comparer, on utilise más… que, menos… que et tan… como. Enfin, pour parler du prix, le verbe costar suit la diphtongue o>ue : cuesta pour un objet, cuestan pour plusieurs.",
  },
  memoCards: [
    { recto: "La camisa, el pantalón, la falda, el vestido", verso: "La chemise, le pantalon, la jupe, la robe." },
    { recto: "Rojo/roja/rojos/rojas", verso: "Rouge : s'accorde en genre et nombre (couleurs en -o)." },
    { recto: "Verde / Azul", verso: "Vert / bleu : invariables en genre, +s au pluriel (verdes, azules)." },
    { recto: "Este / Ese / Aquel", verso: "Ce…-ci (près de moi) / ce…-là (près de toi) / ce…-là (loin de nous deux)." },
    { recto: "Me queda bien / Te quedan mal", verso: "Ça me va bien / ça te va mal (comme gustar)." },
    { recto: "Más… que / Menos… que / Tan… como", verso: "Plus… que / moins… que / aussi… que." },
    { recto: "Probarse (o>ue) : me pruebo", verso: "Essayer (verbe pronominal à diphtongue)." },
    { recto: "¿Cuánto cuesta? / Cuesta…", verso: "Combien ça coûte ? / Ça coûte… (costar, o>ue)." },
  ],
  exercices: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « la jupe » ?",
      choix: ["la camisa", "la falda", "el vestido", "el jersey"],
      bonneReponse: 1,
      explication: "La falda signifie la jupe.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Quel est le féminin de « rojo » ?",
      choix: ["rojo", "roja", "rojos", "rojes"],
      bonneReponse: 1,
      explication: "Les couleurs en -o changent en -a au féminin.",
    },
    {
      type: "ouverte",
      difficulte: "facile",
      question: "Traduis : « J'aime ce pull-ci mais pas cette veste-là. » (utilise este et esa)",
      reponse: "Me gusta este jersey pero no esa chaqueta.",
      explication: "Este pour un objet proche, esa pour un objet plus loin.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « combien ça coûte ? » ?",
      choix: ["¿Cuánto es?", "¿Cuánto cuesta?", "¿Cuánto vale la pena?", "¿Cuánto queda?"],
      bonneReponse: 1,
      explication: "¿Cuánto cuesta? est la question la plus courante pour demander un prix.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle phrase utilise correctement « quedar » ?",
      choix: ["Esta camisa me queda bien", "Esta camisa quedo bien", "Yo queda bien esta camisa", "Esta camisa quedas bien"],
      bonneReponse: 0,
      explication: "Quedar s'accorde avec le sujet (la camisa) et le pronom se place devant : me queda.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ces chaussures sont plus chères que celles-là (aquellas). »",
      reponse: "Estos zapatos son más caros que aquellos.",
      explication: "Más + adjectif + que pour comparer ; aquellos remplace le nom déjà cité.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Conjugue « probarse » avec « yo » et traduis « je peux essayer cette chemise ? ».",
      reponse: "Me pruebo. ¿Puedo probarme esta camisa?",
      explication: "Probarse est pronominal et à diphtongue o>ue : me pruebo.",
    },
    {
      type: "qcm",
      difficulte: "moyen",
      question: "Quelle est la forme correcte de « aquel » au féminin pluriel ?",
      choix: ["aquel", "aquella", "aquellas", "aquellos"],
      bonneReponse: 2,
      explication: "Aquellas est la forme féminin pluriel de aquel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Explique la différence entre « ese » et « aquel », avec un exemple pour chacun.",
      reponse:
        "Ese désigne un objet proche de la personne à qui l'on parle : ese pantalón que llevas. Aquel désigne un objet éloigné des deux interlocuteurs : aquella tienda al final de la calle. Este, ese et aquel forment une échelle de distance : ici, là, là-bas.",
      explication: "Les trois démonstratifs marquent trois degrés de distance différents.",
    },
    {
      type: "qcm",
      difficulte: "avance",
      question: "Dans « Estos zapatos me quedan tan bien como aquellos », quelle structure grammaticale est utilisée ?",
      choix: [
        "Un comparatif de supériorité",
        "Un comparatif d'égalité (tan… como)",
        "Un comparatif d'infériorité",
        "Un superlatif"
      ],
      bonneReponse: 1,
      explication: "Tan… como exprime une égalité : aussi bien que.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Rédige un dialogue en boutique (5-6 répliques) avec un démonstratif, la construction quedar et le verbe costar.",
      reponse:
        "— Hola, ¿puedo probarme este vestido? — Sí, claro, el probador está allí. — ¿Qué tal me queda? — Te queda muy bien. — ¿Cuánto cuesta? — Cuesta treinta y cinco euros.",
      explication: "Le dialogue combine este, queda et cuesta dans un contexte cohérent.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Compare deux vêtements que tu imagines (couleur, prix, comment ils te vont) en 4-5 phrases avec au moins un comparatif.",
      reponse:
        "Esta camiseta azul es más barata que aquella camiseta roja. Me queda muy bien, pero aquella me queda un poco grande. La azul cuesta doce euros y la roja cuesta veinte euros. Prefiero la azul porque es más cómoda.",
      explication: "Le texte utilise más… que, quedar et costar de façon cohérente.",
    },
  ],
  revisionFinChapitre: [
    {
      type: "qcm",
      difficulte: "facile",
      question: "Comment dit-on « les chaussures » ?",
      choix: ["las camisetas", "los zapatos", "los pantalones", "las chaquetas"],
      bonneReponse: 1,
      explication: "Los zapatos signifie les chaussures.",
    },
    {
      type: "qcm",
      difficulte: "facile",
      question: "« Este » désigne un objet :",
      choix: ["loin de nous deux", "près de moi", "près de toi", "invisible"],
      bonneReponse: 1,
      explication: "Este désigne ce qui est proche de la personne qui parle.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Ce pantalon-là (ese) te va mal. »",
      reponse: "Ese pantalón te queda mal.",
      explication: "Ese pour un objet proche de l'interlocuteur ; queda s'accorde avec pantalón, singulier.",
    },
    {
      type: "ouverte",
      difficulte: "moyen",
      question: "Traduis : « Combien coûtent ces baskets ? »",
      reponse: "¿Cuánto cuestan estas zapatillas?",
      explication: "Cuestan au pluriel car zapatillas est pluriel.",
    },
    {
      type: "ouverte",
      difficulte: "avance",
      question: "Décris une tenue (couleur, vêtement) en 3 phrases avec un démonstratif, quedar et un comparatif.",
      reponse: "Esta falda verde me queda muy bien. Es más elegante que aquel vestido. Cuesta menos que la chaqueta azul.",
      explication: "Le texte combine démonstratif, quedar et comparatif.",
    },
  ],
  examens: [
    {
      titre: "Examen 1 — Les vêtements et les achats",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « le manteau » ?",
          choix: ["el jersey", "el abrigo", "la chaqueta", "la camisa"],
          bonneReponse: 1,
          explication: "El abrigo signifie le manteau.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "Quel est le pluriel de « azul » ?",
          choix: ["azuls", "azules", "azulas", "azulos"],
          bonneReponse: 1,
          explication: "Azul, terminé par une consonne, prend -es au pluriel : azules.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « Cette veste-ci me va mieux que celle-là (esa). »",
          reponse: "Esta chaqueta me queda mejor que esa.",
          explication: "Mejor est le comparatif irrégulier de bien/bueno.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Conjugue « costar » à la troisième personne du singulier et du pluriel, puis traduis « ce jean coûte vingt-cinq euros ».",
          reponse: "Cuesta, cuestan. Este vaquero cuesta veinticinco euros.",
          explication: "Costar suit la diphtongue o>ue : cuesta/cuestan.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Rédige une scène de shopping complète (6 phrases minimum) : essayage, avis avec quedar, comparaison et prix.",
          reponse:
            "Hola, ¿puedo probarme este vestido azul? Sí, el probador está a la derecha. ¿Qué tal me queda? Te queda genial, mejor que el otro vestido. Es más elegante y menos caro. ¿Cuánto cuesta? Cuesta cuarenta y cinco euros.",
          explication: "Le texte enchaîne essayage, avis, comparaison et prix de façon cohérente.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Pourquoi dit-on « estos pantalones te quedan bien » avec « quedan » et non « queda » ?",
          choix: [
            "Parce que pantalones est un mot toujours singulier en espagnol",
            "Parce que le verbe quedar s'accorde avec le sujet grammatical, ici « pantalones », pluriel",
            "C'est une erreur, il faudrait dire queda",
            "Parce que te impose toujours le pluriel"
          ],
          bonneReponse: 1,
          explication: "Comme gustar, quedar s'accorde avec ce qui produit l'effet, ici un nom pluriel.",
        },
      ],
    },
    {
      titre: "Examen 2 — Les vêtements et les achats",
      dureeMinutes: 25,
      questions: [
        {
          type: "qcm",
          difficulte: "facile",
          question: "Comment dit-on « la taille » (vêtements) ?",
          choix: ["el número", "la talla", "el probador", "la tienda"],
          bonneReponse: 1,
          explication: "La talla signifie la taille des vêtements.",
        },
        {
          type: "qcm",
          difficulte: "facile",
          question: "« Aquel » désigne un objet :",
          choix: ["près de moi", "près de toi", "loin de nous deux", "invisible"],
          bonneReponse: 2,
          explication: "Aquel désigne ce qui est éloigné des deux interlocuteurs.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Traduis : « J'essaie ces chaussures noires, elles ne sont pas trop chères. »",
          reponse: "Me pruebo estos zapatos negros, no son demasiado caros.",
          explication: "Probarse est pronominal ; negros s'accorde avec zapatos, masculin pluriel.",
        },
        {
          type: "ouverte",
          difficulte: "moyen",
          question: "Un vendeur te demande « ¿Qué tal le queda la chaqueta? ». Réponds en disant qu'elle est trop grande.",
          reponse: "Me queda demasiado grande.",
          explication: "Queda au singulier car la chaqueta est singulier ; demasiado grande précise la sensation.",
        },
        {
          type: "ouverte",
          difficulte: "avance",
          question: "Compare l'usage de « más… que » et « tan… como » en donnant un exemple pour chacun.",
          reponse:
            "Más… que exprime la supériorité : este jersey es más caro que aquel, ce pull est plus cher que celui-là. Tan… como exprime l'égalité : esta falda es tan bonita como aquella, cette jupe est aussi jolie que celle-là.",
          explication: "Más… que compare deux éléments inégaux, tan… como compare deux éléments égaux.",
        },
        {
          type: "qcm",
          difficulte: "avance",
          question: "Dans « Aquellas botas cuestan menos que estas », combien d'éléments grammaticaux étudiés dans ce chapitre reconnais-tu ?",
          choix: [
            "Un démonstratif seulement",
            "Un comparatif seulement",
            "Un démonstratif, un comparatif et le verbe costar",
            "Aucun élément du chapitre"
          ],
          bonneReponse: 2,
          explication: "Aquellas (démonstratif), menos que (comparatif) et cuestan (costar) sont tous présents.",
        },
      ],
    },
  ],
  syntheseRevisions: [
    "Vocabulaire clé : la camisa, el pantalón, la falda, el vestido, la chaqueta, los zapatos.",
    "Couleurs : accord en -o/-a (rojo/roja) ; invariables en genre pour -e/consonne (verde, azul).",
    "Démonstratifs : este (ici), ese (là), aquel (là-bas), avec accord en genre et nombre.",
    "Quedar fonctionne comme gustar : me queda bien / te quedan mal.",
    "Comparatifs : más… que, menos… que, tan… como, et les irréguliers mejor/peor.",
    "Costar (o>ue) : ¿Cuánto cuesta/cuestan? pour demander un prix.",
  ],
};

export default chapitre;
