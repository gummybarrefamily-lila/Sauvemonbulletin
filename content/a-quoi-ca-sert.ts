// « À quoi ça sert ? » — pour chaque chapitre, une explication concrète (et parfois
// souriante) de l’intérêt du chapitre dans la vraie vie. Clé : "matiere--niveau--slug".

const A_QUOI_CA_SERT: Record<string, string> = {
// « À quoi ça sert ? » — explications courtes et concrètes, esprit
// vulgarisation (« pourquoi ce chapitre compte vraiment »), pour donner du
// sens à chaque chapitre de maths, physique-chimie, SVT et histoire-géo.
// Clé : `matiere--niveau--slug` (slugs alignés sur curriculum.ts).


  // ─── MATHS — 6ème ───
  "maths--6eme--nombres-entiers-decimaux":
    "Les nombres décimaux, c’est ce qui te permet de lire un prix au centime près, un chrono sportif ou la taille exacte d’un écran de smartphone. Sans eux, impossible de comparer sérieusement deux prix ou deux temps au 100 mètres — tout resterait flou à l’euro ou à la seconde près.",
  "maths--6eme--fractions-initiation":
    "Les fractions, c’est le langage qu’on utilise dès qu’on partage quelque chose : une pizza entre potes, un temps de jeu entre frères et sœurs, ou même une mesure en musique. Comprendre les fractions, c’est enfin savoir pourquoi un demi et deux quarts, ça revient exactement au même.",
  "maths--6eme--operations-nombres":
    "Additionner, soustraire, multiplier, diviser, c’est ce que tu fais sans t’en rendre compte à chaque fois que tu calcules s’il te reste assez d’argent de poche pour deux choses à la fois. Ces quatre opérations sont la base de tous les calculs plus compliqués que tu verras ensuite, en maths comme en physique.",
  "maths--6eme--proportionnalite":
    "La proportionnalité, c’est ce qui permet d’adapter une recette pour deux fois plus d’invités, de lire une carte à l’échelle en vacances, ou de comprendre pourquoi doubler les ingrédients ne veut pas dire doubler le temps de cuisson. C’est un raisonnement que tu retrouveras partout, de la cuisine aux sciences.",
  "maths--6eme--points-droites-segments":
    "Savoir placer des points, tracer des droites et repérer un milieu, c’est la base de tout plan ou de toute carte, y compris celles des jeux vidéo en monde ouvert, construites sur des repères précis. C’est aussi ce qu’utilisent les architectes et les designers avant même de dessiner le moindre détail.",
  "maths--6eme--angles":
    "Les angles, c’est ce que les skateurs citent sans le savoir à chaque « 180 » ou « 360 » qu’ils annoncent, et ce que les basketteurs ajustent instinctivement pour réussir un tir. Apprendre à les mesurer, c’est mettre des mots précis sur des gestes que le sport utilise en permanence.",
  "maths--6eme--perimetres-aires":
    "Calculer une aire, c’est savoir si un meuble ou un tapis va vraiment rentrer dans une pièce avant de l’acheter. Le périmètre, lui, sert par exemple à calculer la longueur de clôture nécessaire pour un jardin ou un terrain de sport.",
  "maths--6eme--symetrie-axiale":
    "La symétrie axiale explique pourquoi un visage, un papillon ou un logo de marque paraissent naturellement équilibrés à regarder. C’est un principe que les designers, les architectes et même les créateurs de personnages de jeux vidéo utilisent en permanence, souvent sans même y penser.",

  // ─── MATHS — 5ème ───
  "maths--5eme--fractions":
    "Maîtriser les fractions, c’est indispensable pour adapter une recette à un nombre différent de convives, comprendre une mesure en musique, ou plus tard aborder les probabilités. C’est une des bases mathématiques les plus utilisées au quotidien, bien après le collège.",
  "maths--5eme--enchainements-operations":
    "Connaître l’ordre des opérations, c’est ce qui permet à une calculatrice, ou à un ordinateur, de donner toujours le même résultat pour le même calcul. Sans ces règles de priorité, un même calcul pourrait être interprété différemment d’une machine à l’autre, et rien ne fonctionnerait de façon fiable.",
  "maths--5eme--nombres-relatifs":
    "Les nombres relatifs servent dès qu’on doit comparer des valeurs au-dessus et en dessous d’un repère : la température (-5 °C dehors), l’altitude par rapport au niveau de la mer, ou le solde d’un compte bancaire qui peut passer dans le négatif. C’est un outil qu’on utilise en vrai tous les jours sans même y penser.",
  "maths--5eme--calcul-litteral-initiation":
    "Remplacer une lettre par un nombre dans une formule, c’est exactement le principe derrière une formule de tableur ou une appli qui calcule automatiquement des statistiques sportives. C’est la toute première marche vers la programmation, où tout repose sur des variables qui changent de valeur.",
  "maths--5eme--symetrie-centrale":
    "La symétrie centrale, c’est le principe géométrique derrière une rotation à 180° : celle d’un logo, d’une pièce de puzzle ou d’un élément qui pivote dans un jeu vidéo. Comprendre comment un point se transforme autour d’un centre, c’est déjà comprendre un des outils de base du graphisme numérique.",
  "maths--5eme--triangles":
    "Les triangles sont la forme la plus solide qui existe, c’est pour ça qu’on les retrouve dans les charpentes de toit, les pylônes électriques et les grues de chantier. C’est aussi la forme de base de tous les décors 3D des jeux vidéo : chaque personnage est en réalité construit à partir de milliers de petits triangles assemblés.",
  "maths--5eme--parallelogrammes":
    "Reconnaître un parallélogramme et ses propriétés, c’est ce qui permet de vérifier qu’un cadre ou une étagère est bien droit sans tout mesurer. On les retrouve aussi partout en architecture et dans les motifs de carrelage ou de pavage.",
  "maths--5eme--proportionnalite":
    "La proportionnalité, c’est ton meilleur outil pour repérer en quelques secondes qu’une promo « -30 % » n’est pas toujours l’affaire qu’elle prétend être, ou pour convertir une monnaie étrangère en voyage. Ton portefeuille te dira merci à chaque fois que tu l’utilises correctement.",
  "maths--5eme--statistiques":
    "Calculer une moyenne, un maximum ou un effectif, c’est ce qui permet de comprendre un bulletin scolaire, mais aussi de lire n’importe quelle statistique sportive ou n’importe quel classement dans un jeu en ligne. C’est aussi la base pour ne pas se faire avoir par un sondage présenté n’importe comment sur les réseaux sociaux.",
  "maths--5eme--aires-perimetres":
    "Calculer une aire et un périmètre, c’est utile pour savoir combien de peinture acheter pour un mur, ou combien de gazon commander pour un jardin, sans se tromper d’un facteur deux. C’est un calcul que font vraiment les artisans, les paysagistes et les architectes avant chaque devis.",

  // ─── MATHS — 4ème ───
  "maths--4eme--relatifs-multiplication-division":
    "Multiplier et diviser des nombres relatifs, c’est ce qu’il faut maîtriser pour suivre correctement un compte en banque qui encaisse à la fois des dépenses et des remboursements. Une seule erreur de signe et le calcul dit exactement l’inverse de la réalité.",
  "maths--4eme--fractions-operations":
    "Additionner et multiplier des fractions entre elles, c’est indispensable pour ajuster une recette de cuisine, mais aussi pour calculer des probabilités, qui arrivent juste après dans le programme. C’est un outil qui revient sans arrêt dès qu’on manipule des proportions précises.",
  "maths--4eme--puissances":
    "Les puissances de 2, c’est le langage caché derrière les octets, mégaoctets et gigaoctets de stockage d’un téléphone. C’est aussi ce qui explique pourquoi une information peut devenir virale aussi vite sur les réseaux sociaux : chaque personne qui partage à son tour multiplie la portée, elle ne l’additionne pas.",
  "maths--4eme--calcul-litteral-developpement":
    "Développer et réduire une expression, c’est transformer un calcul compliqué en une version plus simple à manipuler — une compétence qu’on retrouve constamment en physique, en économie et en informatique. C’est aussi une base qui te suivra jusqu’au lycée, autant bien la maîtriser maintenant.",
  "maths--4eme--equations":
    "Résoudre une équation, c’est retrouver une valeur inconnue à partir d’informations données — exactement le principe d’une enquête ou d’un escape game où chaque indice permet d’éliminer des possibilités. C’est une méthode de raisonnement qui sert bien au-delà des maths, dès qu’il faut déduire une inconnue à partir de ce qu’on sait déjà.",
  "maths--4eme--theoreme-pythagore":
    "Le théorème de Pythagore sert à calculer une longueur qu’on ne peut pas mesurer directement, comme vérifier qu’un mur est parfaitement droit — et même connaître la taille réelle d’un écran de télé, puisque sa diagonale annoncée en pouces se calcule justement avec Pythagore. C’est un des théorèmes les plus utilisés dans le bâtiment et l’industrie encore aujourd’hui.",
  "maths--4eme--translations-rotations":
    "Comprendre les translations et rotations, c’est comprendre comment un personnage se déplace et pivote dans n’importe quel jeu vidéo, ou comment une animation tourne en boucle à l’écran. Ce sont des transformations que les développeurs et les animateurs 3D utilisent en permanence pour donner l’illusion du mouvement.",
  "maths--4eme--proportionnalite-pourcentages":
    "Savoir calculer un pourcentage, c’est repérer en quelques secondes qu’une promo « -30 % » n’en est pas vraiment une, ou comprendre le taux d’intérêt d’un prêt. C’est un des calculs les plus utiles de toute la scolarité, utilisé aussi bien en économie qu’en sciences ou dans les statistiques des journaux.",
  "maths--4eme--probabilites":
    "Les probabilités expliquent pourquoi tu n’obtiens pas l’objet rare dans un jeu vidéo malgré des dizaines de tentatives, ou pourquoi la météo annonce « 70 % de chances de pluie » plutôt qu’une certitude. C’est aussi la base du métier d’actuaire, ces personnes qui calculent les risques pour les assurances.",
  "maths--4eme--pyramides-cones":
    "Calculer le volume d’un cône ou d’une pyramide, c’est ce qui permet de savoir combien de liquide contient réellement un cornet de glace, ou de comprendre comment les pyramides d’Égypte ont été dimensionnées il y a plus de 4000 ans. C’est un calcul très concret pour les architectes et les designers d’emballages.",

  // ─── MATHS — 3ème ───
  "maths--3eme--arithmetique":
    "Les nombres premiers ont l’air abstraits, mais ce sont eux qui protègent tes données en ligne : le chiffrement qui sécurise tes mots de passe et tes paiements par carte repose sur des nombres premiers immenses, très longs à décomposer même pour un ordinateur puissant. C’est un des piliers discrets de toute la cybersécurité.",
  "maths--3eme--calcul-litteral-factorisation":
    "Factoriser une expression, c’est repérer un point commun caché pour simplifier un calcul — une compétence de base pour aborder l’algèbre du lycée sans paniquer. Les ingénieurs et les programmeurs l’utilisent constamment pour optimiser des calculs complexes.",
  "maths--3eme--equations-inequations":
    "Résoudre une inéquation, c’est savoir exactement à partir de quelle quantité une situation devient rentable ou possible, par exemple à partir de combien d’heures de travail on peut se permettre un achat. C’est un raisonnement qu’on utilise énormément en gestion, en ingénierie et dans les choix économiques du quotidien.",
  "maths--3eme--fonctions":
    "Une fonction, c’est une machine qui transforme une entrée en sortie — exactement le principe d’une fonction dans un programme informatique, ou d’une appli qui calcule un itinéraire selon l’heure de départ. C’est un concept central en maths, mais aussi la base de toute la programmation.",
  "maths--3eme--fonctions-lineaires-affines":
    "Les fonctions affines modélisent des situations très concrètes, comme le prix d’une course de VTC qui augmente avec les kilomètres, ou un forfait téléphonique avec un prix fixe plus un coût à l’usage. Comprendre leur formule, c’est pouvoir prévoir une facture avant même de commander.",
  "maths--3eme--theoreme-thales":
    "Le théorème de Thalès permet de calculer une distance qu’on ne peut pas mesurer directement, comme la hauteur d’un bâtiment ou la largeur d’une rivière, juste à partir d’ombres ou de repères au sol. C’est une méthode utilisée depuis l’Antiquité par les arpenteurs et encore aujourd’hui en topographie.",
  "maths--3eme--trigonometrie":
    "La trigonométrie permet de calculer une hauteur ou une distance à partir d’un simple angle, un principe qu’on retrouve dans le GPS d’un téléphone, dans les jeux vidéo en 3D et dans la navigation maritime ou aérienne. C’est une des branches des maths les plus utilisées dans les métiers techniques et scientifiques.",
  "maths--3eme--homothetie":
    "L’homothétie, c’est le principe mathématique derrière tout agrandissement ou toute réduction qui garde les proportions : une photo zoomée, une maquette réduite, un plan à l’échelle. C’est un outil essentiel en architecture, en cartographie et en modélisation 3D.",
  "maths--3eme--statistiques-probabilites":
    "Statistiques et probabilités, c’est ce qu’il te faut pour ne pas te faire avoir par un sondage présenté sans contexte sur les réseaux sociaux, ou par une statistique sortie de nulle part dans un débat. Savoir lire des chiffres avec un esprit critique est une compétence de plus en plus recherchée, y compris dans des métiers comme la data science.",
  "maths--3eme--volumes-sections":
    "Calculer le volume d’un solide, c’est ce qui permet de dimensionner un emballage, un réservoir ou une pièce de construction avant de la fabriquer. Comprendre les sections d’un solide, c’est aussi la logique derrière les images d’IRM ou de scanner en médecine, qui montrent le corps « tranche par tranche ».",

  // ─── PHYSIQUE-CHIMIE — 6ème ───
  "physique-chimie--6eme--etats-matiere":
    "Comprendre pourquoi la glace fond, l’eau bout et la vapeur s’évapore, c’est déjà de la physique-chimie appliquée à la cuisine ou à une bouteille oubliée au congélateur qui peut littéralement exploser en gelant. C’est aussi ce qui explique la formation de la pluie, de la neige ou du brouillard.",
  "physique-chimie--6eme--melanges-solutions":
    "Savoir si un mélange est homogène ou pas, c’est comprendre pourquoi il faut secouer certaines boissons avant de les boire, ou pourquoi l’huile et le vinaigre d’une vinaigrette se séparent toujours. C’est une notion de base utilisée dans l’industrie alimentaire et pharmaceutique pour fabriquer des produits stables.",
  "physique-chimie--6eme--eau-environnement":
    "Comprendre le trajet de l’eau, de la source jusqu’au robinet, c’est réaliser que c’est une ressource limitée qu’il faut gérer, pas un stock infini. C’est un sujet directement lié aux débats actuels sur les restrictions d’eau en période de sécheresse.",
  "physique-chimie--6eme--lumiere-ombres":
    "Comprendre comment se forme une ombre, c’est comprendre pourquoi elle s’allonge le soir et se raccourcit à midi, un phénomène qu’on utilisait déjà pour lire l’heure sur un cadran solaire avant l’invention de la montre. C’est aussi le principe physique derrière les théâtres d’ombres et certains effets spéciaux au cinéma.",
  "physique-chimie--6eme--circuits-simples":
    "Monter un circuit électrique simple, c’est comprendre pourquoi un seul fil mal branché suffit à empêcher tout un appareil de fonctionner. C’est la toute première étape avant de comprendre l’électronique, un domaine essentiel dans énormément de métiers techniques aujourd’hui.",
  "physique-chimie--6eme--mouvement-vitesse-6e":
    "Décrire un mouvement, c’est comprendre pourquoi le paysage semble défiler en sens inverse dans un train, alors que rien ne bouge vraiment à l’intérieur. Ça introduit une idée essentielle en physique : le mouvement dépend toujours du point de vue depuis lequel on l’observe.",

  // ─── PHYSIQUE-CHIMIE — 5ème ───
  "physique-chimie--5eme--etats-de-leau":
    "Comprendre comment l’eau change d’état selon la température, c’est comprendre le cycle complet de l’eau : évaporation, nuages, pluie, puis retour à la mer. C’est une des bases de la météorologie et un sujet central dans les questions de climat qu’on entend partout aujourd’hui.",
  "physique-chimie--5eme--melanges-corps-purs":
    "Distinguer un corps pur d’un mélange, c’est comprendre pourquoi l’eau du robinet n’a jamais exactement le même goût que l’eau en bouteille, selon les minéraux qu’elle contient. C’est une notion de base pour décrypter la composition réelle des produits du quotidien, au-delà de ce qu’annonce l’étiquette.",
  "physique-chimie--5eme--circuits-electriques":
    "Comprendre les circuits en série et en dérivation, c’est comprendre pourquoi une seule ampoule grillée éteint parfois toute une guirlande, alors que sur une autre ça ne change rien. C’est une notion indispensable en électricité domestique, y compris pour comprendre pourquoi il ne faut pas surcharger une prise multiple.",
  "physique-chimie--5eme--sources-lumiere":
    "Comprendre la propagation de la lumière, c’est comprendre pourquoi la Lune ne brille pas par elle-même : elle réfléchit simplement la lumière du Soleil. C’est aussi ce qui explique pourquoi on ne voit jamais au coin d’un mur sans miroir, la lumière se propageant toujours en ligne droite.",
  "physique-chimie--5eme--mouvement-vitesse":
    "Calculer une vitesse, c’est ce qui permet de comparer objectivement un temps au 100 mètres, un chrono en karting ou une pointe de vitesse en VTT, plutôt que de se fier à l’impression de vitesse ressentie. C’est aussi ce qui sert à évaluer une distance de sécurité en voiture, un calcul central pour la sécurité routière.",
  "physique-chimie--5eme--systeme-solaire":
    "Situer la Terre dans le système solaire, c’est comprendre pourquoi il fait jour ici quand il fait nuit à l’autre bout du monde, à cause des fuseaux horaires. C’est aussi la base de connaissance nécessaire pour suivre l’actualité spatiale, des missions vers Mars aux images des grands télescopes.",

  // ─── PHYSIQUE-CHIMIE — 4ème ───
  "physique-chimie--4eme--transformations-chimiques":
    "Comprendre une transformation chimique, c’est comprendre ce qui se passe vraiment quand un gâteau lève au four, quand un fruit coupé brunit à l’air libre, ou quand du métal rouille avec le temps. C’est de la chimie qui se produit sous tes yeux au quotidien, bien avant d’ouvrir un manuel de sciences.",
  "physique-chimie--4eme--atomes-molecules":
    "Savoir que toute matière est faite d’atomes assemblés en molécules, c’est comprendre le langage de base utilisé en médecine, en science des matériaux et en nanotechnologie. C’est une idée qui a mis des siècles à s’imposer et qui explique aujourd’hui absolument tout ce qui t’entoure, de l’air que tu respires à l’écran que tu regardes.",
  "physique-chimie--4eme--intensite-tension":
    "Comprendre l’intensité et la tension électriques, c’est comprendre pourquoi certains chargeurs bas de gamme abîment une batterie de téléphone à force de mal la recharger. C’est aussi une notion essentielle de sécurité : elle explique pourquoi l’eau et l’électricité ne font jamais bon ménage.",
  "physique-chimie--4eme--vitesse-lumiere-son":
    "Voir l’éclair avant d’entendre le tonnerre est une conséquence directe de la différence de vitesse entre la lumière et le son, et ça permet même de calculer à quelle distance tombe un orage en comptant les secondes. C’est aussi ce qui explique le léger décalage qu’on perçoit parfois en visio quand la connexion est un peu lente.",
  "physique-chimie--4eme--pression":
    "Comprendre la pression, c’est comprendre pourquoi une paille permet de boire, pourquoi les oreilles se bouchent en avion ou en plongée, et pourquoi une cocotte-minute cuit plus vite qu’une casserole classique. C’est une notion physique derrière énormément d’objets et de sensations du quotidien.",
  "physique-chimie--4eme--combustions":
    "Comprendre une combustion, c’est comprendre exactement ce qu’il se passe quand on allume un feu, un moteur ou une bougie, et pourquoi ça a besoin d’air pour continuer à brûler. C’est aussi une notion de sécurité essentielle : savoir qu’on étouffe un feu de friteuse avec un couvercle, jamais avec de l’eau, peut littéralement éviter une catastrophe.",

  // ─── PHYSIQUE-CHIMIE — 3ème ───
  "physique-chimie--3eme--ions-ph":
    "Comprendre le pH, c’est comprendre pourquoi un shampoing ou un savon mal dosé peut irriter la peau ou les yeux, et pourquoi une piscine doit être surveillée en permanence pour rester saine. C’est une notion centrale en cosmétique, en agriculture et dans la surveillance de l’environnement, comme les pluies acides.",
  "physique-chimie--3eme--gravitation-poids":
    "Comprendre la différence entre masse et poids, c’est comprendre pourquoi un astronaute flotte sur la Lune sans avoir perdu le moindre gramme : c’est la gravité qui change, pas la quantité de matière. C’est aussi la gravitation qui maintient en orbite les satellites GPS de ton téléphone, calculée au poil près pour qu’ils ne tombent jamais ni ne s’échappent dans l’espace.",
  "physique-chimie--3eme--energie-cinetique":
    "L’énergie cinétique, c’est ce qui explique la sensation de vitesse dans un grand huit ou en karting : elle augmente avec le carré de la vitesse, donc rouler deux fois plus vite ne demande pas deux fois plus de distance pour s’arrêter, mais quatre fois plus. C’est un des principes de base de la sécurité routière, à connaître avant même de passer un jour le permis.",
  "physique-chimie--3eme--resistance-loi-ohm":
    "Comprendre la loi d’Ohm, c’est comprendre pourquoi certains appareils électriques chauffent en cas de surcharge, et pourquoi tous les câbles ne se valent pas dans une installation. C’est une base indispensable pour qui veut un jour bricoler de l’électronique ou se diriger vers un métier technique.",
  "physique-chimie--3eme--puissance-energie-electrique":
    "Comprendre la puissance électrique en watts, c’est comprendre pourquoi certains appareils du quotidien, comme un sèche-cheveux ou un four, pèsent bien plus lourd sur une facture d’électricité que d’autres. C’est un sujet directement lié aux enjeux actuels de transition énergétique et d’économies d’énergie.",
  "physique-chimie--3eme--signaux-information":
    "Comprendre comment un signal transporte de l’information, c’est comprendre ce qui se cache derrière le wifi, la 4G, le Bluetooth ou même les signaux utilisés en imagerie médicale. C’est une notion au cœur de très nombreux métiers d’avenir, des télécommunications à la santé connectée.",

  // ─── SVT — 6ème ───
  "svt--6eme--caracteristiques-vivant":
    "Savoir ce qui distingue un être vivant d’un objet, c’est la première question que se posent tous les scientifiques du vivant, des vétérinaires aux biologistes marins. Ça paraît une évidence, mais c’est le point de départ de toute la biologie que tu étudieras ensuite.",
  "svt--6eme--classification-vivant":
    "Classer les êtres vivants, c’est comprendre pourquoi un dauphin est en réalité plus proche de toi que d’un requin, alors que les deux nagent dans l’eau : ce qui compte, c’est la parenté, pas juste l’apparence. C’est exactement la logique utilisée par les zoologistes pour organiser tout le vivant sur Terre.",
  "svt--6eme--peuplement-milieux":
    "Comprendre comment les espèces changent selon les saisons, c’est comprendre pourquoi certains animaux migrent, hibernent ou disparaissent temporairement, un phénomène que montrent très bien les documentaires animaliers. C’est une base essentielle de l’écologie, la science qui étudie les milieux naturels.",
  "svt--6eme--besoins-vegetaux":
    "Comprendre de quoi une plante a vraiment besoin pour vivre, c’est comprendre pourquoi certaines plantes d’intérieur jaunissent malgré un arrosage régulier — souvent un problème de lumière, pas d’eau. C’est aussi la base de toute l’agriculture, qui doit gérer ces besoins à très grande échelle.",
  "svt--6eme--alimentation-digestion":
    "Comprendre le trajet de la nourriture dans le corps, c’est comprendre pourquoi on a encore faim après un repas trop léger, ou pourquoi manger trop vite peut donner mal au ventre. C’est une connaissance utile pour mieux comprendre son propre corps, notamment quand on fait du sport régulièrement.",
  "svt--6eme--protection-environnement":
    "Comprendre l’impact de nos gestes sur l’environnement, c’est comprendre que trier ses déchets ou économiser l’eau, ce n’est pas juste un discours répété par les adultes, mais un vrai levier d’action à l’échelle collective. C’est un sujet qui revient sans arrêt dans les débats actuels sur le climat.",

  // ─── SVT — 5ème ───
  "svt--5eme--nutrition-organismes":
    "Comprendre comment les organismes se nourrissent, c’est comprendre pourquoi les plantes n’ont besoin que de lumière, d’eau et de minéraux, alors que les animaux doivent chercher activement leur nourriture. C’est une différence fondamentale entre les deux grands groupes du vivant.",
  "svt--5eme--respiration-milieux":
    "Comprendre comment on respire selon le milieu où l’on vit, c’est comprendre pourquoi un poisson meurt hors de l’eau, ou pourquoi on s’essouffle plus vite en montagne, faute d’oxygène suffisant. C’est une notion essentielle pour comprendre l’entraînement des sportifs de haut niveau, qui s’entraînent parfois exprès en altitude.",
  "svt--5eme--geologie-externe":
    "Comprendre l’érosion, c’est comprendre pourquoi les falaises, les montagnes et même certaines plages changent de forme au fil du temps, parfois de façon visible d’une année sur l’autre. C’est un sujet directement lié aux risques naturels et à l’aménagement du territoire, étudié aussi en géographie.",
  "svt--5eme--reproduction-vegetale":
    "Comprendre comment les plantes se reproduisent, c’est comprendre le rôle essentiel des abeilles et des insectes pollinisateurs, et pourquoi leur disparition inquiète autant les scientifiques. C’est aussi ce qui explique les allergies au pollen qui touchent tant de monde au printemps.",
  "svt--5eme--besoins-organes":
    "Comprendre les besoins de tes organes, c’est comprendre pourquoi ton cœur bat plus vite pendant un effort physique : il envoie plus de sang, donc plus d’oxygène, là où le corps en a besoin en urgence. C’est une notion de base en physiologie, utile pour comprendre comment s’entraîner intelligemment.",

  // ─── SVT — 4ème ───
  "svt--4eme--seismes-volcans":
    "Comprendre les séismes et les volcans, c’est comprendre pourquoi certaines régions du monde, comme le Japon ou l’Indonésie, sont régulièrement touchées par des catastrophes naturelles alors que d’autres n’y sont presque jamais exposées. C’est une connaissance essentielle pour comprendre l’actualité internationale et les enjeux de prévention des risques.",
  "svt--4eme--reproduction-humaine":
    "Comprendre la reproduction humaine, c’est avoir des réponses scientifiques fiables sur un sujet souvent entouré de rumeurs ou d’informations approximatives trouvées en ligne. C’est une des bases de l’éducation à la santé, utile pour toute la vie.",
  "svt--4eme--meteo-climat":
    "Comprendre la différence entre météo et climat, c’est comprendre pourquoi un hiver froid ne contredit pas le réchauffement climatique : la météo, c’est un jour précis, le climat, c’est une tendance sur des décennies. C’est une distinction essentielle pour suivre intelligemment les débats sur l’environnement plutôt que de répéter des idées reçues.",
  "svt--4eme--systeme-nerveux":
    "Comprendre le système nerveux, c’est comprendre comment le cerveau réagit en une fraction de seconde pour éviter un obstacle ou rattraper une chute. C’est aussi une base pour comprendre les effets des écrans, du sommeil ou de certaines substances sur le cerveau, des sujets de plus en plus étudiés.",
  "svt--4eme--biodiversite-evolution":
    "Comprendre la biodiversité et l’évolution, c’est comprendre pourquoi certaines espèces s’éteignent pendant que d’autres s’adaptent et survivent, un sujet central dès qu’on parle de crise environnementale. C’est aussi la base scientifique de tout ce que racontent les musées d’histoire naturelle et les documentaires animaliers.",

  // ─── SVT — 3ème ───
  "svt--3eme--genetique":
    "Comprendre la génétique, c’est comprendre pourquoi certains traits se transmettent dans une famille, des yeux à certaines maladies héréditaires, et comment fonctionnent les tests ADN utilisés en médecine ou dans les enquêtes policières. C’est un des domaines scientifiques qui progresse le plus vite aujourd’hui, avec des impacts directs sur la santé.",
  "svt--3eme--evolution-especes":
    "Comprendre l’évolution des espèces, c’est comprendre comment le vivant s’est transformé sur des millions d’années pour donner l’incroyable diversité qu’on observe aujourd’hui, de la bactérie à l’être humain. C’est une des théories scientifiques les mieux confirmées, essentielle pour comprendre d’où viennent réellement les espèces qui peuplent la Terre.",
  "svt--3eme--systeme-immunitaire":
    "Comprendre le système immunitaire, c’est comprendre comment le corps se défend contre les microbes, et comment fonctionne un vaccin, qui entraîne justement ce système à réagir plus vite. C’est une connaissance devenue essentielle pour comprendre les débats de santé publique, notamment depuis la pandémie de Covid-19.",
  "svt--3eme--responsabilite-sante":
    "Comprendre les comportements responsables pour sa santé, c’est comprendre pourquoi le sommeil, l’alimentation et l’activité physique ont un impact direct et mesurable sur le corps et le cerveau, pas juste une recommandation répétée par les adultes. Les habitudes prises maintenant pèsent sur toute une vie de santé future.",
  "svt--3eme--risques-geologiques":
    "Comprendre les risques géologiques, c’est comprendre pourquoi certaines constructions résistent mieux que d’autres à un séisme, et pourquoi certaines zones sont interdites à la construction dans les régions à risque. C’est une connaissance essentielle pour les métiers de l’ingénierie et de l’urbanisme.",

  // ─── HISTOIRE-GÉO — 6ème ───
  "histoire-geo--6eme--prehistoire":
    "Comprendre la Préhistoire, c’est comprendre comment des humains sans écriture ni métal ont pourtant survécu, chassé et peint des œuvres, comme à Lascaux, qui tiennent encore debout des dizaines de milliers d’années plus tard. C’est le tout premier chapitre de l’histoire humaine, celui qui explique d’où l’on vient vraiment.",
  "histoire-geo--6eme--neolithique":
    "Comprendre le Néolithique, c’est comprendre le moment charnière où l’humanité a arrêté de se déplacer sans cesse pour chasser et cueillir, et s’est mise à cultiver la terre et élever des animaux au même endroit. C’est la base de tout ce qui a suivi : les villages, l’agriculture, et donc toute la civilisation actuelle.",
  "histoire-geo--6eme--premiers-etats-ecriture":
    "Comprendre l’apparition de l’écriture, c’est comprendre le moment où l’humanité a pu conserver une mémoire au-delà de la parole : des lois, des comptes, des récits. Sans cette invention, aucune administration, aucun contrat et aucun livre n’existeraient sous la forme qu’on connaît aujourd’hui.",
  "histoire-geo--6eme--cites-grecques":
    "Découvrir les cités grecques, c’est découvrir l’origine des Jeux olympiques, du mot « démocratie », et de toute une mythologie qu’on retrouve encore aujourd’hui dans des jeux vidéo et des films, avec leurs dieux et héros grecs revisités dans des sagas populaires. La Grèce antique a posé les bases de la philosophie, du théâtre et de la politique occidentale.",
  "histoire-geo--6eme--rome-republique-empire":
    "Découvrir Rome, c’est comprendre pourquoi notre langue vient en grande partie du latin, pourquoi certaines routes actuelles suivent encore le tracé des voies romaines, et pourquoi notre système de droit et l’idée même de citoyenneté viennent en partie de là. Comprendre Rome, c’est en bonne partie comprendre pourquoi la France est ce qu’elle est aujourd’hui.",
  "histoire-geo--6eme--monotheismes-antiquite":
    "Comprendre les débuts du judaïsme et du christianisme, c’est comprendre les racines de fêtes, de traditions et de références culturelles qu’on croise encore partout, même sans être croyant. C’est une connaissance essentielle pour comprendre l’histoire de l’Europe et une bonne partie de l’actualité mondiale.",
  "histoire-geo--6eme--habiter-metropole":
    "Étudier ce que c’est qu’habiter une métropole, c’est comprendre pourquoi les grandes villes concentrent embouteillages, tours et réseaux de transport en commun aussi denses. C’est une façon de mieux comprendre la ville où tu vis, ou celle où vit ton correspondant à l’autre bout du pays.",
  "histoire-geo--6eme--habiter-littoral":
    "Étudier les littoraux, c’est comprendre pourquoi ce sont parmi les zones les plus peuplées et les plus recherchées de la planète, mais aussi parmi les plus menacées par la montée des eaux liée au changement climatique. C’est un sujet géographique qui va devenir de plus en plus important dans les décennies à venir.",

  // ─── HISTOIRE-GÉO — 5ème ───
  "histoire-geo--5eme--byzance-carolingiens":
    "Découvrir Byzance et l’Europe carolingienne, c’est comprendre ce qui s’est passé après la chute de l’Empire romain d’Occident : un empire qui a continué de briller à l’Est pendant que Charlemagne tentait de reconstruire un pouvoir unifié en Europe. C’est le chaînon manquant entre l’Antiquité romaine et le Moyen Âge qu’on imagine souvent.",
  "histoire-geo--5eme--islam-medieval":
    "Découvrir la naissance de l’islam et ses empires, c’est découvrir une des plus grandes civilisations de l’Histoire, qui a fait progresser les sciences, la médecine et les mathématiques pendant que l’Europe traversait une période plus sombre. Le mot « algèbre » et les chiffres qu’on utilise en cours de maths viennent d’ailleurs directement de ce monde arabo-musulman.",
  "histoire-geo--5eme--feodalite":
    "Comprendre la féodalité, c’est comprendre le système de fidélité et de protection qui organisait toute la société médiévale, entre seigneurs, vassaux et paysans. C’est exactement le type de société que reproduisent beaucoup d’univers de fantasy, des séries aux jeux vidéo, avec leurs châteaux, leurs seigneurs et leurs guerres de territoire.",
  "histoire-geo--5eme--grandes-decouvertes":
    "Découvrir les grandes découvertes, c’est comprendre comment des explorateurs sur de simples bateaux en bois ont fini par relier des continents qui s’ignoraient jusque-là. Sans ces voyages risqués, pas de chocolat, pas de tomates dans les pâtes, ni de pommes de terre dans les frites — la mondialisation de l’alimentation a commencé là.",
  "histoire-geo--5eme--croissance-demographique":
    "Comprendre la croissance démographique, c’est comprendre pourquoi certaines villes explosent en population pendant que d’autres régions se vident, un vrai enjeu pour le logement et les transports dans le monde entier. C’est un sujet directement lié aux grands défis économiques et environnementaux actuels.",
  "histoire-geo--5eme--ressources-eau-energie":
    "Comprendre pourquoi l’eau et l’énergie sont des ressources à ménager, c’est comprendre que ce ne sont pas des stocks infinis, et que leur répartition inégale sur la planète est déjà source de tensions entre pays. C’est un sujet au cœur de l’actualité, entre sécheresses et transition énergétique.",

  // ─── HISTOIRE-GÉO — 4ème ───
  "histoire-geo--4eme--traites-negrieres":
    "Comprendre les traites négrières, c’est comprendre une page essentielle de l’Histoire mondiale qui explique encore aujourd’hui des inégalités et un brassage de cultures et de populations sur plusieurs continents. C’est une histoire qu’il faut bien connaître avant d’en parler, tant elle a façonné le monde actuel.",
  "histoire-geo--4eme--revolution-francaise":
    "Découvrir la Révolution française, c’est comprendre l’origine de la devise « liberté, égalité, fraternité » affichée sur ton collège, et pourquoi la France a un président élu plutôt qu’un roi héréditaire. C’est l’événement fondateur de la République et des droits qu’on considère aujourd’hui comme évidents.",
  "histoire-geo--4eme--industrialisation":
    "Comprendre la révolution industrielle, c’est comprendre l’origine de presque tous les objets fabriqués en série qu’on utilise aujourd’hui, du smartphone aux baskets. C’est aussi le point de départ historique de la pollution industrielle et des enjeux environnementaux qu’on connaît maintenant.",
  "histoire-geo--4eme--colonisation-xixe":
    "Comprendre la colonisation du XIXe siècle, c’est comprendre pourquoi certains pays parlent français ou anglais aujourd’hui à des milliers de kilomètres de la France ou du Royaume-Uni, et d’où viennent une bonne partie des tensions géopolitiques et migratoires actuelles. C’est une histoire complexe, essentielle pour comprendre le monde d’aujourd’hui plutôt que de s’arrêter à des clichés.",
  "histoire-geo--4eme--urbanisation-monde":
    "Comprendre l’urbanisation du monde, c’est comprendre pourquoi, pour la première fois dans l’Histoire, plus de la moitié de l’humanité vit désormais en ville plutôt qu’à la campagne. C’est un phénomène qui explique une bonne partie des défis actuels en matière de logement, de transport et d’environnement.",
  "histoire-geo--4eme--mondialisation-mers":
    "Comprendre le rôle des mers et des océans dans la mondialisation, c’est réaliser que ton téléphone, tes vêtements et une bonne partie de ce que tu commandes en ligne ont probablement traversé un océan à bord d’un immense porte-conteneurs. C’est ce réseau maritime invisible qui fait tourner le commerce mondial.",

  // ─── HISTOIRE-GÉO — 3ème ───
  "histoire-geo--3eme--premiere-guerre-mondiale":
    "Comprendre la Première Guerre mondiale, c’est comprendre pourquoi il y a un monument aux morts dans quasiment chaque village de France, souvent avec des dizaines de noms pour une seule petite commune. C’est le conflit qui a redessiné les frontières de l’Europe et qui explique une bonne partie de l’histoire du XXe siècle qui a suivi.",
  "histoire-geo--3eme--regimes-totalitaires":
    "Comprendre les régimes totalitaires, c’est comprendre comment la propagande et la manipulation de masse ont pu fonctionner à une échelle entière, en contrôlant l’information et en écrasant toute opposition. C’est une connaissance essentielle pour repérer les mécanismes de manipulation qui existent encore aujourd’hui, y compris sur les réseaux sociaux.",
  "histoire-geo--3eme--seconde-guerre-mondiale":
    "Comprendre la Seconde Guerre mondiale, c’est comprendre l’événement qui a redessiné le monde entier et qui explique l’existence actuelle de l’ONU et de l’Union européenne, créées pour éviter qu’un tel conflit se reproduise. C’est aussi le contexte historique de nombreux films et jeux vidéo qui racontent cette période avec une intensité particulière.",
  "histoire-geo--3eme--france-defaite-republique":
    "Comprendre la France de 1940 à nos jours, c’est comprendre comment le pays s’est reconstruit après la défaite et l’Occupation pour devenir la République actuelle, avec ses institutions et sa Constitution. C’est une base indispensable pour comprendre les débats politiques d’aujourd’hui plutôt que de les subir sans repères.",
  "histoire-geo--3eme--guerre-froide":
    "Comprendre la guerre froide, c’est comprendre pourquoi les États-Unis et la Russie restent aujourd’hui dans une relation aussi tendue, et d’où vient la course à l’espace qui a permis de marcher sur la Lune. C’est une période qui explique une bonne partie des tensions internationales actuelles.",
  "histoire-geo--3eme--amenagement-territoire":
    "Comprendre l’aménagement du territoire français, c’est comprendre pourquoi une nouvelle ligne de train, un hôpital ou un lycée s’installe à tel endroit plutôt qu’à un autre, selon des choix politiques et économiques précis. C’est une connaissance utile pour comprendre les décisions qui changent concrètement une ville ou une région.",
  "histoire-geo--3eme--union-europeenne":
    "Comprendre la France et l’Union européenne, c’est comprendre pourquoi on peut voyager sans passeport jusqu’en Espagne, payer en euros dans plusieurs pays, ou partir étudier à l’étranger grâce à des programmes comme Erasmus. C’est une connaissance essentielle pour comprendre l’actualité politique et économique européenne.",
// ── Français ──────────────────────────────────────────────
  "francais--6eme--natures-classes-mots":
    "Nom, verbe, adjectif, déterminant : repérer la nature d’un mot, c’est comprendre les briques de base de la langue — celles qu’Aya Nakamura assemble différemment pour créer ses propres néologismes, qui finissent parfois par entrer dans le langage courant. Cette base grammaticale, c’est aussi ce qui t’évite les fautes d’accord qui donnent un mauvais genre à un message ou une copie.",
  "francais--6eme--conte-merveilleux":
    "Fées, ogres, objets magiques et épreuves à surmonter : le conte merveilleux pose la structure qu’on retrouve dans énormément de jeux vidéo et de films fantastiques que tu connais déjà — un héros, une quête, une aide magique, une victoire méritée. Repérer ce schéma, c’est comprendre pourquoi certaines histoires nous embarquent à tous les coups, qu’elles datent de plusieurs siècles ou soient sorties la semaine dernière.",
  "francais--6eme--recits-creation":
    "Comment le monde a-t-il commencé ? Chaque culture a sa réponse — un déluge, un œuf cosmique, un combat entre dieux — et ces récits fondateurs nourrissent encore aujourd’hui des univers entiers de jeux vidéo et de films qui puisent dans les mythologies du monde. Les connaître, c’est comprendre d’où viennent vraiment certains personnages, pouvoirs ou noms de boss que tu croises en jouant.",
  "francais--6eme--present-indicatif":
    "Le présent, c’est le temps le plus utilisé de la langue française — celui de tes messages, de tes explications à l’oral et de la moitié de tes rédactions. Bien conjuguer ses verbes (même les pièges comme «il appelle» ou «nous mangeons»), c’est ce qui fait qu’un texte écrit est pris au sérieux plutôt que jugé bâclé, à l’école comme plus tard dans un mail ou un CV.",
  "francais--6eme--odyssee":
    "Un héros qui met dix ans à rentrer chez lui à cause d’un cyclope, d’une magicienne et d’un dieu de la mer vraiment rancunier : l’Odyssée est le tout premier grand récit épique, celui qui a posé des codes que beaucoup de jeux vidéo réutilisent encore — quête, épreuves, monstres, retour triomphal. Connaître Ulysse, les sirènes ou le cheval de Troie, c’est aussi repérer des références qui ressortent partout, d’un titre de film à un nom de vaisseau spatial.",
  "francais--6eme--fables-poesie":
    "La Fontaine racontait des histoires d’animaux pour se moquer discrètement des puissants de son époque, en vers rimés qui rendent chaque morale facile à retenir — un peu comme certaines rimes multisyllabiques d’Eminem, où plusieurs mots riment d’un coup et pas juste la dernière syllabe. Retenir «rien ne sert de courir, il faut partir à point» te donne une formule toute faite pour clouer le bec à quelqu’un qui se vante trop vite.",
  "francais--6eme--phrase-ponctuation":
    "Une virgule mal placée peut changer complètement le sens d’une phrase («allons manger, Mamie» n’a rien à voir avec «allons manger Mamie»), et c’est exactement pour ça qu’on apprend à ponctuer correctement. Ça évite aussi les malentendus dans tes messages, où l’absence de ponctuation peut faire passer une phrase normale pour un ton sec ou agressif.",

  "francais--5eme--classes-grammaticales":
    "Savoir si un mot est une préposition, une conjonction ou un pronom, c’est comprendre les pièces qui font tenir une phrase debout — la base indispensable pour réussir les exercices de grammaire du brevet, qui reviennent chaque année sous une forme ou une autre. C’est aussi ce qui te permet de justifier une correction plutôt que de la faire au hasard.",
  "francais--5eme--recit-aventure":
    "Naufrages, îles désertes, trésors cachés : le récit d’aventures pose exactement les mêmes ressorts que les films et les jeux vidéo d’action que tu dévores déjà, juste posés à l’écrit. Apprendre à repérer les étapes du schéma narratif, c’est aussi apprendre à construire tes propres histoires sans qu’elles s’essoufflent au milieu.",
  "francais--5eme--roman-chevalerie":
    "Chevaliers, quêtes, dames à sauver et codes d’honneur stricts : le roman de chevalerie est l’ancêtre direct de l’univers médiéval-fantastique qu’on retrouve dans une bonne partie des séries, films et jeux vidéo actuels. Le lire, c’est comprendre d’où viennent vraiment les chevaliers, les tournois et les quêtes qu’on te ressert sans arrêt sous une autre forme.",
  "francais--5eme--imparfait-passe-simple":
    "L’imparfait et le passé simple, c’est ce qui sépare «je mangeais une pomme» de «je mangeai une pomme» — et cette nuance, c’est justement ce qui permet de bien situer une action dans le temps d’un récit : ce qui dure, face à ce qui arrive d’un coup. Au brevet comme dans tes propres histoires, cette précision change tout et se voit immédiatement.",
  "francais--5eme--poesie-voyage":
    "Des poètes qui n’ont parfois jamais quitté leur chambre ont réussi à faire voyager leurs lecteurs au bout du monde, juste avec des mots bien choisis. Ça t’apprend à décrire un lieu avec des images fortes, une compétence qui sert aussi bien pour une rédaction que pour raconter un vrai voyage sans que ça sonne comme une liste de courses.",
  "francais--5eme--fonctions-grammaticales":
    "Sujet, complément d’objet, complément circonstanciel : connaître la fonction d’un mot dans la phrase, c’est comprendre qui fait quoi à qui, comme un arbitre qui sait toujours qui a touché le ballon en dernier. C’est surtout ce qui t’évite les fautes d’accord, genre un participe passé qui ne s’accorde pas avec le bon mot.",
  "francais--5eme--theatre-comedie":
    "Molière faisait rire son public au XVIIe siècle avec des personnages ridicules et des quiproquos absurdes — exactement les ressorts comiques qu’on retrouve encore dans les sketches et les mèmes qui tournent aujourd’hui. Étudier la comédie, c’est comprendre pourquoi certaines blagues fonctionnent à tous les coups, qu’elles soient vieilles de quatre siècles ou postées ce matin.",
  "francais--5eme--accords-sujet-verbe":
    "Un sujet au pluriel, un verbe qui reste malheureusement au singulier : c’est l’erreur d’accord la plus fréquente, celle qui saute aux yeux dès qu’on relit un texte, même un simple message. La maîtriser, c’est gagner des points quasi gratuits au brevet et être pris au sérieux à l’écrit, plus tard aussi dans un mail ou une lettre de motivation.",

  "francais--4eme--lettre-journal-intime":
    "Avant les messages vocaux et les stories, on racontait sa journée et ses sentiments dans une lettre ou un journal intime, en espérant que personne d’autre ne le lise. Étudier ces formes, c’est comprendre comment on exprime l’intime à l’écrit, une compétence qui sert dès qu’il faut écrire un texte personnel — mail, lettre de motivation ou récit autobiographique.",
  "francais--4eme--recit-fantastique":
    "Le fantastique, c’est cette hésitation entre «c’est juste un rêve» et «il se passe vraiment un truc bizarre» — le ressort de base de la moitié des films d’horreur et des histoires qui tournent en ligne. Apprendre à créer cette ambiance avec des mots (le doute, le décor inquiétant, la chute), c’est savoir écrire des histoires qui donnent vraiment des frissons plutôt que de juste annoncer un monstre.",
  "francais--4eme--subordonnees":
    "Les propositions subordonnées, c’est ce qui permet de dire «le film que j’ai vu hier, dont tout le monde parle, m’a bluffé» au lieu de trois phrases toutes courtes et toutes plates. Les maîtriser rend tes textes plus fluides et plus riches, et ça t’aide aussi à décortiquer les phrases longues des textes qu’on t’oblige à analyser.",
  "francais--4eme--roman-realiste":
    "Le roman réaliste, c’est l’ancêtre direct des séries qui montrent la vraie vie sans filtre — galère sociale, ambition, amours ratées — plutôt que des héros parfaits. Comprendre ce mouvement, c’est repérer pourquoi une histoire «sonne vrai», que ce soit dans un livre du XIXe siècle ou dans une série qui se passe dans un lycée aujourd’hui.",
  "francais--4eme--poesie-lyrique":
    "Quand un texte parle de cœur brisé, de nature ou du temps qui passe sur un ton grave et personnel, c’est le registre lyrique — celui qu’on retrouve autant chez les poètes du XIXe siècle que dans les ballades les plus tristes de tes playlists. Repérer ce registre, c’est comprendre pourquoi certains textes te touchent directement, qu’ils soient écrits en alexandrins ou chantés sur une prod actuelle.",
  "francais--4eme--discours-direct-indirect":
    "Rapporter ce que quelqu’un a dit sans le trahir, c’est un exercice de tous les jours : passer de «il arrive» à «il a dit qu’il arrivait» change la ponctuation et parfois les temps. Bien maîtriser ce passage, c’est éviter de déformer les propos de quelqu’un — utile en rédaction comme dans un commentaire en ligne que tu ne veux pas voir mal interprété.",
  "francais--4eme--presse-information":
    "Entre une info vérifiée, une rumeur et une fake news qui tourne en boucle, la différence tient souvent à la source et au vocabulaire utilisé. Apprendre à décortiquer un article de presse (titre, chapô, angle choisi), c’est devenir beaucoup plus difficile à berner la prochaine fois qu’un titre choc débarque dans ton fil d’actualité.",
  "francais--4eme--voix-active-passive":
    "«Le chat mange la souris» ou «la souris est mangée par le chat» : même info, mais on ne met pas le projecteur sur le même personnage. Comprendre la voix passive, c’est piger pourquoi les journalistes écrivent parfois «un magasin a été cambriolé» sans dire qui — et ça sert aussi à varier le style de tes propres textes plutôt que de répéter toujours la même construction.",

  "francais--3eme--autobiographie":
    "Se raconter par écrit, avec ses failles et ses souvenirs flous, c’est un exercice bien plus périlleux qu’un simple selfie légendé. L’autobiographie apprend à mettre de la distance et du sens sur sa propre histoire — une compétence redoutable le jour où il faut écrire une lettre de motivation qui ne sonne pas comme une fiche produit.",
  "francais--3eme--recits-guerre":
    "Lire comment des soldats ou des civils ont vécu la guerre de l’intérieur, avec leurs mots et leurs peurs, rend l’Histoire beaucoup plus concrète qu’une liste de dates. Ça aide aussi à comprendre pourquoi certains témoignages, aujourd’hui encore, pèsent plus lourd qu’un long discours officiel.",
  "francais--3eme--poesie-engagee":
    "Quand un texte prend position contre une injustice plutôt que de parler de fleurs, ça donne des vers qui claquent — exactement ce que font aujourd’hui des rappeurs engagés comme Booba, Nekfeu ou Damso dans leurs textes, en héritiers directs de cette poésie qui dénonce plutôt qu’elle ne décore. Étudier la poésie engagée, c’est comprendre comment les mots peuvent devenir une arme politique sans lever le petit doigt.",
  "francais--3eme--subjonctif-concordance":
    "«Il faut que tu ailles» et non «il faut que tu vas» : le subjonctif est ce mode qui trahit instantanément qui maîtrise son français à l’oral comme à l’écrit. Bien l’utiliser (et accorder les temps qui vont avec), c’est gagner des points au brevet et être pris au sérieux dans un texte, sans la petite faute qui trahit une relecture bâclée.",
  "francais--3eme--argumentation":
    "Convaincre par la logique ou persuader par l’émotion, ce n’est pas pareil, et connaître la différence permet de comprendre pourquoi une pub te fait pleurer alors qu’un rapport scientifique te fait juste réfléchir. C’est surtout la compétence numéro un pour argumenter sérieusement dans un commentaire en ligne ou un débat, plutôt que de juste hausser le ton.",
  "francais--3eme--figures-de-style":
    "Métaphore, hyperbole, anaphore : des rappeurs comme Booba, Orelsan, Nekfeu ou Damso s’en servent en permanence pour construire leurs punchlines les plus marquantes, un peu comme Aya Nakamura martèle une même formule en refrain pour qu’elle reste dans la tête. Repérer ces figures, c’est comprendre pourquoi certains vers ou certaines répliques de films restent gravés dans ta mémoire bien après les avoir entendus une seule fois.",
  "francais--3eme--theatre-tragique":
    "Le théâtre qui dénonce les travers de la société utilise la scène comme un miroir grossissant, un peu comme un sketch ou un mème qui tourne en dérision un travers de société sans jamais le nommer directement. Comprendre ce procédé aide à repérer la critique sociale planquée derrière une histoire qui a l’air anodine, au théâtre comme dans une série ou un film.",
  "francais--3eme--grammaire-brevet":
    "Analyser une phrase et la réécrire en changeant le temps, la personne ou la voix, c’est l’exercice qui tombe systématiquement au brevet de français — celui qu’on peut bachoter efficacement parce qu’il suit toujours le même schéma. Le maîtriser, c’est s’assurer des points garantis le jour de l’examen, sans dépendre de l’inspiration du moment.",

  // ── Chinois LV1 (SI) ─────────────────────────────────────
  "chinois--5eme--hsk2-se-presenter":
    "你好, je m’appelle... : savoir se présenter en chinois, c’est la toute première phrase qui te sauve devant un correspondant chinois ou un serveur dans un restaurant à Shanghai. Avec plus d’un milliard de locuteurs, ces quelques mots de base t’ouvrent déjà une conversation avec un sacré paquet de gens sur la planète.",
  "chinois--5eme--hsk2-famille-ecole":
    "Parler de ta famille et de ton école en chinois, c’est le vocabulaire qui revient à chaque discussion avec un correspondant lors d’un échange scolaire. Ça te permet aussi de suivre les scènes de vie quotidienne dans les dramas chinois que tu regardes peut-être déjà en version originale sous-titrée.",
  "chinois--5eme--hsk2-quotidien":
    "Dire l’heure et la date en chinois, c’est ce qui te sauve pour comprendre à quelle heure part ton train à Pékin ou pour ne pas rater un rendez-vous donné par un correspondant. Le système est en plus assez logique une fois qu’on a compris la structure, contrairement à ce qu’on pourrait croire au premier abord.",
  "chinois--5eme--hsk2-achats":
    "Savoir demander un prix et marchander un peu en chinois, c’est très pratique dans un marché en Chine, où le prix affiché n’est parfois qu’une suggestion de départ. Ce vocabulaire te sert aussi en voyage pour ne pas te faire avoir sur une babiole que tu voulais ramener en souvenir.",
  "chinois--5eme--hsk3-preparation":
    "Ajouter 300 mots à son vocabulaire, ça paraît énorme d’un coup, mais c’est exactement ce qu’il faut pour passer de la conversation basique à des échanges plus riches — capables de parler de tes goûts, de tes séries ou de la musique chinoise que tu écoutes. C’est la marche qu’il faut gravir avant d’attaquer le HSK 3, un vrai palier reconnu à l’international.",
  "chinois--4eme--hsk3-voyages":
    "Le vocabulaire du voyage en chinois — acheter un billet, demander son chemin, réserver une chambre — c’est ce qui fait toute la différence entre un séjour en Chine où tu galères à chaque étape et un voyage où tu te débrouilles vraiment. Utile aussi si un jour tu dois aider un touriste chinois perdu dans ta propre ville.",
  "chinois--4eme--hsk3-sentiments":
    "Exprimer ce que tu ressens ou ton avis en chinois va bien au-delà du «je suis content» basique — c’est ce qui te permet enfin d’avoir une vraie conversation avec un correspondant, pas juste un échange de politesses. C’est aussi indispensable pour comprendre les dialogues plus nuancés d’un film ou d’une série chinoise en version originale.",
  "chinois--4eme--hsk3-comparaison":
    "Comparer deux choses en chinois avec 比 a sa propre logique, différente du français, et une fois que le déclic se fait, tu peux enfin dire que ton morceau préféré est meilleur que celui que ton copain écoute en boucle, sans bafouiller. C’est une structure qui revient sans cesse à l’oral, donc autant la maîtriser tôt plutôt que de la contourner sans arrêt.",
  "chinois--4eme--hsk4-preparation":
    "Lire des textes courts en chinois sans paniquer devant chaque caractère inconnu, c’est la compétence qui te fait basculer de «je déchiffre» à «je lis vraiment». C’est un pas décisif vers le HSK 4, le niveau qui commence à ouvrir des portes pour des études ou un stage en Chine plus tard.",
  "chinois--3eme--hsk4-culture":
    "Connaître l’actualité et la culture chinoises, ce n’est pas du remplissage : ça te permet de comprendre les références qu’un correspondant chinois lâche naturellement dans la conversation, plutôt que de passer pour quelqu’un qui ne s’intéresse qu’à la grammaire. C’est aussi ce qui rend un futur CV ou un dossier de candidature pour une section internationale beaucoup plus convaincant.",
  "chinois--3eme--hsk4-redaction":
    "Rédiger un texte structuré en chinois — avec une vraie introduction, des arguments et une conclusion — c’est un cran au-dessus de l’oral, et c’est exactement ce qu’on attend de toi à l’examen du HSK 4. Cette rigueur se retransfère d’ailleurs très bien dans tes rédactions de français, preuve que les langues s’entraident plus qu’on ne le croit.",
  "chinois--3eme--hsk4-grammaire-avancee":
    "把 et 被 sont deux structures qui donnent des sueurs froides à beaucoup d’apprenants, mais elles permettent de dire des choses précises qu’on ne peut pas exprimer autrement — genre insister sur ce qui arrive à un objet plutôt que sur qui agit. Les maîtriser, c’est passer d’un chinois scolaire à un chinois qui sonne vraiment naturel.",
  "chinois--3eme--hsk5-preparation":
    "Comprendre des textes fins et écrire de vrais petits essais en chinois, c’est le niveau qui te rapproche sérieusement du HSK 5 — celui que beaucoup d’universités chinoises demandent pour intégrer un cursus. Autant dire que chaque effort fourni maintenant, c’est un futur CV ou dossier de candidature à l’étranger qui se renforce tout seul.",

  // ── Russe LV2 ────────────────────────────────────────────
  "russe--5eme--alphabet-cyrillique":
    "L’alphabet cyrillique a l’air totalement illisible au premier coup d’œil, mais une fois que tu sais que le Р se prononce «r» et le Н se prononce «n», tu peux soudain déchiffrer les panneaux de métro à Moscou ou Saint-Pétersbourg. C’est la porte d’entrée obligatoire vers le russe, mais aussi vers l’ukrainien, le bulgare ou le serbe, qui partagent le même système.",
  "russe--5eme--se-presenter":
    "Dire ton nom, ton âge et d’où tu viens en russe, c’est la base pour ne pas rester silencieux si tu croises un professeur de danse russophone ou un correspondant lors d’un échange. Как тебя зовут ? — cette simple question ouvre déjà une conversation avec plus de 250 millions de locuteurs dans le monde.",
  "russe--5eme--nombres-age":
    "Les nombres en russe ont leurs propres pièges (l’accord avec 1, 2 ou 5 ne se fait pas pareil), mais une fois digérés, ils te servent à donner ton âge, un prix ou une heure de répétition sans bafouiller. C’est aussi indispensable pour suivre un compte à rebours crié par un professeur russophone avant une variation de danse.",
  "russe--5eme--vocabulaire-danse-1":
    "Beaucoup de vocabulaire technique de la danse classique vient du français, mais dans une section danse-études avec des professeurs russophones, connaître les mots du studio en russe (barre, exercice, position) évite les malentendus en plein cours. C’est un vocabulaire hyper concret, celui que tu entends vraiment chaque semaine et pas juste dans un manuel.",
  "russe--4eme--conversation-quotidien":
    "Parler de ta journée, de tes habitudes ou de tes projets du week-end en russe, c’est ce qui transforme un échange scolaire en vraie amitié plutôt qu’en série de politesses gênées. C’est aussi le niveau qui te permet enfin de suivre une conversation simple sans que ton interlocuteur ne doive tout répéter deux fois plus lentement.",
  "russe--4eme--cas-nominatif-accusatif":
    "Le russe change la fin des mots selon leur rôle dans la phrase (les fameux «cas»), et le nominatif et l’accusatif sont les deux premiers à maîtriser pour distinguer qui fait l’action de qui la subit. Une fois le mécanisme compris, tu réalises que l’ordre des mots dans la phrase russe compte presque moins qu’en français, puisque c’est la terminaison qui porte le sens.",
  "russe--4eme--verbes-mouvement":
    "En russe, on ne dit pas juste «aller» : il existe un verbe différent selon que tu marches, que tu prends un moyen de transport, ou que le mouvement est unique ou répété. Ça paraît compliqué, mais ça permet de raconter très précisément un trajet — pratique aussi bien en voyage, pour expliquer comment tu es arrivé quelque part, que pour décrire ton chemin quotidien jusqu’au studio de danse.",
  "russe--4eme--vocabulaire-danse-2":
    "Suivre une répétition avec un professeur russophone qui corrige en direct — «encore», «plus haut», «recommence» — demande un vocabulaire précis qu’aucun manuel de tourisme ne t’enseigne. Le maîtriser, c’est gagner de précieuses secondes de compréhension pendant une répétition qui ne s’arrête pas pour attendre que tu traduises dans ta tête.",
  "russe--3eme--conversation-avancee":
    "Raconter une histoire ou décrire une scène en détail en russe, ça va bien au-delà du dialogue scolaire basique — c’est ce qui te permet de vraiment discuter avec quelqu’un plutôt que de réciter des phrases apprises par cœur. C’est ce niveau de conversation qui rend un voyage ou une audition à l’étranger beaucoup moins stressants.",
  "russe--3eme--cas-genitif-datif":
    "Le génitif sert à exprimer la possession et l’absence («je n’ai pas de temps»), le datif à dire à qui on donne ou parle : deux cas qui reviennent sans arrêt dès que tu veux construire une phrase un peu plus riche que «je suis». Les ajouter à ta panoplie, c’est doubler d’un coup les nuances que tu peux exprimer en russe.",
  "russe--3eme--aspect-verbal":
    "Le perfectif et l’imperfectif, c’est la façon dont le russe distingue une action terminée d’une action en cours ou répétée — un concept qui n’existe presque pas en français mais qui structure toute la langue. Une fois que le déclic se fait, tu comprends enfin pourquoi certains verbes russes ont l’air d’avoir deux vies complètement différentes.",
  "russe--3eme--vocabulaire-danse-3":
    "Passer une audition ou monter sur scène avec des indications données en russe demande un vocabulaire de dernière minute très spécifique — «en place», «silence», «ça tourne». Le maîtriser à ce stade, c’est arriver en scène concentré sur ta danse plutôt que sur la traduction de ce qu’on vient de te crier dans les coulisses.",

  // ── Espagnol LV2 ─────────────────────────────────────────
  "espagnol--5eme--saludos-presentarse":
    "¡Hola! ¿Qué tal? — savoir saluer et se présenter en espagnol, c’est la première chose qui te sert vraiment dès que tu mets un pied en Espagne, en Amérique latine, ou même juste devant un correspondant en visio. Avec plus de 500 millions de locuteurs dans le monde, ces quelques phrases de base ouvrent une conversation avec un nombre de gens hallucinant.",
  "espagnol--5eme--alfabeto-pronunciacion":
    "Le ñ, le r roulé, le j qui se prononce comme un h aspiré : la prononciation espagnole a ses spécificités, mais une fois maîtrisée, elle t’évite de confondre año (année) et un mot bien plus gênant, juste pour un accent oublié. Un accent correct, c’est aussi ce qui fait la différence entre se faire comprendre et se faire deviner.",
  "espagnol--5eme--la-familia":
    "Parler de sa famille en espagnol, c’est le tout premier sujet de conversation avec n’importe quel correspondant ou n’importe quelle famille d’accueil chez qui tu passerais un séjour linguistique. C’est aussi ce qui te permet de suivre les scènes de repas de famille interminables et bruyantes dans à peu près toutes les séries espagnoles ou latino-américaines regardées en version originale.",
  "espagnol--5eme--numeros-edad":
    "Compter et donner son âge en espagnol, c’est utile à chaque coin de rue en voyage : comprendre un prix sur un marché, une heure de bus, ou répondre poliment quand un adulte te demande ton âge. C’est aussi la base indispensable avant de pouvoir dire une date ou une heure de rendez-vous sans se tromper.",
  "espagnol--5eme--gustos-aficiones":
    "Le verbe gustar fonctionne à l’envers du français (littéralement «ça me plaît» plutôt que «j’aime»), ce qui déroute au début mais devient vite un réflexe. Une fois maîtrisé, tu peux enfin parler de tes séries, de la musique latino que tu écoutes ou de ton sport préféré avec un correspondant hispanophone, sans transformer chaque phrase en calcul mental.",
  "espagnol--5eme--el-instituto":
    "Parler de ton emploi du temps et de tes matières en espagnol, c’est exactement le genre de sujet qui revient dès la première conversation avec un correspondant scolaire. Ça te permet aussi de comparer les systèmes scolaires — et de réaliser que se plaindre des cours du lundi matin est visiblement universel.",
  "espagnol--4eme--rutina-diaria":
    "Raconter sa routine quotidienne en espagnol (se lever, se laver, prendre le petit-déjeuner) implique les verbes pronominaux, un peu déroutants au début mais hyper fréquents à l’oral. Une fois maîtrisés, ils te servent à raconter n’importe quelle journée type — utile pour une rédaction comme pour discuter avec un correspondant de vos emplois du temps respectifs.",
  "espagnol--4eme--la-ciudad":
    "Demander et comprendre son chemin en espagnol («tout droit», «à gauche», «au feu») c’est exactement ce qui te sauve quand ton GPS n’a plus de réseau dans une ville de Madrid ou de Mexico. C’est aussi le vocabulaire qui te permet d’aider à ton tour un touriste hispanophone perdu dans ta propre ville.",
  "espagnol--4eme--la-comida":
    "Savoir commander au restaurant en espagnol, c’est la différence entre pointer du doigt sur une carte au hasard et repartir avec le plat que tu voulais vraiment — surtout que la carte change complètement d’un pays hispanophone à l’autre. Ce vocabulaire te sert aussi à comprendre pourquoi une paella espagnole n’a rien à voir avec des tacos mexicains, alors qu’on parle la même langue des deux côtés.",
  "espagnol--4eme--ropa-compras":
    "Le vocabulaire des vêtements et des achats, c’est ce qui te permet de demander une taille, une couleur ou un prix pendant les soldes dans une boutique en Espagne, plutôt que de repartir bredouille par timidité. Ça sert aussi à décrire une tenue avec précision, en voyage comme dans une conversation entre correspondants.",
  "espagnol--4eme--preterito":
    "Le prétérit, c’est le temps du passé qu’on utilise pour raconter un événement précis et terminé — ce que tu as fait hier, ce week-end, pendant tes dernières vacances. Sans lui, impossible de raconter une histoire au passé sans tout mettre au présent, ce qui rendrait tes anecdotes de vacances beaucoup moins convaincantes.",
  "espagnol--3eme--vacaciones-viajes":
    "Parler de vacances et de voyages en espagnol, c’est exactement le sujet qui revient à la rentrée quand un correspondant te demande ce que tu as fait cet été — et c’est plus classe de répondre en espagnol qu’en mimant un avion avec les mains. Ce vocabulaire te prépare aussi concrètement à un vrai séjour dans un pays hispanophone, du billet d’avion à la réservation d’hôtel.",
  "espagnol--3eme--medio-ambiente":
    "Parler d’écologie en espagnol, c’est utile pour suivre les infos internationales sur le climat, un sujet qui ne s’arrête pas aux frontières linguistiques. C’est aussi le genre de vocabulaire qui te permet de débattre d’un vrai sujet de société avec un correspondant, pas juste d’échanger des banalités sur la météo.",
  "espagnol--3eme--futuro-planes":
    "Parler de tes projets futurs en espagnol (ce que tu veux faire après le collège, tes prochaines vacances) te permet enfin de tenir une vraie conversation tournée vers l’avenir, pas seulement de raconter ce qui s’est déjà passé. C’est aussi la structure qui te sert si tu dois un jour écrire un CV ou une lettre de motivation en espagnol.",
  "espagnol--3eme--cultura-hispanica":
    "Le monde hispanophone, ce n’est pas que l’Espagne : c’est aussi le Mexique, l’Argentine, la Colombie et une vingtaine d’autres pays, chacun avec sa musique, ses fêtes et son accent bien à lui. Connaître cette diversité, c’est éviter de confondre un reggaeton portoricain avec un tango argentin devant la mauvaise personne.",
  "espagnol--3eme--subjuntivo-inicio":
    "Le subjonctif espagnol sert à exprimer le doute, le souhait ou l’émotion («espero que vengas», j’espère que tu viennes), un mode qui n’existe presque plus en français courant mais qui structure énormément l’espagnol. Poser les bases maintenant, c’est éviter un gros blocage plus tard, quand ce mode reviendra sans arrêt dans des phrases plus complexes.",

  // ── Histoire de la danse ─────────────────────────────────
  "histoire-danse--5eme--naissance-ballet":
    "Le ballet est né dans les cours royales, où les nobles eux-mêmes dansaient pour impressionner leurs invités, avec des pas de cour dont certains noms se retrouvent encore aujourd’hui à la barre, en studio. Comprendre cette origine, c’est comprendre pourquoi le ballet garde ce côté cérémonieux et précis, hérité directement de la cour de Louis XIV.",
  "histoire-danse--5eme--danses-anciennes":
    "Avant le ballet classique, chaque région et chaque époque avait ses danses traditionnelles, souvent liées à des fêtes ou des rituels précis. Les connaître, c’est comprendre que la danse a toujours été un langage social, bien avant de devenir un art de scène aussi codifié que celui que tu pratiques en studio.",
  "histoire-danse--5eme--vocabulaire-classique":
    "Le vocabulaire du ballet est en français dans le monde entier : de Tokyo à New York, un plié reste un plié. Classe, non ? Le maîtriser, c’est comprendre n’importe quel cours donné par un professeur étranger, sans avoir besoin de traducteur pour un relevé ou un tendu.",
  "histoire-danse--4eme--ballet-romantique":
    "Giselle et les Sylphides ont mis les danseuses sur pointes et dans des tutus vaporeux pour incarner des créatures surnaturelles, lançant une technique de pointe que tu retravailles encore à la barre aujourd’hui. Comprendre ce virage, c’est comprendre pourquoi le ballet classique associe la pointe à la légèreté et au mystère, bien après la fin de l’époque romantique.",
  "histoire-danse--4eme--ballets-russes":
    "Diaghilev a réussi à rendre le ballet scandaleux et branché à Paris au début du XXe siècle, en mélangeant musique d’avant-garde, décors modernes et chorégraphies qui ont provoqué des émeutes en salle — l’équivalent d’un clip qui choque et fait le buzz aujourd’hui. Étudier les Ballets russes, c’est comprendre comment un spectacle de danse peut devenir un vrai événement culturel qui fait parler de lui bien au-delà de la scène.",
  "histoire-danse--4eme--grands-choregraphes-classiques":
    "Petipa a réglé les codes des grands ballets du répertoire (Le Lac des cygnes, La Belle au bois dormant) qu’on rejoue encore intégralement partout dans le monde, et dont tu peux retrouver des extraits filmés en quelques clics. Comprendre son travail, c’est comprendre pourquoi certaines œuvres deviennent des classiques increvables, que même les gens qui n’aiment pas la danse reconnaissent au premier extrait.",
  "histoire-danse--3eme--danse-moderne":
    "Isadora Duncan a dansé pieds nus et en tunique alors que tout le monde attendait des tutus et des pointes — une vraie rébellion artistique qui a ouvert la voie à Martha Graham, dont la technique se travaille encore aujourd’hui dans beaucoup de studios. Comprendre cette révolte, c’est comprendre que casser les codes établis peut créer tout un nouveau vocabulaire de mouvement, plutôt que juste un scandale sans lendemain.",
  "histoire-danse--3eme--danse-contemporaine":
    "La danse contemporaine explore des thèmes de société, du corps et de l’espace de manières parfois déroutantes — normal, c’est justement fait pour te faire réagir plutôt que pour te bercer. La comprendre, c’est te donner les clés pour ne pas rester perdu devant un spectacle qui n’a «aucune histoire» apparente sur scène ou dans un clip, mais qui en raconte une quand même, autrement.",
  "histoire-danse--3eme--hip-hop-cultures-urbaines":
    "Le hip-hop est né dans la rue, dans des block parties du Bronx, bien avant d’arriver un jour sur les scènes des plus grands théâtres et dans les battles filmées qui cartonnent sur les réseaux. Connaître cette histoire, c’est comprendre comment une culture née dans la rue peut devenir un art reconnu, sans jamais renier ses origines.",
};

export default A_QUOI_CA_SERT;
