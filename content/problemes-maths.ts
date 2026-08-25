import type { Niveau, Question } from "./types";

/** Problèmes de mathématiques hebdomadaires : des mises en situation concrètes
 * qui demandent de mobiliser les notions du programme (pas du calcul mécanique). */
export interface SerieProblemes {
  niveau: Niveau;
  semaine: number;
  titre: string;
  theme: string;
  questions: Question[];
}

export const PROBLEMES_MATHS: SerieProblemes[] = [
  {
    niveau: "5eme",
    semaine: 1,
    titre: "Vitesses, recettes et échelles",
    theme: "La proportionnalité",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une recette de crêpes pour 4 personnes demande 250 g de farine. Quelle quantité de farine faut-il pour 6 personnes ?",
        choix: ["300 g", "350 g", "375 g", "400 g"],
        bonneReponse: 2,
        explication:
          "On cherche la quantité pour une personne : 250 ÷ 4 = 62,5 g par personne. Pour 6 personnes : 62,5 × 6 = 375 g.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Sur une carte à l'échelle 1/25 000, la distance entre deux villages mesure 8 cm. Quelle est la distance réelle, en km ?",
        reponse: "2 km",
        explication:
          "Distance réelle = 8 × 25 000 = 200 000 cm. Or 200 000 cm = 2 000 m = 2 km.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un cycliste roule à vitesse constante et parcourt 45 km en 3 h. À cette même vitesse, quelle distance parcourt-il en 5 h ?",
        choix: ["60 km", "70 km", "75 km", "80 km"],
        bonneReponse: 2,
        explication:
          "Vitesse = 45 ÷ 3 = 15 km/h. En 5 h, il parcourt 15 × 5 = 75 km.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Pour préparer un jus concentré, on mélange le concentré et l'eau dans un rapport de 1 pour 4 (1 volume de concentré pour 4 volumes d'eau). Léa veut préparer 2 L de jus au total. Quel volume de concentré doit-elle utiliser ?",
        reponse: "0,4 L (soit 400 mL) de concentré.",
        explication:
          "Le rapport 1:4 correspond à 1 + 4 = 5 parts égales. Une part vaut 2 ÷ 5 = 0,4 L. Le concentré représente 1 part, donc 0,4 L (et l'eau, 4 parts, soit 1,6 L ; on vérifie bien 0,4 + 1,6 = 2 L).",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une voiture consomme 6 L d'essence pour 100 km. Combien de litres consomme-t-elle pour parcourir 350 km ?",
        choix: ["18 L", "21 L", "24 L", "27 L"],
        bonneReponse: 1,
        explication:
          "La consommation est proportionnelle à la distance : 6 L pour 100 km, donc 6 × 3,5 = 21 L pour 350 km.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 2,
    titre: "Partages et quantités",
    theme: "Les fractions",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une pizza est coupée en 8 parts égales. Théo en mange 3. Quelle fraction de la pizza reste-t-il ?",
        choix: ["3/8", "5/8", "8/3", "8/5"],
        bonneReponse: 1,
        explication:
          "Il reste 8 − 3 = 5 parts sur 8, donc la fraction restante est 5/8.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Une classe compte 28 élèves. Les 3/4 de la classe partent en voyage scolaire. Combien d'élèves partent en voyage ?",
        reponse: "21 élèves",
        explication:
          "Un quart de la classe est 28 ÷ 4 = 7 élèves. Trois quarts représentent donc 7 × 3 = 21 élèves.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Sur un terrain de sport, 2/5 de la surface est en herbe, 1/5 est en sable, et le reste est bitumé. Quelle fraction du terrain est bitumée ?",
        choix: ["1/5", "2/5", "3/5", "4/5"],
        bonneReponse: 1,
        explication:
          "Herbe + sable = 2/5 + 1/5 = 3/5 de la surface. Il reste donc 5/5 − 3/5 = 2/5 pour le bitume.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Une bouteille contient 1,5 L de jus de fruits. On en verse les 2/3 dans des verres. Quelle quantité de jus reste-t-il dans la bouteille ?",
        reponse: "0,5 L",
        explication:
          "Si l'on verse les 2/3, il reste 1/3 du contenu. Un tiers de 1,5 L vaut 1,5 ÷ 3 = 0,5 L.",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Pour comparer 3/4 et 5/8, Sami met les deux fractions au même dénominateur. Que vaut 3/4 exprimée en huitièmes ?",
        choix: ["5/8", "6/8", "7/8", "8/8"],
        bonneReponse: 1,
        explication:
          "3/4 = (3 × 2)/(4 × 2) = 6/8. Comme 6/8 > 5/8, on en déduit que 3/4 > 5/8.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 3,
    titre: "Températures, altitudes et comptes",
    theme: "Les nombres relatifs",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "À 6 h du matin, le thermomètre indique −3 °C. À midi, la température a augmenté de 8 °C. Quelle température fait-il à midi ?",
        choix: ["3 °C", "5 °C", "8 °C", "11 °C"],
        bonneReponse: 1,
        explication: "Température à midi = −3 + 8 = 5 °C.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un plongeur se trouve à −18 m par rapport à la surface de l'eau. Il remonte de 12 m, puis redescend de 5 m. À quelle profondeur se trouve-t-il finalement ?",
        reponse: "À −11 m, soit 11 m sous la surface.",
        explication:
          "Après la remontée : −18 + 12 = −6. Après la descente : −6 − 5 = −11.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Le Mont Blanc culmine à 4 809 m d'altitude, tandis que la Mer Morte se situe à −430 m (sous le niveau de la mer). Quelle est la différence d'altitude entre les deux lieux ?",
        choix: ["4 379 m", "4 809 m", "5 239 m", "5 669 m"],
        bonneReponse: 2,
        explication:
          "Différence = 4 809 − (−430) = 4 809 + 430 = 5 239 m.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Le compte d'argent de poche de Nora affiche −45 €. Elle reçoit 60 € pour son anniversaire, puis dépense 35 € pour un livre. Quel est le nouveau solde de son compte ?",
        reponse: "−20 €",
        explication:
          "Après le cadeau : −45 + 60 = 15. Après l'achat du livre : 15 − 35 = −20.",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question: "Range dans l'ordre croissant les nombres suivants : −7, 3, −2, 0, −9.",
        choix: [
          "−9 < −7 < −2 < 0 < 3",
          "−7 < −9 < −2 < 0 < 3",
          "3 < 0 < −2 < −7 < −9",
          "−2 < −7 < −9 < 0 < 3",
        ],
        bonneReponse: 0,
        explication:
          "Plus un nombre négatif a une grande valeur absolue, plus il est petit : −9 est le plus petit, puis −7, puis −2, puis 0, puis 3.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 4,
    titre: "Terrains et pièces à aménager",
    theme: "Aires et périmètres",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une chambre rectangulaire mesure 4 m de long sur 3,5 m de large. Quelle est son aire ?",
        choix: ["7,5 m²", "14 m²", "15 m²", "17,5 m²"],
        bonneReponse: 1,
        explication: "Aire d'un rectangle = longueur × largeur = 4 × 3,5 = 14 m².",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un jardin rectangulaire mesure 12 m de long et 8 m de large. Le propriétaire veut l'entourer entièrement d'une clôture. Quelle longueur de clôture doit-il acheter ?",
        reponse: "40 m",
        explication:
          "Périmètre d'un rectangle = 2 × (longueur + largeur) = 2 × (12 + 8) = 2 × 20 = 40 m.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un terrain carré a un périmètre de 60 m. Quelle est son aire ?",
        choix: ["150 m²", "180 m²", "225 m²", "240 m²"],
        bonneReponse: 2,
        explication:
          "Le côté du carré vaut 60 ÷ 4 = 15 m. Son aire vaut donc 15 × 15 = 225 m².",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Une pièce rectangulaire mesure 5 m sur 4 m. On y installe un tapis rectangulaire de 3 m sur 2 m au centre de la pièce. Quelle surface du sol reste visible (non recouverte par le tapis) ?",
        reponse: "14 m²",
        explication:
          "Aire de la pièce = 5 × 4 = 20 m². Aire du tapis = 3 × 2 = 6 m². Surface visible = 20 − 6 = 14 m².",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question: "Un triangle a une base de 10 cm et une hauteur de 6 cm. Quelle est son aire ?",
        choix: ["16 cm²", "30 cm²", "36 cm²", "60 cm²"],
        bonneReponse: 1,
        explication: "Aire d'un triangle = (base × hauteur) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 5,
    titre: "Soldes et remises",
    theme: "Pourcentages et proportionnalité",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "Un tee-shirt coûte 20 €. Il est soldé à −25 %. Quel est son prix après la remise ?",
        choix: ["12 €", "15 €", "16 €", "18 €"],
        bonneReponse: 1,
        explication:
          "25 % de 20 € valent 20 × 25 ÷ 100 = 5 €. Le prix soldé est donc 20 − 5 = 15 €.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un vélo coûte 240 €. Une remise de 15 % lui est appliquée. Quel est le montant de la remise, puis le prix final ?",
        reponse: "Remise de 36 €, prix final de 204 €.",
        explication:
          "Montant de la remise = 240 × 15 ÷ 100 = 36 €. Prix final = 240 − 36 = 204 €.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Dans une classe de 25 élèves, 40 % pratiquent un sport collectif. Combien d'élèves cela représente-t-il ?",
        choix: ["8", "10", "12", "15"],
        bonneReponse: 1,
        explication: "40 % de 25 = 25 × 40 ÷ 100 = 10 élèves.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un magasin annonce « −30 % puis encore −10 % sur le prix déjà soldé » pour un article à 100 €. Quel est le prix final ? Ce résultat est-il le même qu'une remise directe de 40 % ?",
        reponse:
          "Le prix final est 63 €. Ce n'est pas le même résultat qu'une remise directe de 40 %, qui aurait donné 60 €.",
        explication:
          "Après −30 % : 100 × 0,70 = 70 €. Puis −10 % sur ces 70 € : 70 × 0,90 = 63 €. Les remises successives ne s'additionnent pas simplement : 63 € est différent des 60 € obtenus avec −40 % appliqué directement.",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question: "Une bouteille d'eau coûte 1,50 €. Son prix augmente de 20 %. Quel est le nouveau prix ?",
        choix: ["1,60 €", "1,70 €", "1,80 €", "2,00 €"],
        bonneReponse: 2,
        explication: "Augmentation = 1,50 × 20 ÷ 100 = 0,30 €. Nouveau prix = 1,50 + 0,30 = 1,80 €.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 6,
    titre: "Moyennes et effectifs",
    theme: "Statistiques",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "Léo a obtenu les notes suivantes en mathématiques : 12, 15, 9, 14. Quelle est sa moyenne ?",
        choix: ["11,5", "12", "12,5", "13"],
        bonneReponse: 2,
        explication: "Somme des notes = 12 + 15 + 9 + 14 = 50. Moyenne = 50 ÷ 4 = 12,5.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un club sportif compte 45 licenciés répartis ainsi : 20 en football, 15 en basket, 10 en tennis. Quel pourcentage des licenciés pratique le tennis (arrondi au dixième) ?",
        reponse: "Environ 22,2 %.",
        explication: "Proportion = 10 ÷ 45 ≈ 0,222, soit environ 22,2 %.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Sur 5 devoirs, la moyenne d'Inès est de 13. Elle a obtenu 12, 14, 11 et 15 aux quatre premiers devoirs. Quelle note a-t-elle obtenue au 5e devoir ?",
        choix: ["11", "12", "13", "14"],
        bonneReponse: 2,
        explication:
          "Pour avoir une moyenne de 13 sur 5 devoirs, la somme des notes doit être 13 × 5 = 65. La somme des 4 premières notes est 12 + 14 + 11 + 15 = 52. La 5e note vaut donc 65 − 52 = 13.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Voici les tailles, en cm, de 6 élèves d'une classe : 150, 155, 148, 160, 152, 157. Calcule la taille moyenne (arrondie au dixième), puis l'étendue de cette série.",
        reponse: "Moyenne ≈ 153,7 cm ; étendue = 12 cm.",
        explication:
          "Somme des tailles = 150 + 155 + 148 + 160 + 152 + 157 = 922 cm. Moyenne = 922 ÷ 6 ≈ 153,7 cm. Étendue = valeur maximale − valeur minimale = 160 − 148 = 12 cm.",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Dans un sondage auprès de 40 élèves sur leur sport préféré, 18 répondent « football ». Quelle fraction, simplifiée, des élèves cela représente-t-il ?",
        choix: ["9/40", "9/20", "4/9", "2/9"],
        bonneReponse: 1,
        explication: "18/40 se simplifie en divisant numérateur et dénominateur par 2 : 18/40 = 9/20.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 7,
    titre: "Angles, triangles et symétrie",
    theme: "Géométrie",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un triangle a deux angles mesurant 50° et 70°. Quelle est la mesure du troisième angle ?",
        choix: ["50°", "60°", "70°", "80°"],
        bonneReponse: 1,
        explication:
          "La somme des angles d'un triangle vaut toujours 180°. Le troisième angle vaut donc 180 − 50 − 70 = 60°.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question: "Deux angles sont complémentaires. L'un mesure 37°. Quelle est la mesure de l'autre ?",
        reponse: "53°",
        explication:
          "Deux angles complémentaires ont une somme de 90°. L'autre angle vaut donc 90 − 37 = 53°.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un triangle isocèle a un angle au sommet de 40°. Quelle est la mesure de chacun des deux angles égaux à la base ?",
        choix: ["60°", "65°", "70°", "75°"],
        bonneReponse: 2,
        explication:
          "La somme des angles vaut 180°. Les deux angles à la base sont égaux : 180 − 40 = 140°, puis 140 ÷ 2 = 70° pour chacun.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Sur un plan, le point A a pour symétrique le point A' par rapport à une droite (d). Le segment [AA'] mesure 8 cm et coupe la droite (d) en un point M. Que peut-on dire de la position de M et de la longueur AM ?",
        reponse:
          "M est le milieu du segment [AA'], donc AM = 4 cm, et la droite (d) est perpendiculaire au segment [AA'] en ce point M.",
        explication:
          "Par définition de la symétrie axiale, la droite (d) est la médiatrice du segment [AA'] : elle passe par son milieu et lui est perpendiculaire. Comme AA' = 8 cm, AM = 8 ÷ 2 = 4 cm.",
      },
      {
        type: "qcm",
        difficulte: "facile",
        question: "Deux angles sont supplémentaires. L'un mesure 110°. Quelle est la mesure de l'autre ?",
        choix: ["60°", "70°", "80°", "90°"],
        bonneReponse: 1,
        explication:
          "Deux angles supplémentaires ont une somme de 180°. L'autre angle vaut donc 180 − 110 = 70°.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 8,
    titre: "Un peu de tout",
    theme: "Semaine mélange — plusieurs notions combinées",
    questions: [
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un jardin rectangulaire mesure 15 m sur 10 m. Le jardinier consacre 2/5 de la surface totale aux légumes. Quelle surface, en m², est consacrée aux légumes ?",
        choix: ["50 m²", "60 m²", "75 m²", "90 m²"],
        bonneReponse: 1,
        explication:
          "Aire totale du jardin = 15 × 10 = 150 m². Les 2/5 de cette surface valent (150 ÷ 5) × 2 = 60 m².",
      },
      {
        type: "ouverte",
        difficulte: "facile",
        question:
          "En janvier, la température moyenne relevée dans une ville était de −2 °C. En juillet, elle est supérieure de 22 °C à celle de janvier. Quelle est la température moyenne en juillet ?",
        reponse: "20 °C",
        explication: "Température de juillet = −2 + 22 = 20 °C.",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Un article coûtait 80 €. Son prix subit d'abord une hausse de 25 %, puis une baisse de 20 % sur ce nouveau prix. Quel est le prix final ?",
        choix: ["76 €", "78 €", "80 €", "84 €"],
        bonneReponse: 2,
        explication:
          "Après la hausse : 80 × 1,25 = 100 €. Après la baisse : 100 × 0,80 = 80 €. Une hausse de 25 % suivie d'une baisse de 20 % se compensent exactement ici, on retrouve le prix initial.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Une classe de 24 élèves a une moyenne de 12 en SVT. Un élève absent, resté à part, obtient ensuite 20 lorsqu'il repasse le contrôle et rejoint le groupe. Quelle est la nouvelle moyenne de la classe, maintenant composée de 25 élèves ?",
        reponse: "12,32 (environ 12,3)",
        explication:
          "Somme des points des 24 élèves = 24 × 12 = 288. En ajoutant la note de l'élève absent : 288 + 20 = 308. Nouvelle moyenne = 308 ÷ 25 = 12,32.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Sur une carte à l'échelle 1/50 000, deux fermes sont distantes de 5,6 cm. Un cycliste roule à 14 km/h. Combien de temps mettra-t-il pour parcourir la distance réelle entre les deux fermes ?",
        choix: ["10 min", "12 min", "15 min", "20 min"],
        bonneReponse: 1,
        explication:
          "Distance réelle = 5,6 × 50 000 = 280 000 cm = 2 800 m = 2,8 km. Temps = distance ÷ vitesse = 2,8 ÷ 14 = 0,2 h = 12 min.",
      },
    ],
  },
];

export function problemesDe(niveau: Niveau): SerieProblemes[] {
  return PROBLEMES_MATHS.filter((p) => p.niveau === niveau);
}
