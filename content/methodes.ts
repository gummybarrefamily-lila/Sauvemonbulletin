// Fiches méthodes de SauveMonBulletin.
// Techniques d'apprentissage, de rédaction, de préparation au brevet et à l'oral,
// rédigées dans un style direct et actionnable : des "hacks" qui marchent vraiment.

import type { Methode } from "./types";

export const METHODES: Methode[] = [
  {
    slug: "apprendre-une-lecon",
    titre: "Apprendre une leçon (et s'en souvenir le jour du contrôle)",
    emoji: "🧠",
    categorie: "apprentissage",
    accroche:
      "Relire ta leçon 10 fois ne sert à RIEN. Ton cerveau retient ce qu'il fait, pas ce qu'il regarde. Voici la méthode des élèves qui cartonnent sans y passer des heures.",
    sections: [
      {
        titre: "Le piège numéro 1 : la relecture passive",
        points: [
          "Relire une leçon donne une impression de « déjà vu » que ton cerveau confond avec « je sais ». C'est le piège le plus courant.",
          "Test imparable : ferme le cahier et récite. Si tu bloques au bout de deux phrases, tu n'as pas appris, tu as juste relu.",
          "Règle d'or : 20 % du temps à lire, 80 % du temps à te tester. La mémorisation active bat la relecture dans toutes les études scientifiques.",
          "Le surlignage seul ne compte pas non plus : surligner sans restituer, c'est décorer ton cahier.",
        ],
      },
      {
        titre: "La mémorisation active : le mode d'emploi",
        points: [
          "Étape 1 : lis la leçon UNE fois, sérieusement, en cherchant à comprendre chaque phrase (pas à mémoriser).",
          "Étape 2 : ferme le cahier et écris ou récite tout ce dont tu te souviens, même en vrac.",
          "Étape 3 : rouvre le cahier et repère ce que tu as oublié — c'est exactement ça qu'il faut retravailler, pas le reste.",
          "Étape 4 : recommence le cycle ferme/récite/vérifie jusqu'à restituer 90 % du contenu. Deux ou trois cycles suffisent souvent.",
          "Bonus : récite à voix haute en marchant dans ta chambre. Bouger + parler = deux canaux de mémorisation au lieu d'un.",
        ],
      },
      {
        titre: "La répétition espacée : J+1, J+3, J+7",
        points: [
          "Ton cerveau oublie 70 % d'une leçon en 24 h si tu ne la revois pas : c'est la courbe de l'oubli, et elle est impitoyable.",
          "L'antidote : revoir la leçon le lendemain (J+1), puis trois jours après (J+3), puis une semaine après (J+7). Chaque révision « recharge » la mémoire pour plus longtemps.",
          "Chaque révision espacée dure 5 à 10 minutes maximum : c'est un test rapide (récitation, cartes mémo), pas une relecture complète.",
          "Concrètement : note dans ton agenda « revoir SVT ch.3 » aux dates J+1, J+3 et J+7 le jour même où tu copies la leçon.",
          "Trois révisions de 10 minutes espacées battent une soirée de 2 heures la veille du contrôle. Même temps total, résultat sans comparaison.",
        ],
      },
      {
        titre: "La technique Feynman : explique-le à un enfant de 8 ans",
        points: [
          "Principe : si tu ne sais pas expliquer simplement, c'est que tu n'as pas compris. Point.",
          "Étape 1 : prends une notion (ex. la photosynthèse) et explique-la à voix haute comme si tu parlais à un enfant de 8 ans, sans aucun mot compliqué.",
          "Étape 2 : dès que tu bloques ou que tu récites bêtement le cours, STOP — tu viens de trouver le trou dans ta compréhension. Retourne au cours sur CE point précis.",
          "Étape 3 : simplifie encore, trouve une image ou une comparaison de la vie quotidienne (« la mitochondrie, c'est la centrale électrique de la cellule »).",
          "Public de test idéal : un petit frère, un parent, ton chat, ou toi-même face au miroir. L'important est de parler pour de vrai.",
        ],
      },
      {
        titre: "Cartes mémo : la machine à points",
        points: [
          "Une carte = UNE question au recto, UNE réponse au verso. Jamais un paragraphe entier : ta carte doit se lire en 5 secondes.",
          "Écris-les toi-même : le simple fait de fabriquer la carte, c'est déjà une première mémorisation.",
          "Fais trois piles en t'entraînant : « je sais » / « hésitation » / « raté ». Rejoue en priorité la pile « raté », puis « hésitation ».",
          "Mélange l'ordre à chaque session, sinon tu mémorises l'ordre des cartes au lieu du contenu.",
          "Toujours dans le sens question → réponse ET réponse → question (ex. « date → événement » puis « événement → date »).",
        ],
      },
      {
        titre: "Le sketchnoting : dessine ta leçon",
        points: [
          "Transforme ta leçon en une seule page visuelle : mots-clés, flèches, petits dessins, cadres, couleurs. Pas de phrases complètes.",
          "Ton cerveau retient une image 6 fois mieux qu'un texte : une flèche entre deux mots vaut trois lignes d'explication.",
          "Pas besoin de savoir dessiner : un bonhomme bâton, un éclair, un soleil, une couronne suffisent largement.",
          "Code couleur fixe : une couleur pour les définitions, une pour les dates, une pour les exemples. Toujours le même code dans toutes les matières.",
          "La page finale doit tenir sur UNE feuille : si ça déborde, c'est que tu recopies au lieu de synthétiser.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Test de la relecture passive : prends la dernière leçon d'histoire que tu as « apprise ». Sans ouvrir le cahier, écris en 5 minutes tout ce dont tu te souviens. Puis compare avec le cours et calcule ton pourcentage de restitution.",
        corrige:
          "Corrigé modèle (démarche attendue) : 1) Tu écris de mémoire titres, dates, définitions, exemples — même en vrac, même incomplet. 2) Tu rouvres le cahier et tu surlignes dans ta feuille ce qui est juste, tu notes en rouge ce qui manque. 3) Tu comptes : si tu as restitué moins de 50 %, la leçon n'était pas apprise, juste relue — c'est le cas de la majorité des élèves la première fois, c'est normal. 4) Conclusion à en tirer : les éléments en rouge sont TA liste de révision personnalisée. Refais le même test demain uniquement sur ces éléments : tu devrais passer au-dessus de 80 %.",
      },
      {
        consigne:
          "Technique Feynman : explique la différence entre un volcan effusif et un volcan explosif comme si tu parlais à un enfant de 8 ans. Interdiction d'utiliser les mots « viscosité », « magma » et « éruption ». Rédige ton explication en 5 à 8 lignes.",
        corrige:
          "Explication modèle : « Imagine deux bouteilles. La première contient du sirop très liquide : quand tu la secoues et que tu l'ouvres, ça coule tranquillement sur les côtés. C'est le volcan \"gentil\" : sa lave très fluide s'écoule en longues rivières rouges, comme à Hawaï. La deuxième bouteille contient de la pâte super épaisse et collante qui bouche le goulot : la pression monte, monte... et BOUM, tout part d'un coup en explosion de morceaux et de cendres. C'est le volcan \"colérique\", le plus dangereux, comme la montagne Pelée. Donc : plus la pâte est liquide, plus ça coule doucement ; plus elle est épaisse et coincée, plus ça explose fort. » — Remarque : si tu as réussi sans les mots interdits, tu as compris. Tu peux maintenant réintroduire le vocabulaire du cours : la « pâte » s'appelle le magma, et « liquide/épais » se dit fluide/visqueux.",
      },
      {
        consigne:
          "Fabrique 5 cartes mémo sur le chapitre de ton choix en respectant la règle « une question au recto, une réponse courte au verso ». Puis vérifie chaque carte avec la checklist : lisible en 5 secondes ? une seule idée ? testable dans les deux sens ?",
        corrige:
          "Exemple de jeu de cartes réussi (chapitre : la Première Guerre mondiale) : Carte 1 — Recto : « Dates de la Première Guerre mondiale ? » / Verso : « 1914-1918 ». Carte 2 — Recto : « Que se passe-t-il à Verdun en 1916 ? » / Verso : « Bataille la plus meurtrière du front ouest, symbole de la guerre de position ». Carte 3 — Recto : « Définition : guerre totale ? » / Verso : « Guerre qui mobilise toute la société : soldats, civils, économie, propagande ». Carte 4 — Recto : « 11 novembre 1918 ? » / Verso : « Armistice : arrêt des combats ». Carte 5 — Recto : « Qu'est-ce qu'un \"poilu\" ? » / Verso : « Surnom des soldats français des tranchées ». Contre-exemple à éviter : une carte avec au recto « La Première Guerre mondiale » et au verso 10 lignes de résumé — ce n'est plus une carte mémo, c'est une fiche déguisée.",
      },
      {
        consigne:
          "Planifie la répétition espacée : tu viens d'apprendre aujourd'hui (lundi) une leçon de maths sur le théorème de Pythagore, et le contrôle est dans 12 jours. Établis ton calendrier de révision précis (dates + durée + activité à chaque session).",
        corrige:
          "Calendrier modèle : Lundi (J0, 25 min) : lecture attentive + premier cycle de mémorisation active (fermer/réciter/vérifier) + fabrication de 5 cartes mémo (énoncé du théorème, réciproque, rédaction type, racine carrée, vocabulaire hypoténuse). Mardi (J+1, 10 min) : test cartes mémo + réciter l'énoncé du théorème et refaire de tête la rédaction type d'un exercice. Jeudi (J+3, 10 min) : cartes mémo (surtout la pile « raté ») + un exercice d'application complet sans le cours. Lundi suivant (J+7, 15 min) : cartes + deux exercices dont un avec la réciproque. Veille du contrôle (J+11, 20 min) : mini-contrôle blanc chronométré (2 exercices) + relecture UNIQUEMENT des points ratés. Total : environ 1 h 20 réparties — bien plus efficace que 2 h la veille.",
      },
      {
        consigne:
          "Sketchnoting : transforme la leçon « le cycle de l'eau » en une page visuelle. Décris précisément (ou dessine) ce que tu mettrais : éléments dessinés, flèches, mots-clés, couleurs. Maximum 15 mots écrits sur la page.",
        corrige:
          "Page modèle décrite : au centre, un grand cercle de flèches bleues qui tourne dans le sens des aiguilles d'une montre. En bas à gauche : vagues dessinées + soleil avec des traits qui chauffent + flèche qui monte + mot-clé « ÉVAPORATION » en orange. En haut : un nuage + mot « CONDENSATION » en bleu foncé (vapeur → gouttes, symbolisé par des petits points qui deviennent des gouttes). À droite : gouttes qui tombent + « PRÉCIPITATIONS » en bleu. En bas : flèches qui descendent dans le sol (traits hachurés) + « INFILTRATION », et une rivière qui retourne à la mer + « RUISSELLEMENT ». Code couleur : orange = chaleur/énergie, bleu = eau, vert = sol. Total : 5 mots-clés + 2 ou 3 légendes, dessins simples (vagues, soleil, nuage, gouttes). Le test de réussite : en regardant uniquement ta page, tu dois pouvoir réciter tout le cycle à voix haute.",
      },
    ],
  },
  {
    slug: "planifier-ses-revisions",
    titre: "Planifier ses révisions (sans finir en panique la veille)",
    emoji: "📅",
    categorie: "apprentissage",
    accroche:
      "Le bachotage de dernière minute, c'est comme remplir une passoire avec de l'eau : ça déborde et il ne reste rien. Un bon planning te fait gagner des points ET des soirées libres.",
    sections: [
      {
        titre: "Pourquoi le bachotage te trahit toujours",
        points: [
          "Réviser 3 heures la veille = mémoire à court terme uniquement. Le lendemain midi, 60 % ont déjà disparu, et au brevet en juin, il ne reste rien.",
          "Le cerveau consolide les souvenirs PENDANT le sommeil : bachoter jusqu'à minuit, c'est saboter la machine qui enregistre.",
          "Le stress de la dernière minute bloque la mémoire de travail : tu « sais » mais rien ne sort. Classique et évitable.",
          "La seule exception acceptable : une révision LÉGÈRE la veille (cartes mémo, 20 minutes) pour rafraîchir ce qui est déjà appris. Rafraîchir, pas découvrir.",
        ],
      },
      {
        titre: "Construire son planning en 4 étapes",
        points: [
          "Étape 1 — L'inventaire : liste tout ce qui tombe dans les 2 prochaines semaines (contrôles, devoirs maison, leçons à apprendre). Tout, sur papier. Un cerveau n'est pas un agenda.",
          "Étape 2 — Le squelette : dans un tableau de la semaine, bloque d'abord l'intouchable (cours, sport, repas, sommeil). Ce qui reste, ce sont tes créneaux réels.",
          "Étape 3 — La répartition : place des blocs de 25 à 45 minutes, matière la plus difficile en premier quand ton cerveau est frais. Une matière différente par bloc.",
          "Étape 4 — La marge : laisse 1 ou 2 créneaux vides « joker » par semaine pour absorber les imprévus. Un planning sans marge explose au premier contretemps.",
          "Affiche le planning au-dessus de ton bureau. Un planning dans un tiroir n'existe pas.",
        ],
      },
      {
        titre: "La méthode Pomodoro : ton cerveau adore les rounds",
        points: [
          "Le principe : 25 minutes de travail à fond, 5 minutes de vraie pause. C'est un round. Après 4 rounds, pause longue de 20-30 minutes.",
          "Pendant les 25 minutes : téléphone en mode avion DANS UNE AUTRE PIÈCE. Une notification vue = 2 minutes de concentration perdues, même sans y répondre.",
          "Pendant les 5 minutes de pause : bouger, boire, regarder par la fenêtre. PAS les réseaux sociaux — ton cerveau n'en reviendrait pas en 5 minutes.",
          "Astuce anti-procrastination : dis-toi « juste un pomodoro ». Commencer est le plus dur ; une fois lancé, tu enchaînes presque toujours.",
          "Note ce que tu as fait à chaque round : voir 6 tomates cochées à la fin de la journée, c'est très motivant.",
        ],
      },
      {
        titre: "Prioriser : la matrice coefficient × faiblesse",
        points: [
          "Tout ne se vaut pas. Classe chaque matière selon deux questions : « ça rapporte combien ? » (coefficient, contrôle imminent) et « je suis à quel niveau ? ».",
          "Priorité 1 : gros enjeu + point faible → le maximum de créneaux, en début de session quand tu es frais.",
          "Priorité 2 : gros enjeu + point fort → entretien régulier mais léger (cartes mémo, exercices rapides). Ne pas sur-réviser ce qu'on sait déjà, c'est du temps volé aux priorités 1.",
          "Priorité 3 : petit enjeu + point faible → petits créneaux réguliers, pas de panique.",
          "Piège classique : passer des heures sur sa matière préférée parce que c'est agréable. Réviser ce qu'on sait déjà, c'est confortable mais ça ne rapporte aucun point.",
        ],
      },
      {
        titre: "La semaine type qui marche",
        points: [
          "Chaque jour de cours : 10 minutes le soir pour relire ET réciter ce qui a été vu dans la journée (c'est ton J+1 automatique).",
          "Le mercredi après-midi : 2 ou 3 pomodoros sur les priorités 1 + les devoirs de la semaine.",
          "Le week-end : une session de fond (exercices type contrôle, fiches) le samedi OU le dimanche matin — pas les deux jours entiers, tu as le droit de vivre.",
          "Le dimanche soir : 15 minutes pour faire le planning de la semaine suivante. C'est le rendez-vous le plus rentable de ta semaine.",
          "Sommeil non négociable : 8 à 9 heures. Une heure de sommeil sacrifiée coûte plus de points qu'une heure de révision n'en rapporte.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Cas pratique : Lina est en 3ème. Dans 10 jours elle a un contrôle de maths (chapitre difficile pour elle), dans 5 jours un contrôle d'anglais (elle est à l'aise), et un exposé de SVT à rendre dans 8 jours (pas commencé). Elle dispose d'environ 1 h par soir en semaine et de 3 h le week-end. Construis son planning de révision jour par jour.",
        corrige:
          "Planning modèle : Priorisation d'abord — anglais = échéance proche mais point fort (entretien léger) ; maths = échéance plus lointaine mais point faible (priorité 1, à étaler) ; exposé SVT = travail de production, à découper pour éviter la panique de la veille. Jours 1-2 : 25 min maths (reprise du cours + 2 exercices) + 20 min anglais (vocabulaire en cartes mémo) + 15 min SVT (choisir le plan de l'exposé). Jour 3 : 30 min anglais (exercice type contrôle) + 30 min SVT (recherches). Jour 4 (veille anglais) : 20 min anglais UNIQUEMENT en rafraîchissement (cartes mémo) + 30 min maths. Jour 5 : contrôle d'anglais ; le soir, 45 min SVT (rédaction). Week-end (3 h) : 1 h 30 maths (exercices type contrôle + fiche), 1 h SVT (finir diaporama + répéter une fois à voix haute), 30 min joker. Jours 8-9 : 30 min maths par soir (exercices, cartes). Jour 9 au soir : mini-contrôle blanc de maths de 30 min. Veille du contrôle de maths : 20 min de cartes mémo maximum, coucher tôt. Points clés du corrigé : chaque tâche est découpée, l'exposé n'est jamais fait en une fois, et la veille de chaque contrôle est légère.",
      },
      {
        consigne:
          "Chasse au bachotage : voici la semaine de Tom — lundi à jeudi : rien ; vendredi : 3 h de SVT jusqu'à 23 h 30 pour le contrôle de samedi. Liste au moins 4 erreurs précises et réécris sa semaine à volume de travail égal (3 h au total).",
        corrige:
          "Erreurs : 1) Tout le volume est concentré la veille → mémoire à court terme seulement, la courbe de l'oubli effacera presque tout. 2) Il travaille jusqu'à 23 h 30 → il ampute le sommeil, qui est justement le moment où le cerveau enregistre. 3) Aucune répétition espacée → zéro consolidation. 4) 3 h d'affilée sans pauses structurées → la concentration chute après 40 minutes, la dernière heure est quasi inutile. 5) Aucun test avant le jour J → il découvrira ses lacunes pendant le contrôle. Semaine réécrite (3 h au total) : lundi 30 min (lecture active + début de cartes mémo), mardi 20 min (récitation + cartes), mercredi 45 min (exercices type contrôle), jeudi 25 min (cartes, pile « raté » en priorité), vendredi 40 min avant 20 h (mini-contrôle blanc de 25 min + correction), puis soirée libre et coucher normal. Samedi matin : 10 min de cartes au petit-déjeuner. Même durée totale, mémorisation incomparable.",
      },
      {
        consigne:
          "Ta matrice de priorités : prends TES matières actuelles et classe-les dans un tableau à deux colonnes (enjeu fort/faible) et deux lignes (à l'aise/en difficulté). Puis attribue un nombre de créneaux hebdomadaires à chaque case et justifie en une phrase par case.",
        corrige:
          "Exemple de matrice remplie (élève de 3ème fictif) : Case « enjeu fort + en difficulté » : maths, histoire-géo → 3 créneaux/semaine chacun, placés en début de session : « c'est là que chaque heure investie rapporte le plus de points au brevet ». Case « enjeu fort + à l'aise » : français → 1 créneau/semaine d'entretien : « maintenir le niveau sans voler du temps aux urgences ». Case « enjeu faible + en difficulté » : physique-chimie → 1 petit créneau régulier : « progresser doucement sans stress ». Case « enjeu faible + à l'aise » : anglais → 10 min de vocabulaire dans les temps morts : « entretien minimal, quasi gratuit ». Vérification du corrigé : la matière préférée n'a PAS le plus de créneaux — si ton tableau donne le plus de temps à ta matière préférée, recommence.",
      },
      {
        consigne:
          "Session Pomodoro réelle : ce soir, réalise 2 pomodoros (2 × 25 min + pauses) sur tes devoirs. Avant de commencer, écris ton objectif précis pour chaque round. Après, fais le bilan écrit : objectif atteint ? interruptions ? qu'est-ce que tu changes la prochaine fois ?",
        corrige:
          "Bilan modèle : Round 1 — Objectif écrit AVANT : « faire les exercices 4 et 5 de maths p. 112 » (précis, pas « faire des maths »). Réalisé : exercice 4 fini, exercice 5 à moitié. Interruptions : 1 (je suis allé voir une notification → téléphone déplacé dans le salon pour le round 2). Round 2 — Objectif : « finir l'ex. 5 + réciter la leçon d'espagnol ». Réalisé : tout. Pause entre les deux : je me suis étiré et j'ai bu un verre d'eau, pas d'écran. Ce que je change : je prépare mon matériel AVANT de lancer le minuteur (j'ai perdu 4 minutes à chercher ma calculatrice), et le téléphone démarre hors de la pièce dès le round 1. Les critères d'une bonne réponse : objectifs formulés en actions vérifiables, comptage honnête des interruptions, et UNE amélioration concrète pour la prochaine session.",
      },
      {
        consigne:
          "Débat à trancher : « Réviser 4 h le dimanche, c'est mieux que 30 min par jour pendant 8 jours. » Vrai ou faux ? Rédige une réponse argumentée en 5 à 8 lignes en utilisant au moins trois notions de la fiche (courbe de l'oubli, répétition espacée, concentration, sommeil...).",
        corrige:
          "Réponse modèle : Faux, à volume égal les 30 minutes quotidiennes gagnent largement. Premièrement, la courbe de l'oubli efface la majorité d'un apprentissage en quelques jours : une seule session de 4 h, même intense, sera aux trois quarts oubliée la semaine suivante, alors que 8 petites sessions constituent une répétition espacée qui recharge la mémoire à chaque passage. Deuxièmement, la concentration réelle chute fortement après 40 à 50 minutes : sur 4 h d'affilée, seule la première heure et demie est vraiment efficace ; en sessions de 30 minutes, chaque minute est à haute intensité. Troisièmement, chaque nuit de sommeil entre deux sessions consolide ce qui a été appris la veille : 8 sessions = 7 nuits de consolidation gratuites, contre une seule pour la session unique. Le seul avantage du bloc de 4 h — l'impression d'avoir « beaucoup travaillé » — est justement une illusion.",
      },
    ],
  },
  {
    slug: "memoriser-par-coeur",
    titre: "Mémoriser par cœur : dates, formules, vocabulaire",
    emoji: "🔑",
    categorie: "apprentissage",
    accroche:
      "« Mais monsieur, j'ai pas de mémoire ! » — Faux. Tu connais par cœur des dizaines de paroles de chansons. Ta mémoire est excellente : elle attend juste qu'on lui donne des choses marquantes à retenir.",
    sections: [
      {
        titre: "La règle d'or : le bizarre se retient, le plat s'oublie",
        points: [
          "Ton cerveau est une machine à retenir ce qui est drôle, absurde, exagéré, choquant ou visuel. Une info « plate » glisse ; une info bizarre s'accroche.",
          "Le job de la mnémotechnique : transformer une info plate (une date, une formule) en quelque chose de bizarre et d'imagé.",
          "Plus TU inventes le moyen mnémotechnique toi-même, mieux il fonctionne. Ceux des autres marchent, les tiens marchent deux fois mieux.",
          "Attention : la mnémotechnique sert à RETENIR, pas à comprendre. Comprends d'abord, encode ensuite.",
        ],
      },
      {
        titre: "Les acronymes et phrases codées",
        points: [
          "Acronyme : la première lettre de chaque mot à retenir forme un mot. Ex. « Me Voici Tout Mouillé, J'ai Suivi Un Nuage » pour l'ordre des planètes (Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune).",
          "Classique des maths : « CAHSOHTOA » ou la phrase « Casse-toi » revisitée — Cos = Adjacent/Hypoténuse, Sin = Opposé/Hypoténuse, Tan = Opposé/Adjacent.",
          "Les conjonctions de coordination : « Mais où est donc Ornicar ? » (mais, ou, et, donc, or, ni, car). Indémodable parce que la phrase est absurde.",
          "Fabrique les tiens : liste les initiales, cherche une phrase ridicule qui les utilise dans l'ordre. Plus c'est ridicule, mieux ça tient.",
          "Limite à connaître : un acronyme donne l'ORDRE et les initiales, pas le contenu. Il doit s'ajouter à la compréhension, pas la remplacer.",
        ],
      },
      {
        titre: "Le palais de mémoire : la technique des champions",
        points: [
          "Principe : ta mémoire des LIEUX est ultra-puissante (tu peux décrire ta maison les yeux fermés). On y accroche les infos à retenir.",
          "Étape 1 : choisis un trajet que tu connais par cœur (ta chambre → cuisine, ou le chemin du collège) et définis 5 à 10 « stations » fixes (porte, lit, bureau, frigo...).",
          "Étape 2 : transforme chaque info en image folle et pose-la sur une station. Ex. pour retenir les 8 étapes de la digestion, mets une bouche géante qui mâche sur ta porte d'entrée, un toboggan (œsophage) dans le couloir, une machine à laver qui brasse (estomac) dans la cuisine...",
          "Étape 3 : pour restituer, refais mentalement le trajet et « regarde » chaque station. L'ordre est garanti par le trajet.",
          "Plus l'image est exagérée, colorée, sonore ou ridicule, mieux elle tient. Une image « raisonnable » s'efface.",
        ],
      },
      {
        titre: "Les dates d'histoire : trois techniques qui marchent",
        points: [
          "Technique 1 — L'histoire dans le nombre : cherche du sens dans les chiffres. 1515 (Marignan) se chante ; 1789 : 1-7-8-9, les chiffres « montent » comme le peuple qui se soulève.",
          "Technique 2 — L'ancrage : accroche la nouvelle date à une date déjà sue. « La Seconde Guerre mondiale commence en 1939, exactement 25 ans après la Première (1914). »",
          "Technique 3 — La scène mentale : visualise l'événement AVEC la date écrite dedans en géant. Pour 1998 rien à faire ; pour 843 (partage de Verdun), imagine trois frères qui découpent une carte géante en criant « HUIT CENT QUARANTE-TROIS ! ».",
          "Toujours apprendre la date dans les deux sens : date → événement ET événement → date (deux cartes mémo différentes).",
          "Frise personnelle : dessine une frise avec TES dates du programme et affiche-la. La position sur la frise devient elle-même un indice de mémoire.",
        ],
      },
      {
        titre: "Les formules de maths et sciences",
        points: [
          "D'abord comprendre d'où vient la formule (une aire, c'est toujours une surface qu'on remplit ; un volume, un remplissage en 3D). Une formule comprise est déjà à moitié retenue.",
          "Donne un sens aux lettres : dans V = π × r² × h (cylindre), r² × π c'est le disque de base, h c'est l'empilement des disques. Raconte la formule.",
          "Vérification par les unités : une aire doit être en cm², un volume en cm³. Si ta formule de volume n'a que deux longueurs multipliées, elle est fausse — ce réflexe sauve des points.",
          "Chante-les ou scande-les : « π-R-carré » sur trois notes pour l'aire du disque, « deux-π-R » pour le périmètre. Le rythme distingue les deux formules souvent confondues.",
          "Fais une « boîte à formules » : une carte mémo par formule, avec au recto la situation (« aire du triangle ? ») et au verso la formule + un mini-schéma.",
        ],
      },
      {
        titre: "Le vocabulaire de langues : arrête les listes, fais des liens",
        points: [
          "La technique du mot-clé : trouve un mot français qui ressemble au mot étranger et fabrique une image. Ex. anglais « to sneeze » (éternuer) → « snif » → imagine quelqu'un qui éternue en faisant « SNIIIIZ ».",
          "Apprends par paquets de 7 mots maximum par session, dans les deux sens, avec des cartes mémo.",
          "Mets chaque mot dans UNE phrase perso : « I sneeze when I see my cat. » Un mot en contexte tient dix fois mieux qu'un mot isolé.",
          "Pour le chinois ou le russe : décompose les caractères/mots en éléments et raconte une histoire. Ex. 好 (hǎo, « bien ») = femme (女) + enfant (子) : « une maman avec son enfant, tout va bien ».",
          "Révise le vocabulaire dans les temps morts : file d'attente, trajet en bus. 5 minutes de cartes mémo en attendant, c'est 35 minutes par semaine gratuites.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Invente un moyen mnémotechnique (acronyme ou phrase codée) pour retenir dans l'ordre les 6 étapes de la démarche scientifique : Observation, Question, Hypothèse, Expérience, Résultats, Conclusion. Explique ensuite en une phrase pourquoi ton moyen respecte la « règle du bizarre ».",
        corrige:
          "Exemple de corrigé : initiales O-Q-H-E-R-C → phrase codée : « Oscar Quitte l'Hôtel En Roulant Comme-un-fou ». Justification : la phrase crée une mini-scène visuelle et absurde (on VOIT Oscar dévaler l'hôtel), donc elle s'accroche mieux qu'une liste plate ; et chaque initiale rappelle l'étape dans le bon ordre. Autre proposition valable : « On Questionne, on Hasarde, on Essaie, on Regarde, on Conclut » — ici les mots eux-mêmes racontent la démarche, ce qui combine mémorisation ET compréhension (encore mieux). L'important dans ton corrigé : l'ordre des initiales est respecté, et tu sais redonner l'étape complète derrière chaque initiale — teste-toi en cachant la liste.",
      },
      {
        consigne:
          "Palais de mémoire express : tu dois retenir dans l'ordre les 7 étapes du trajet des aliments (bouche, œsophage, estomac, intestin grêle, gros intestin, rectum, anus... ou toute liste ordonnée de ton cours actuel). Décris ton palais : le trajet choisi, les stations, et l'image folle posée sur chacune.",
        corrige:
          "Palais modèle (trajet : ma chambre → la cuisine) : Station 1, porte de ma chambre : une BOUCHE géante à la place de la porte, je dois passer entre les dents (bouche). Station 2, couloir : le couloir est devenu un TOBOGGAN mou et rose qui m'aspire vers le bas (œsophage). Station 3, machine à laver : elle brasse du jus orange avec un bruit d'acide qui pétille (estomac). Station 4, tuyau d'arrosage enroulé sur 6 mètres dans le salon, avec des petites mains qui attrapent des nutriments au passage (intestin grêle — je le vois LONG et fin). Station 5, gros tube d'aspirateur qui pompe l'eau du tuyau (gros intestin, qui absorbe l'eau). Stations 6-7, la poubelle de la cuisine avec un couvercle qui s'ouvre (rectum puis anus). Critères de réussite : chaque image est exagérée, chaque station est un lieu FIXE de ton vrai trajet, et en refermant les yeux tu peux « marcher » et réciter les 7 étapes dans l'ordre — puis à l'envers.",
      },
      {
        consigne:
          "Dates d'histoire : voici 4 dates du programme de 3ème — 1914-1918, 1933 (Hitler au pouvoir), 6 juin 1944 (débarquement de Normandie), 1957 (traité de Rome). Pour CHAQUE date, propose une technique différente (histoire dans le nombre, ancrage, scène mentale, rime...).",
        corrige:
          "Corrigé modèle : 1914-1918 → ancrage arithmétique : la guerre dure 4 ans, « 14 + 4 = 18 », les deux bornes se calculent l'une l'autre. 1933 → histoire dans le nombre : le double 3 comme les deux bras levés des saluts dans les défilés — et ancrage : exactement 6 ans avant 1939, début de la guerre qu'il déclenche. 6 juin 1944 → rythme et rime : « le 6 du 6, D-Day », et 44 = les deux vagues d'assaut jumelles sur la plage ; scène mentale : des soldats qui débarquent sur une plage où est planté un panneau géant « 6/6/44 ». 1957 → ancrage : 12 ans après la fin de la guerre (1945), l'Europe se reconstruit en s'unissant ; ou scène mentale : six drapeaux plantés sur le Colisée à Rome avec « 57 » écrit dans le ciel. Vérification finale : ferme la fiche et teste les 4 dates dans les deux sens (date → événement, événement → date).",
      },
      {
        consigne:
          "Formules en récit : les élèves confondent toujours périmètre du cercle (2πr) et aire du disque (πr²). Rédige une explication + un moyen mnémotechnique qui empêchent définitivement la confusion, en t'appuyant sur les unités.",
        corrige:
          "Corrigé modèle : Explication par le sens — le périmètre est une LONGUEUR (on fait le tour du cercle avec une ficelle) : une seule dimension, donc UNE seule longueur dans la formule, 2πr, et le résultat est en cm. L'aire est une SURFACE (on peint l'intérieur du disque) : deux dimensions, donc deux longueurs multipliées, r × r = r², formule πr², résultat en cm². Moyen mnémotechnique : « le carré, c'est pour peindre » — quand il y a un ², c'est de la surface ; pas de ², c'est du tour. Réflexe de contrôle en devoir : je regarde l'unité demandée. On me demande des cm² ? Il me faut la formule avec le carré. Des cm ? Formule sans carré. Ce simple contrôle d'unités permet de retrouver la bonne formule même en cas de doute total.",
      },
      {
        consigne:
          "Vocabulaire de langue : choisis 5 mots que tu n'arrives pas à retenir dans ta langue vivante (ou prends : anglais « ceiling » plafond, « stairs » escalier, « towel » serviette, « pillow » oreiller, « fridge » frigo). Pour chacun : invente une image mot-clé + écris une phrase personnelle qui l'utilise.",
        corrige:
          "Corrigé modèle : « ceiling » (plafond) → ressemble à « scier » + « ciel » : j'imagine quelqu'un qui SCIE le plafond et voit le CIEL à travers. Phrase : « There is a spider on the ceiling of my room. » « stairs » (escalier) → « stère » de bois empilé comme des marches : un escalier fait de bûches. Phrase : « I run up the stairs every morning. » « towel » (serviette) → « ta-ouelle » : ta serviette fait « ouel-ouel » quand tu te sèches les oreilles. Phrase : « My towel is blue. » « pillow » (oreiller) → « pile-eau » : un oreiller rempli d'eau qui fait flotter ta tête. Phrase : « I hide my phone under my pillow » (à ne pas faire !). « fridge » (frigo) → quasi-transparent : « frigide », il fait froid. Phrase : « There is nothing in the fridge. » Critères d'un bon corrigé : chaque image relie le SON du mot étranger à son SENS, et chaque phrase parle de TA vie — c'est ce lien personnel qui fait tenir le mot.",
      },
      {
        consigne:
          "Le test ultime : choisis un moyen mnémotechnique que tu as créé cette semaine et teste-le à J+3 sans aucune relecture entre-temps. Rédige le bilan : qu'est-ce qui est revenu, qu'est-ce qui s'est effacé, et comment améliorer l'encodage raté ?",
        corrige:
          "Bilan modèle : « J'avais encodé les 8 planètes avec ma phrase \"Me Voici Tout Mouillé...\" et le palais de mémoire pour la digestion. À J+3 : la phrase des planètes est revenue entière (les initiales m'ont redonné 7 planètes sur 8 — j'ai confondu Uranus et Neptune car les deux commencent par des sons proches dans ma tête). Le palais de la digestion : 6 stations sur 7 revenues ; la station \"gros intestin\" s'était effacée car mon image (un simple tube) était trop banale. Améliorations : 1) pour Uranus/Neptune, j'ajoute un sous-indice — Neptune = dieu de la mer = la plus LOIN dans l'océan du ciel, donc dernière ; 2) je remplace le tube banal par une image exagérée : un aspirateur GÉANT doré qui aspire toute l'eau en hurlant. » Ce qu'il faut retenir de l'exercice : une image qui s'efface n'était pas assez bizarre — on n'améliore pas en relisant plus, on améliore en encodant mieux.",
      },
    ],
  },
  {
    slug: "rediger-une-intro-parfaite",
    titre: "Rédiger une intro parfaite (le correcteur décide en 10 lignes)",
    emoji: "✍️",
    categorie: "redaction",
    accroche:
      "Le correcteur se fait une opinion de ta copie dès l'introduction. Une intro carrée = il te lit avec bienveillance. Bonne nouvelle : l'intro parfaite est une recette en 4 ingrédients, toujours les mêmes.",
    sections: [
      {
        titre: "La recette en 4 ingrédients (dans cet ordre)",
        points: [
          "Ingrédient 1 — L'amorce : une phrase générale qui « ouvre la porte » du sujet (contexte historique, thème universel, actualité). Jamais « De tout temps les hommes... ».",
          "Ingrédient 2 — La présentation du sujet : de quoi on va parler exactement. Pour un texte : auteur, titre, date, genre. Pour un sujet d'histoire : période et thème précis.",
          "Ingrédient 3 — La problématique : LA question à laquelle toute ta copie va répondre. C'est le cœur de l'intro.",
          "Ingrédient 4 — L'annonce du plan : en une ou deux phrases, la feuille de route (« nous verrons d'abord... puis... »).",
          "Longueur idéale au collège : 5 à 10 lignes. Une intro d'une page, c'est déjà du développement égaré.",
        ],
      },
      {
        titre: "L'amorce : accrocher sans mots creux",
        points: [
          "Amorces interdites : « De tout temps... », « Depuis la nuit des temps... », « Dans la vie... » — le correcteur en lit 50 par paquet, elles signalent une copie banale.",
          "Amorce par le contexte (histoire) : « Au sortir de la Première Guerre mondiale, l'Europe est exsangue... » — tu montres direct que tu connais la période.",
          "Amorce par le thème (français) : « La guerre a inspiré aux poètes des textes de révolte autant que de témoignage... » — une idée générale VRAIE et liée au sujet.",
          "Amorce par l'auteur ou l'œuvre : « Victor Hugo, chef de file du romantisme, a mis sa plume au service des plus pauvres... ».",
          "En panne d'amorce ? Saute-la et commence par la présentation du sujet : une intro sans amorce vaut mieux qu'une amorce creuse.",
        ],
      },
      {
        titre: "La problématique : transformer le sujet en question",
        points: [
          "Hack de base : reformule le sujet en question avec « comment » ou « en quoi ». Sujet : « La vie dans les tranchées » → « Comment les soldats vivent-ils et survivent-ils dans les tranchées entre 1914 et 1918 ? ».",
          "« Comment » appelle une description organisée ; « en quoi » appelle une démonstration. Les deux marchent presque toujours au collège.",
          "Une bonne problématique couvre TOUT le sujet, rien que le sujet : vérifie que chaque mot-clé du sujet est dans ta question ou en découle.",
          "Formule directe (question) : « Comment... ? » ou formule indirecte : « Nous nous demanderons comment... ». Les deux sont acceptées, choisis-en une et tiens-la.",
          "Test de contrôle : ta conclusion devra RÉPONDRE à cette question. Si tu ne vois pas quelle réponse tu donneras, change de problématique.",
        ],
      },
      {
        titre: "L'annonce du plan : simple et assumée",
        points: [
          "Formules qui marchent : « Nous verrons d'abord... , puis... » / « Dans un premier temps... , dans un second temps... » / « Après avoir étudié... , nous analyserons... ».",
          "Une phrase par partie, ou une seule phrase avec « d'abord/ensuite/enfin ». Pas plus.",
          "L'annonce doit correspondre EXACTEMENT à tes parties réelles. Un plan annoncé non tenu coûte plus cher que pas d'annonce du tout.",
          "Astuce d'organisation : rédige l'annonce du plan APRÈS avoir fait ton plan au brouillon, jamais avant.",
          "Au brevet, en rédaction d'imagination, l'annonce de plan ne se fait pas — mais amorce, présentation et fil directeur restent tes amis en réflexion argumentée.",
        ],
      },
      {
        titre: "Avant / après : la preuve par l'exemple",
        points: [
          "AVANT (intro faible) : « De tout temps la guerre a existé. Je vais parler de la Première Guerre mondiale. Il y a eu beaucoup de morts. Voici mon développement. »",
          "Diagnostic : amorce creuse, sujet non délimité, aucune problématique, « je vais parler de » (à bannir), annonce inexistante.",
          "APRÈS (intro solide) : « En 1914, l'Europe bascule dans un conflit d'une violence inédite. Entre 1914 et 1918, la Première Guerre mondiale mobilise des millions de soldats dans les tranchées. Comment cette guerre devient-elle une guerre totale ? Nous verrons d'abord la violence subie par les combattants, puis la mobilisation de l'ensemble des sociétés. »",
          "Remarque la mécanique : contexte daté → sujet délimité → question avec « comment » → plan en deux temps. Quatre phrases suffisent.",
          "Bannis définitivement : « je vais vous parler de », « dans ce texte il y a », « c'est un texte qui parle de ». Remplace par des formulations impersonnelles : « ce poème évoque... », « ce sujet invite à... ».",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Développement construit (brevet histoire) : rédige l'introduction complète (amorce + sujet + problématique + annonce du plan) pour le sujet : « La France défaite et occupée : le régime de Vichy et la Résistance (1940-1944) ».",
        corrige:
          "Intro modèle : « En juin 1940, l'armée française s'effondre en quelques semaines face à l'Allemagne nazie : c'est la défaite la plus rapide de son histoire. De 1940 à 1944, la France vit sous l'Occupation, dirigée par le régime de Vichy du maréchal Pétain, tandis que des hommes et des femmes choisissent de résister. Comment la France traverse-t-elle ces années noires, entre collaboration et résistance ? Nous verrons d'abord que le régime de Vichy rompt avec la République et collabore avec l'Allemagne, puis que la Résistance s'organise en France et à Londres autour du général de Gaulle. » — Points à vérifier dans ta version : une amorce datée et précise (pas « de tout temps la guerre... »), les bornes 1940-1944 présentes, une problématique qui couvre les DEUX mots-clés du sujet (Vichy ET Résistance), et un plan en deux parties qui reprend exactement ces deux mots-clés.",
      },
      {
        consigne:
          "Commentaire de texte (français) : rédige l'introduction pour l'étude du poème « Le Dormeur du val » d'Arthur Rimbaud (1870), qui décrit un jeune soldat apparemment endormi dans la nature... et mort à la dernière ligne.",
        corrige:
          "Intro modèle : « La guerre de 1870 entre la France et la Prusse a profondément marqué les poètes de la fin du XIXe siècle. Dans \"Le Dormeur du val\", sonnet écrit en 1870, Arthur Rimbaud, alors âgé de seulement seize ans, décrit un jeune soldat étendu dans un paysage paisible et lumineux. En quoi ce poème, en apparence paisible, constitue-t-il une dénonciation de la guerre ? Nous étudierons d'abord le tableau serein d'un soldat qui semble dormir dans une nature accueillante, puis nous montrerons comment les indices disséminés préparent la chute brutale qui révèle sa mort. » — Mécanique à retenir : amorce = contexte historique lié au texte ; présentation = auteur + titre + date + genre (sonnet) + sujet apparent ; problématique en « en quoi » qui pointe le paradoxe du texte (paisible/dénonciation) ; plan qui suit le mouvement du poème. Erreur classique évitée : ne JAMAIS révéler toute l'interprétation dans la présentation — la chute est annoncée dans le plan, pas racontée.",
      },
      {
        consigne:
          "Chirurgie d'intro : voici une introduction ratée — « De tout temps les hommes ont voyagé. Je vais vous parler du texte qu'on doit étudier. Il parle d'un voyage. J'espère que ma copie vous plaira. » Le texte étudié est un extrait de \"L'Odyssée\" d'Homère où Ulysse affronte le Cyclope. Liste les erreurs, puis réécris l'intro entièrement.",
        corrige:
          "Erreurs : 1) « De tout temps... » : amorce creuse interdite. 2) « Je vais vous parler » : formulation à la première personne à bannir. 3) « le texte qu'on doit étudier » : aucune présentation (ni auteur, ni titre, ni époque, ni genre). 4) « Il parle d'un voyage » : résumé vague et inexact (le passage précis est l'épisode du Cyclope). 5) Aucune problématique. 6) Aucune annonce de plan. 7) « J'espère que ma copie vous plaira » : on ne s'adresse jamais au correcteur. Réécriture modèle : « Les récits de voyage et d'aventure fascinent les lecteurs depuis l'Antiquité. Dans ce passage de \"L'Odyssée\", épopée grecque attribuée à Homère (VIIIe siècle avant J.-C.), le héros Ulysse et ses compagnons se retrouvent prisonniers du Cyclope Polyphème, un géant à l'œil unique. Comment Ulysse parvient-il à triompher d'un adversaire bien plus fort que lui ? Nous verrons d'abord le danger mortel que représente le Cyclope, puis la ruse par laquelle Ulysse renverse la situation. »",
      },
      {
        consigne:
          "Sujet de réflexion (brevet français) : rédige l'introduction pour le sujet argumentatif : « Selon vous, les réseaux sociaux rapprochent-ils ou éloignent-ils les gens ? » (l'annonce de plan doit laisser deviner une réponse nuancée).",
        corrige:
          "Intro modèle : « Aujourd'hui, la grande majorité des collégiens possèdent un compte sur au moins un réseau social, et certains y passent plusieurs heures par jour. Ces plateformes, conçues pour \"connecter les gens\", transforment en profondeur nos manières de communiquer, en famille comme entre amis. Les réseaux sociaux rapprochent-ils réellement les individus, ou créent-ils au contraire de nouvelles formes de solitude ? Nous verrons d'abord qu'ils offrent des occasions inédites de créer et d'entretenir des liens, avant de montrer qu'ils peuvent aussi appauvrir les relations réelles et isoler. » — Points de méthode : l'amorce part d'un constat concret et vérifiable (pas « de tout temps les hommes communiquent ») ; la problématique reprend l'alternative du sujet ; le plan « avantages puis limites » annonce la nuance ; et l'intro ne donne PAS encore ton avis final — il tombera en conclusion.",
      },
      {
        consigne:
          "Fabrique de problématiques : transforme chacun de ces trois sujets en problématique (varie les formulations : une en « comment », une en « en quoi », une de ton choix) — a) « La Première Guerre mondiale, une guerre totale » ; b) « L'aire urbaine de Lyon » (géographie) ; c) un récit d'imagination : « Votre personnage découvre un lieu abandonné. Racontez. »",
        corrige:
          "Corrigé modèle : a) En quoi la Première Guerre mondiale est-elle une guerre totale ? (le sujet contient déjà la thèse « guerre totale » : « en quoi » invite à le démontrer ; le plan suivra les aspects : violence de masse, mobilisation des civils, de l'économie, des esprits). b) Comment l'aire urbaine de Lyon s'organise-t-elle et quelles relations unissent la ville-centre, sa banlieue et sa couronne périurbaine ? (une question descriptive en « comment », adaptée à la géographie ; variante simple acceptée : « Comment fonctionne l'aire urbaine de Lyon ? »). c) Cas particulier : un sujet d'imagination n'a PAS de problématique à rédiger dans la copie — mais tu dois t'en poser une en secret pour guider ton récit, par exemple : « Quelle atmosphère créer et quelle émotion mon personnage doit-il ressentir en explorant ce lieu ? » Ta « problématique » devient un fil directeur (le mystère ? la peur ? la nostalgie ?) qui donne une unité au récit. Savoir reconnaître quand il ne faut PAS de problématique fait aussi partie de la méthode.",
      },
    ],
  },
  {
    slug: "rediger-une-conclusion",
    titre: "Rédiger une conclusion (finir fort, pas en vrille)",
    emoji: "🎯",
    categorie: "redaction",
    accroche:
      "La conclusion, c'est la dernière impression que tu laisses au correcteur — juste avant qu'il pose la note. Trois lignes bâclées peuvent gâcher deux pages excellentes. Voici comment finir en beauté, à tous les coups.",
    sections: [
      {
        titre: "Les 3 étages de la conclusion",
        points: [
          "Étage 1 — Le bilan : en une ou deux phrases, résume ce que tu as montré dans chaque partie. Pas de copier-coller de l'annonce du plan : reformule.",
          "Étage 2 — La réponse : réponds CLAIREMENT à la problématique de l'intro. C'est l'étage le plus important et le plus oublié.",
          "Étage 3 — L'ouverture : élargis vers une question ou un thème voisin. C'est l'étage bonus : mieux vaut pas d'ouverture qu'une ouverture ratée.",
          "Longueur : 4 à 8 lignes. Une conclusion n'apporte JAMAIS d'idée nouvelle ou d'exemple inédit — tout ça devait être dans le développement.",
          "Signal visuel : saute une ligne avant la conclusion et commence par un alinéa. Le correcteur doit la voir arriver.",
        ],
      },
      {
        titre: "Le bilan : résumer sans répéter",
        points: [
          "Formules d'attaque qui marchent : « Ainsi, ... » / « Finalement, ... » / « Au terme de cette étude, ... » / « Nous avons donc montré que... ».",
          "Bannis « Pour conclure, je vais conclure » et « En conclusion de ma conclusion » — si, si, ça existe dans de vraies copies.",
          "Technique du miroir : reprends tes titres de parties et transforme-les en phrases au passé composé : « Nous avons d'abord vu que... , puis que... ».",
          "Interdiction de recopier mot pour mot l'annonce du plan : le correcteur vient de lire ta copie, il s'en souvient. Change les formulations.",
          "Le bilan est une preuve de maîtrise : tu montres que ta copie est allée quelque part et que tu le sais.",
        ],
      },
      {
        titre: "La réponse à la problématique : boucler la boucle",
        points: [
          "Relis ta problématique AVANT d'écrire ta conclusion (oui, physiquement : retourne à ta première page). La réponse doit s'emboîter dans la question.",
          "Si ta problématique était « Comment la Première Guerre mondiale devient-elle une guerre totale ? », ta réponse : « La Première Guerre mondiale est donc totale parce qu'elle mobilise les soldats, les civils et les économies. »",
          "En sujet de réflexion : c'est LE moment de donner ton avis final, clairement et avec nuance : « Les réseaux sociaux rapprochent donc, à condition de... ».",
          "Test de cohérence : lis ton intro puis directement ta conclusion, en sautant le développement. Question posée → réponse donnée : le circuit doit se fermer.",
          "Une copie sans réponse à la problématique est une enquête sans coupable : le correcteur reste sur sa faim et la note s'en ressent.",
        ],
      },
      {
        titre: "L'ouverture intelligente : le petit pas de côté",
        points: [
          "Une bonne ouverture fait UN pas de côté, pas un saut dans le vide : autre période sur le même thème, autre œuvre du même auteur, prolongement du problème aujourd'hui.",
          "Exemple (dev. construit sur la 1re GM) : « Les conditions du traité de Versailles portent en germe les tensions qui mèneront à la Seconde Guerre mondiale. » — même thème, pas suivant, connaissance en bonus.",
          "Exemple (commentaire d'un poème sur la guerre) : « D'autres poètes, comme Apollinaire dans \"Calligrammes\", ont eux aussi témoigné de la guerre, mais depuis les tranchées. » — culture personnelle valorisée.",
          "Ouverture en question : possible, mais la question doit être sérieuse et liée au sujet, pas « Et vous, qu'en pensez-vous ? ».",
          "Doute sur ton ouverture ? Supprime-la. Bilan + réponse = conclusion complète et parfaitement recevable.",
        ],
      },
      {
        titre: "Le musée des ouvertures à bannir",
        points: [
          "« Et vous, qu'en pensez-vous ? » — le correcteur n'est pas ton pote de débat.",
          "« Seul l'avenir nous le dira. » — la phrase qui ne dit rien, applicable à tous les sujets de l'univers.",
          "« C'était un très beau texte et j'ai aimé l'étudier. » — ton avis sur ta propre copie ne rapporte aucun point.",
          "« On peut se demander si un jour il y aura encore des guerres. » — trop vague, trop loin, hors programme.",
          "L'ouverture-catastrophe qui introduit une énorme question traitable en 4 pages : tu ouvres une porte que tu es incapable de refermer, et le correcteur le voit.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Rédige la conclusion complète (bilan + réponse + ouverture) d'un développement construit dont la problématique était : « Comment la Première Guerre mondiale bouleverse-t-elle les sociétés européennes ? » et le plan : I. La violence de masse subie par les soldats / II. Des sociétés entièrement mobilisées.",
        corrige:
          "Conclusion modèle : « Ainsi, la Première Guerre mondiale impose d'abord aux soldats une violence de masse inédite, dont les tranchées de Verdun sont le symbole, tandis que les civils, les femmes, les usines et la propagande sont entièrement mobilisés à l'arrière. Ce conflit bouleverse donc en profondeur les sociétés européennes : c'est une guerre totale, qui ne laisse personne à l'écart et fait plus de dix millions de morts. Les traités de paix qui suivent, vécus comme une humiliation en Allemagne, porteront d'ailleurs en germe les tensions des années 1930. » — Analyse de la mécanique : phrase 1 = bilan des deux parties avec un exemple rappelé (Verdun) mais aucun exemple NOUVEAU développé ; phrase 2 = réponse explicite à la problématique avec le concept-clé (« guerre totale ») ; phrase 3 = ouverture « pas de côté » vers la période suivante du programme.",
      },
      {
        consigne:
          "Tri d'ouvertures : voici 5 ouvertures proposées pour un commentaire du « Dormeur du val » de Rimbaud (poème dénonçant la guerre de 1870). Classe-les en « à garder » ou « à bannir » et justifie chaque verdict en une phrase. a) « Seul l'avenir dira si la guerre disparaîtra. » b) « D'autres poètes, comme Apollinaire pendant la Première Guerre mondiale, mêleront eux aussi beauté poétique et horreur des combats. » c) « Et vous, aimez-vous ce poème ? » d) « Ce contraste entre nature paisible et mort brutale annonce les grandes œuvres pacifistes du XXe siècle. » e) « En conclusion, ce poème était vraiment très émouvant. »",
        corrige:
          "Corrigé : a) À BANNIR — phrase passe-partout qui pourrait clore n'importe quel sujet, elle n'apporte aucune connaissance. b) À GARDER — pas de côté parfait : même thème (poésie et guerre), autre auteur et autre époque, culture personnelle valorisée. c) À BANNIR — on n'interpelle jamais le correcteur, et la question n'apporte rien. d) À GARDER — élargissement littéraire pertinent qui prolonge l'idée centrale du commentaire (le contraste) vers une perspective plus large ; c'est même la plus élégante des cinq. e) À BANNIR — double faute : « en conclusion » dans la conclusion est une lourdeur, et donner son avis émotionnel sur le texte (« très émouvant ») sans analyse ne rapporte rien. Bilan : une bonne ouverture ajoute une CONNAISSANCE liée au sujet ; une mauvaise ajoute du vide.",
      },
      {
        consigne:
          "Conclusion de sujet de réflexion : ton développement portait sur « Faut-il interdire les téléphones portables au collège ? » avec un plan I. Les bonnes raisons de l'interdiction / II. Les limites et alternatives possibles. Rédige la conclusion avec un avis personnel nuancé et une ouverture correcte.",
        corrige:
          "Conclusion modèle : « Au terme de cette réflexion, l'interdiction du téléphone au collège apparaît justifiée par de vraies raisons : lutte contre la distraction en classe, contre le harcèlement en ligne et pour de meilleures relations dans la cour. Cependant, une interdiction seule ne suffit pas, car elle ne prépare pas les élèves à un usage raisonné. Il me semble donc que l'interdiction est une bonne mesure, à condition d'être accompagnée d'une véritable éducation aux écrans. Cette question dépasse d'ailleurs le collège : de nombreuses familles cherchent elles aussi à instaurer des règles d'usage à la maison. » — Points de méthode : le bilan reprend les deux parties ; l'avis personnel est CLAIR (« il me semble que ») mais NUANCÉ (« à condition de ») ; l'ouverture élargit d'un pas (du collège vers la famille) sans partir sur « seul l'avenir nous le dira ». En sujet de réflexion, le « je » est autorisé au moment de l'avis final.",
      },
      {
        consigne:
          "Diagnostic et réécriture : voici la conclusion d'une copie — « Voilà, j'ai fini de parler du texte. Comme je l'ai dit, il y a des figures de style et le poète est triste. Et vous, avez-vous déjà été triste ? » Identifie au moins 4 problèmes précis, puis réécris une conclusion correcte (le texte étudié : un poème lyrique où le poète pleure un amour perdu, problématique « Comment le poète exprime-t-il sa souffrance amoureuse ? »).",
        corrige:
          "Problèmes : 1) « Voilà, j'ai fini de parler » : registre oral et familier, aucune formule de bilan. 2) « Comme je l'ai dit » : le bilan doit reformuler, pas signaler une répétition. 3) « Il y a des figures de style » : bilan creux, aucune reprise des idées réellement démontrées. 4) Aucune réponse à la problématique (comment s'exprime la souffrance ? mystère). 5) « Et vous, avez-vous déjà été triste ? » : interpellation du correcteur, ouverture à bannir. Réécriture modèle : « Ainsi, le poète transforme sa douleur en chant : les images de l'absence et de la nature en deuil traduisent le vide laissé par l'être aimé, tandis que le rythme brisé des vers fait entendre ses sanglots. Le poème exprime donc la souffrance amoureuse en la rendant sensible au lecteur, par les images comme par la musique des mots. Cette alchimie qui change la douleur en beauté est au cœur de la poésie lyrique, de Ronsard aux chansons d'aujourd'hui. »",
      },
      {
        consigne:
          "Le test de la boucle : écris une problématique de ton choix sur un chapitre que tu révises actuellement, puis rédige UNIQUEMENT la phrase de réponse (étage 2) qui la boucle parfaitement. Vérifie l'emboîtement en les lisant à la suite.",
        corrige:
          "Exemple de corrigé réussi : Problématique — « En quoi l'aire urbaine de Lyon illustre-t-elle l'étalement urbain en France ? » Phrase de réponse — « L'aire urbaine de Lyon illustre donc parfaitement l'étalement urbain : la croissance de la ville se fait désormais loin du centre, dans des couronnes périurbaines toujours plus étendues, au prix d'un allongement des déplacements quotidiens. » Test de la boucle : la question demandait « en quoi... illustre-t-elle » ; la réponse commence par « ... illustre donc parfaitement » et donne le contenu de l'illustration. L'emboîtement est parfait quand : 1) la réponse reprend les mots-clés de la question ; 2) elle contient un « donc » (ou équivalent) qui marque l'aboutissement ; 3) quelqu'un qui lirait seulement ces deux phrases comprendrait de quoi parle la copie et ce qu'elle a démontré. Contre-exemple : répondre « Oui, Lyon est une grande ville » — la boucle ne se ferme pas, la question portait sur l'étalement, pas sur la taille.",
      },
    ],
  },
  {
    slug: "construire-un-plan",
    titre: "Construire un plan (une idée = un paragraphe)",
    emoji: "🏗️",
    categorie: "redaction",
    accroche:
      "Une copie sans plan, c'est un sac de courses renversé : tout y est, mais personne n'a envie de ramasser. Le plan, c'est ce qui transforme tes connaissances en points. Et ça s'apprend en 20 minutes.",
    sections: [
      {
        titre: "La règle absolue : une idée = un paragraphe",
        points: [
          "Chaque paragraphe défend UNE seule idée, annoncée dès sa première phrase (la « phrase chapeau »).",
          "Structure interne d'un paragraphe béton : idée (1 phrase) → explication (1-2 phrases) → exemple précis (1-2 phrases) → mini-bilan facultatif.",
          "Test infaillible : si tu ne peux pas résumer ton paragraphe en une phrase, c'est qu'il contient deux idées. Coupe-le en deux.",
          "Nouvelle idée = nouveau paragraphe = retour à la ligne + alinéa. Sans exception.",
          "Un paragraphe fait 4 à 8 lignes au collège. À 15 lignes, il y a forcément deux idées cachées dedans.",
        ],
      },
      {
        titre: "Trouver ses parties : la technique du tri au brouillon",
        points: [
          "Étape 1 : au brouillon, note en vrac TOUT ce que tu sais sur le sujet (mots-clés, exemples, dates). 5 minutes, sans te censurer.",
          "Étape 2 : regarde ton vrac et cherche 2 ou 3 « familles » d'idées. Entoure chaque famille d'une couleur.",
          "Étape 3 : chaque famille devient une partie ; chaque idée dans la famille devient un paragraphe. Ton plan est né.",
          "Plans passe-partout à connaître : avant/pendant/après (chronologique), causes/déroulement/conséquences, aspects/acteurs/effets, avantages/inconvénients (réflexion), à l'échelle locale/nationale/mondiale (géo).",
          "2 parties solides valent mieux que 3 parties dont une vide. Ne crée jamais une partie pour « faire joli ».",
        ],
      },
      {
        titre: "Les connecteurs logiques : le GPS du correcteur",
        points: [
          "Pour commencer : « d'abord », « en premier lieu », « premièrement ».",
          "Pour ajouter : « ensuite », « de plus », « par ailleurs », « en outre ».",
          "Pour opposer : « cependant », « en revanche », « pourtant », « néanmoins » — bannis le « mais » en début de phrase répété six fois.",
          "Pour prouver : « en effet », « ainsi », « par exemple », « notamment ».",
          "Pour conclure : « donc », « finalement », « ainsi », « c'est pourquoi ».",
          "Un connecteur au début de chaque paragraphe = le correcteur suit ton raisonnement sans effort. Un correcteur qui n'a pas d'effort à faire est un correcteur généreux.",
        ],
      },
      {
        titre: "La mise en page qui rapporte des points",
        points: [
          "Saute une ligne entre l'intro et le développement, entre chaque grande partie, et avant la conclusion. La structure doit se voir À TROIS MÈTRES de la copie.",
          "Alinéa (2 carreaux) au début de CHAQUE paragraphe. C'est le signal visuel « nouvelle idée ».",
          "N'écris jamais « I. » « II. » « a) » dans une rédaction ou un développement construit : la structure se montre par la mise en page et les connecteurs, pas par des numéros.",
          "Écris lisiblement et aère : une copie dense et grise décourage ; une copie aérée prédispose le correcteur à la bienveillance. C'est injuste ? Peut-être. C'est réel ? Certain.",
          "Garde 5 minutes en fin d'épreuve pour vérifier : alinéas présents ? lignes sautées ? Un coup d'œil suffit et peut rapporter le point de « organisation ».",
        ],
      },
      {
        titre: "Les 3 plans catastrophe à éviter",
        points: [
          "Le plan « fourre-tout » : des paragraphes sans lien, dans l'ordre où les idées sont venues. Antidote : le tri par familles au brouillon.",
          "Le plan « déséquilibré » : partie I de deux pages, partie II de trois lignes. Antidote : compte tes arguments par partie AU BROUILLON avant de rédiger ; s'il y a 5-1, redistribue.",
          "Le plan « hors sujet rampant » : chaque paragraphe s'éloigne un peu plus du sujet. Antidote : recopie le sujet en haut du brouillon et relis-le avant CHAQUE nouveau paragraphe.",
          "Signal d'alarme en cours de rédaction : si tu écris un paragraphe sans savoir ce qu'il prouve, arrête-toi et reviens au plan.",
          "Le plan se fait au brouillon en 10-15 minutes. C'est un investissement, pas une perte de temps : la rédaction va ensuite deux fois plus vite.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Du vrac au plan : voici les notes en vrac d'un élève pour le sujet « Les espaces productifs agricoles en France » — serres bretonnes, exportation de blé, Beauce et grandes cultures céréalières, élevage en montagne, agriculture biologique en croissance, coopératives, vignobles de Bordeaux, circuits courts, mondialisation des marchés. Trie ces notes en 2 ou 3 familles et propose un plan avec le titre de chaque partie et les idées/paragraphes qu'elle contient.",
        corrige:
          "Plan modèle : Famille 1 — « Des espaces agricoles puissants et spécialisés, intégrés aux marchés mondiaux » : paragraphe 1 : les grandes cultures céréalières (Beauce, exportation de blé) ; paragraphe 2 : les cultures spécialisées à forte valeur (serres bretonnes, vignobles de Bordeaux) ; ces espaces sont connectés à la mondialisation via les coopératives et les ports. Famille 2 — « Des espaces en difficulté ou en reconversion » : paragraphe 1 : l'élevage de montagne, fragile face à la concurrence ; paragraphe 2 : les nouvelles réponses : agriculture biologique en croissance, circuits courts qui rapprochent producteurs et consommateurs. Logique du tri : la famille 1 regroupe ce qui « gagne » à la mondialisation, la famille 2 ce qui la subit et s'adapte — c'est le plan « espaces intégrés / espaces en marge » classique en géographie. Autre tri acceptable : par type de production (cultures / élevage / nouvelles agricultures) — un plan est valable dès que chaque note trouve UNE place et une seule.",
      },
      {
        consigne:
          "Paragraphe béton : rédige UN paragraphe complet (idée → explication → exemple précis) défendant l'idée « La lecture développe l'imagination », dans le cadre d'un sujet de réflexion. Puis souligne (ou indique) où se trouvent l'idée, l'explication et l'exemple.",
        corrige:
          "Paragraphe modèle : « D'abord, la lecture développe l'imagination du lecteur. [IDÉE] En effet, contrairement au film qui impose ses images, le roman ne donne que des mots : c'est au lecteur de fabriquer mentalement les visages, les lieux et les sons, ce qui entraîne son cerveau à créer. [EXPLICATION] Ainsi, chaque lecteur de \"Harry Potter\" s'est construit son propre Poudlard avant de voir les films, et beaucoup ont d'ailleurs été déçus que le château de l'écran ne ressemble pas au leur. [EXEMPLE PRÉCIS] » — Vérifications : le paragraphe commence par un connecteur (« D'abord ») ; la première phrase contient TOUTE l'idée ; l'explication répond à « pourquoi c'est vrai ? » ; l'exemple est précis (une œuvre nommée) et non générique (« par exemple quand on lit un livre » = exemple fantôme, zéro point). Longueur : 6 lignes, une seule idée.",
      },
      {
        consigne:
          "Copie à réorganiser : un élève a écrit ces 6 phrases dans cet ordre, sans paragraphes, pour le sujet « Pourquoi faut-il protéger les forêts ? » — 1. Les forêts absorbent le CO2. 2. En Amazonie, la déforestation a détruit 17 % de la forêt. 3. Les forêts abritent 80 % de la biodiversité terrestre. 4. Elles limitent donc le réchauffement climatique. 5. L'orang-outan de Bornéo est menacé par la destruction de son habitat. 6. Sans elles, des milliers d'espèces disparaîtraient. Regroupe ces phrases en 2 paragraphes cohérents (indique l'ordre des numéros) et rédige la phrase chapeau de chacun.",
        corrige:
          "Corrigé : Paragraphe A — thème « climat » : phrases 1 → 4 → 2. Phrase chapeau : « D'abord, les forêts jouent un rôle essentiel dans la lutte contre le réchauffement climatique. » Enchaînement : idée (rôle climatique) → explication (elles absorbent le CO2, phrase 1, donc limitent le réchauffement, phrase 4) → exemple chiffré (l'Amazonie et ses 17 % détruits, phrase 2, qui montre l'ampleur de la menace). Paragraphe B — thème « biodiversité » : phrases 3 → 6 → 5. Phrase chapeau : « Ensuite, les forêts sont indispensables à la survie de la biodiversité. » Enchaînement : idée-chiffre (80 % de la biodiversité terrestre, phrase 3) → conséquence (disparition d'espèces, phrase 6) → exemple précis et incarné (l'orang-outan de Bornéo, phrase 5). Ce qu'il faut retenir : les phrases de l'élève étaient bonnes, seul le DÉSORDRE les rendait illisibles — trier par familles puis ordonner idée/explication/exemple transforme le vrac en démonstration.",
      },
      {
        consigne:
          "Choix de plan express : pour chacun de ces 3 sujets, indique le plan passe-partout le plus adapté (chronologique, causes/conséquences, avantages/inconvénients, thématique...) et donne les titres de tes parties : a) « La Seconde Guerre mondiale, une guerre d'anéantissement » ; b) « Le sport à l'école devrait-il être plus important ? » ; c) « Raconte une journée qui a changé la vie de ton personnage » (rédaction d'imagination).",
        corrige:
          "Corrigé : a) Plan THÉMATIQUE (et non chronologique : le sujet impose de démontrer le concept d'« anéantissement », pas de raconter la guerre) — I. Une violence extrême contre les combattants (Stalingrad, kamikazes) ; II. L'anéantissement des civils (bombardements, génocide des Juifs et des Tsiganes). Piège évité : le plan chronologique (1939-1942 / 1942-1945) ferait raconter au lieu de démontrer. b) Plan AVANTAGES/LIMITES avec avis final — I. Les bienfaits d'un sport renforcé (santé, concentration, cohésion) ; II. Les limites et conditions (rythmes scolaires, égalité entre élèves, qualité plutôt que quantité). c) Plan CHRONOLOGIQUE en 3 temps, le seul naturel pour un récit — I. Avant : la vie ordinaire du personnage (situation initiale) ; II. Pendant : l'événement qui bascule (élément perturbateur et péripéties) ; III. Après : la vie transformée (situation finale, avec un écho à la situation initiale pour montrer le changement). Moralité : le bon plan n'est pas le plus original, c'est celui que le SUJET commande — repère le verbe et le mot-clé du sujet avant de choisir.",
      },
      {
        consigne:
          "Audit de mise en page : prends ta dernière rédaction ou ton dernier développement construit noté, et passe-le au crible de la checklist suivante en notant oui/non pour chaque item — ligne sautée après l'intro ? alinéas à chaque paragraphe ? un connecteur en tête de chaque paragraphe ? parties équilibrées (à une demi-page près) ? une seule idée par paragraphe ? Rédige ensuite tes 2 priorités d'amélioration.",
        corrige:
          "Exemple d'audit rempli honnêtement : ligne sautée après l'intro : NON (l'intro et la partie I se touchent, le correcteur a écrit \"structure ?\" dans la marge). Alinéas : OUI mais irréguliers (3 paragraphes sur 5). Connecteurs : NON — mes paragraphes 2 et 3 commencent par \"Il y a aussi\" et \"Et puis\", trop oraux. Équilibre : NON — partie I : 1 page, partie II : 4 lignes (j'ai manqué de temps). Une idée par paragraphe : OUI sauf le paragraphe 1 qui mélange les tranchées ET l'arrière (12 lignes, deux idées). Priorités d'amélioration : 1) faire le plan complet au brouillon AVEC le compte d'arguments par partie (2-2 minimum) avant d'écrire, pour ne plus avoir de partie II squelettique ; 2) écrire mes connecteurs au brouillon dans le plan (D'abord / Ensuite / Enfin) pour qu'ils tombent automatiquement dans la copie. Critère de réussite de l'exercice : les priorités sont des ACTIONS concrètes pour la prochaine copie, pas des regrets (« faire mieux ») .",
      },
    ],
  },
  {
    slug: "le-developpement-construit",
    titre: "Le développement construit (la question reine du brevet)",
    emoji: "🏛️",
    categorie: "brevet",
    accroche:
      "20 points sur 50 en histoire-géo au brevet, c'est LUI. Le développement construit n'est pas une question de génie, c'est une question de méthode. Applique la recette I/D/C et regarde ta note grimper.",
    sections: [
      {
        titre: "C'est quoi exactement, et combien ça rapporte",
        points: [
          "Le développement construit : un texte organisé d'une vingtaine de lignes minimum qui répond à un sujet d'histoire ou de géographie, SANS document — tout sort de ta tête.",
          "C'est la question la mieux payée de l'épreuve : la bâcler, c'est abandonner des points que la méthode seule permet de gagner.",
          "Ce qui est noté : des connaissances précises (dates, chiffres, acteurs, exemples) ET une organisation visible (intro, paragraphes, conclusion).",
          "Un développement construit n'est PAS une liste, PAS un tableau, PAS du par cœur récité en bloc : c'est une mini-démonstration.",
          "Budget temps conseillé : 30 à 40 minutes, dont 10 de brouillon. Le brouillon n'est pas optionnel.",
        ],
      },
      {
        titre: "Étape 1 : décortiquer le sujet (5 minutes qui sauvent la copie)",
        points: [
          "Souligne les mots-clés du sujet : le THÈME (de quoi on parle), les BORNES (dates, lieu) et le VERBE ou l'expression qui commande (« décrivez », « expliquez », « montrez que »).",
          "« Décrivez » = raconter avec précision. « Expliquez » = donner les causes et les mécanismes. « Montrez que » = prouver une affirmation avec des exemples.",
          "Les bornes sont des murs : sujet « la France de 1940 à 1944 » → tout ce qui est avant 1940 ou après 1944 est HORS SUJET, même si c'est juste.",
          "Reformule le sujet en question dans ta tête : c'est ta problématique gratuite. « L'aire urbaine de Lyon » → « Comment s'organise l'aire urbaine de Lyon ? »",
          "Piège classique : répondre au sujet qu'on avait révisé plutôt qu'au sujet posé. Relis le sujet après chaque paragraphe rédigé.",
        ],
      },
      {
        titre: "La méthode I/D/C : Intro, Développement, Conclusion",
        points: [
          "I — Intro (2-3 lignes) : présente le sujet avec ses dates/son cadre + pose la question. Ex. : « De 1914 à 1918, l'Europe s'affronte dans la Première Guerre mondiale. Comment ce conflit devient-il une guerre totale ? »",
          "D — Développement (2 ou 3 paragraphes) : un paragraphe par grande idée, chacun avec alinéa, connecteur, idée annoncée puis exemples précis.",
          "C — Conclusion (2-3 lignes) : réponds à la question posée en une phrase bilan. Ex. : « La Première Guerre mondiale est donc une guerre totale car elle mobilise soldats, civils et économies. »",
          "Même mini-format, mêmes règles que la grande rédaction : alinéas, lignes sautées, connecteurs (d'abord, ensuite, enfin, donc).",
          "La structure doit être VISIBLE : un correcteur qui repère l'I/D/C d'un coup d'œil met les points de méthode avant même de lire.",
        ],
      },
      {
        titre: "Les connaissances précises : la différence entre 10 et 18",
        points: [
          "Une idée sans exemple = une affirmation en l'air. Chaque paragraphe doit contenir au moins UN élément précis : date, chiffre, nom propre, lieu, événement.",
          "Comparons : « Les soldats souffrent beaucoup » (0 point de précision) VS « À Verdun, en 1916, 300 jours de combats font plus de 700 000 victimes ; les poilus vivent dans la boue, au milieu des rats » (là, ça paie).",
          "Prépare tes munitions au brouillon : avant de rédiger, note pour chaque paragraphe les 2-3 précisions que tu vas placer.",
          "Le vocabulaire du chapitre rapporte : « guerre totale », « génocide », « aire urbaine », « périurbanisation »... Utilise les mots du cours ET montre que tu les comprends (une courte définition intégrée à la phrase).",
          "Mieux vaut 3 exemples parfaitement maîtrisés que 6 approximatifs : une date fausse fait plus mauvaise impression qu'une date absente.",
        ],
      },
      {
        titre: "Les phrases types qui font gagner du temps",
        points: [
          "Pour lancer l'intro : « De [date] à [date], ... » / « Depuis les années ..., ... » / « [Le thème] désigne ... ».",
          "Pour poser la question : « Comment... ? » / « On peut se demander comment/pourquoi... ».",
          "Pour ouvrir un paragraphe : « D'abord, ... » / « Ensuite, ... » / « Enfin, ... » + l'idée du paragraphe en une phrase.",
          "Pour placer un exemple : « Ainsi, ... » / « Par exemple, ... » / « C'est le cas de... » / « ..., comme le montre ... ».",
          "Pour conclure : « Ainsi, ... est donc ... car ... » — une seule phrase qui reprend la question et y répond.",
          "Apprends ces amorces par cœur : le jour J, ton cerveau s'occupe des idées, les phrases types s'occupent de la forme.",
        ],
      },
      {
        titre: "Gestion du temps et pièges du jour J",
        points: [
          "10 min de brouillon : mots-clés du sujet soulignés, question reformulée, plan en 2-3 idées, munitions (précisions) notées sous chaque idée.",
          "20-25 min de rédaction directe au propre (on ne rédige PAS tout au brouillon, pas le temps).",
          "5 min de relecture ciblée : majuscules aux noms propres, dates exactes, accords.",
          "Piège n°1 : le hors-sujet chronologique (déborder des bornes). Piège n°2 : la liste déguisée (des tirets reliés par des « et puis »). Piège n°3 : l'impasse totale sur la conclusion, qui coûte des points faciles.",
          "Le sujet te semble inconnu ? Respire : décompose les mots-clés, rattache-les au chapitre le plus proche, et applique la méthode. Une copie organisée avec des connaissances moyennes bat une copie brillante en vrac.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Sujet complet (histoire) : « Montrez que la Seconde Guerre mondiale est une guerre d'anéantissement. » Rédige un développement construit complet d'environ 20-25 lignes en suivant la méthode I/D/C.",
        corrige:
          "Corrigé modèle : [Intro] « De 1939 à 1945, la Seconde Guerre mondiale oppose les forces de l'Axe aux Alliés sur plusieurs continents. En quoi ce conflit est-il une guerre d'anéantissement, c'est-à-dire une guerre qui vise la destruction totale de l'adversaire ? » [Paragraphe 1] « D'abord, la violence contre les combattants ne connaît plus de limites. Ainsi, la bataille de Stalingrad (1942-1943) dure plusieurs mois, se combat rue par rue et fait plus d'un million et demi de victimes : il ne s'agit plus de vaincre l'armée ennemie, mais de l'anéantir. Dans le Pacifique, les kamikazes japonais montrent que la mort même des soldats devient une arme. » [Paragraphe 2] « Ensuite, les civils deviennent des cibles à part entière. Les bombardements massifs détruisent des villes entières, comme Hiroshima et Nagasaki en août 1945, où les bombes atomiques tuent plus de 100 000 civils en quelques secondes. Enfin, l'anéantissement devient un but en soi avec le génocide des Juifs et des Tsiganes d'Europe : près de 6 millions de Juifs sont assassinés, notamment dans les centres de mise à mort comme Auschwitz-Birkenau. » [Conclusion] « Ainsi, la Seconde Guerre mondiale est bien une guerre d'anéantissement : la destruction de l'ennemi, combattants comme civils, devient l'objectif même de la guerre. » — Repère la mécanique : question définissant le mot-clé, 2 paragraphes = 2 idées (combattants/civils), 5 précisions chiffrées et datées, conclusion qui répond avec « donc/bien ».",
      },
      {
        consigne:
          "Sujet de géographie : « Décrivez l'organisation d'une aire urbaine française et les mobilités de ses habitants. » Prépare UNIQUEMENT le brouillon complet en 10 minutes : mots-clés soulignés, question reformulée, plan en 2 parties, et les « munitions » (3 précisions minimum par partie).",
        corrige:
          "Brouillon modèle : Mots-clés soulignés : « organisation » (= les espaces qui composent l'aire urbaine), « aire urbaine française » (= prendre un exemple français : Lyon, Toulouse, Nantes...), « mobilités » (= déplacements quotidiens). Verbe : « décrivez » = présenter avec précision, pas besoin de démontrer une thèse. Question reformulée : « Comment s'organise une aire urbaine comme Lyon et comment ses habitants s'y déplacent-ils ? » Plan : Partie 1 — Trois espaces emboîtés : munitions : a) la ville-centre (Lyon, quartiers d'affaires comme la Part-Dieu, emplois et services concentrés) ; b) la banlieue (Villeurbanne, habitat collectif, continuité du bâti) ; c) la couronne périurbaine (villages devenus résidentiels, lotissements pavillonnaires, étalement urbain). Partie 2 — Des mobilités quotidiennes massives : munitions : a) migrations pendulaires domicile-travail matin/soir ; b) dépendance à la voiture dans le périurbain, embouteillages, rocades ; c) alternatives : TER, tramway, métro pour la ville-centre. Vocabulaire à placer : aire urbaine, périurbanisation, migrations pendulaires, étalement urbain. Conclusion prévue : « L'aire urbaine s'organise donc en trois couronnes reliées par des mobilités quotidiennes croissantes. » — Un brouillon comme celui-ci rend la rédaction quasi automatique.",
      },
      {
        consigne:
          "Copie d'élève à améliorer : voici un développement construit rédigé pour « La Première Guerre mondiale, une guerre totale » — « La guerre 14-18 a été horrible. Il y a eu les tranchées et les soldats sont morts. Aussi les femmes travaillaient. Et il y avait de la propagande. Donc c'était une guerre totale. » Attribue une note sur 10 avec justification, liste les défauts, puis réécris une version corrigée.",
        corrige:
          "Note et diagnostic : 3/10 environ — le sujet est compris (l'élève évoque bien front ET arrière, et conclut sur « guerre totale ») mais rien n'est développé. Défauts : 1) aucune intro ni question ; 2) aucune date, aucun lieu, aucun chiffre (zéro précision) ; 3) pas de paragraphes : quatre idées écrasées en cinq lignes ; 4) connecteurs pauvres et oraux (« Aussi », « Et ») ; 5) « horrible » : jugement vague au lieu d'une description précise ; 6) conclusion en une proposition non justifiée. Réécriture modèle : « De 1914 à 1918, la Première Guerre mondiale mobilise l'Europe entière. Comment ce conflit devient-il une guerre totale ? / D'abord, les soldats subissent une violence de masse. À Verdun, en 1916, dix mois de bataille font plus de 700 000 victimes ; dans les tranchées, les poilus affrontent les obus, la boue, les rats et le froid. / Ensuite, l'arrière est entièrement mobilisé. Les femmes remplacent les hommes dans les usines d'armement, comme les \"munitionnettes\" ; l'État finance la guerre par des emprunts et la propagande, à travers affiches et journaux, entretient le moral en cachant la réalité du front. / Ainsi, la Première Guerre mondiale est une guerre totale : elle engage les soldats comme les civils, l'économie comme les esprits. » — Même durée d'écriture, note doublée : seule la méthode a changé.",
      },
      {
        consigne:
          "Entraînement au décorticage express : pour chacun de ces 4 sujets, indique en une ligne : le verbe de commande et ce qu'il exige, les bornes (si présentes), et le piège principal à éviter. a) « Décrivez le génocide des Juifs pendant la Seconde Guerre mondiale. » b) « Expliquez pourquoi les espaces de faible densité ont des atouts. » c) « Montrez que la République française est fondée sur des valeurs et des principes. » d) « Racontez la journée d'un poilu dans les tranchées en 1916. »",
        corrige:
          "Corrigé : a) « Décrivez » = présenter précisément les étapes et les moyens (ghettos, Einsatzgruppen, centres de mise à mort) ; bornes : 1939-1945 ; piège : rester dans le vague par malaise — ce sujet exige au contraire rigueur et précision (chiffres, lieux : Auschwitz, 6 millions de victimes juives), avec un ton factuel et respectueux. b) « Expliquez pourquoi » = donner des CAUSES et des mécanismes, pas une simple liste d'atouts ; pas de bornes chronologiques mais un cadre : la France ; piège : décrire les espaces ruraux au lieu d'expliquer leurs atouts (agriculture, tourisme vert, cadre de vie, nouvelles populations). c) « Montrez que » = prouver l'affirmation avec des exemples concrets ; piège : réciter la liste « liberté, égalité, fraternité, laïcité » sans les ILLUSTRER — chaque valeur/principe doit avoir son exemple (la laïcité → loi de 1905, l'égalité → le droit de vote pour tous). d) « Racontez » = récit incarné et chronologique (le lever, la corvée, l'attente, l'assaut, la peur) ; bornes serrées : 1916, les tranchées ; piège : faire une leçon générale sur la guerre au lieu d'une JOURNÉE — le sujet impose une échelle intime, mais nourrie de connaissances (Verdun, les rats, les poux, le courrier, l'argot des poilus).",
      },
      {
        consigne:
          "Le défi munitions : choisis un chapitre d'histoire-géo que tu révises et construis ta « boîte à munitions » pour un futur développement construit : 3 idées principales, et pour chacune 3 précisions (date, chiffre, nom, lieu ou vocabulaire) que tu vérifies dans le cours. Présente le tout sous forme de tableau à mémoriser.",
        corrige:
          "Exemple de boîte à munitions (chapitre : la Guerre froide) : Idée 1 — Un monde divisé en deux blocs : munitions : a) 1947, doctrines Truman et Jdanov ; b) bloc de l'Ouest (États-Unis, OTAN 1949) contre bloc de l'Est (URSS, pacte de Varsovie 1955) ; c) vocabulaire : « rideau de fer » (expression de Churchill, 1946). Idée 2 — Berlin, symbole de l'affrontement : munitions : a) blocus de Berlin 1948-1949, pont aérien allié ; b) construction du mur en août 1961 ; c) chute du mur le 9 novembre 1989. Idée 3 — Un affrontement indirect, jamais frontal : munitions : a) crise des missiles de Cuba, 1962 ; b) guerres périphériques (Corée 1950-1953, Vietnam) ; c) vocabulaire : « équilibre de la terreur » lié à l'arme nucléaire. Mode d'emploi : ce tableau se transforme en 9 cartes mémo (une par munition) à réviser en répétition espacée ; le jour du brevet, quel que soit l'angle du sujet sur la Guerre froide, tu piocheras dedans. Critère de réussite : chaque munition est VÉRIFIÉE dans le cours (une date fausse mémorisée est pire que pas de date).",
      },
    ],
  },
  {
    slug: "reussir-la-dictee",
    titre: "Réussir la dictée (une relecture = une mission)",
    emoji: "📝",
    categorie: "brevet",
    accroche:
      "La dictée du brevet, ce n'est pas une loterie : 80 % des fautes appartiennent à 5 familles connues d'avance. Chasse-les famille par famille avec des relectures ciblées, et regarde les points revenir.",
    sections: [
      {
        titre: "Le principe : on ne relit pas « en général »",
        points: [
          "Relire sa dictée « pour voir s'il y a des fautes » ne marche pas : ton cerveau relit ce qu'il a voulu écrire, pas ce qu'il a écrit.",
          "La solution : des relectures CIBLÉES. Une relecture = UNE mission = UNE seule famille de fautes cherchée à la fois.",
          "Plan de relecture en 4 passes : passe 1 = accords dans le groupe nominal, passe 2 = accords sujet-verbe, passe 3 = homophones, passe 4 = terminaisons en -é/-er/-ait.",
          "Chaque passe prend 1 à 2 minutes. Total : 6-8 minutes, à prévoir dans ton temps.",
          "Astuce de pro : relis la passe des accords EN PARTANT DE LA FIN du texte, phrase par phrase. Ça casse le sens et t'oblige à voir chaque mot.",
        ],
      },
      {
        titre: "Passe 1 : les accords dans le groupe nominal",
        points: [
          "Mission : pour chaque nom, vérifier que déterminant + adjectif(s) portent le même genre et le même nombre. « Les grandes maisons blanches » : tout au féminin pluriel.",
          "Repère les déclencheurs de pluriel : « les », « des », « ces », « plusieurs », « quelques », « deux »... Dès que tu en vois un, contrôle toute la chaîne jusqu'au nom.",
          "Pièges : l'adjectif séparé du nom (« les maisons, hautes et blanches, ... ») et l'adjectif après le verbe être (« elles sont grandes »).",
          "Attention aux pluriels irréguliers : -al → -aux (chevaux), -eau → -eaux (bateaux), et les invariables.",
          "« Leur » devant un nom s'accorde (leurs amis) ; devant un verbe, jamais (il leur parle). À vérifier à chaque « leur » rencontré.",
        ],
      },
      {
        titre: "Passe 2 : les accords sujet-verbe",
        points: [
          "Mission : pour CHAQUE verbe conjugué, pose la question « qui est-ce qui...? » et vérifie la terminaison.",
          "Piège n°1 — le sujet inversé : « Dans le jardin jouaient les enfants » : le sujet est APRÈS le verbe.",
          "Piège n°2 — l'écran entre sujet et verbe : « Le chien des voisins aboie » (c'est le chien qui aboie, pas les voisins) ; « la bande de copains arrive » (c'est la bande, singulier).",
          "Piège n°3 — le pronom relatif « qui » : le verbe s'accorde avec l'antécédent : « les élèves qui travaillent » (travaillent = les élèves).",
          "Piège n°4 — les sujets multiples : « Pierre et Léa arrivent » (deux singuliers = pluriel).",
        ],
      },
      {
        titre: "Passe 3 : les homophones, les faux jumeaux",
        points: [
          "Méthode universelle : le TEST DE REMPLACEMENT. On remplace par un mot proche ; si la phrase tient, on sait lequel écrire.",
          "a/à : remplace par « avait ». Ça marche → « a » (il a mangé = il avait mangé). Ça ne marche pas → « à ».",
          "et/est : remplace par « était ». Ça marche → « est ». Sinon → « et » (= « et puis »).",
          "son/sont : remplace par « étaient ». Ça marche → « sont ». Sinon → « son » (= le sien).",
          "ces/ses/c'est/s'est : « ses » = les siens (ses affaires à lui) ; « ces » = ceux-là qu'on montre ; « c'est » = cela est ; « s'est » suivi d'un participe (il s'est levé).",
          "on/ont : remplace par « avaient ». Ça marche → « ont ». Sinon → « on » (= quelqu'un).",
        ],
      },
      {
        titre: "Passe 4 : -é, -er, -ait — le trio infernal",
        points: [
          "LE test : remplace le verbe par « prendre/pris/prenait » (un verbe du 3e groupe, qu'on entend).",
          "« Il va manger » → « il va prendre » (infinitif entendu) → -ER. « Il a mangé » → « il a pris » → -É (participe). « Il mangeait » → « il prenait » → -AIT (imparfait).",
          "Après une préposition (à, de, pour, sans...) : toujours l'infinitif -ER : « sans manger », « pour travailler ».",
          "Le participe passé avec être s'accorde avec le sujet : « elles sont arrivées ». Avec avoir : pas d'accord avec le sujet (« elles ont mangé »).",
          "Cas brevet à connaître : avec avoir, accord avec le COD placé AVANT : « les fleurs qu'il a offertes ». Repère les « que/qu' » devant un participe : c'est souvent là que le brevet place le piège.",
        ],
      },
      {
        titre: "Pendant la dictée : les bons réflexes",
        points: [
          "Pendant la lecture initiale du texte : repère l'époque du récit (imparfait/passé simple ?) et QUI parle (je ? il ? elles ?). Ces deux infos commandent la moitié des terminaisons.",
          "Un mot inconnu ? Écris-le comme tu l'entends et ENTOURE-le au crayon : tu y reviendras à la relecture, sans bloquer la suite de la dictée.",
          "Ne raye pas frénétiquement : une copie propre se relit mieux, et toi aussi tu t'y retrouves mieux.",
          "Gestion du stress : si tu perds le fil, laisse un blanc et raccroche-toi à la phrase suivante. Le relecteur final (toi) comblera. Une phrase manquée ≠ dictée ratée.",
          "Utilise la relecture DICTÉE par le professeur (la dernière lecture) pour vérifier les mots entourés et les blancs, pas pour tout re-vérifier.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Chasse aux fautes n°1 (accords) : corrige les 8 fautes d'accord de ce texte — « Les grande maison du village, construite en pierre, dominait la vallée. Leur toits rouge brillaient au soleil. Dans la cour jouait des enfants joyeux, et la bande de copains couraient vers le portail. »",
        corrige:
          "Texte corrigé : « Les grandeS maisonS du village, construiteS en pierre, dominaiENT la vallée. LeurS toits rougeS brillaient au soleil. Dans la cour jouaiENT des enfants joyeux, et la bande de copains couraIT vers le portail. » Détail des 8 corrections : 1) « grandes » : adjectif dans le GN « les... maisons », féminin pluriel. 2) « maisons » : après « les », pluriel. 3) « construites » : participe adjectivé accordé avec « maisons » malgré la séparation. 4) « dominaient » : sujet = « les maisons » (pluriel), pas « le village » — piège de l'écran. 5) « leurs » : devant un nom pluriel (« toits »), il s'accorde. 6) « rouges » : adjectif de « toits ». 7) « jouaient » : sujet inversé « des enfants » (qui est-ce qui jouait ? les enfants). 8) « courait » : sujet = « la bande » (singulier), pas « copains » — l'écran encore. Ce texte concentre les pièges des passes 1 et 2 : GN en chaîne, adjectif séparé, sujet inversé, nom-écran.",
      },
      {
        consigne:
          "Chasse aux fautes n°2 (homophones) : chaque phrase contient une ou deux erreurs d'homophones ; corrige et justifie avec le test de remplacement — a) « Il a oublié son livre é sa trousse a la maison. » b) « Ces amis son partis sans lui. » c) « On dit que ses élèves qui on gagné le concours. » d) « Elle c'est levée tôt est elle est partie. »",
        corrige:
          "Corrigé justifié : a) « Il a oublié son livre ET sa trousse À la maison. » — « é » n'existe pas comme mot ; « et » car « et puis » fonctionne ; « à » car « il avait la maison » ne veut rien dire (donc pas « a »). b) « SES amis SONT partis sans lui. » — « ses » = les siens (test : les amis à lui) ; « sont » car « étaient partis » fonctionne. c) « On dit que CE SONT CES élèves qui ONT gagné le concours. » — « ces » = ceux qu'on montre ; « ont » car « qui avaient gagné » fonctionne ; « on » initial est correct (= quelqu'un, « avaient dit » ne marche pas). d) « Elle S'EST levée tôt ET elle est partie. » — « s'est » car suivi du participe « levée » (elle a levé elle-même) ; « et » car « et puis » fonctionne ; le second « est » est correct (« était partie » fonctionne). Bilan des tests : avait → a ; était → est ; étaient → sont ; avaient → ont ; « et puis » → et. Cinq tests à connaître par cœur, applicables en 2 secondes chacun.",
      },
      {
        consigne:
          "Chasse aux fautes n°3 (-é/-er/-ait) : complète chaque trou par -é(e/s), -er ou -ait, et justifie avec le test « prendre/pris/prenait » — a) « Elle a commenc... à travaill... » b) « Il fallait se dépêch... pour ne pas rat... le bus. » c) « Les portes qu'il avait ferm... claquaient. » d) « Elles sont rentr... sans parl... » e) « Le vent souffl... toute la nuit. »",
        corrige:
          "Corrigé : a) « Elle a commencÉ à travaillER » — « elle a pris » → participe -é ; « à prendre » → infinitif après la préposition « à ». b) « Il fallait se dépêchER pour ne pas ratER le bus » — « se prendre »/« pour ne pas prendre » → deux infinitifs (après « fallait » + après « pour »). c) « Les portes qu'il avait fermÉES claquaient » — « qu'il avait prises » → participe ; ET accord avec le COD « que » (= les portes, féminin pluriel) placé AVANT avoir : -ées. C'est LE piège favori du brevet. d) « Elles sont rentrÉES sans parlER » — participe avec être → accord avec « elles » ; « sans prendre » → infinitif après « sans ». e) « Le vent soufflAIT toute la nuit » — « le vent prenait » → imparfait -ait, accordé avec le sujet singulier. Réflexe à automatiser : au moindre son [é] en fin de verbe, le test « prendre » tombe automatiquement — c'est la passe 4 de relecture.",
      },
      {
        consigne:
          "Dictée blanche en autonomie : demande à quelqu'un de te dicter ce texte (ou enregistre-le et réécoute) : « Les voyageurs, fatigués par la longue route, s'étaient arrêtés près de la rivière. Ils ont posé leurs sacs et ont commencé à préparer le repas. Dans les arbres chantaient des oiseaux que personne n'écoutait. » Puis applique les 4 passes de relecture AVANT de comparer avec l'original, et note quelle passe a attrapé quelles fautes.",
        corrige:
          "Corrigé d'auto-évaluation : les 9 points de vigilance du texte, classés par passe. Passe 1 (GN) : « Les voyageurs » (pluriel), « la longue route » (féminin), « leurs sacs » (leur + nom pluriel → leurs). Passe 2 (sujet-verbe) : « s'étaient arrêtés » (sujet « les voyageurs » → pluriel, accord du participe avec être) ; « chantaient » (sujet inversé « des oiseaux ») ; « personne n'écoutait » (personne = singulier). Passe 3 (homophones) : « ont posé » et « ont commencé » (test : avaient posé → ont) ; « près de » (et non « prêt »). Passe 4 (-é/-er/-ait) : « posé/commencé » (il a pris → -é), « à préparer » (à prendre → -er), « écoutait » (prenait → -ait). Bilan type : si tes erreurs se concentrent dans une passe (ex. 3 fautes en passe 2), c'est TA famille faible — c'est elle qu'il faut travailler en priorité avec des exercices ciblés, plutôt que refaire des dictées entières.",
      },
      {
        consigne:
          "Fabrique ton plan de relecture personnel : reprends tes 3 dernières dictées notées, liste chaque faute, classe-les dans les 4 familles (GN / sujet-verbe / homophones / -é-er-ait) + une famille « autres » (lexique, majuscules...). Établis ensuite TON ordre de passes personnalisé pour la prochaine dictée.",
        corrige:
          "Exemple de corrigé (bilan fictif mais réaliste) : Dictée 1 : 6 fautes — 3 homophones (a/à ×2, ses/ces), 2 sujet-verbe (sujet inversé, écran), 1 lexique. Dictée 2 : 5 fautes — 2 homophones (on/ont, s'est/c'est), 2 en -é/-er, 1 GN. Dictée 3 : 7 fautes — 3 homophones, 2 -é/-er, 1 sujet-verbe, 1 majuscule. Analyse : 8 fautes d'homophones sur 18 au total = 44 % → famille faible n°1 ; -é/-er = famille faible n°2 ; le GN est quasi maîtrisé. Plan de relecture personnalisé : passe 1 = HOMOPHONES (ma faiblesse principale, à faire en premier quand je suis le plus concentré, avec les tests de remplacement systématiques sur chaque a/et/est/son/on) ; passe 2 = -é/-er/-ait (test « prendre » sur chaque son [é]) ; passe 3 = sujet-verbe ; passe 4 = GN, rapide. Plan d'entraînement : 10 minutes d'exercices d'homophones deux fois par semaine pendant 3 semaines, puis re-bilan à la prochaine dictée. La logique du corrigé : on ne travaille pas « l'orthographe » en général, on attaque SA famille de fautes dominante — c'est là que chaque heure investie rapporte le plus de points.",
      },
    ],
  },
  {
    slug: "analyser-un-texte",
    titre: "Analyser un texte (la méthode C.P.I. qui change tout)",
    emoji: "🔍",
    categorie: "redaction",
    accroche:
      "« Le poète utilise une métaphore. » Et alors ?? Repérer un procédé sans dire ce qu'il PRODUIT, c'est montrer un ingrédient sans faire le plat. La méthode C.P.I. — Citer, Procédé, Interpréter — transforme tes remarques en vraies analyses.",
    sections: [
      {
        titre: "C.P.I. : les trois gestes de l'analyse",
        points: [
          "C — CITER : recopie le mot ou l'expression exacte du texte, entre guillemets, avec la ligne ou le vers (« l. 4 », « v. 7 »).",
          "P — PROCÉDÉ : nomme l'outil utilisé par l'auteur : figure de style, temps verbal, type de phrase, champ lexical, ponctuation, sonorité...",
          "I — INTERPRÉTER : dis ce que ça PRODUIT : quelle image, quelle émotion, quelle idée l'auteur crée chez le lecteur. C'est l'étape qui rapporte les points.",
          "Les trois ensemble, toujours : une citation sans procédé = de la paraphrase ; un procédé sans interprétation = du catalogue ; une interprétation sans citation = du bavardage.",
          "Phrase type à recycler : « À la ligne X, l'expression \"...\" est une [procédé] qui [effet produit]. »",
        ],
      },
      {
        titre: "Les figures de style à connaître sur le bout des doigts",
        points: [
          "La comparaison : rapproche deux éléments AVEC un outil (« comme », « tel », « pareil à ») : « il est fort comme un lion ».",
          "La métaphore : le même rapprochement SANS outil : « cet homme est un lion ». Plus condensée, plus frappante.",
          "La personnification : donne des traits humains à une chose ou un animal : « le vent hurle sa colère ».",
          "L'hyperbole : exagération volontaire : « je meurs de faim ». Effet : amplifier, dramatiser ou faire rire.",
          "L'énumération et la gradation : liste de termes, éventuellement d'intensité croissante : « va, cours, vole ». Effet : accumulation, emballement.",
          "L'antithèse : deux idées opposées rapprochées ; poussée à l'extrême dans une même expression, c'est l'oxymore (« un silence assourdissant »). Effet : contraste, tension.",
          "L'anaphore : répétition en début de phrase ou de vers : « Paris ! Paris outragé ! Paris brisé... ». Effet : insistance, martèlement.",
        ],
      },
      {
        titre: "Au-delà des figures : les autres indices qui parlent",
        points: [
          "Les champs lexicaux : famille de mots autour d'un même thème (mort, nature, peur...). Deux champs lexicaux qui se mélangent = souvent la clé du texte.",
          "Les temps verbaux : imparfait = décor et durée ; passé simple = action soudaine ; présent = vivacité ou vérité générale.",
          "La ponctuation : « ! » = émotion forte ; « ? » = doute ou interpellation ; « ... » = suspension, non-dit.",
          "Les pronoms : un texte en « je » (lyrisme, témoignage) ne produit pas le même effet qu'un texte en « il » (distance) ou en « vous » (interpellation du lecteur).",
          "Les sonorités en poésie : répétition de consonnes (allitération : « les serpents qui sifflent ») ou de voyelles (assonance). Toujours relier le son au sens.",
          "La structure : une phrase très courte après de longues phrases, une chute finale, un refrain — la forme fait toujours signe.",
        ],
      },
      {
        titre: "Interpréter : la boîte à questions magiques",
        points: [
          "Question 1 : « Quelle image ça crée dans ma tête ? » (une métaphore fabrique une image : décris-la).",
          "Question 2 : « Quelle émotion ça provoque ? » (peur, pitié, rire, colère, admiration...).",
          "Question 3 : « Pourquoi l'auteur a-t-il choisi CE mot et pas un mot neutre ? » (compare : « le vent hurle » vs « le vent souffle » — la différence, c'est l'effet).",
          "Question 4 : « Qu'est-ce que ça révèle du personnage, du narrateur ou du message du texte ? »",
          "Verbes d'interprétation à utiliser : « souligne », « traduit », « révèle », « suggère », « renforce », « donne l'impression que », « crée une atmosphère de ». Bannis « ça montre que » répété huit fois.",
        ],
      },
      {
        titre: "Répondre en phrases complètes : le contrat de l'épreuve",
        points: [
          "Règle brevet : JAMAIS de réponse en un mot ou en style télégraphique. Chaque réponse reprend les mots de la question.",
          "Question : « Quel sentiment éprouve le narrateur ? » → Réponse : « Le narrateur éprouve un sentiment de peur grandissante, comme le montre... » — et pas « De la peur. »",
          "Structure d'une réponse complète : affirmation (reprise de la question) + citation entre guillemets + procédé + interprétation. Le C.P.I. entre dans presque toutes les réponses.",
          "Adapte la longueur aux points : une question sur 2 points = 2-3 phrases ; une question sur 6 points = un mini-paragraphe avec plusieurs citations.",
          "Relis la question APRÈS avoir rédigé ta réponse : as-tu répondu à TOUTE la question (souvent en deux parties : « relevez ET expliquez ») ?",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "C.P.I. guidé : voici un vers de Victor Hugo (sur sa fille disparue) : « Elle était pâle, et pourtant rose. » Rédige une analyse complète en une ou deux phrases suivant la méthode C.P.I. (cite, nomme le procédé, interprète).",
        corrige:
          "Analyse modèle : « Dans l'expression \"pâle, et pourtant rose\", le poète rapproche deux couleurs contradictoires : c'est une antithèse, soulignée par le connecteur d'opposition \"pourtant\". [C + P] Cette alliance de contraires traduit la fragilité de la jeune fille, entre vie (\"rose\", la santé, la jeunesse) et mort (\"pâle\", l'annonce de la disparition) : le vers suggère ainsi, dès le portrait, le destin tragique de l'enfant. [I] » — Points de méthode vérifiables : la citation est exacte et entre guillemets ; le procédé est NOMMÉ (antithèse) et justifié (le connecteur « pourtant ») ; l'interprétation relie chaque terme à un sens (rose = vie, pâle = mort) et débouche sur le message du texte. Contre-exemple à 0 point : « Il y a une antithèse au vers 1. » — procédé sans citation ni effet : c'est du catalogue.",
      },
      {
        consigne:
          "Quiz d'identification : nomme la figure de style dans chacune de ces 6 phrases, puis choisis-en DEUX et rédige leur interprétation complète — a) « La neige tissait un manteau blanc sur la ville. » b) « Je te l'ai répété mille fois ! » c) « Il pleuvait des cordes, il pleuvait des seaux, il pleuvait des océans. » d) « Cette obscure clarté qui tombe des étoiles. » e) « Sa chevelure était un soleil. » f) « Le fleuve, tel un serpent paresseux, traversait la plaine. »",
        corrige:
          "Identification : a) personnification (la neige « tisse », geste humain) + métaphore du « manteau ». b) hyperbole (« mille fois »). c) gradation (des « cordes » aux « océans », intensité croissante) doublée d'une anaphore (« il pleuvait » répété). d) oxymore (« obscure clarté » : alliance de mots contradictoires — célèbre vers de Corneille). e) métaphore (chevelure = soleil, sans outil de comparaison). f) comparaison (outil « tel »). Interprétations modèles (deux exemples) : Pour a) : « En écrivant que la neige \"tissait un manteau\", l'auteur personnifie la neige en couturière : cette image transforme un phénomène froid en geste doux et protecteur, créant une atmosphère paisible, presque maternelle, qui enveloppe la ville. » Pour c) : « La gradation \"des cordes... des seaux... des océans\", martelée par l'anaphore \"il pleuvait\", amplifie la pluie jusqu'à la démesure : le lecteur ressent un déluge sans fin, et l'exagération donne à la scène une dimension presque comique ou apocalyptique selon le contexte. » — Remarque : deux figures peuvent cohabiter dans une même phrase ; les nommer toutes les deux est un bonus.",
      },
      {
        consigne:
          "De la paraphrase à l'analyse : voici la réponse d'un élève à la question « Comment la peur du personnage est-elle rendue sensible ? » sur un texte où l'on lit « Mon cœur cognait. Mes mains tremblaient. Mes jambes se dérobaient. » — Réponse de l'élève : « On voit que le personnage a peur parce que son cœur cogne et que ses mains tremblent. » Explique pourquoi cette réponse ne rapporte presque aucun point, puis réécris-la en réponse complète avec C.P.I.",
        corrige:
          "Diagnostic : la réponse de l'élève est de la PARAPHRASE — elle répète le texte avec d'autres mots (« son cœur cogne, ses mains tremblent ») sans citer entre guillemets, sans nommer aucun procédé et sans expliquer l'effet. Elle prouve que l'élève a lu, pas qu'il a analysé. Réécriture modèle : « La peur du personnage est rendue physiquement sensible au lecteur. D'abord, l'auteur accumule trois phrases très courtes construites sur le même modèle : \"Mon cœur cognait. Mes mains tremblaient. Mes jambes se dérobaient.\" Cette énumération de phrases brèves, au rythme haché, imite les battements du cœur affolé et la respiration coupée du personnage. Ensuite, le champ lexical du corps (\"cœur\", \"mains\", \"jambes\") montre une peur qui n'est pas racontée mais VÉCUE : le corps entier lâche, du cœur jusqu'aux jambes, comme une gradation de la panique. Le lecteur ne lit pas que le personnage a peur : il la ressent avec lui. » — Ce qui a changé : citations exactes, deux procédés nommés (rythme des phrases courtes, champ lexical + gradation), et une interprétation qui explique l'EFFET sur le lecteur.",
      },
      {
        consigne:
          "Analyse en autonomie : lis cette phrase d'ouverture de roman : « La maison nous observait de toutes ses fenêtres noires, et sa porte, comme une bouche, semblait retenir un cri. » Réponds en phrases complètes à la question type brevet (4 points) : « Quelle atmosphère se dégage de cette description ? Vous appuierez votre réponse sur deux procédés précis. »",
        corrige:
          "Réponse modèle : « Cette description crée une atmosphère inquiétante et menaçante, celle d'un début de récit fantastique. Premièrement, la maison est personnifiée : elle \"nous observait de toutes ses fenêtres noires\", comme si le bâtiment était vivant et surveillait les personnages ; le lecteur a l'impression que les rôles s'inversent, que la maison est le prédateur et les visiteurs les proies. Deuxièmement, la comparaison de la porte à \"une bouche\" qui \"semblait retenir un cri\" transforme la façade en visage terrifié ou terrifiant : le cri \"retenu\" suggère un danger imminent, quelque chose qui va éclater, et installe le suspense dès la première phrase. Par ces deux procédés, l'auteur transforme un simple décor en personnage menaçant et prépare le lecteur à un récit d'angoisse. » — Barème implicite respecté : atmosphère nommée (inquiétante/fantastique), DEUX procédés cités ET nommés (personnification, comparaison), chaque procédé interprété, réponse en phrases complètes qui reprend les mots de la question.",
      },
      {
        consigne:
          "Le jeu du mot choisi : dans chaque paire, l'auteur a choisi le premier mot plutôt que le second (neutre). Explique pour chaque paire ce que le choix CHANGE (effet produit) : a) « le vent hurlait » / « le vent soufflait » ; b) « une bicoque » / « une maison » ; c) « il s'est éteint » / « il est mort » ; d) « une marée humaine » / « beaucoup de gens ».",
        corrige:
          "Corrigé modèle : a) « Hurlait » personnifie le vent en créature souffrante ou agressive : le lecteur entend un cri, la scène devient inquiétante, presque animale ; « soufflait » serait un simple constat météo. b) « Bicoque » est péjoratif : le mot ne décrit pas seulement la maison, il la juge (petite, misérable, mal bâtie) et révèle le regard méprisant ou apitoyé du narrateur ; « maison » est neutre et ne dit rien du regard porté. c) « S'est éteint » est un euphémisme : la métaphore de la lumière qui s'éteint adoucit la mort, exprime la douceur, le respect, peut-être la fin paisible ; « est mort » est brutal et frontal. d) « Une marée humaine » est une métaphore hyperbolique : la foule devient une force naturelle irrésistible, mouvante, potentiellement dangereuse, qu'aucune digue n'arrête ; « beaucoup de gens » ne produit aucune image. Leçon de l'exercice : l'analyse littéraire, c'est exactement cela — mesurer l'écart entre le mot choisi et le mot neutre. Cet écart EST l'effet ; le procédé n'est que son nom technique.",
      },
    ],
  },
  {
    slug: "reussir-son-oral",
    titre: "Réussir son oral du brevet (100 points qui se préparent)",
    emoji: "🎤",
    categorie: "oral",
    accroche:
      "L'oral du brevet, c'est 100 points — autant que le français ou les maths — et c'est l'épreuve où la préparation paie le plus. Le jury ne cherche pas un orateur né : il cherche un élève qui maîtrise son sujet et qui s'est entraîné. Ça tombe bien, ça se travaille.",
    sections: [
      {
        titre: "Comprendre l'épreuve pour arrêter de la craindre",
        points: [
          "Format : 5 minutes d'exposé + 10 minutes d'entretien avec le jury (seul), ou 10 minutes d'exposé + 15 d'entretien (en groupe).",
          "Tu présentes UN projet ou parcours travaillé dans l'année (EPI, parcours avenir, stage, histoire des arts, parcours citoyen...). Tu choisis le sujet : choisis celui dont tu peux parler avec plaisir.",
          "Le barème récompense la maîtrise du sujet ET l'expression orale — pas la perfection du diaporama ni l'absence de trac.",
          "Le jury est composé de professeurs qui veulent te voir réussir. Un jury pose des questions pour te faire briller, pas pour te piéger.",
          "Le savais-tu ? Dire « je ne sais pas, mais je suppose que... » à une question difficile rapporte plus de points qu'inventer n'importe quoi.",
        ],
      },
      {
        titre: "Construire l'exposé : la structure en 4 blocs",
        points: [
          "Bloc 1 — L'accroche + présentation (30 s) : salue, présente-toi, annonce ton sujet avec UNE phrase d'accroche (une anecdote, un chiffre, une question) et ton plan.",
          "Bloc 2 — Le projet : ce que tu as fait, concrètement, avec des exemples précis (2 min). Le jury adore le concret : dates, lieux, tâches réelles.",
          "Bloc 3 — Le bilan personnel : ce que tu as appris, ce qui t'a surpris, les difficultés rencontrées ET comment tu les as surmontées (1 min 30). C'est LE bloc qui différencie les bonnes notes : le jury évalue ta capacité à prendre du recul.",
          "Bloc 4 — La conclusion + ouverture (30 s) : ce que ce projet change pour ton avenir (orientation, envie, compétence) et une phrase de fin PRÉPARÉE — ne termine jamais par « voilà voilà... ».",
          "Écris le plan, PAS le texte intégral : des notes avec des mots-clés sur une fiche. Un texte appris par cœur récité d'une voix plate coûte des points ; des notes-guides libèrent le regard et le naturel.",
        ],
      },
      {
        titre: "La voix : ton premier instrument",
        points: [
          "Débit : le stress fait accélérer. Vise l'impression de parler « un peu trop lentement » : de l'extérieur, c'est le bon rythme.",
          "Volume : parle pour la personne la plus éloignée de la pièce. Une voix qui porte = une impression immédiate d'assurance.",
          "Les pauses sont tes amies : une seconde de silence après une idée importante la met en valeur. Le silence te semble long à TOI, pas au jury.",
          "Chasse les parasites : « euh », « du coup », « genre », « en fait ». Technique : remplace chaque « euh » par... une pause silencieuse. Entraîne-toi en te chronométrant.",
          "Échauffement le jour J : dans le couloir, articule exagérément quelques phrases (« un chasseur sachant chasser... ») et respire profondément 5 fois. La voix, ça se chauffe comme un muscle.",
        ],
      },
      {
        titre: "Le corps : regard, posture, gestes",
        points: [
          "Regard : balaye TOUS les membres du jury, pas seulement le plus souriant. Astuce anti-panique : regarde le front ou les sourcils, personne ne voit la différence.",
          "Posture : debout ou assis, dos droit, deux pieds au sol. Évite l'appui sur une jambe, le balancement, les mains dans les poches.",
          "Les mains : le piège n°1. Solution : tiens ta fiche de notes d'une main, et laisse l'autre accompagner naturellement tes phrases. Interdit : stylo cliqueté, mèche tortillée, manches triturées.",
          "Souris au moins au début et à la fin : un sourire (même forcé au départ) détend le jury ET te détend — c'est mécanique, ton cerveau suit ton visage.",
          "Habille-toi correct et confortable : pas déguisé, pas négligé. Tu dois pouvoir OUBLIER ta tenue pendant l'épreuve.",
        ],
      },
      {
        titre: "Gérer le stress : le trac est normal, la panique s'évite",
        points: [
          "Le trac est PHYSIOLOGIQUE et utile : l'adrénaline te rend plus vif. Les acteurs professionnels l'ont avant chaque représentation. Objectif : le dompter, pas le supprimer.",
          "Respiration 4-6 en attendant ton tour : inspire 4 secondes par le nez, expire 6 secondes par la bouche, 5 fois. L'expiration longue calme le rythme cardiaque — c'est prouvé, pas magique.",
          "La meilleure anti-panique, c'est la sur-préparation : avoir répété 5 fois à voix haute rend le trou de mémoire quasi impossible, car ta bouche connaît le chemin.",
          "Trou de mémoire quand même ? Regarde ta fiche (elle est là pour ça), respire, et dis : « Reprenons. » Le jury ne pénalise pas une pause, il pénalise l'abandon.",
          "Recadre ton cerveau : remplace « je vais rater » par « je vais leur raconter mon projet ». Tu es la personne de la pièce qui connaît LE MIEUX ton sujet — le jury, lui, le découvre.",
        ],
      },
      {
        titre: "L'entretien et le diaporama : les deux multiplicateurs",
        points: [
          "L'entretien vaut souvent plus de points que l'exposé : prépare les 10 questions probables (Pourquoi ce sujet ? Qu'as-tu appris ? Que referais-tu autrement ? Le lien avec ton orientation ?) et répète tes réponses.",
          "Technique de réponse : reformule la question (« Vous me demandez si... »), ça te donne 5 secondes de réflexion et ça montre que tu écoutes.",
          "Question dont tu ignores la réponse : « Je ne sais pas précisément, mais je peux faire le lien avec... » — pivote vers ce que tu sais. L'honnêteté + le rebond, c'est la combinaison gagnante.",
          "Diaporama : 5 ou 6 diapos MAXIMUM, quasi sans texte (un titre, une image, un chiffre par diapo). Le jury doit te regarder TOI, pas lire un mur de texte.",
          "Interdits du diaporama : les paragraphes recopiés, les animations tape-à-l'œil, lire ses diapos à voix haute. Le diaporama illustre, il ne remplace pas.",
          "Répétition générale obligatoire : au moins une fois en conditions réelles (debout, chronométré, devant quelqu'un qui pose ensuite 3 questions). C'est la séance qui rapporte le plus de points de toute ta préparation.",
        ],
      },
    ],
    exercicesPratiques: [
      {
        consigne:
          "Sujet d'entraînement n°1 : tu présentes ton stage d'observation de 3ème (choisis un lieu réel ou imagine : une boulangerie, un cabinet vétérinaire, une école...). Construis le plan détaillé de ton exposé de 5 minutes selon la structure en 4 blocs, avec le contenu précis de chaque bloc et le minutage.",
        corrige:
          "Plan modèle (stage en cabinet vétérinaire) : Bloc 1 (30 s) — Accroche : « Saviez-vous qu'un vétérinaire voit en moyenne 25 animaux par jour ? Pendant une semaine, j'ai compté avec lui. » Présentation : nom, classe, « j'ai effectué mon stage au cabinet vétérinaire des Lilas, du 3 au 7 février » ; annonce du plan : le lieu et les missions, puis mon bilan. Bloc 2 (2 min) — Le concret : présentation du cabinet (2 vétérinaires, 1 assistante, 30 consultations par jour) ; mes tâches réelles : accueil des clients, observation de 3 consultations types (vaccin, radio d'un chien accidenté, une opération), nettoyage et préparation de la salle de soins ; UNE anecdote précise (le chat qui s'est échappé dans la salle d'attente — le jury retient les histoires). Bloc 3 (1 min 30) — Le bilan : ce que j'ai appris (le métier, c'est 50 % de relation avec les HUMAINS, pas seulement les animaux ; les études sont longues : bac + 6) ; ma difficulté (la vue du sang au début) et comment je l'ai surmontée (le vétérinaire m'a appris à me concentrer sur les gestes techniques) ; ce qui m'a surpris (la part administrative du métier). Bloc 4 (30 s) — Conclusion : « Ce stage a confirmé mon envie de travailler avec les animaux, mais m'a montré que je dois renforcer mon niveau en SVT dès cette année. » Phrase de fin préparée : « Merci de votre attention, je suis prêt à répondre à vos questions. » — Critères de réussite : du concret partout (chiffres, dates, anecdote), un bilan avec difficulté surmontée, une fin nette.",
      },
      {
        consigne:
          "Sujet d'entraînement n°2 (histoire des arts) : tu as choisi de présenter l'œuvre « Guernica » de Picasso dans le cadre du parcours histoire des arts. Rédige ton accroche (2 phrases max), ta problématique d'exposé, ton plan en 3 points, et ta phrase de conclusion préparée.",
        corrige:
          "Corrigé modèle : Accroche : « Imaginez un tableau si dérangeant qu'on raconte qu'un officier allemand demanda à Picasso : \"C'est vous qui avez fait ça ?\" — et que le peintre répondit : \"Non... c'est vous.\" C'est l'histoire de Guernica. » Problématique : « Comment Picasso transforme-t-il un bombardement en œuvre de dénonciation universelle ? » Plan en 3 points : 1) Le contexte : le 26 avril 1937, pendant la guerre d'Espagne, l'aviation nazie alliée de Franco bombarde la ville basque de Guernica ; Picasso, qui doit réaliser une œuvre pour l'Exposition internationale de Paris, choisit ce sujet. 2) La description et les choix de l'artiste : un immense tableau (environ 3,5 m sur 7,8 m) en noir, blanc et gris (couleurs du deuil et des journaux), des figures déchirées — le taureau, le cheval hurlant, la mère à l'enfant mort — un chaos organisé qui traduit la violence subie par les civils. 3) La portée : l'œuvre devient un symbole universel de dénonciation de la guerre, tenue hors d'Espagne tant que dure la dictature franquiste, aujourd'hui exposée à Madrid. Phrase de conclusion préparée : « Guernica montre qu'une œuvre d'art peut être plus puissante qu'un discours : près de 90 ans après, ce tableau reste le cri anti-guerre le plus célèbre du monde. Merci, j'attends vos questions. » — Points forts : accroche narrative, problématique en « comment », plan contexte/description/portée (le trio gagnant en histoire des arts), conclusion qui élargit sans dériver.",
      },
      {
        consigne:
          "Le grand oral des questions pièges : voici 5 questions de jury. Prépare pour chacune une réponse de 20-30 secondes en appliquant les techniques de la fiche (reformulation, honnêteté + rebond, lien avec l'orientation) — a) « Pourquoi avoir choisi ce sujet ? » b) « Qu'est-ce qui a été le plus difficile ? » c) « Que referiez-vous différemment ? » d) une question de connaissance à laquelle tu ne sais pas répondre ; e) « Ce projet a-t-il un lien avec votre orientation ? »",
        corrige:
          "Réponses modèles : a) « J'ai choisi ce sujet d'abord par curiosité personnelle [raison sincère], mais aussi parce qu'il rejoint mon projet d'orientation [raison stratégique]. Par exemple... [un fait concret]. » À éviter absolument : « parce qu'il fallait bien choisir quelque chose ». b) « Le plus difficile a été [difficulté RÉELLE, ex. : contacter des adultes au téléphone, gérer le travail de groupe]. Je l'ai surmontée en [action concrète]. Avec le recul, c'est ce qui m'a le plus appris. » — Le trio difficulté/solution/leçon transforme un aveu en point fort. c) « Si c'était à refaire, je commencerais plus tôt la préparation du diaporama, car j'ai manqué de temps pour répéter. Sur le fond, je garderais mon sujet, mais j'ajouterais [une amélioration précise]. » — Montrer du recul SANS démolir son propre travail. d) « Je ne sais pas précisément répondre sur ce point. En revanche, ce que je peux dire, c'est que [pivot vers un élément voisin maîtrisé]. » — Reformuler, avouer sans paniquer, rebondir : le jury note la réaction, pas la lacune. e) « Oui : ce projet m'a fait découvrir [compétence ou métier], et c'est en partie pour cela que je souhaite aller en [seconde générale ou professionnelle, option...]. Même si mon projet évolue, j'ai appris [compétence transférable : m'organiser, parler en public...]. » — Toujours finir sur une compétence acquise : c'est valable même si ton orientation n'a AUCUN lien avec le sujet.",
      },
      {
        consigne:
          "Atelier diaporama : ton exposé porte sur ton EPI « créer un journal du collège ». Un camarade te propose son diaporama : 12 diapos, dont 8 remplies de paragraphes recopiés de l'exposé, des transitions animées en étoile, et une diapo « Merci de votre attention » avec un GIF. Fais la critique constructive, puis propose le sommaire diapo par diapo d'un diaporama efficace (6 diapos max).",
        corrige:
          "Critique constructive : 1) 12 diapos pour 5 minutes = 25 secondes par diapo : le jury passe l'oral à lire au lieu de t'écouter — il en faut 5 ou 6. 2) Les paragraphes recopiés sont le pire piège : soit tu les lis (voix plate, zéro point d'aisance orale), soit tu dis autre chose et le jury ne sait plus quoi suivre. 3) Les transitions en étoile distraient et font perdre du temps ; sobriété = professionnalisme. 4) Le GIF final : sympathique mais risqué — la dernière image doit laisser une impression sérieuse. Sommaire modèle en 6 diapos : Diapo 1 : titre du projet + ton nom + une photo de la une du journal. Diapo 2 : « Le projet en 3 chiffres » — 4 numéros publiés, 12 rédacteurs, 300 lecteurs (les chiffres remplacent les paragraphes). Diapo 3 : une photo de l'équipe en conférence de rédaction (support du récit concret). Diapo 4 : la une dont tu es le plus fier, en grand (tu la commentes à l'oral). Diapo 5 : « Ce que j'ai appris » — 3 mots-clés seulement (écrire pour être lu, travailler en équipe, tenir un délai). Diapo 6 : une image d'ouverture (ex. la maquette du prochain numéro) — pas de « merci » écrit, tu le DIS. Règle d'or récapitulée : une diapo = une idée = un visuel + quelques mots ; c'est TOI l'exposé, le diaporama n'est que ton décor.",
      },
      {
        consigne:
          "Répétition générale filmée : enregistre-toi (téléphone posé, plan large) en faisant ton exposé complet debout, chronométré. Puis regarde la vidéo et remplis la grille d'auto-évaluation : durée tenue ? débit ? nombre de « euh » ? regard ? posture ? mains ? phrase de fin nette ? Termine par tes 2 chantiers prioritaires.",
        corrige:
          "Exemple de grille remplie (auto-évaluation type après un premier essai) : Durée : 3 min 40 au lieu de 5 → il manque du contenu au bloc 2 (ajouter l'anecdote + un exemple) ; c'est le défaut le plus courant au premier essai, le stress fait tout accélérer. Débit : rapide sur la première minute puis correct → prévoir 3 respirations marquées au début. « Euh » : 14 comptés (c'est beaucoup mais normal au premier essai) → objectif : moins de 6 au prochain passage, en les remplaçant par des pauses. Regard : fixé sur la fiche 60 % du temps → réduire la fiche à 10 mots-clés maximum pour être obligé de lever les yeux. Posture : balancement gauche-droite permanent → répéter pieds légèrement écartés, ancrés au sol. Mains : stylo cliqueté pendant 2 minutes → supprimer le stylo, tenir la fiche. Phrase de fin : « ...voilà, c'est tout » → apprendre par cœur la vraie phrase de fin ; c'est, avec l'accroche, la seule partie de l'exposé à connaître mot pour mot. Chantiers prioritaires : 1) enrichir le bloc 2 pour tenir 5 minutes ; 2) fiche réduite à 10 mots-clés + phrase de fin par cœur. Puis re-filmer dans 3 jours et comparer : la progression entre l'essai 1 et l'essai 3 est toujours spectaculaire — c'est exactement pour cela que les élèves qui répètent gagnent des points sur cette épreuve.",
      },
    ],
  },
];

export default METHODES;
