// Sujets de brevet blanc (DNB) de SauveMonBulletin.
// Chaque sujet respecte le format officiel du Diplôme national du brevet :
// parties indépendantes, énoncés détaillés, barèmes réalistes et corrigés rédigés.
// Barèmes officiels : mathématiques /100, français /100, histoire-géo-EMC /50, sciences /50.
// Les sujets d'entraînement de 4ème sont notés /50 (épreuves plus courtes).

import type { BrevetBlanc } from "./types";

export const BREVETS_BLANCS: BrevetBlanc[] = [
  // ===================================================================
  // 1. MATHÉMATIQUES — 3ème — Brevet blanc n°1
  // ===================================================================
  {
    slug: "maths-3eme-1",
    titre: "Brevet blanc de mathématiques n°1",
    matiere: "maths",
    niveau: "3eme",
    dureeMinutes: 120,
    parties: [
      {
        titre: "Exercice 1 — QCM (15 points)",
        enonce: [
          "Cet exercice est un questionnaire à choix multiples (QCM). Pour chaque question, une seule réponse est exacte. Aucune justification n'est demandée. Une réponse fausse ne retire pas de point.",
          "Recopie le numéro de la question et la lettre de la bonne réponse. Chaque bonne réponse rapporte 3 points.",
          "Question 1 — Le PGCD (plus grand commun diviseur) de 60 et 84 est : A) 6  B) 12  C) 24",
          "Question 2 — Le produit 10^3 × 10^5 est égal à : A) 10^8  B) 10^15  C) 100^8",
          "Question 3 — La forme développée de (x + 3)^2 est : A) x^2 + 9  B) x^2 + 6x + 9  C) x^2 + 3x + 9",
          "Question 4 — On lance un dé équilibré à six faces. La probabilité d'obtenir un nombre pair est : A) 1/6  B) 1/3  C) 1/2",
          "Question 5 — Un cycliste parcourt 15 km en 30 minutes. Sa vitesse moyenne est : A) 15 km/h  B) 30 km/h  C) 45 km/h",
        ],
        corrige: [
          "Question 1 : réponse B (12). On décompose : 60 = 2^2 × 3 × 5 et 84 = 2^2 × 3 × 7. Les facteurs communs sont 2^2 et 3, donc PGCD = 4 × 3 = 12.",
          "Question 2 : réponse A (10^8). Pour multiplier deux puissances de 10, on ajoute les exposants : 10^3 × 10^5 = 10^(3+5) = 10^8.",
          "Question 3 : réponse B (x^2 + 6x + 9). On utilise l'identité (a + b)^2 = a^2 + 2ab + b^2, soit (x + 3)^2 = x^2 + 2 × x × 3 + 3^2 = x^2 + 6x + 9.",
          "Question 4 : réponse C (1/2). Les issues paires sont 2, 4 et 6, soit 3 issues favorables sur 6 possibles : 3/6 = 1/2.",
          "Question 5 : réponse B (30 km/h). 30 minutes = 0,5 h. Vitesse = distance / temps = 15 / 0,5 = 30 km/h.",
        ],
      },
      {
        titre: "Exercice 2 — Théorème de Pythagore et théorème de Thalès (15 points)",
        enonce: [
          "On considère un triangle ABC rectangle en A tel que AB = 6 cm et AC = 8 cm. La figure n'est pas à l'échelle.",
          "1. Calcule la longueur BC. (4 points)",
          "2. Le point M appartient au segment [AB] avec AM = 3 cm. Le point N appartient au segment [AC] et la droite (MN) est parallèle à la droite (BC).",
          "   a) Explique pourquoi on peut appliquer le théorème de Thalès. (2 points)",
          "   b) Calcule la longueur MN. (5 points)",
          "   c) Calcule la longueur AN. (4 points)",
        ],
        corrige: [
          "1. Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore : BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100. Donc BC = racine de 100 = 10 cm.",
          "2. a) Les points A, M, B sont alignés et les points A, N, C sont alignés (M sur [AB] et N sur [AC]). De plus, la droite (MN) est parallèle à la droite (BC). Les conditions du théorème de Thalès sont donc réunies.",
          "2. b) D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC. On a AM/AB = 3/6 = 1/2. Donc MN/BC = 1/2, soit MN = BC × 1/2 = 10 × 1/2 = 5 cm.",
          "2. c) De même AN/AC = 1/2, donc AN = AC × 1/2 = 8 × 1/2 = 4 cm.",
        ],
      },
      {
        titre: "Exercice 3 — Fonctions (12 points)",
        enonce: [
          "On considère la fonction affine f définie par f(x) = 2x + 3 et la fonction g définie par g(x) = x^2.",
          "1. Calcule f(5). (2 points)",
          "2. Calcule g(-3). (2 points)",
          "3. Résous l'équation f(x) = 0. Que représente le résultat pour la fonction f ? (4 points)",
          "4. La fonction f est-elle linéaire ? Justifie. (2 points)",
          "5. Détermine l'antécédent de 9 par la fonction g. (2 points)",
        ],
        corrige: [
          "1. f(5) = 2 × 5 + 3 = 10 + 3 = 13.",
          "2. g(-3) = (-3)^2 = 9. Attention : le carré d'un nombre négatif est positif.",
          "3. f(x) = 0 équivaut à 2x + 3 = 0, soit 2x = -3, donc x = -3/2 = -1,5. Ce nombre est l'antécédent de 0 par f ; c'est aussi l'abscisse du point où la droite représentative coupe l'axe des abscisses.",
          "4. Une fonction affine f(x) = ax + b est linéaire seulement si b = 0. Ici b = 3, différent de 0, donc f n'est pas linéaire (elle est affine).",
          "5. On cherche x tel que g(x) = 9, c'est-à-dire x^2 = 9. Les solutions sont x = 3 et x = -3 : 9 admet donc deux antécédents, 3 et -3.",
        ],
      },
      {
        titre: "Exercice 4 — Statistiques et probabilités (13 points)",
        enonce: [
          "Partie A — Statistiques. Voici les huit notes obtenues par un élève au cours du trimestre : 8 ; 12 ; 15 ; 10 ; 14 ; 9 ; 13 ; 11.",
          "1. Calcule la note moyenne de l'élève. (3 points)",
          "2. Détermine la note médiane. (3 points)",
          "3. Calcule l'étendue de cette série. (2 points)",
          "Partie B — Probabilités. Une urne contient 12 boules indiscernables au toucher : 5 rouges, 4 bleues et 3 vertes. On tire une boule au hasard.",
          "4. Quelle est la probabilité de tirer une boule rouge ? (2 points)",
          "5. Quelle est la probabilité de ne pas tirer une boule verte ? (3 points)",
        ],
        corrige: [
          "1. Somme des notes : 8 + 12 + 15 + 10 + 14 + 9 + 13 + 11 = 92. Moyenne = 92 / 8 = 11,5.",
          "2. On range les notes dans l'ordre croissant : 8 ; 9 ; 10 ; 11 ; 12 ; 13 ; 14 ; 15. La série compte 8 valeurs (nombre pair) : la médiane est la moyenne des deux valeurs centrales (4e et 5e), soit (11 + 12) / 2 = 11,5.",
          "3. Étendue = valeur maximale - valeur minimale = 15 - 8 = 7.",
          "4. Il y a 5 boules rouges sur 12 boules au total : P(rouge) = 5/12.",
          "5. Il y a 3 boules vertes, donc 12 - 3 = 9 boules non vertes. P(pas verte) = 9/12 = 3/4. On pouvait aussi écrire P(pas verte) = 1 - P(verte) = 1 - 3/12 = 9/12 = 3/4.",
        ],
      },
      {
        titre: "Exercice 5 — Calcul littéral (10 points)",
        enonce: [
          "1. Développe et réduis l'expression A = (2x - 1)(x + 4). (3 points)",
          "2. Factorise l'expression B = 9x^2 - 25. (3 points)",
          "3. Factorise l'expression C = (x + 2)(x - 3) + (x + 2)(2x + 1). (4 points)",
        ],
        corrige: [
          "1. A = (2x - 1)(x + 4) = 2x × x + 2x × 4 - 1 × x - 1 × 4 = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4.",
          "2. B = 9x^2 - 25 = (3x)^2 - 5^2. On reconnaît l'identité a^2 - b^2 = (a - b)(a + b), donc B = (3x - 5)(3x + 5).",
          "3. Le facteur commun est (x + 2) : C = (x + 2)[(x - 3) + (2x + 1)] = (x + 2)(x - 3 + 2x + 1) = (x + 2)(3x - 2).",
        ],
      },
      {
        titre: "Exercice 6 — Programme de calcul (10 points)",
        enonce: [
          "On considère le programme de calcul suivant :",
          "- Choisir un nombre.",
          "- Ajouter 4 à ce nombre.",
          "- Multiplier le résultat par 2.",
          "- Soustraire le double du nombre choisi au départ.",
          "1. Montre que si l'on choisit le nombre 7, le résultat final est 8. (3 points)",
          "2. Émma affirme : « Quel que soit le nombre choisi au départ, on obtient toujours 8. » Démontre qu'elle a raison en utilisant le calcul littéral. (7 points)",
        ],
        corrige: [
          "1. On choisit 7. On ajoute 4 : 7 + 4 = 11. On multiplie par 2 : 11 × 2 = 22. Le double du nombre choisi est 2 × 7 = 14. On soustrait : 22 - 14 = 8. Le résultat est bien 8.",
          "2. On appelle x le nombre choisi au départ. Après « ajouter 4 » : x + 4. Après « multiplier par 2 » : 2(x + 4) = 2x + 8. Après « soustraire le double du nombre choisi » : (2x + 8) - 2x = 8.",
          "Le résultat est 8 quelle que soit la valeur de x : Émma a donc raison.",
        ],
      },
      {
        titre: "Exercice 7 — Problème concret : choix d'un tarif (15 points)",
        enonce: [
          "Une salle de sport propose deux formules d'abonnement mensuel :",
          "- Formule A : 20 € par mois, accès illimité aux séances.",
          "- Formule B : 8 € par mois d'abonnement, puis 3 € par séance.",
          "On note n le nombre de séances effectuées dans le mois.",
          "1. Exprime en fonction de n le prix payé chaque mois avec la formule B. (2 points)",
          "2. Calcule le prix payé avec chaque formule pour 6 séances dans le mois. Quelle formule est la plus avantageuse dans ce cas ? (4 points)",
          "3. Pour combien de séances les deux formules coûtent-elles le même prix ? (5 points)",
          "4. À partir de combien de séances la formule A devient-elle strictement la plus avantageuse ? (4 points)",
        ],
        corrige: [
          "1. Prix de la formule B = 8 + 3n (en euros).",
          "2. Pour n = 6 : formule A = 20 €. Formule B = 8 + 3 × 6 = 8 + 18 = 26 €. La formule A (20 €) est la plus avantageuse pour 6 séances.",
          "3. On résout 20 = 8 + 3n, soit 3n = 12, donc n = 4. Les deux formules coûtent le même prix (20 €) pour 4 séances par mois.",
          "4. La formule A est strictement moins chère quand 20 < 8 + 3n, soit 12 < 3n, donc n > 4. La formule A devient donc strictement la plus avantageuse à partir de 5 séances par mois.",
        ],
      },
      {
        titre: "Exercice 8 — Algorithmique et programmation (Scratch) (10 points)",
        enonce: [
          "On dispose du script Scratch suivant, exécuté avec un lutin qui laisse une trace en se déplaçant (stylo en position d'écriture) :",
          "  quand le drapeau vert est cliqué",
          "  aller à x : 0  y : 0",
          "  stylo en position d'écriture",
          "  répéter 4 fois :",
          "      avancer de 100 pas",
          "      tourner de 90 degrés vers la droite",
          "1. Quelle figure géométrique le lutin dessine-t-il ? Justifie. (3 points)",
          "2. Quelle est la longueur totale parcourue par le lutin (le périmètre de la figure) ? (3 points)",
          "3. On remplace la ligne « répéter 4 fois » par « répéter 6 fois » et « tourner de 90 degrés » par « tourner de 60 degrés ». Quelle figure obtient-on alors ? (4 points)",
        ],
        corrige: [
          "1. Le lutin avance de 100 pas puis tourne de 90° quatre fois de suite : il trace quatre côtés égaux reliés par quatre angles droits. Il dessine donc un carré de côté 100 pas.",
          "2. Le carré a quatre côtés de 100 pas : périmètre = 4 × 100 = 400 pas.",
          "3. Avec « répéter 6 fois » et une rotation de 60° à chaque étape (car l'angle extérieur d'un polygone régulier à 6 côtés vaut 360 / 6 = 60°), le lutin trace six côtés égaux : on obtient un hexagone régulier.",
        ],
      },
    ],
    conseils: [
      "Gestion du temps : le sujet est noté sur 100 points pour 120 minutes. Vise environ 1 minute par point et garde 10 minutes à la fin pour te relire.",
      "Les exercices sont indépendants : commence par ceux que tu maîtrises le mieux pour sécuriser des points, puis reviens sur les plus difficiles.",
      "Rédige toujours tes calculs et justifie : au brevet, la démarche est notée même si le résultat final est faux.",
      "Erreur classique à éviter : oublier les unités (cm, €, km/h) et confondre le carré d'un nombre négatif (positif) avec l'opposé de son carré.",
      "Pour le QCM, une réponse fausse n'enlève pas de point : réponds à toutes les questions, même en cas de doute.",
      "N'oublie pas ta calculatrice et tes instruments de géométrie (règle, équerre, compas, rapporteur) autorisés à l'épreuve.",
    ],
  },

  // ===================================================================
  // 2. FRANÇAIS — 3ème — Brevet blanc n°1
  // ===================================================================
  {
    slug: "francais-3eme-1",
    titre: "Brevet blanc de français n°1",
    matiere: "francais",
    niveau: "3eme",
    dureeMinutes: 180,
    parties: [
      {
        titre: "Texte support",
        enonce: [
          "Lis attentivement le texte suivant, puis réponds aux questions. Le texte est un extrait de la nouvelle « Le Papa de Simon » de Guy de Maupassant (1879), tombée dans le domaine public.",
          "« Midi finissait de sonner. La porte de l'école s'ouvrit, et les gamins se précipitèrent en se bousculant pour sortir plus vite. Mais au lieu de se disperser rapidement et de rentrer dîner, comme ils le faisaient chaque jour, ils s'arrêtèrent à quelques pas, se réunirent par groupes et se mirent à chuchoter.",
          "C'est que, ce matin-là, Simon, le fils de la Blanchotte, était venu à la classe pour la première fois.",
          "Tous avaient entendu parler de la Blanchotte dans leurs familles ; et, quoiqu'on lui fît bon accueil en public, les mères la traitaient entre elles avec une sorte de compassion un peu méprisante qui avait gagné les enfants sans qu'ils sussent du tout pourquoi.",
          "Quant à Simon, ils ne le connaissaient pas, car il ne sortait jamais, et il ne galopait point avec eux par les rues du village ou sur les bords de la rivière. Aussi ne l'aimaient-ils guère ; et c'était avec une certaine joie, mêlée d'un étonnement considérable, qu'ils avaient accueilli et qu'ils se répétaient l'un à l'autre cette parole dite par un gars de quatorze ou quinze ans qui paraissait en savoir long tant il clignait finement des yeux : « Vous savez... Simon... eh bien, il n'a pas de papa. » »",
        ],
        corrige: [
          "Aucune réponse attendue pour cette partie : il s'agit du texte support à lire avant de composer.",
        ],
      },
      {
        titre: "Compréhension et compétences d'interprétation (32 points)",
        enonce: [
          "Réponds aux questions par des phrases complètes et justifie tes réponses en citant le texte entre guillemets.",
          "1. Où et à quel moment de la journée se déroule cette scène ? Relève deux indices précis. (4 points)",
          "2. Qui est le personnage principal de cet extrait ? Que sait-on de sa situation familiale ? (4 points)",
          "3. Ligne par ligne, montre que l'attitude des enfants change après la sortie de l'école : que font-ils au lieu de rentrer dîner ? (5 points)",
          "4. Comment les mères du village considèrent-elles la Blanchotte ? Explique l'expression « une sorte de compassion un peu méprisante ». (5 points)",
          "5. Pourquoi les autres enfants n'aiment-ils guère Simon ? Cite le texte. (4 points)",
          "6. Quel effet produit la phrase finale prononcée par le grand garçon ? Pourquoi Maupassant la place-t-il à la fin du passage ? (5 points)",
          "7. À ton avis, quels sentiments Simon risque-t-il d'éprouver dans la suite de l'histoire ? Justifie à partir du texte. (5 points)",
        ],
        corrige: [
          "1. La scène se déroule devant l'école, à midi (au moment de la sortie). Indices : « Midi finissait de sonner » (indication de temps) et « La porte de l'école s'ouvrit » (indication de lieu).",
          "2. Le personnage principal est Simon, « le fils de la Blanchotte ». On apprend qu'il vient à l'école « pour la première fois » et surtout, selon les autres enfants, qu'« il n'a pas de papa » : sa situation familiale est présentée comme singulière dans le village.",
          "3. Au lieu de « se disperser rapidement et de rentrer dîner, comme ils le faisaient chaque jour », les enfants « s'arrêtèrent à quelques pas, se réunirent par groupes et se mirent à chuchoter ». Ce changement de comportement montre leur curiosité et prépare une scène de rejet.",
          "4. Les mères font « bon accueil en public » à la Blanchotte, mais « entre elles » elles la traitent « avec une sorte de compassion un peu méprisante ». L'expression est un oxymore : la compassion (la pitié) se mêle au mépris. Elles la plaignent tout en la jugeant, sans doute parce qu'elle élève seule son enfant.",
          "5. Les enfants n'aiment guère Simon parce qu'il reste à l'écart : « il ne sortait jamais, et il ne galopait point avec eux par les rues du village ou sur les bords de la rivière ». Ne partageant pas leurs jeux, il leur est étranger.",
          "6. La phrase finale « Vous savez... Simon... eh bien, il n'a pas de papa » produit un effet de chute : les points de suspension créent un suspens, puis la révélation tombe brutalement. En la plaçant à la fin, Maupassant met en valeur l'information qui va déclencher le conflit et la moquerie des enfants.",
          "7. Simon risque d'éprouver de la honte, de la tristesse et un sentiment d'exclusion, car les enfants l'ont accueilli « avec une certaine joie » cruelle. Le fait qu'il vienne « pour la première fois » et qu'il soit déjà désigné comme différent laisse présager de la souffrance. (Toute réponse cohérente, justifiée par le texte, est acceptée.)",
        ],
      },
      {
        titre: "Grammaire et compétences linguistiques (13 points)",
        enonce: [
          "1. Dans la phrase « Midi finissait de sonner », donne le temps et le mode du verbe « finissait ». (2 points)",
          "2. Dans « les gamins se précipitèrent en se bousculant pour sortir plus vite », relève un verbe conjugué au passé simple et indique son infinitif. (3 points)",
          "3. Donne la nature (classe grammaticale) et la fonction du mot « Simon » dans la phrase : « Simon, le fils de la Blanchotte, était venu à la classe. » (3 points)",
          "4. « quoiqu'on lui fît bon accueil en public, les mères la traitaient entre elles avec une sorte de compassion. » Quel rapport logique exprime la proposition introduite par « quoique » ? (2 points)",
          "5. Réécris la phrase « il ne sortait jamais » à la forme affirmative. (3 points)",
        ],
        corrige: [
          "1. « finissait » est conjugué à l'imparfait de l'indicatif.",
          "2. Verbe au passé simple : « se précipitèrent » (infinitif : se précipiter). On pouvait aussi relever « s'arrêtèrent » (s'arrêter), « se réunirent » (se réunir) ou « se mirent » (se mettre).",
          "3. « Simon » est un nom propre (classe grammaticale). Il est sujet du verbe « était venu ».",
          "4. La proposition introduite par « quoique » exprime la concession (une opposition, une idée d'obstacle qui n'empêche pas le fait principal).",
          "5. Forme affirmative : « il sortait toujours » (on supprime la négation « ne... jamais » et on la remplace par un adverbe de sens contraire comme « toujours »).",
        ],
      },
      {
        titre: "Réécriture (5 points)",
        enonce: [
          "Réécris le passage suivant en remplaçant « les gamins » par « le gamin » et en effectuant toutes les modifications nécessaires :",
          "« les gamins se précipitèrent en se bousculant pour sortir plus vite. »",
        ],
        corrige: [
          "« le gamin se précipita en se bousculant pour sortir plus vite. »",
          "Points de vigilance : le verbe « se précipitèrent » (3e personne du pluriel) devient « se précipita » (3e personne du singulier). Le gérondif « en se bousculant » et le groupe « pour sortir plus vite » restent inchangés.",
        ],
      },
      {
        titre: "Dictée (10 points)",
        enonce: [
          "La dictée est lue trois fois : une première lecture d'ensemble, une lecture lente pour écrire, une relecture finale. Texte dicté (extrait adapté, domaine public) :",
          "« Il faisait très beau, très chaud. Les enfants avaient couru le long de la rivière, puis ils s'étaient assis sur l'herbe fraîche. Simon, resté seul près de l'eau, regardait les petits poissons qui glissaient entre les pierres. Il aurait tant voulu jouer avec les autres, mais personne ne l'appelait. »",
          "Barème indicatif : chaque erreur grammaticale retire 1 point, chaque erreur lexicale retire 0,5 point ; la note ne peut pas être négative.",
        ],
        corrige: [
          "Points de vigilance orthographiques : les accords du participe passé « avaient couru » (auxiliaire avoir, pas d'accord) et « ils s'étaient assis » (accord avec le sujet, masculin pluriel : assis).",
          "Accords dans le groupe nominal : « l'herbe fraîche » (féminin singulier), « les petits poissons » (masculin pluriel).",
          "Ne pas oublier les accents (rivière, fraîche, près) et le conditionnel « Il aurait tant voulu » (terminaison -ait).",
          "« personne ne l'appelait » : imparfait, un seul « p », deux « l » à « appelait ».",
        ],
      },
      {
        titre: "Rédaction (40 points) — deux sujets au choix",
        enonce: [
          "Tu traiteras UN seul des deux sujets suivants. Ta copie fera environ deux pages (40 à 50 lignes). Soigne la présentation, l'orthographe et la construction des phrases.",
          "Sujet d'imagination : Imagine la suite immédiate de la scène. Les enfants entourent Simon dans la cour et se moquent de lui parce qu'il « n'a pas de papa ». Raconte cet épisode en faisant ressentir les émotions de Simon. Ton texte comportera au moins un passage de dialogue et un passage descriptif. (40 points)",
          "Sujet de réflexion : « Faut-il toujours suivre le groupe ? » Dans un développement organisé et argumenté, tu diras s'il est facile ou non de résister à la pression d'un groupe. Tu appuieras ta réflexion sur des exemples précis (lectures, films, expérience personnelle). (40 points)",
        ],
        corrige: [
          "Critères d'évaluation communs : respect du sujet et de la longueur, cohérence du récit ou de l'argumentation, richesse du vocabulaire, correction de la langue (orthographe, conjugaison, syntaxe) et présentation.",
          "Sujet d'imagination — attendus : un récit à la 3e personne cohérent avec le texte ; l'expression des émotions de Simon (honte, peur, tristesse) ; un dialogue correctement ponctué (tirets, guillemets) ; un passage descriptif (la cour, les visages moqueurs) ; des temps du récit maîtrisés (imparfait / passé simple ou présent de narration).",
          "Exemple d'amorce acceptable : « Simon s'était réfugié contre le mur de la cour. Les autres l'entouraient déjà, en cercle, comme une meute. — Alors, c'est vrai que t'as pas de papa ? lança le grand garçon en ricanant. Simon sentit ses joues brûler et ses yeux se remplir de larmes... »",
          "Sujet de réflexion — attendus : une introduction posant le problème ; deux ou trois arguments organisés (paragraphes) illustrés d'exemples ; une conclusion nuancée. On valorise l'emploi de connecteurs logiques (d'une part, cependant, ainsi, en conclusion) et une thèse personnelle assumée.",
        ],
      },
    ],
    conseils: [
      "Gestion du temps (180 min / 100 points) : environ 1 h 10 pour les questions et la réécriture, 20 min pour la dictée, 1 h 30 pour la rédaction. Ne commence jamais la rédaction dans la précipitation.",
      "Lis le texte deux fois avant de répondre : une lecture globale, puis une lecture crayon en main pour repérer les indices utiles aux questions.",
      "Justifie systématiquement tes réponses de compréhension par une courte citation entre guillemets : les points sont souvent liés à la citation.",
      "Pour la dictée, relis-toi en te concentrant d'abord sur les accords sujet-verbe, puis sur les accords dans les groupes nominaux et enfin sur les homophones (a/à, et/est, ses/ces).",
      "Rédaction : fais un brouillon rapide (plan ou liste d'idées) avant de rédiger, et garde 10 minutes pour te relire à la fin.",
      "Erreur à éviter : traiter les deux sujets de rédaction. On n'en choisit qu'un seul et on le traite entièrement.",
    ],
  },

  // ===================================================================
  // 3. HISTOIRE-GÉOGRAPHIE-EMC — 3ème — Brevet blanc n°1
  // ===================================================================
  {
    slug: "histoire-geo-3eme-1",
    titre: "Brevet blanc d'histoire-géographie-EMC n°1",
    matiere: "histoire-geo",
    niveau: "3eme",
    dureeMinutes: 120,
    parties: [
      {
        titre: "Exercice 1 — Histoire : analyser et comprendre un document (20 points)",
        enonce: [
          "Thème : civils et militaires dans la Première Guerre mondiale (1914-1918).",
          "Document — Lettre d'un soldat français (un « poilu ») écrite depuis le front de Verdun, mars 1916 (texte adapté) :",
          "« Nous vivons dans la boue depuis des semaines, sous un déluge d'obus qui ne s'arrête jamais. Les tranchées sont pleines d'eau, les rats courent sur nos couvertures, et le bruit du canon nous empêche de dormir. Beaucoup de camarades sont tombés. Malgré tout, nous tenons, car nous savons que derrière nous il y a nos familles et notre pays. »",
          "Questions :",
          "1. Présente le document : sa nature, son auteur, sa date et le lieu évoqué. (4 points)",
          "2. Relève dans le texte deux éléments qui décrivent les conditions de vie des soldats dans les tranchées. (4 points)",
          "3. Comment s'appelle la bataille évoquée et à quoi correspond-elle dans la guerre ? (4 points)",
          "4. Qu'est-ce qui explique, d'après le soldat, qu'ils continuent à « tenir » ? (3 points)",
          "5. En quoi ce document illustre-t-il l'expression « guerre totale » ? Explique en une phrase. (5 points)",
        ],
        corrige: [
          "1. Il s'agit d'une lettre (nature), écrite par un soldat français, un « poilu » (auteur), en mars 1916 (date), depuis le front de Verdun (lieu). C'est un témoignage à la première personne.",
          "2. Conditions de vie difficiles : « Nous vivons dans la boue », « Les tranchées sont pleines d'eau », « les rats courent sur nos couvertures », « le bruit du canon nous empêche de dormir » (deux éléments suffisaient).",
          "3. La bataille évoquée est la bataille de Verdun (1916), l'une des plus longues et des plus meurtrières de la Première Guerre mondiale, symbole de la guerre de position et de l'enfer des tranchées.",
          "4. D'après le soldat, ils tiennent parce qu'ils pensent à ceux qui sont « derrière » eux : « nos familles et notre pays ». C'est le patriotisme et le sens du devoir qui les font résister.",
          "5. Ce document illustre la « guerre totale » car il montre que le conflit mobilise et engage non seulement les soldats mais toute la nation (les familles, le pays), avec des moyens matériels considérables (obus, canons) et une violence de masse.",
        ],
      },
      {
        titre: "Exercice 2 — Géographie : les aires urbaines en France (20 points)",
        enonce: [
          "Thème : l'organisation du territoire français et les aires urbaines.",
          "1. Donne une définition simple de l'expression « aire urbaine ». (3 points)",
          "2. Cite les trois plus grandes aires urbaines de France par leur population. (3 points)",
          "3. Explique le phénomène de « périurbanisation » : où s'installent de plus en plus d'habitants et pourquoi ? (5 points)",
          "4. Réalise, sur ton brouillon puis au propre, un croquis simple d'une aire urbaine. Ton croquis comportera obligatoirement : le centre-ville (pôle urbain), la banlieue, l'espace périurbain, et une légende. (9 points)",
        ],
        corrige: [
          "1. Une aire urbaine est un ensemble formé par une ville-centre (pôle urbain) et les communes environnantes dont une grande partie des habitants vient y travailler. Elle regroupe le pôle urbain, sa banlieue et la couronne périurbaine.",
          "2. Les trois plus grandes aires urbaines françaises sont, dans l'ordre : Paris, Lyon et Marseille-Aix-en-Provence.",
          "3. La périurbanisation désigne l'installation croissante d'habitants dans les communes situées en périphérie des villes, à la campagne proche. On y recherche des logements plus grands et moins chers (souvent des maisons individuelles avec jardin), un cadre de vie plus calme, tout en continuant à travailler dans la ville-centre grâce à la voiture et aux transports.",
          "4. Croquis attendu (organisation concentrique) : au centre, le pôle urbain (centre-ville dense) ; autour, la banlieue (habitat, zones commerciales et industrielles) ; plus loin, l'espace périurbain (maisons individuelles, campagne). La légende doit nommer chaque figuré (couleurs ou trames) et on valorise l'ajout d'axes de transport reliant la périphérie au centre. Le titre et une légende ordonnée sont indispensables.",
        ],
      },
      {
        titre: "Exercice 3 — EMC : les valeurs et symboles de la République (10 points)",
        enonce: [
          "1. Cite la devise de la République française. (2 points)",
          "2. Nomme trois symboles de la République française. (3 points)",
          "3. Qu'est-ce que la laïcité ? Explique en une ou deux phrases. (2 points)",
          "4. En quelques lignes (développement construit), explique pourquoi ces valeurs et symboles sont importants pour « faire vivre » la République et rassembler les citoyens. (3 points)",
        ],
        corrige: [
          "1. La devise de la République française est : « Liberté, Égalité, Fraternité ».",
          "2. Trois symboles au choix : le drapeau tricolore (bleu, blanc, rouge), La Marseillaise (hymne national), Marianne, le coq, le 14 Juillet (fête nationale) ou le sceau de la République.",
          "3. La laïcité est le principe qui sépare l'État des religions : l'État est neutre, il ne favorise aucune religion et garantit à chacun la liberté de croire ou de ne pas croire, dans le respect des autres.",
          "4. Développement construit attendu : ces valeurs (liberté, égalité, fraternité) et ces symboles donnent aux citoyens une identité et des repères communs. Ils rappellent les droits et les devoirs de chacun, favorisent le respect mutuel et l'unité de la nation, et permettent de vivre ensemble malgré les différences. Une République ne tient que si ses citoyens partagent et défendent ces principes. (Une réponse organisée en deux ou trois phrases cohérentes est valorisée.)",
        ],
      },
    ],
    conseils: [
      "Gestion du temps (120 min / 50 points) : consacre environ 45 min à l'histoire, 45 min à la géographie (dont le croquis) et 20 min à l'EMC, en gardant 10 min de relecture.",
      "Analyse de document : commence toujours par le présenter (nature, auteur, date, contexte) avant d'en tirer des informations. Cite le document quand tu réponds.",
      "Pour le croquis, soigne la légende : un croquis sans titre ni légende ordonnée perd beaucoup de points. Utilise des figurés clairs (aplats de couleur, hachures, flèches).",
      "Dans le développement construit d'EMC, rédige des phrases complètes et organisées : introduis ton idée, explique-la, illustre-la par un exemple.",
      "Erreur à éviter : paraphraser le document sans l'expliquer. Il faut relier ce qu'on lit à ses connaissances (guerre totale, tranchées, périurbanisation).",
      "Apprends par cœur les repères essentiels : dates (1914-1918, Verdun 1916), devise, symboles et grandes aires urbaines. Ce sont des points « faciles » à sécuriser.",
    ],
  },

  // ===================================================================
  // 4. SCIENCES (physique-chimie + SVT) — 3ème — Brevet blanc n°1
  // ===================================================================
  {
    slug: "sciences-3eme-1",
    titre: "Brevet blanc de sciences n°1 (physique-chimie et SVT)",
    matiere: "physique-chimie",
    niveau: "3eme",
    dureeMinutes: 60,
    parties: [
      {
        titre: "Partie 1 — Physique-chimie : gravitation, poids et énergie (25 points)",
        enonce: [
          "Données : sur la Terre, l'intensité de la pesanteur vaut g = 10 N/kg. Sur la Lune, elle vaut g = 1,6 N/kg. On rappelle la relation entre le poids et la masse : P = m × g, où P est en newtons (N) et m en kilogrammes (kg).",
          "1. Un objet a une masse de 2 kg. Calcule son poids sur la Terre. N'oublie pas l'unité. (4 points)",
          "2. Calcule le poids de ce même objet sur la Lune. (4 points)",
          "3. La masse de l'objet change-t-elle entre la Terre et la Lune ? Explique la différence entre la masse et le poids. (5 points)",
          "4. Pourquoi un astronaute peut-il faire de grands bonds sur la Lune ? (3 points)",
          "5. Un radiateur électrique de puissance P = 2000 W fonctionne pendant 30 minutes. On rappelle E = P × t (avec t en heures et E en watt-heures). Calcule l'énergie consommée, en Wh puis en kWh. (9 points)",
        ],
        corrige: [
          "1. P = m × g = 2 × 10 = 20 N. Le poids de l'objet sur la Terre est de 20 newtons.",
          "2. Sur la Lune : P = m × g = 2 × 1,6 = 3,2 N. Le poids sur la Lune est de 3,2 newtons, soit bien moins que sur la Terre.",
          "3. La masse ne change pas : elle vaut toujours 2 kg, car c'est la quantité de matière de l'objet. En revanche, le poids change car il dépend de l'astre (de la valeur de g). La masse se mesure en kilogrammes, le poids (une force) se mesure en newtons.",
          "4. Sur la Lune, l'intensité de la pesanteur est environ 6 fois plus faible que sur la Terre (1,6 contre 10 N/kg). Le poids de l'astronaute y est donc beaucoup plus faible : il est moins « attiré » vers le sol et peut faire de grands bonds.",
          "5. On convertit d'abord la durée : 30 minutes = 0,5 h. Puis E = P × t = 2000 × 0,5 = 1000 Wh. Comme 1 kWh = 1000 Wh, l'énergie consommée est de 1000 Wh = 1 kWh.",
        ],
      },
      {
        titre: "Partie 2 — SVT : le programme génétique (ADN, chromosomes, allèles) (25 points)",
        enonce: [
          "Thème : transmission et expression de l'information génétique.",
          "1. Où se situe l'information génétique dans une cellule ? Sous quelle forme (molécule) est-elle présente ? (5 points)",
          "2. Combien de chromosomes possède une cellule du corps humain ? Comment sont-ils organisés ? (5 points)",
          "3. Définis les mots suivants : un gène ; un allèle. (6 points)",
          "4. Pour le caractère « groupe sanguin », une personne possède l'allèle A et l'allèle O. Sachant que l'allèle A domine l'allèle O, quel sera son groupe sanguin ? Explique. (5 points)",
          "5. Lors de la reproduction sexuée, d'où viennent les chromosomes de l'enfant ? Pourquoi un enfant ressemble-t-il à la fois à sa mère et à son père ? (4 points)",
        ],
        corrige: [
          "1. L'information génétique se situe dans le noyau de la cellule. Elle est portée par une molécule appelée l'ADN (acide désoxyribonucléique), enroulée pour former les chromosomes.",
          "2. Une cellule du corps humain possède 46 chromosomes, organisés en 23 paires. Dans chaque paire, un chromosome vient de la mère et l'autre du père.",
          "3. Un gène est une portion d'ADN (un segment de chromosome) qui porte l'information pour un caractère héréditaire donné (par exemple le groupe sanguin ou la couleur des yeux). Un allèle est une version possible d'un même gène (par exemple, pour le gène du groupe sanguin, les allèles A, B et O).",
          "4. La personne possède les allèles A et O. L'allèle A étant dominant et l'allèle O récessif, c'est l'allèle A qui s'exprime : son groupe sanguin est le groupe A. L'allèle O est présent mais masqué.",
          "5. Lors de la reproduction sexuée, l'enfant reçoit la moitié de ses chromosomes de sa mère (par l'ovule) et l'autre moitié de son père (par le spermatozoïde). Il hérite donc d'allèles des deux parents, ce qui explique qu'il présente des caractères ressemblant à la fois à sa mère et à son père.",
        ],
      },
    ],
    conseils: [
      "Gestion du temps (60 min / 50 points) : accorde environ 30 minutes à chaque discipline. Les deux parties sont indépendantes.",
      "En physique-chimie, écris toujours la formule (P = m × g, E = P × t), remplace par les valeurs, puis donne le résultat avec l'unité. Pense aux conversions (minutes en heures, Wh en kWh).",
      "Ne confonds pas la masse (en kg, constante) et le poids (une force, en newtons, qui dépend de l'astre) : c'est une erreur très fréquente.",
      "En SVT, apprends le vocabulaire précis (ADN, noyau, chromosome, gène, allèle, dominant, récessif) : les définitions rapportent des points sûrs.",
      "Justifie tes réponses même quand elles paraissent évidentes : une phrase d'explication est souvent attendue dans le barème.",
      "Relis-toi 5 minutes à la fin pour vérifier les unités et l'orthographe du vocabulaire scientifique.",
    ],
  },

  // ===================================================================
  // 5. MATHÉMATIQUES — 4ème — Brevet blanc d'entraînement
  // ===================================================================
  {
    slug: "maths-4eme-1",
    titre: "Brevet blanc d'entraînement — mathématiques (4ème)",
    matiere: "maths",
    niveau: "4eme",
    dureeMinutes: 90,
    parties: [
      {
        titre: "Exercice 1 — Puissances (10 points)",
        enonce: [
          "Ce sujet d'entraînement est adapté au programme de 4ème et noté sur 50 points.",
          "1. Écris sous la forme d'une seule puissance de 2 : 2^3 × 2^4. (3 points)",
          "2. Écris sous la forme d'une seule puissance de 10 : (10^5) / (10^2). (3 points)",
          "3. Donne l'écriture décimale de 10^(-2). (2 points)",
          "4. Calcule 3^2 + 4^2. (2 points)",
        ],
        corrige: [
          "1. Pour multiplier deux puissances de même base, on ajoute les exposants : 2^3 × 2^4 = 2^(3+4) = 2^7 (soit 128).",
          "2. Pour diviser deux puissances de même base, on soustrait les exposants : 10^5 / 10^2 = 10^(5-2) = 10^3 (soit 1000).",
          "3. 10^(-2) = 1 / 10^2 = 1 / 100 = 0,01.",
          "4. 3^2 + 4^2 = 9 + 16 = 25.",
        ],
      },
      {
        titre: "Exercice 2 — Théorème de Pythagore (10 points)",
        enonce: [
          "On considère un triangle RST rectangle en S tel que RS = 3 cm et ST = 4 cm.",
          "1. Fais une figure à main levée en indiquant les longueurs. (2 points)",
          "2. Calcule la longueur de l'hypoténuse RT. (5 points)",
          "3. Un autre triangle ABC a pour côtés AB = 5 cm, AC = 6 cm et BC = 8 cm. Ce triangle est-il rectangle ? Justifie à l'aide du théorème de Pythagore. (3 points)",
        ],
        corrige: [
          "1. Figure attendue : un triangle rectangle en S, avec l'angle droit codé en S, RS = 3 cm et ST = 4 cm sur les deux côtés de l'angle droit ; RT est l'hypoténuse.",
          "2. Le triangle RST est rectangle en S, donc d'après le théorème de Pythagore : RT^2 = RS^2 + ST^2 = 3^2 + 4^2 = 9 + 16 = 25. Donc RT = racine de 25 = 5 cm.",
          "3. Le plus grand côté est BC = 8 cm. On compare BC^2 et AB^2 + AC^2. BC^2 = 8^2 = 64. AB^2 + AC^2 = 5^2 + 6^2 = 25 + 36 = 61. Comme 64 est différent de 61, l'égalité de Pythagore n'est pas vérifiée : le triangle ABC n'est pas rectangle.",
        ],
      },
      {
        titre: "Exercice 3 — Calcul littéral (8 points)",
        enonce: [
          "1. Développe et réduis l'expression A = 3(x + 2) - 2(x - 1). (4 points)",
          "2. Développe l'expression B = 5(2x - 3). (2 points)",
          "3. Calcule la valeur de A pour x = 4. (2 points)",
        ],
        corrige: [
          "1. A = 3(x + 2) - 2(x - 1) = 3x + 6 - 2x + 2. Attention au signe : -2 × (-1) = +2. On réduit : A = (3x - 2x) + (6 + 2) = x + 8.",
          "2. B = 5(2x - 3) = 5 × 2x - 5 × 3 = 10x - 15.",
          "3. Pour x = 4 : A = x + 8 = 4 + 8 = 12.",
        ],
      },
      {
        titre: "Exercice 4 — Proportionnalité (12 points)",
        enonce: [
          "Partie A — Recette. Pour préparer un gâteau pour 4 personnes, il faut 200 g de farine.",
          "1. Quelle quantité de farine faut-il pour 6 personnes ? (4 points)",
          "Partie B — Pourcentage. Un article coûte 40 €. Le magasin applique une réduction de 15 %.",
          "2. Calcule le montant de la réduction. (4 points)",
          "3. Quel est le nouveau prix de l'article ? (4 points)",
        ],
        corrige: [
          "1. La situation est proportionnelle. Pour 1 personne : 200 / 4 = 50 g. Pour 6 personnes : 50 × 6 = 300 g de farine. (On pouvait aussi écrire 200 × 6 / 4 = 300 g.)",
          "2. Réduction = 15 % de 40 € = (15 / 100) × 40 = 0,15 × 40 = 6 €.",
          "3. Nouveau prix = 40 - 6 = 34 €. (On pouvait aussi calculer directement 40 × (1 - 0,15) = 40 × 0,85 = 34 €.)",
        ],
      },
      {
        titre: "Exercice 5 — Probabilités simples (10 points)",
        enonce: [
          "Une roue de loterie est partagée en 8 secteurs identiques numérotés de 1 à 8. On fait tourner la roue une fois ; chaque secteur a la même chance d'être obtenu.",
          "1. Quelle est la probabilité d'obtenir le numéro 5 ? (2 points)",
          "2. Quelle est la probabilité d'obtenir un nombre pair ? (4 points)",
          "3. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 6 ? (4 points)",
        ],
        corrige: [
          "1. Il y a 8 secteurs équiprobables et un seul porte le numéro 5 : P(obtenir 5) = 1/8.",
          "2. Les nombres pairs de 1 à 8 sont 2, 4, 6 et 8, soit 4 issues favorables sur 8 : P(pair) = 4/8 = 1/2.",
          "3. Les nombres supérieurs ou égaux à 6 sont 6, 7 et 8, soit 3 issues favorables sur 8 : P(≥ 6) = 3/8.",
        ],
      },
    ],
    conseils: [
      "Gestion du temps (90 min / 50 points) : les cinq exercices sont indépendants. Compte environ 15 minutes par exercice et garde 10 minutes de relecture.",
      "Écris toujours tes calculs : au brevet comme à l'entraînement, la démarche rapporte des points même en cas d'erreur de calcul.",
      "Attention aux signes dans le calcul littéral : -2 × (-1) donne +2. C'est l'erreur la plus fréquente.",
      "Pour le théorème de Pythagore, identifie bien l'hypoténuse (le côté opposé à l'angle droit) avant d'écrire l'égalité.",
      "N'oublie pas les unités (g, €) et vérifie que tes résultats sont vraisemblables (un prix réduit doit être inférieur au prix de départ).",
      "Apporte ta calculatrice et tes instruments de géométrie, et fais toujours une petite figure à main levée pour les exercices de géométrie.",
    ],
  },

  // ===================================================================
  // 6. FRANÇAIS — 4ème — Brevet blanc d'entraînement (fantastique)
  // ===================================================================
  {
    slug: "francais-4eme-1",
    titre: "Brevet blanc d'entraînement — français (4ème)",
    matiere: "francais",
    niveau: "4eme",
    dureeMinutes: 120,
    parties: [
      {
        titre: "Texte support",
        enonce: [
          "Lis attentivement le texte suivant. Il s'agit d'un extrait de « Le Horla » de Guy de Maupassant (1887), récit fantastique tombé dans le domaine public. Le narrateur tient un journal intime.",
          "« 8 mai. — Quelle journée admirable ! J'ai passé toute la matinée étendu sur l'herbe, devant ma maison, sous l'énorme platane qui la couvre, l'abrite et l'ombrage tout entière. J'aime ce pays, et j'aime y vivre parce que j'y ai mes racines, ces profondes et délicates racines qui attachent un homme à la terre où sont nés et morts ses aïeux, qui l'attachent à ce que l'on pense et à ce que l'on mange, aux usages comme aux nourritures, aux locutions locales, aux intonations des paysans, aux odeurs du sol, des villages et de l'air lui-même.",
          "J'aime ma maison où j'ai grandi. De mes fenêtres, je vois la Seine qui coule, le long de mon jardin, derrière la route, presque chez moi, la grande et large Seine qui va de Rouen au Havre, couverte de bateaux qui passent. »",
          "(Quelques jours plus tard, le narrateur commence à se sentir observé et menacé par une présence invisible qu'il ne s'explique pas.)",
        ],
        corrige: [
          "Aucune réponse attendue pour cette partie : il s'agit du texte support à lire avant de composer.",
        ],
      },
      {
        titre: "Questions de compréhension et de grammaire (25 points)",
        enonce: [
          "Réponds par des phrases complètes et justifie en citant le texte entre guillemets.",
          "1. Sous quelle forme ce texte est-il écrit ? Quels indices le montrent (au moins deux) ? (4 points)",
          "2. Quel sentiment le narrateur exprime-t-il au début de l'extrait ? Relève deux mots ou expressions qui le prouvent. (4 points)",
          "3. Pourquoi le narrateur aime-t-il autant l'endroit où il vit ? Cite deux raisons données dans le texte. (4 points)",
          "4. Relève un verbe conjugué au passé composé dans le premier paragraphe et donne son infinitif. (3 points)",
          "5. Dans « l'énorme platane qui la couvre, l'abrite et l'ombrage », quelle est la nature du mot « qui » et quelle est sa fonction ? (3 points)",
          "6. Le titre annonce un récit fantastique. D'après la dernière indication entre parenthèses, qu'est-ce qui va faire basculer le récit dans le fantastique ? (4 points)",
          "7. Relève un procédé d'écriture qui traduit l'attachement du narrateur à sa terre (par exemple une énumération). (3 points)",
        ],
        corrige: [
          "1. Le texte est écrit sous la forme d'un journal intime. Indices : la date en tête de l'entrée (« 8 mai »), l'emploi de la première personne (« J'ai passé », « J'aime »), et le ton personnel et confidentiel.",
          "2. Le narrateur exprime le bonheur, l'enthousiasme et l'attachement. Preuves : « Quelle journée admirable ! » (phrase exclamative) et la répétition de « J'aime ce pays », « J'aime ma maison ».",
          "3. Il aime cet endroit parce qu'il y a « ses racines » (il y a grandi, ses aïeux y sont nés et morts) et parce qu'il y est lié aux usages, aux nourritures, aux odeurs du pays : « aux usages comme aux nourritures, aux locutions locales... ». La vue sur la Seine est aussi une raison.",
          "4. Verbe au passé composé : « J'ai passé » (infinitif : passer).",
          "5. « qui » est un pronom relatif. Il est sujet des verbes « couvre », « abrite » et « ombrage » ; il reprend l'antécédent « l'énorme platane ».",
          "6. Le récit va basculer dans le fantastique parce que le narrateur va se sentir « observé et menacé par une présence invisible » qu'il ne peut pas expliquer : l'irruption d'un phénomène inexplicable et angoissant dans un cadre quotidien est caractéristique du fantastique.",
          "7. Procédé attendu : l'énumération (« aux usages comme aux nourritures, aux locutions locales, aux intonations des paysans, aux odeurs du sol... ») qui accumule les détails pour souligner l'attachement profond du narrateur. On pouvait aussi citer la répétition de « J'aime » (anaphore).",
        ],
      },
      {
        titre: "Réécriture (5 points)",
        enonce: [
          "Réécris la phrase suivante en remplaçant « je » par « nous » et en effectuant toutes les modifications nécessaires :",
          "« J'ai passé toute la matinée étendu sur l'herbe, et j'aime ce pays. »",
        ],
        corrige: [
          "« Nous avons passé toute la matinée étendus sur l'herbe, et nous aimons ce pays. »",
          "Points de vigilance : « J'ai passé » devient « Nous avons passé » (auxiliaire avoir à la 1re personne du pluriel) ; l'adjectif/participe « étendu » s'accorde au masculin pluriel : « étendus » ; « j'aime » devient « nous aimons ».",
        ],
      },
      {
        titre: "Dictée (10 points)",
        enonce: [
          "La dictée est lue trois fois (lecture d'ensemble, lecture pour écrire, relecture). Texte dicté (dans l'esprit du récit fantastique, domaine public adapté) :",
          "« La nuit était calme et pourtant je ne pouvais pas dormir. Une étrange présence semblait rôder autour de mon lit. Je fermais les yeux, mais j'entendais des pas légers qui s'approchaient lentement. Quand j'allumais la lampe, il n'y avait personne, et le silence retombait, plus lourd encore. »",
          "Barème indicatif : chaque erreur grammaticale retire 1 point, chaque erreur lexicale 0,5 point ; la note ne peut pas être négative.",
        ],
        corrige: [
          "Points de vigilance : l'imparfait (« était », « pouvais », « fermais », « entendais », « allumais ») avec les bonnes terminaisons ; l'accord « des pas légers qui s'approchaient » (masculin pluriel).",
          "Orthographe lexicale : « présence », « rôder » (accent circonflexe), « lentement », « silence », « lourd ».",
          "Homophones à surveiller : « il n'y avait personne » (n'y), « et le silence » (et de liaison).",
        ],
      },
      {
        titre: "Rédaction (10 points) — sujet d'imagination fantastique",
        enonce: [
          "Sujet : À la manière du narrateur du « Horla », imagine qu'une nuit, seul(e) chez toi, tu sens la présence d'un être invisible. Raconte cette nuit sous la forme d'une page de journal intime (avec une date), en faisant naître le doute et la peur.",
          "Consignes : ton texte fera 20 à 30 lignes ; il sera écrit à la première personne et au présent ou au passé ; tu emploieras au moins deux procédés pour créer l'atmosphère fantastique (hésitation entre le réel et l'imaginaire, sensations, questions que se pose le narrateur, phrases exclamatives).",
        ],
        corrige: [
          "Critères d'évaluation : respect de la forme (journal intime avec date, première personne), création d'une atmosphère fantastique, richesse du vocabulaire des sensations et des émotions, correction de la langue et présentation.",
          "Attendus : faire naître le doute (le narrateur ne sait pas si ce qu'il perçoit est réel ou imaginé), employer le champ lexical de la peur et des sensations (bruits, ombres, froid), utiliser des questions rhétoriques et des phrases exclamatives.",
          "Exemple d'amorce acceptable : « 3 novembre. — Je ne comprends pas ce qui m'arrive. Cette nuit encore, une présence était là, tout près de moi. Ai-je rêvé ? Pourtant, j'ai bien senti ce souffle glacé contre ma nuque... »",
          "On valorise un texte cohérent, progressif (l'angoisse monte peu à peu) et qui laisse le lecteur dans l'incertitude, caractéristique du genre fantastique.",
        ],
      },
    ],
    conseils: [
      "Gestion du temps (120 min / 50 points) : environ 40 min pour les questions et la réécriture, 15 min pour la dictée, 55 min pour la rédaction, plus une relecture finale.",
      "Repère les caractéristiques du fantastique : un cadre réaliste dans lequel surgit un événement inexplicable, et l'hésitation permanente entre le réel et le surnaturel.",
      "Justifie chaque réponse de compréhension par une citation exacte entre guillemets : c'est ce qui rapporte les points.",
      "Pour la dictée, concentre-toi sur les terminaisons de l'imparfait (-ais, -ait, -aient) et sur les accords des participes et adjectifs.",
      "Rédaction : écris un court plan au brouillon (montée progressive de la peur), soigne le vocabulaire des sensations et respecte la forme du journal intime (date, « je »).",
      "Erreur à éviter : raconter une histoire d'action ou d'horreur sanglante. Le fantastique repose sur le doute et l'atmosphère, pas sur l'explosion de violence.",
    ],
  },
];

export default BREVETS_BLANCS;
