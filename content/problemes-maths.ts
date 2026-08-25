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
{
    niveau: "5eme",
    semaine: 9,
    titre: "Parts du quotidien",
    theme: "Fractions d'une quantité",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un gâteau est partagé en 6 parts égales. Combien de parts représentent les 2/3 du gâteau ?",
        choix: ["3 parts", "4 parts", "5 parts", "6 parts"],
        bonneReponse: 1,
        explication:
          "Un tiers du gâteau représente 6 ÷ 3 = 2 parts. Deux tiers représentent donc 2 × 2 = 4 parts.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Manon reçoit 45 € d'argent de poche. Elle dépense les 2/5 de cette somme pour une sortie au cinéma. Quelle somme dépense-t-elle, et combien lui reste-t-il ?",
        reponse: "Elle dépense 18 €, et il lui reste 27 €.",
        explication:
          "Un cinquième de 45 € vaut 45 ÷ 5 = 9 €. Deux cinquièmes valent donc 9 × 2 = 18 €. Il lui reste 45 − 18 = 27 €.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un rouleau de fil électrique mesure 24 m. Un électricien utilise les 3/8 du rouleau pour une installation. Quelle longueur de fil a-t-il utilisée ?",
        choix: ["6 m", "8 m", "9 m", "12 m"],
        bonneReponse: 2,
        explication:
          "Un huitième du rouleau vaut 24 ÷ 8 = 3 m. Trois huitièmes valent donc 3 × 3 = 9 m.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Une famille parcourt un trajet de 360 km pour partir en vacances. Après les 3/4 du trajet, elle fait une pause. Quelle distance a-t-elle déjà parcourue, et quelle distance reste-t-il à parcourir ?",
        reponse: "Elle a parcouru 270 km, et il reste 90 km.",
        explication:
          "Un quart du trajet vaut 360 ÷ 4 = 90 km. Trois quarts valent donc 90 × 3 = 270 km. Distance restante = 360 − 270 = 90 km.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 10,
    titre: "Recettes et proportions",
    theme: "Proportionnalité et recettes",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une recette de riz au lait pour 5 personnes demande 150 g de riz. Quelle quantité de riz faut-il pour 8 personnes ?",
        choix: ["200 g", "220 g", "240 g", "260 g"],
        bonneReponse: 2,
        explication:
          "Quantité par personne = 150 ÷ 5 = 30 g. Pour 8 personnes : 30 × 8 = 240 g.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un joueur de basket marque en moyenne 3 paniers toutes les 4 minutes de jeu, à un rythme constant. Combien de paniers marque-t-il en 20 minutes ?",
        reponse: "15 paniers",
        explication:
          "20 minutes représentent 20 ÷ 4 = 5 fois la durée de 4 minutes. Comme le rythme est constant, il marque 3 × 5 = 15 paniers.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un pot de 2 L de peinture permet de couvrir 12 m² de mur. Quelle quantité de peinture, en L, faut-il pour couvrir 30 m² ?",
        choix: ["4 L", "5 L", "6 L", "7 L"],
        bonneReponse: 1,
        explication:
          "Quantité par m² = 2 ÷ 12 = 1/6 L. Pour 30 m² : 30 × 1/6 = 5 L.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un train parcourt 180 km en 1 h 30 min à vitesse constante. Quelle distance parcourt-il en 2 h 15 min ?",
        reponse: "270 km",
        explication:
          "1 h 30 min = 90 min, donc la vitesse est 180 ÷ 90 = 2 km par minute. 2 h 15 min = 135 min. Distance = 2 × 135 = 270 km.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 11,
    titre: "Températures et altitudes",
    theme: "Nombres relatifs",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "En Sibérie, la température est de −27 °C le matin. Elle augmente de 9 °C dans l'après-midi. Quelle température fait-il l'après-midi ?",
        choix: ["−36 °C", "−18 °C", "−9 °C", "18 °C"],
        bonneReponse: 1,
        explication: "Température de l'après-midi = −27 + 9 = −18 °C.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un sous-marin se trouve à −120 m par rapport à la surface de l'eau. Il descend encore de 45 m, puis remonte de 60 m. À quelle profondeur se trouve-t-il finalement ?",
        reponse: "À −105 m, soit 105 m sous la surface.",
        explication:
          "Après la descente : −120 − 45 = −165. Après la remontée : −165 + 60 = −105.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Le Kilimandjaro culmine à 5 895 m d'altitude, tandis qu'une dépression voisine se situe à −155 m par rapport au niveau de référence. Quelle est la différence d'altitude entre les deux lieux ?",
        choix: ["5 740 m", "5 895 m", "6 050 m", "6 200 m"],
        bonneReponse: 2,
        explication: "Différence = 5 895 − (−155) = 5 895 + 155 = 6 050 m.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Le compte d'argent de poche de Yanis affiche −12 €. Il reçoit 25 € d'argent de poche, dépense 30 € pour un jeu vidéo, puis reçoit 8 € de ses grands-parents. Quel est le solde final de son compte ?",
        reponse: "−9 €",
        explication:
          "Étapes successives : −12 + 25 = 13 ; puis 13 − 30 = −17 ; puis −17 + 8 = −9.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 12,
    titre: "Surfaces et contours",
    theme: "Périmètres et aires",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une terrasse rectangulaire mesure 6 m de long sur 4,5 m de large. Quelle est son aire ?",
        choix: ["24,5 m²", "25,5 m²", "27 m²", "28,5 m²"],
        bonneReponse: 2,
        explication: "Aire d'un rectangle = longueur × largeur = 6 × 4,5 = 27 m².",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un terrain de handball mesure 40 m de long et 20 m de large. Quel est son périmètre, et combien de tours complets un joueur doit-il faire en longeant ce contour pour parcourir 480 m ?",
        reponse: "Le périmètre est de 120 m ; il doit faire 4 tours pour parcourir 480 m.",
        explication:
          "Périmètre = 2 × (40 + 20) = 2 × 60 = 120 m. Nombre de tours = 480 ÷ 120 = 4.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "On veut carreler une pièce carrée de 5 m de côté avec des carreaux carrés de 25 cm (0,25 m) de côté. Combien de carreaux faut-il au minimum pour couvrir tout le sol ?",
        choix: ["200", "300", "400", "500"],
        bonneReponse: 2,
        explication:
          "Aire de la pièce = 5 × 5 = 25 m². Aire d'un carreau = 0,25 × 0,25 = 0,0625 m². Nombre de carreaux = 25 ÷ 0,0625 = 400.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un jardin rectangulaire mesure 18 m sur 12 m et contient une piscine rectangulaire de 8 m sur 4 m. On veut engazonner le reste du jardin. Quelle surface faut-il engazonner, et si un sac de gazon couvre 20 m², combien de sacs faut-il acheter au minimum ?",
        reponse: "Il faut engazonner 184 m², ce qui nécessite d'acheter 10 sacs de gazon.",
        explication:
          "Aire du jardin = 18 × 12 = 216 m². Aire de la piscine = 8 × 4 = 32 m². Surface à engazonner = 216 − 32 = 184 m². Nombre de sacs = 184 ÷ 20 = 9,2 ; comme on ne peut pas acheter un sac incomplet, il faut arrondir au nombre entier supérieur, soit 10 sacs.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 13,
    titre: "Statistiques du quotidien",
    theme: "Moyennes et statistiques",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un attaquant a marqué ces buts sur 5 matchs : 2, 1, 3, 0, 4. Quelle est sa moyenne de buts par match ?",
        choix: ["1,5", "2", "2,5", "3"],
        bonneReponse: 1,
        explication: "Somme des buts = 2 + 1 + 3 + 0 + 4 = 10. Moyenne = 10 ÷ 5 = 2.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Voici les dépenses hebdomadaires de Chloé sur 4 semaines : 12 €, 8 €, 15 € et 9 €. Quelle est sa dépense moyenne par semaine ?",
        reponse: "11 €",
        explication:
          "Somme des dépenses = 12 + 8 + 15 + 9 = 44 €. Moyenne = 44 ÷ 4 = 11 €.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Sur 6 parties d'un jeu vidéo, un joueur totalise une moyenne de 150 points. Il a obtenu 120, 140, 160, 130 et 170 points aux 5 premières parties. Quel score a-t-il obtenu à la 6e partie ?",
        choix: ["160", "170", "180", "190"],
        bonneReponse: 2,
        explication:
          "Pour une moyenne de 150 sur 6 parties, la somme totale doit être 150 × 6 = 900 points. Somme des 5 premières parties = 120 + 140 + 160 + 130 + 170 = 720. Score de la 6e partie = 900 − 720 = 180.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un vétérinaire pèse 8 chatons : leur poids moyen est de 1,2 kg. Un neuvième chaton, plus petit, pesant 0,6 kg, rejoint le groupe. Quelle est la nouvelle moyenne des poids pour les 9 chatons (arrondie au centième) ?",
        reponse: "Environ 1,13 kg.",
        explication:
          "Somme des poids des 8 premiers chatons = 1,2 × 8 = 9,6 kg. En ajoutant le neuvième : 9,6 + 0,6 = 10,2 kg. Nouvelle moyenne = 10,2 ÷ 9 ≈ 1,133, soit environ 1,13 kg.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 14,
    titre: "Réductions et pourcentages",
    theme: "Pourcentages et soldes",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "Un jeu vidéo coûte 60 €. Il est soldé à −15 %. Quel est son prix après la remise ?",
        choix: ["45 €", "48 €", "51 €", "54 €"],
        bonneReponse: 2,
        explication:
          "15 % de 60 € valent 60 × 15 ÷ 100 = 9 €. Prix soldé = 60 − 9 = 51 €.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un vélo électrique coûtait 900 € et coûte maintenant 720 € en promotion. Quel est le pourcentage de réduction appliqué ?",
        reponse: "20 %",
        explication:
          "Montant de la réduction = 900 − 720 = 180 €. Pourcentage = 180 ÷ 900 = 0,20, soit 20 %.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Dans un magasin de sport, 65 % des 140 articles en rayon sont des chaussures. Combien d'articles sont des chaussures ?",
        choix: ["84", "91", "98", "105"],
        bonneReponse: 1,
        explication: "65 % de 140 = 140 × 65 ÷ 100 = 91 articles.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un smartphone coûte 500 €. Son prix augmente d'abord de 10 %, puis baisse de 10 % sur ce nouveau prix. Quel est le prix final ? Est-ce le prix de départ ?",
        reponse:
          "Le prix final est 495 €, ce n'est pas le prix de départ de 500 €.",
        explication:
          "Après la hausse de 10 % : 500 × 1,10 = 550 €. Après la baisse de 10 % sur ce nouveau prix : 550 × 0,90 = 495 €. Une hausse suivie d'une baisse du même pourcentage ne redonne pas le prix initial, car les pourcentages s'appliquent à des valeurs différentes.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 15,
    titre: "Trajets et durées",
    theme: "Durées et vitesses",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question: "Une voiture roule à 90 km/h pendant 2 h 30 min. Quelle distance parcourt-elle ?",
        choix: ["180 km", "200 km", "215 km", "225 km"],
        bonneReponse: 3,
        explication: "2 h 30 min = 2,5 h. Distance = vitesse × durée = 90 × 2,5 = 225 km.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un match de football commence à 15 h 45 et se termine à 17 h 30. Quelle est la durée totale du match, en heures et minutes ?",
        reponse: "1 h 45 min",
        explication:
          "De 15 h 45 à 16 h 45, il s'écoule 1 h. De 16 h 45 à 17 h 30, il s'écoule 45 min. Durée totale = 1 h + 45 min = 1 h 45 min.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un coureur parcourt 15 km en 1 h 15 min à vitesse constante. Quelle est sa vitesse en km/h ?",
        choix: ["10 km/h", "12 km/h", "14 km/h", "15 km/h"],
        bonneReponse: 1,
        explication:
          "1 h 15 min = 1,25 h. Vitesse = distance ÷ durée = 15 ÷ 1,25 = 12 km/h.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un avion décolle à 8 h 20 et doit parcourir 2 400 km à une vitesse moyenne de 800 km/h. À quelle heure atterrira-t-il ?",
        reponse: "11 h 20",
        explication:
          "Durée du vol = distance ÷ vitesse = 2 400 ÷ 800 = 3 h. Heure d'arrivée = 8 h 20 + 3 h = 11 h 20.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 16,
    titre: "Figures et angles",
    theme: "Angles et triangles",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un panneau de signalisation triangulaire a des angles de 65° et 45°. Quelle est la mesure du troisième angle ?",
        choix: ["60°", "65°", "70°", "75°"],
        bonneReponse: 2,
        explication:
          "La somme des angles d'un triangle vaut 180°. Le troisième angle vaut donc 180 − 65 − 45 = 70°.",
      },
      {
        type: "ouverte",
        difficulte: "facile",
        question:
          "Une graphiste dessine un logo en forme de triangle équilatéral parfait. Que vaut chacun de ses trois angles ?",
        reponse: "60° chacun",
        explication:
          "Un triangle équilatéral a ses trois angles égaux, et leur somme vaut 180°. Chaque angle vaut donc 180 ÷ 3 = 60°.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un menuisier découpe une pièce de bois en forme de triangle isocèle dont l'angle au sommet mesure 100°. Quelle est la mesure de chacun des deux angles à la base ?",
        choix: ["35°", "40°", "45°", "50°"],
        bonneReponse: 1,
        explication:
          "La somme des angles vaut 180°. Les deux angles à la base sont égaux : 180 − 100 = 80°, puis 80 ÷ 2 = 40° pour chacun.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un menuisier doit tracer deux angles complémentaires sur une pièce, l'un devant mesurer le triple de l'autre. Quelle mesure doit-il donner à chacun des deux angles ?",
        reponse: "22,5° et 67,5°.",
        explication:
          "Soit x la mesure du plus petit angle : l'autre vaut alors 3x. Comme les deux angles sont complémentaires, x + 3x = 90, donc 4x = 90, donc x = 22,5. Le second angle vaut 3 × 22,5 = 67,5°.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 17,
    titre: "Plans et échelles",
    theme: "Échelles et plans",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Sur le plan d'une maison à l'échelle 1/100, une chambre mesure 3,5 cm de long. Quelle est sa longueur réelle, en mètres ?",
        choix: ["2,5 m", "3 m", "3,5 m", "4 m"],
        bonneReponse: 2,
        explication:
          "Longueur réelle = 3,5 × 100 = 350 cm. Or 350 cm = 3,5 m.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Sur une carte à l'échelle 1/20 000, la distance entre un camping et une plage mesure 6 cm. Quelle est la distance réelle, en km ?",
        reponse: "1,2 km",
        explication:
          "Distance réelle = 6 × 20 000 = 120 000 cm = 1 200 m = 1,2 km.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un architecte dessine le plan d'un jardin à l'échelle 1/500. Le jardin mesure réellement 25 m de long. Quelle longueur doit-il tracer sur le plan, en cm ?",
        choix: ["3 cm", "4 cm", "5 cm", "6 cm"],
        bonneReponse: 2,
        explication:
          "25 m = 2 500 cm. Longueur sur le plan = 2 500 ÷ 500 = 5 cm.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Sur une carte routière à l'échelle 1/250 000, deux villes sont distantes de 9,2 cm. Une voiture roule à 92 km/h en moyenne. Combien de temps mettra-t-elle pour parcourir la distance réelle entre les deux villes ?",
        reponse: "15 minutes",
        explication:
          "Distance réelle = 9,2 × 250 000 = 2 300 000 cm = 23 000 m = 23 km. Temps = distance ÷ vitesse = 23 ÷ 92 = 0,25 h = 15 min.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 18,
    titre: "Bilan mélangé",
    theme: "Semaine mélange — plusieurs notions combinées",
    questions: [
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un potager rectangulaire mesure 8 m sur 6 m. On réserve les 3/4 de la surface pour les tomates. Quelle surface, en m², est réservée aux tomates ?",
        choix: ["30 m²", "32 m²", "36 m²", "40 m²"],
        bonneReponse: 2,
        explication:
          "Aire du potager = 8 × 6 = 48 m². Un quart vaut 48 ÷ 4 = 12 m². Trois quarts valent donc 12 × 3 = 36 m².",
      },
      {
        type: "ouverte",
        difficulte: "facile",
        question:
          "À 22 h, la température est de −4 °C. Elle descend encore de 6 °C pendant la nuit. Quelle est la température minimale atteinte ?",
        reponse: "−10 °C",
        explication: "Température minimale = −4 − 6 = −10 °C.",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Un billet de concert coûte 45 €. Une taxe de 20 % est ajoutée au prix, puis une réduction « carte jeune » de 10 % s'applique sur ce nouveau prix. Quel est le prix final ?",
        choix: ["43,20 €", "45 €", "48,60 €", "50,40 €"],
        bonneReponse: 2,
        explication:
          "Après la taxe de 20 % : 45 × 1,20 = 54 €. Après la réduction de 10 % sur ce prix : 54 × 0,90 = 48,60 €.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Dans une classe de 20 élèves, le temps moyen pour parcourir 400 m est de 60 secondes. Un élève absent, qui repasse ensuite le test, met 50 secondes. Quelle est la nouvelle moyenne des temps pour les 21 élèves (arrondie au dixième) ? Quelle vitesse, en km/h, cela représente-t-il pour le temps de cet élève ?",
        reponse: "Nouvelle moyenne ≈ 59,5 s ; sa vitesse est de 28,8 km/h.",
        explication:
          "Somme des temps des 20 premiers élèves = 60 × 20 = 1 200 s. En ajoutant le 21e : 1 200 + 50 = 1 250 s. Nouvelle moyenne = 1 250 ÷ 21 ≈ 59,5 s. Pour l'élève à 50 s sur 400 m : vitesse = 400 ÷ 50 = 8 m/s, soit 8 × 3,6 = 28,8 km/h (car 1 m/s = 3,6 km/h).",
      },
    ],
  },
{
    niveau: "5eme",
    semaine: 19,
    titre: "Formules et expressions au quotidien",
    theme: "Le calcul littéral",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un club de sport loue des vélos électriques. Le prix, en euros, d'une location de h heures est donné par l'expression 5h + 2 (5 € par heure, plus 2 € de frais de dossier). Quel est le prix d'une location de 3 heures ?",
        choix: ["15 €", "17 €", "19 €", "21 €"],
        bonneReponse: 1,
        explication:
          "On remplace h par 3 dans l'expression : 5 × 3 + 2 = 15 + 2 = 17 €.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un maraîcher vend des pommes de terre au marché. Le prix total, en euros, d'un achat de k kilogrammes est P = 1,2k + 2 (1,2 € par kg, plus 2 € pour le cageot). Quel est le prix total pour 5 kg de pommes de terre ?",
        reponse: "8 €",
        explication:
          "On remplace k par 5 dans l'expression : P = 1,2 × 5 + 2 = 6 + 2 = 8 €.",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Un menuisier calcule la longueur totale de tasseaux nécessaires avec l'expression L = 4x + 3x − x, où x est la longueur d'un tasseau élémentaire (en cm). Quelle est l'expression réduite de L ?",
        choix: ["4x", "6x", "7x", "8x"],
        bonneReponse: 1,
        explication:
          "On additionne et soustrait les coefficients des termes en x : 4 + 3 − 1 = 6. L'expression réduite est donc L = 6x.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Pour une sortie scolaire, le prix facturé par une entreprise de transport est donné par P = 80 + 4n, où n est le nombre d'élèves inscrits (80 € de forfait fixe, plus 4 € par élève). Quel est le prix total pour 25 élèves inscrits ?",
        reponse: "180 €",
        explication:
          "On remplace n par 25 dans l'expression : P = 80 + 4 × 25 = 80 + 100 = 180 €.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 20,
    titre: "Partages en fractions",
    theme: "Comparer et additionner des fractions",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un potager est partagé en 12 parts égales. Camille cultive 5 parts de tomates et son voisin cultive 3 parts de courgettes sur la même surface totale. Quelle fraction du potager est cultivée par les deux ensemble ?",
        choix: ["2/12", "7/12", "8/12", "9/12"],
        bonneReponse: 2,
        explication:
          "Les deux fractions ont le même dénominateur, on additionne donc les numérateurs : 5/12 + 3/12 = (5 + 3)/12 = 8/12.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Léa a deux gamelles d'eau pour son chat : la première est remplie aux 3/8 de sa capacité, la seconde aux 5/8 de sa capacité. Laquelle des deux gamelles contient le plus d'eau ? Justifie ta réponse.",
        reponse: "La seconde gamelle, remplie aux 5/8, contient le plus d'eau.",
        explication:
          "Les deux fractions ont le même dénominateur (8), il suffit donc de comparer les numérateurs : 5 > 3, donc 5/8 > 3/8.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Une boulangère a vendu 2/6 de ses baguettes le matin et 3/6 l'après-midi. Quelle fraction de ses baguettes a-t-elle vendue au total dans la journée ?",
        choix: ["1/6", "4/6", "5/6", "6/6"],
        bonneReponse: 2,
        explication:
          "Les fractions ont le même dénominateur : 2/6 + 3/6 = (2 + 3)/6 = 5/6.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Lors d'un cross, Nathan a couru les 2/5 du parcours en trottinant, puis 2/5 supplémentaires en accélérant. Quelle fraction du parcours lui reste-t-il à parcourir ?",
        reponse: "1/5 du parcours.",
        explication:
          "Il a déjà parcouru 2/5 + 2/5 = 4/5 du parcours (fractions de même dénominateur). Il lui reste donc 5/5 − 4/5 = 1/5 à parcourir.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 21,
    titre: "Vitesses et débits en action",
    theme: "Proportionnalité : vitesse et débit",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un coureur maintient une vitesse constante et parcourt 10 km en 50 min. Combien de temps met-il pour parcourir 4 km à cette même vitesse ?",
        choix: ["15 min", "20 min", "25 min", "30 min"],
        bonneReponse: 1,
        explication:
          "Pour 1 km, il faut 50 ÷ 10 = 5 min. Pour 4 km, il faut 5 × 4 = 20 min.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un tuyau d'arrosage a un débit constant : il remplit un arrosoir de 8 L en 20 secondes. Combien de temps faut-il pour remplir, avec ce même tuyau, un bidon de 20 L ?",
        reponse: "50 secondes",
        explication:
          "Débit du tuyau = 8 ÷ 20 = 0,4 L par seconde. Pour remplir 20 L, il faut 20 ÷ 0,4 = 50 secondes.",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Un robinet remplit une piscine à débit constant : en 3 h, il verse 2 700 L d'eau. Quel volume d'eau aura-t-il versé au bout de 5 h ?",
        choix: ["3 600 L", "4 000 L", "4 500 L", "5 000 L"],
        bonneReponse: 2,
        explication:
          "Débit = 2 700 ÷ 3 = 900 L par heure. En 5 h, il verse 900 × 5 = 4 500 L.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un autocar roule à vitesse constante. Il parcourt 63 km en 45 min. Quelle distance parcourt-il en 1 h (60 min) à cette même vitesse ?",
        reponse: "84 km",
        explication:
          "En 45 min, il parcourt 63 km, donc en 1 min il parcourt 63 ÷ 45 = 1,4 km. En 60 min, il parcourt 1,4 × 60 = 84 km.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 22,
    titre: "Figures et symétries",
    theme: "Symétrie axiale et propriétés géométriques",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Dans un jardin, un parterre de fleurs en forme de losange possède un axe de symétrie qui est l'une de ses diagonales. Le côté du losange mesure 1,5 m. Quel est le périmètre du parterre ?",
        choix: ["4,5 m", "6 m", "7,5 m", "9 m"],
        bonneReponse: 1,
        explication:
          "Un losange a ses 4 côtés de même longueur. Périmètre = 4 × 1,5 = 6 m.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Sur le plan d'un jardin, un bassin est symétrique par rapport à une allée rectiligne (d). Un rocher A, situé à 2,5 m de l'allée, a pour symétrique un point A' de l'autre côté du bassin. Quelle est la distance entre le rocher A et son symétrique A' ?",
        reponse: "5 m",
        explication:
          "La droite (d) est la médiatrice du segment [AA'] : A et A' sont donc à la même distance de (d), soit 2,5 m chacun. La distance AA' vaut donc 2,5 + 2,5 = 5 m.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un triangle ABC a un angle en A de 55°. On construit le triangle symétrique A'B'C' par rapport à une droite (d). Quelle est la mesure de l'angle en A' ?",
        choix: ["35°", "55°", "90°", "125°"],
        bonneReponse: 1,
        explication:
          "La symétrie axiale conserve les longueurs et les angles. L'angle en A' est donc égal à l'angle en A, soit 55°.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un potager en forme de triangle a un périmètre de 18 m. On construit son symétrique par rapport à une allée pour aménager une seconde parcelle identique de l'autre côté, sans qu'aucun côté ne soit commun aux deux parcelles. Quelle longueur totale de clôture faut-il pour entourer entièrement les deux parcelles ?",
        reponse: "36 m",
        explication:
          "La symétrie conserve les longueurs, donc la seconde parcelle a le même périmètre que la première, soit 18 m. Comme les deux parcelles ne partagent aucun côté, la longueur totale de clôture est 18 + 18 = 36 m.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 23,
    titre: "Repères et déplacements",
    theme: "Nombres relatifs : repérage et comparaison",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Sur un axe gradué représentant les étages d'un parking souterrain, le rez-de-chaussée correspond à 0, et chaque sous-sol est numéroté négativement. Une voiture est garée au niveau −3 et une moto au niveau −1. Laquelle des deux est la plus profonde ?",
        choix: [
          "La voiture (−3)",
          "La moto (−1)",
          "Elles sont à la même profondeur",
          "On ne peut pas savoir",
        ],
        bonneReponse: 0,
        explication:
          "Plus un nombre négatif est éloigné de 0, plus il est petit et plus il représente une profondeur importante. Comme −3 < −1, la voiture au niveau −3 est la plus profonde.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Sur une frise chronologique graduée en années, l'origine 0 correspond à l'an 0. Un événement A se situe à −250 (250 av. J.-C.) et un événement B à −120 (120 av. J.-C.). Range ces deux dates dans l'ordre chronologique (de la plus ancienne à la plus récente) et indique lequel des deux nombres relatifs est le plus petit.",
        reponse:
          "L'ordre chronologique est : événement A (−250), puis événement B (−120). Le plus petit des deux nombres relatifs est −250.",
        explication:
          "Sur l'axe des nombres relatifs, −250 est plus petit que −120 (il est plus éloigné de 0 du côté négatif). L'événement le plus ancien correspond donc au nombre le plus petit.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Dans un aquarium, la position verticale de trois poissons par rapport à la surface de l'eau (0) est repérée ainsi : poisson A à −15 cm, poisson B à −8 cm, poisson C à −22 cm. Quel poisson est le plus proche de la surface ?",
        choix: ["Poisson A", "Poisson B", "Poisson C", "Ils sont à égale distance"],
        bonneReponse: 1,
        explication:
          "Le poisson le plus proche de la surface est celui dont la position est la plus proche de 0. Parmi −15, −8 et −22, c'est −8 qui est le plus proche de 0 : c'est le poisson B.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Sur le plan d'un jardin, les emplacements sont repérés par des coordonnées (x ; y), x et y étant des nombres relatifs, l'origine (0 ; 0) étant la terrasse. Un arbre est repéré par le point A(−4 ; 3) et un cabanon par le point B(2 ; −5). Donne l'abscisse et l'ordonnée de chacun de ces deux points, puis précise lequel a l'abscisse la plus petite.",
        reponse:
          "Le point A a pour abscisse −4 et pour ordonnée 3. Le point B a pour abscisse 2 et pour ordonnée −5. Comme −4 < 2, c'est le point A qui a l'abscisse la plus petite.",
        explication:
          "L'abscisse est la première coordonnée d'un point, l'ordonnée la seconde. On compare −4 et 2 sur l'axe des nombres relatifs : −4 est plus petit que 2.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 24,
    titre: "Surfaces à assembler",
    theme: "Aires de figures composées",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un jardin a la forme d'un rectangle de 10 m sur 8 m auquel on a retiré un coin rectangulaire de 3 m sur 2 m. Quelle est l'aire du jardin ?",
        choix: ["68 m²", "74 m²", "78 m²", "80 m²"],
        bonneReponse: 1,
        explication:
          "Aire du grand rectangle = 10 × 8 = 80 m². Aire du coin retiré = 3 × 2 = 6 m². Aire du jardin = 80 − 6 = 74 m².",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un mur rectangulaire mesure 4 m de large sur 2,5 m de haut. On y perce une fenêtre carrée de 1 m de côté. Quelle surface de mur reste à peindre (fenêtre exclue) ?",
        reponse: "9 m²",
        explication:
          "Aire du mur = 4 × 2,5 = 10 m². Aire de la fenêtre = 1 × 1 = 1 m². Surface à peindre = 10 − 1 = 9 m².",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Un terrain de sport est formé d'un rectangle de 20 m sur 12 m, prolongé par une zone triangulaire de base 12 m et de hauteur 5 m. Quelle est l'aire totale du terrain ?",
        choix: ["255 m²", "260 m²", "270 m²", "300 m²"],
        bonneReponse: 2,
        explication:
          "Aire du rectangle = 20 × 12 = 240 m². Aire du triangle = (12 × 5) ÷ 2 = 30 m². Aire totale = 240 + 30 = 270 m².",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un magasin veut carreler une salle en forme de L, composée d'un rectangle de 6 m sur 5 m et d'un second rectangle de 3 m sur 2 m accolé à angle droit (sans chevauchement). Le carrelage coûte 18 € le m². Quel est le coût total du carrelage pour cette salle ?",
        reponse: "648 €",
        explication:
          "Aire totale = (6 × 5) + (3 × 2) = 30 + 6 = 36 m². Coût total = 36 × 18 = 648 €.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 25,
    titre: "Enquêtes et fréquences",
    theme: "Effectifs et fréquences",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Lors d'un sondage auprès de 30 élèves sur leur sport préféré, on obtient : football 12, basket 9, natation 6, autre 3. Quel est l'effectif total de ce sondage ?",
        choix: ["27", "28", "30", "33"],
        bonneReponse: 2,
        explication:
          "L'effectif total est la somme de tous les effectifs : 12 + 9 + 6 + 3 = 30, ce qui correspond bien aux 30 élèves interrogés.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Dans une classe de 20 élèves, on demande quel est leur animal préféré : 8 disent « chien », 5 disent « chat », 4 disent « lapin », 3 disent « autre ». Quelle est la fréquence, en pourcentage, des élèves préférant le chien ?",
        reponse: "40 %",
        explication:
          "Fréquence = effectif ÷ effectif total = 8 ÷ 20 = 0,4, soit 40 %.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Une boutique a vendu 150 articles dans la semaine, répartis ainsi : 60 tee-shirts, 45 pantalons, 30 vestes, et le reste en accessoires. Quel est l'effectif d'accessoires vendus ?",
        choix: ["10", "15", "20", "25"],
        bonneReponse: 1,
        explication:
          "Effectif total = 150. Effectif des trois autres catégories = 60 + 45 + 30 = 135. Effectif des accessoires = 150 − 135 = 15.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "On interroge 50 élèves sur la sortie scolaire qu'ils préfèrent : 20 choisissent le musée, 15 choisissent l'accrobranche, et le reste choisit la patinoire. Calcule l'effectif des élèves ayant choisi la patinoire, puis la fréquence, en pourcentage, de ce choix.",
        reponse: "Effectif : 15 élèves ; fréquence : 30 %.",
        explication:
          "Effectif patinoire = 50 − (20 + 15) = 50 − 35 = 15. Fréquence = 15 ÷ 50 = 0,3, soit 30 %.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 26,
    titre: "Hausses et baisses de prix",
    theme: "Pourcentages : augmentations et réductions",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une paire de baskets coûtait 60 €. Son prix augmente de 15 %. Quel est le nouveau prix ?",
        choix: ["63 €", "66 €", "69 €", "72 €"],
        bonneReponse: 2,
        explication:
          "Augmentation = 60 × 15 ÷ 100 = 9 €. Nouveau prix = 60 + 9 = 69 €.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un sac de croquettes pour chien coûtait 25 €. Il est en promotion avec une réduction de 20 %. Quel est le prix soldé ?",
        reponse: "20 €",
        explication:
          "Réduction = 25 × 20 ÷ 100 = 5 €. Prix soldé = 25 − 5 = 20 €.",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Le prix d'une perceuse était de 90 €. Il augmente d'abord de 10 %, puis baisse de 10 % sur le nouveau prix. Quel est le prix final ?",
        choix: ["81 €", "89,10 €", "90 €", "99 €"],
        bonneReponse: 1,
        explication:
          "Après la hausse de 10 % : 90 × 1,10 = 99 €. Après la baisse de 10 % sur ces 99 € : 99 × 0,90 = 89,10 €. Une hausse suivie d'une baisse du même pourcentage ne se compensent pas exactement.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Après une réduction de 25 %, une tondeuse à gazon coûte 180 €. Quel était son prix avant la réduction ?",
        reponse: "240 €",
        explication:
          "180 € correspond à 100 % − 25 % = 75 % du prix initial. Donc 1 % du prix initial vaut 180 ÷ 75 = 2,40 €, et le prix initial (100 %) vaut 2,40 × 100 = 240 €.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 27,
    titre: "Défis à plusieurs étapes",
    theme: "Problèmes à étapes multiples",
    questions: [
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Une sortie scolaire coûte 12 € par élève. Sur les 32 élèves de la classe, 25 % bénéficient d'une aide qui leur fait payer seulement la moitié du prix. Quelle est la recette totale collectée par le professeur ?",
        choix: ["312 €", "324 €", "336 €", "348 €"],
        bonneReponse: 2,
        explication:
          "Élèves aidés = 25 % de 32 = 8 élèves. Ils paient 12 ÷ 2 = 6 € chacun, soit 8 × 6 = 48 €. Les 32 − 8 = 24 autres élèves paient plein tarif : 24 × 12 = 288 €. Recette totale = 48 + 288 = 336 €.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un potager rectangulaire mesure 12 m sur 6 m. Le jardinier consacre 1/3 de la surface aux tomates. Il achète des plants de tomates à raison de 4 plants par m², chaque plant coûtant 1,50 €. Quel est le coût total des plants de tomates ?",
        reponse: "144 €",
        explication:
          "Aire totale = 12 × 6 = 72 m². Surface consacrée aux tomates = 72 ÷ 3 = 24 m². Nombre de plants = 24 × 4 = 96. Coût total = 96 × 1,50 = 144 €.",
      },
      {
        type: "qcm",
        difficulte: "avance",
        question:
          "Lors d'un tournoi, une équipe de hockey a un goal-average de −3 après 5 matchs (elle a encaissé 3 buts de plus qu'elle n'en a marqué). Lors du 6e match, elle marque 4 buts et en encaisse 1. Quel est son nouveau goal-average après ces 6 matchs ?",
        choix: ["−4", "−1", "0", "3"],
        bonneReponse: 2,
        explication:
          "Le goal-average du 6e match est 4 − 1 = 3. Le nouveau goal-average total est −3 + 3 = 0.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un magasin vend un vélo à 250 €. Il applique d'abord une remise de 20 %, puis un client fidèle bénéficie d'une remise supplémentaire de 10 € sur le prix déjà soldé. Il paie enfin en 4 fois sans frais. Quel est le montant de chacune des 4 mensualités ?",
        reponse: "47,50 € par mensualité.",
        explication:
          "Après la remise de 20 % : 250 × 0,80 = 200 €. Après la remise supplémentaire de 10 € : 200 − 10 = 190 €. Réparti en 4 fois : 190 ÷ 4 = 47,50 € par mensualité.",
      },
    ],
  },
{
    niveau: "5eme",
    semaine: 28,
    titre: "Fêtes, courses et calculs enchaînés",
    theme: "Les priorités opératoires en situation",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Pour préparer l'anniversaire de son petit frère, Jules achète 5 paquets de ballons à 2 € l'un et 3 paquets de guirlandes à 4 € l'un. Quel est le montant total de ses achats ?",
        choix: ["14 €", "22 €", "35 €", "56 €"],
        bonneReponse: 1,
        explication:
          "Il faut calculer chaque type d'achat séparément avant d'additionner, car la multiplication est prioritaire sur l'addition : 5 × 2 + 3 × 4 = 10 + 12 = 22 €.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Pour un pique-nique, une famille achète 6 sandwiches à 3 € l'un et 4 bouteilles d'eau à 1 € l'une, puis profite d'une réduction de 5 € grâce à un bon d'achat. Écris le calcul, avec parenthèses, qui donne le montant final payé, puis calcule ce montant.",
        reponse: "(6 × 3 + 4 × 1) − 5 = 17 €.",
        explication:
          "On calcule d'abord le prix des sandwiches (6 × 3 = 18) et celui de l'eau (4 × 1 = 4), on additionne (18 + 4 = 22), puis on retire la réduction : 22 − 5 = 17 €.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un club sportif facture 8 € d'inscription par joueur pour les 15 joueurs inscrits à un tournoi, mais offre une remise unique de 20 € pour l'ensemble du groupe. Quel calcul donne le montant total encaissé par le club ?",
        choix: ["8 × 15 − 20 = 100", "8 × (15 − 20) = −40", "(8 − 20) × 15 = −180", "8 × 15 + 20 = 140"],
        bonneReponse: 0,
        explication:
          "Il faut d'abord calculer le montant total des inscriptions (priorité de la multiplication) avant de soustraire la remise : 8 × 15 = 120, puis 120 − 20 = 100 €.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Pour organiser une kermesse, une association achète 3 lots de 12 bouteilles à 1 € la bouteille, et 2 lots de gobelets à 3 € le lot. Elle partage ensuite la dépense totale entre 4 classes organisatrices. Quelle somme chaque classe doit-elle rembourser à l'association ?",
        reponse: "10,50 € par classe.",
        explication:
          "Bouteilles : 3 × 12 × 1 = 36 €. Gobelets : 2 × 3 = 6 €. Dépense totale : (3 × 12 × 1) + (2 × 3) = 36 + 6 = 42 €. Chaque classe rembourse 42 ÷ 4 = 10,50 €.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 29,
    titre: "Récoltes, dons et argent de poche",
    theme: "Les fractions d'une quantité (situations complexes)",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un jardin potager de 60 m² est partagé en trois parties égales : légumes, fleurs et un chemin. Quelle surface, en m², est consacrée aux fleurs ?",
        choix: ["15 m²", "20 m²", "25 m²", "30 m²"],
        bonneReponse: 1,
        explication:
          "Le jardin est divisé en 3 parts égales, donc chaque part vaut 60 ÷ 3 = 20 m². Les fleurs occupent une part, soit 20 m².",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Une association récolte 900 € lors d'une vente de gâteaux. Elle reverse les 2/3 de cette somme à une œuvre caritative, puis utilise le 1/4 du reste pour acheter du matériel. Quelle somme reste-t-il finalement à l'association ?",
        reponse: "225 €",
        explication:
          "Somme reversée : 900 × 2/3 = 600 €. Il reste 900 − 600 = 300 €. Matériel : 300 × 1/4 = 75 €. Il reste finalement 300 − 75 = 225 €.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un verger produit 240 kg de pommes. Les 3/8 de la récolte sont vendus au marché, et la moitié des pommes restantes est transformée en compote. Quelle masse de pommes est transformée en compote ?",
        choix: ["60 kg", "75 kg", "90 kg", "120 kg"],
        bonneReponse: 1,
        explication:
          "Vendues : 240 × 3/8 = 90 kg. Restantes : 240 − 90 = 150 kg. Compote : 150 ÷ 2 = 75 kg.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Après avoir dépensé les 2/5 de son argent de poche pour un jeu vidéo, puis encore 1/3 du reste pour une place de cinéma, il reste 24 € à Malo. Quelle somme avait-il au départ ?",
        reponse: "60 €",
        explication:
          "Après le jeu vidéo, il reste 3/5 de la somme initiale. Après le cinéma, il reste les 2/3 de ce reste, soit 2/3 × 3/5 = 2/5 de la somme initiale. Cette fraction correspond à 24 €, donc la somme initiale vaut 24 ÷ (2/5) = 24 × 5/2 = 60 €.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 30,
    titre: "Cartes, plans et distances réelles",
    theme: "La proportionnalité : échelles de cartes",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Sur une carte routière à l'échelle 1/100 000, la distance entre deux villes mesure 7 cm. Quelle est la distance réelle, en km ?",
        choix: ["5 km", "6 km", "7 km", "8 km"],
        bonneReponse: 2,
        explication:
          "Distance réelle = 7 × 100 000 = 700 000 cm = 7 000 m = 7 km.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Sur un plan de randonnée à l'échelle 1/20 000, un sentier mesure 12,5 cm. Quelle est la longueur réelle de ce sentier, en km ?",
        reponse: "2,5 km",
        explication:
          "Longueur réelle = 12,5 × 20 000 = 250 000 cm = 2 500 m = 2,5 km.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Sur une carte, la distance entre deux villages est représentée par un segment de 4 cm. La distance réelle entre ces villages est de 10 km. Quelle est l'échelle de la carte ?",
        choix: ["1/25 000", "1/100 000", "1/250 000", "1/400 000"],
        bonneReponse: 2,
        explication:
          "10 km = 1 000 000 cm. L'échelle est le rapport (distance sur la carte)/(distance réelle) = 4/1 000 000 = 1/250 000.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Une carte de randonnée est à l'échelle 1/50 000. Un randonneur doit parcourir un circuit qui mesure 3 cm sur la carte pour la montée, puis 7 cm pour la descente. Sachant qu'il marche à une vitesse moyenne de 2 km/h, combien de temps, en heures et minutes, mettra-t-il pour parcourir le circuit complet ?",
        reponse: "2 h 30 min",
        explication:
          "Longueur totale sur la carte : 3 + 7 = 10 cm. Distance réelle : 10 × 50 000 = 500 000 cm = 5 000 m = 5 km. Temps de marche : 5 ÷ 2 = 2,5 h, soit 2 h 30 min.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 31,
    titre: "Piscines, réservoirs et récipients",
    theme: "Volumes et contenances",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Une piscine gonflable a la forme d'un pavé droit de 3 m de long, 2 m de large et 0,8 m de profondeur. Quel est son volume ?",
        choix: ["3,6 m³", "4,2 m³", "4,8 m³", "5,2 m³"],
        bonneReponse: 2,
        explication:
          "Volume d'un pavé droit = longueur × largeur × hauteur = 3 × 2 × 0,8 = 4,8 m³.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un réservoir d'eau a un volume de 4,8 m³. Sachant que 1 m³ = 1 000 L, quelle est sa capacité en litres ? Si un robinet remplit ce réservoir à raison de 60 L par minute, combien de temps faudra-t-il pour le remplir complètement (en heures et minutes) ?",
        reponse: "4 800 L ; il faut 1 h 20 min pour remplir le réservoir.",
        explication:
          "Capacité = 4,8 × 1 000 = 4 800 L. Temps de remplissage = 4 800 ÷ 60 = 80 min = 1 h 20 min.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Une boîte de conserve cubique a une arête de 10 cm. Quelle est sa contenance, en litres (on rappelle que 1 L = 1 dm³ = 1 000 cm³) ?",
        choix: ["0,1 L", "1 L", "10 L", "100 L"],
        bonneReponse: 1,
        explication:
          "Volume = 10 × 10 × 10 = 1 000 cm³. Comme 1 000 cm³ = 1 dm³ = 1 L, la contenance est de 1 L.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un aquarium en forme de pavé droit mesure 80 cm de long, 40 cm de large et 50 cm de hauteur. On le remplit d'eau jusqu'aux 3/4 de sa hauteur. Quel volume d'eau, en litres, contient l'aquarium ?",
        reponse: "120 L",
        explication:
          "Volume total de l'aquarium : 80 × 40 × 50 = 160 000 cm³ = 160 L (car 1 L = 1 000 cm³). Rempli aux 3/4 de sa hauteur, le volume d'eau est 160 × 3/4 = 120 L.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 32,
    titre: "Dés, cartes et probabilités",
    theme: "Probabilités simples : la notion de hasard",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "On lance un dé à 6 faces, numéroté de 1 à 6. Quelle est la probabilité d'obtenir un nombre pair ?",
        choix: ["1/6", "1/3", "1/2", "2/3"],
        bonneReponse: 2,
        explication:
          "Les nombres pairs sont 2, 4 et 6, soit 3 issues favorables sur 6 possibles : probabilité = 3/6 = 1/2.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un jeu de 32 cartes contient 4 rois, 4 dames et 4 valets (les autres cartes sont des cartes numérotées). On tire une carte au hasard. Quelle est la probabilité de tirer une figure (roi, dame ou valet) ? Donne le résultat sous forme de fraction simplifiée.",
        reponse: "3/8",
        explication:
          "Il y a 4 + 4 + 4 = 12 figures parmi 32 cartes. La probabilité est 12/32, qui se simplifie en divisant par 4 : 12/32 = 3/8.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Une urne contient 5 boules rouges, 3 boules bleues et 2 boules vertes, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité de ne pas tirer une boule rouge ?",
        choix: ["1/5", "2/5", "1/2", "3/5"],
        bonneReponse: 2,
        explication:
          "Il y a 10 boules en tout, dont 5 rouges. Ne pas tirer une boule rouge revient à tirer l'une des 3 + 2 = 5 boules restantes. Probabilité = 5/10 = 1/2.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "On lance deux dés à 6 faces et on additionne les résultats. Quelle est la probabilité d'obtenir une somme égale à 7 ? (Aide : il y a 36 issues possibles au total pour les deux dés.)",
        reponse: "1/6",
        explication:
          "Sur les 36 issues possibles (6 × 6), les combinaisons donnant une somme de 7 sont : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), soit 6 issues favorables. Probabilité = 6/36 = 1/6.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 33,
    titre: "Comptes, ascenseurs et dates historiques",
    theme: "Les nombres relatifs en situation",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un ascenseur se trouve au 2e étage (niveau +2). Il descend de 5 étages pour atteindre un parking souterrain. À quel niveau se trouve-t-il alors ?",
        choix: ["Niveau −5", "Niveau −3", "Niveau −2", "Niveau 3"],
        bonneReponse: 1,
        explication: "Niveau final = 2 − 5 = −3, soit 3 étages sous le rez-de-chaussée.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Le compte bancaire de Karim affiche un solde de −60 €. Il reçoit un virement de 85 € de ses parents, puis paie une facture de 40 €. Quel est le nouveau solde de son compte ?",
        reponse: "−15 €",
        explication:
          "Après le virement : −60 + 85 = 25 €. Après la facture : 25 − 40 = −15 €.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Jules César est né en −100 (100 avant J.-C.) et est mort en −44 (44 avant J.-C.). Quel âge avait-il à sa mort ?",
        choix: ["44 ans", "56 ans", "64 ans", "144 ans"],
        bonneReponse: 1,
        explication: "Durée de vie = −44 − (−100) = −44 + 100 = 56 ans.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un ascenseur part du 3e sous-sol d'un parking (niveau −3). Il monte de 8 étages pour déposer des passagers, puis redescend de 6 étages, puis remonte encore de 4 étages. À quel niveau se trouve-t-il finalement ?",
        reponse: "Il se trouve au niveau +3 (3e étage).",
        explication:
          "Après la première montée : −3 + 8 = 5. Après la descente : 5 − 6 = −1. Après la dernière montée : −1 + 4 = 3.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 34,
    titre: "Terrains, sols et conversions",
    theme: "Périmètres, aires et conversions d'unités",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un terrain rectangulaire mesure 250 m de long et 4 000 cm de large. Quel est son périmètre, en mètres ?",
        choix: ["290 m", "500 m", "580 m", "1 000 m"],
        bonneReponse: 2,
        explication:
          "4 000 cm = 40 m. Périmètre = 2 × (250 + 40) = 2 × 290 = 580 m.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un champ agricole rectangulaire mesure 400 m sur 250 m. Quelle est son aire en m², puis en hectares (on rappelle que 1 ha = 10 000 m²) ?",
        reponse: "100 000 m², soit 10 ha.",
        explication:
          "Aire = 400 × 250 = 100 000 m². Comme 1 ha = 10 000 m², l'aire vaut 100 000 ÷ 10 000 = 10 ha.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un carreau carré de salle de bain a un côté de 25 cm. Combien de carreaux faut-il pour couvrir un mur rectangulaire de 2 m de haut sur 3 m de large (on suppose qu'on peut poser les carreaux sans perte) ?",
        choix: ["48", "72", "96", "120"],
        bonneReponse: 2,
        explication:
          "Aire d'un carreau : 25 × 25 = 625 cm² = 0,0625 m². Aire du mur : 2 × 3 = 6 m². Nombre de carreaux : 6 ÷ 0,0625 = 96.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un terrain a la forme d'un grand rectangle de 30 m sur 20 m, auquel on a retiré un coin rectangulaire de 8 m sur 5 m (forme en L). Quelle est l'aire de ce terrain, en m² ? Exprime aussi ce résultat en ares (1 are = 100 m²).",
        reponse: "560 m², soit 5,6 ares.",
        explication:
          "Aire du grand rectangle : 30 × 20 = 600 m². Aire retirée : 8 × 5 = 40 m². Aire du terrain en L : 600 − 40 = 560 m². Comme 1 are = 100 m², cela représente 560 ÷ 100 = 5,6 ares.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 35,
    titre: "Relevés, sondages et statistiques",
    theme: "Lecture de graphiques et de tableaux",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Voici les températures relevées à midi chaque jour d'une semaine : lundi 6 °C, mardi 8 °C, mercredi 5 °C, jeudi 9 °C, vendredi 7 °C. Quelle est la température la plus basse relevée cette semaine ?",
        choix: ["5 °C", "6 °C", "7 °C", "8 °C"],
        bonneReponse: 0,
        explication:
          "En comparant toutes les valeurs (6, 8, 5, 9, 7), la plus basse est 5 °C, relevée le mercredi.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "Un magasin a vendu, du lundi au vendredi, respectivement 12, 18, 15, 9 et 21 paires de chaussures (un diagramme en barres représente ces valeurs). Quel est le nombre total de paires vendues sur la semaine, et quelle est la moyenne journalière des ventes ?",
        reponse: "75 paires vendues au total ; moyenne de 15 paires par jour.",
        explication:
          "Total = 12 + 18 + 15 + 9 + 21 = 75. Moyenne = 75 ÷ 5 = 15 paires par jour.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Un sondage a été réalisé auprès de 200 élèves sur leur moyen de transport pour venir au collège. Le tableau indique : à pied 80 élèves, en bus 70 élèves, en voiture 40 élèves, à vélo 10 élèves. Quelle fraction, simplifiée, des élèves vient en bus ?",
        choix: ["7/10", "7/20", "2/5", "1/4"],
        bonneReponse: 1,
        explication:
          "70 élèves sur 200 viennent en bus : 70/200 = 7/20 après simplification (en divisant par 10).",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Un tableau indique le nombre de visiteurs d'un musée chaque mois du trimestre : janvier 1 200 visiteurs, février 1 500 visiteurs, mars 1 800 visiteurs. Quel est le pourcentage d'augmentation du nombre de visiteurs entre janvier et mars ?",
        reponse: "50 %",
        explication:
          "Augmentation = 1 800 − 1 200 = 600 visiteurs. Pourcentage d'augmentation par rapport à janvier : 600 ÷ 1 200 × 100 = 50 %.",
      },
    ],
  },
  {
    niveau: "5eme",
    semaine: 36,
    titre: "Grand mélange de fin d'année",
    theme: "Toutes les notions de l'année combinées",
    questions: [
      {
        type: "qcm",
        difficulte: "facile",
        question:
          "Un club organise une kermesse de fin d'année. Il vend 40 billets de tombola, et les 3/4 de ces billets concernent la grande tombola. Combien de billets de la grande tombola ont été vendus ?",
        choix: ["10", "20", "30", "35"],
        bonneReponse: 2,
        explication:
          "Les 3/4 de 40 billets valent (40 ÷ 4) × 3 = 10 × 3 = 30 billets.",
      },
      {
        type: "ouverte",
        difficulte: "moyen",
        question:
          "En décembre, la température moyenne était de −4 °C. En juin, elle est trois fois plus élevée en valeur absolue, et positive. Quelle est la température moyenne en juin ?",
        reponse: "12 °C",
        explication:
          "La valeur absolue de −4 est 4. Trois fois cette valeur donne 4 × 3 = 12. Comme la température de juin est positive, elle vaut 12 °C.",
      },
      {
        type: "qcm",
        difficulte: "moyen",
        question:
          "Une piscine rectangulaire de 10 m de long sur 5 m de large et 1,5 m de profondeur est remplie d'eau aux 2/3 de sa hauteur. Quel volume d'eau, en m³, contient-elle ?",
        choix: ["45 m³", "50 m³", "55 m³", "60 m³"],
        bonneReponse: 1,
        explication:
          "Volume total : 10 × 5 × 1,5 = 75 m³. Rempli aux 2/3, le volume d'eau est 75 × 2/3 = 50 m³.",
      },
      {
        type: "ouverte",
        difficulte: "avance",
        question:
          "Pour la fête de fin d'année, l'association des parents d'élèves a un budget de départ de −150 € (déficit de l'an dernier). Elle organise une vente de gâteaux qui rapporte 320 €, puis reverse 20 % de cette recette à une association caritative. Quel est le solde final du budget de l'association après cette opération ?",
        reponse: "106 €",
        explication:
          "Somme reversée : 320 × 20 ÷ 100 = 64 €. Recette nette conservée : 320 − 64 = 256 €. Nouveau solde : −150 + 256 = 106 €.",
      },
    ],
  },
];

export function problemesDe(niveau: Niveau): SerieProblemes[] {
  return PROBLEMES_MATHS.filter((p) => p.niveau === niveau);
}
