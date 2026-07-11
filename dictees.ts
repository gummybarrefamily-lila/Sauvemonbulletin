import type { Niveau } from "./types";

export interface Dictee {
  niveau: Niveau;
  semaine: number;
  titre: string;
  texte: string;
  auteur: string;
  pointsVigilance: { extrait: string; explication: string }[];
}

export const DICTEES: Dictee[] = [
  // ---------- 5ème ----------
  {
    niveau: "5eme",
    semaine: 1,
    titre: "La chèvre de M. Seguin",
    texte:
      "M. Seguin n'avait jamais eu de bonheur avec ses chèvres. Il les perdait toutes de la même façon : un beau matin, elles cassaient leur corde, s'en allaient dans la montagne, et là-haut le loup les mangeait.",
    auteur: "Alphonse Daudet, La Chèvre de M. Seguin (Lettres de mon moulin)",
    pointsVigilance: [
      { extrait: "n'avait jamais eu", explication: "Négation « ne... jamais » encadrant l'auxiliaire avoir à l'imparfait suivi du participe passé (plus-que-parfait)." },
      { extrait: "ses chèvres", explication: "Déterminant possessif pluriel « ses », à ne pas confondre avec le démonstratif « ces »." },
      { extrait: "cassaient, s'en allaient", explication: "Imparfait, 3e personne du pluriel : terminaison -aient, accord avec « elles »." },
      { extrait: "et", explication: "Conjonction de coordination, à ne pas confondre avec « est » (verbe être)." },
      { extrait: "là-haut", explication: "Adverbe composé de lieu qui s'écrit avec un trait d'union." },
    ],
  },
  {
    niveau: "5eme",
    semaine: 2,
    titre: "Un événement bizarre",
    texte:
      "L'année 1866 fut marquée par un événement bizarre, un phénomène inexpliqué et inexplicable que personne n'a sans doute oublié. Sans parler des rumeurs qui agitaient les populations des ports et surexcitaient l'esprit public à l'intérieur des continents, les gens de mer furent particulièrement émus.",
    auteur: "Jules Verne, Vingt mille lieues sous les mers",
    pointsVigilance: [
      { extrait: "fut marquée", explication: "Passé simple du verbe être suivi d'un participe passé accordé avec le sujet « L'année » (féminin singulier)." },
      { extrait: "qui agitaient", explication: "Le verbe s'accorde avec l'antécédent du pronom relatif « qui », ici « rumeurs » (féminin pluriel)." },
      { extrait: "furent", explication: "Passé simple du verbe être, 3e personne du pluriel." },
      { extrait: "émus", explication: "Participe passé employé comme adjectif, accordé avec « les gens » (masculin pluriel)." },
      { extrait: "n'a...oublié", explication: "Négation avec « personne », sans « pas » : passé composé du verbe oublier." },
    ],
  },
  {
    niveau: "5eme",
    semaine: 3,
    titre: "La poupée de cire",
    texte:
      "Ma bonne, ma bonne, dit un jour Sophie en accourant dans sa chambre, venez vite ouvrir une caisse que papa m'a envoyée de Paris ; je crois que c'est une poupée de cire, car il m'en a promis une.",
    auteur: "Comtesse de Ségur, Les Malheurs de Sophie",
    pointsVigilance: [
      { extrait: "dit", explication: "Verbe dire au passé simple, 3e personne du singulier : pas de « s » final." },
      { extrait: "m'a envoyée", explication: "Participe passé avec l'auxiliaire avoir, accordé avec le COD « que » (mis pour « une caisse », féminin singulier) placé avant le verbe." },
      { extrait: "c'est", explication: "Contraction de « cela est », à ne pas confondre avec « s'est » ou le possessif « ses »." },
      { extrait: "papa", explication: "Nom commun employé sans majuscule, même utilisé comme un prénom familier." },
    ],
  },
  {
    niveau: "5eme",
    semaine: 4,
    titre: "Cosette dans la forêt",
    texte:
      "Elle était harassée de fatigue et n'était pas encore sortie de la forêt. Parvenue près d'un vieux châtaignier qu'elle connaissait, elle fit une dernière halte plus longue que les autres pour se bien reposer, puis elle rassembla toutes ses forces, reprit le seau et se remit à marcher courageusement.",
    auteur: "Victor Hugo, Les Misérables",
    pointsVigilance: [
      { extrait: "harassée", explication: "Participe passé employé comme adjectif, accordé avec « Elle » (féminin singulier)." },
      { extrait: "Parvenue", explication: "Participe passé en début de phrase, accordé avec le sujet féminin « elle » qu'il annonce." },
      { extrait: "fit, rassembla, reprit, remit", explication: "Passé simple, 3e personne du singulier, verbes du 3e groupe." },
      { extrait: "toutes ses forces", explication: "Accord de « toutes » (féminin pluriel) avec le nom « forces »." },
      { extrait: "courageusement", explication: "Adverbe en -ment formé sur l'adjectif féminin « courageuse »." },
    ],
  },
  {
    niveau: "5eme",
    semaine: 5,
    titre: "Le Corbeau et le Renard",
    texte:
      "Maître Corbeau, sur un arbre perché, tenait en son bec un fromage. Maître Renard, par l'odeur alléché, lui tint à peu près ce langage : Hé ! bonjour, Monsieur du Corbeau. Que vous êtes joli ! que vous me semblez beau ! Sans mentir, si votre ramage se rapporte à votre plumage, vous êtes le phénix des hôtes de ces bois.",
    auteur: "Jean de La Fontaine, Fables",
    pointsVigilance: [
      { extrait: "perché", explication: "Participe passé employé comme adjectif, accordé avec « Corbeau » (masculin singulier)." },
      { extrait: "alléché", explication: "Participe passé adjectival accordé avec « Renard » ; attention à l'accent aigu du é." },
      { extrait: "tint", explication: "Passé simple du verbe tenir, 3e personne du singulier." },
      { extrait: "Que vous êtes joli !", explication: "« Que » exclamatif ici, à ne pas confondre avec le pronom relatif « que »." },
      { extrait: "ces bois", explication: "Déterminant démonstratif pluriel, à ne pas confondre avec le possessif « ses »." },
    ],
  },
  {
    niveau: "5eme",
    semaine: 6,
    titre: "Le château de la Misère",
    texte:
      "Sur le revers d'une de ces collines décharnées qui bossuent les Landes, entre Dax et Mont-de-Marsan, s'élevait, sous le règne de Louis XIII, une de ces gentilhommières si communes en Gascogne.",
    auteur: "Théophile Gautier, Le Capitaine Fracasse",
    pointsVigilance: [
      { extrait: "s'élevait", explication: "Le sujet réel « une de ces gentilhommières » est placé après le verbe : c'est une phrase à sujet inversé." },
      { extrait: "décharnées", explication: "Participe passé adjectival accordé avec « collines » (féminin pluriel)." },
      { extrait: "qui bossuent", explication: "Le verbe s'accorde avec l'antécédent « collines » (pluriel)." },
      { extrait: "Louis XIII", explication: "Les numéraux de souverains s'écrivent en chiffres romains, sans point." },
      { extrait: "communes", explication: "Accord de l'adjectif avec « gentilhommières » (féminin pluriel)." },
    ],
  },

  // ---------- 4ème ----------
  {
    niveau: "4eme",
    semaine: 1,
    titre: "Le Horla, 8 mai",
    texte:
      "8 mai. – Quelle journée admirable ! J'ai passé toute la matinée étendu sur l'herbe, devant ma maison, sous l'énorme platane qui la couvre, l'abrite et l'ombrage tout entière. J'aime ma maison où j'ai grandi. De mes fenêtres, je vois la Seine qui coule, le long de mon jardin, derrière la route, presque chez moi, la grande et large Seine, qui va de Rouen au Havre, couverte de bateaux qui passent.",
    auteur: "Guy de Maupassant, Le Horla",
    pointsVigilance: [
      { extrait: "j'ai passé", explication: "Passé composé : le participe passé reste invariable, aucun COD n'est placé avant le verbe." },
      { extrait: "où j'ai grandi", explication: "Pronom relatif de lieu « où », à ne pas confondre avec la conjonction « ou »." },
      { extrait: "couvre, l'abrite, l'ombrage", explication: "Verbes au présent, 3e personne du singulier, accordés avec « platane »." },
      { extrait: "couverte", explication: "Participe passé adjectival, accordé avec « Seine » (féminin singulier)." },
      { extrait: "qui passent", explication: "Accord avec l'antécédent « bateaux » (masculin pluriel)." },
    ],
  },
  {
    niveau: "4eme",
    semaine: 2,
    titre: "Gervaise attend Lantier",
    texte:
      "Gervaise avait attendu Lantier jusqu'à deux heures du matin. Puis, toute frissonnante d'être restée en camisole à l'air vif de la fenêtre, elle s'était assoupie, jetée en travers du lit, fiévreuse, les joues trempées de larmes. Depuis huit jours, au sortir du Veau à deux têtes, où ils mangeaient, il l'envoyait se coucher avec les enfants et ne reparaissait que tard dans la nuit, en racontant qu'il cherchait du travail.",
    auteur: "Émile Zola, L'Assommoir",
    pointsVigilance: [
      { extrait: "avait attendu", explication: "Plus-que-parfait : pas d'accord du participe passé, aucun COD n'est placé avant le verbe." },
      { extrait: "s'était assoupie", explication: "Verbe pronominal au plus-que-parfait, accordé avec le sujet « elle »." },
      { extrait: "jetée, trempées", explication: "Participes passés adjectivaux, accordés respectivement avec « elle » et « les joues »." },
      { extrait: "l'envoyait", explication: "« l' » est un pronom COD mis pour « elle » (Gervaise), placé avant un verbe à l'imparfait." },
      { extrait: "ne...que", explication: "Locution restrictive, à ne pas confondre avec une négation classique « ne... pas »." },
    ],
  },
  {
    niveau: "4eme",
    semaine: 3,
    titre: "Le labour",
    texte:
      "Dans le haut du champ, un vieillard poussait gravement son areau de forme antique, traîné par deux bœufs tranquilles, à la robe jaune pâle, véritables patriarches de la prairie, hauts de taille, un peu maigres, les cornes longues et rabattues, de ces vieux travailleurs qu'une longue habitude a rendus frères, comme on les appelle dans nos campagnes, et qui, privés l'un de l'autre, se refusent au travail avec un nouveau compagnon et se laissent mourir de chagrin.",
    auteur: "George Sand, La Mare au diable",
    pointsVigilance: [
      { extrait: "traîné", explication: "Participe passé accordé avec « areau » (masculin singulier)." },
      { extrait: "a rendus", explication: "Participe passé avec avoir, accordé avec le COD « qu' » (mis pour « vieux travailleurs », masculin pluriel), placé avant l'auxiliaire." },
      { extrait: "privés", explication: "Participe passé adjectival, accordé avec « qui » (masculin pluriel)." },
      { extrait: "se laissent mourir", explication: "Verbe pronominal suivi d'un infinitif ; « se » est le pronom réfléchi." },
      { extrait: "on les appelle", explication: "Le pronom indéfini « on » est toujours suivi d'un verbe conjugué au singulier." },
    ],
  },
  {
    niveau: "4eme",
    semaine: 4,
    titre: "Les Étoiles",
    texte:
      "Du temps que je gardais les bêtes sur le Luberon, je restais des semaines entières sans voir âme qui vive, seul dans le pâturage avec mon chien Labri et mes ouailles. De temps en temps l'ermite du Mont-de-l'Ure passait par là pour chercher des simples ou bien j'apercevais la face noire de quelque charbonnier du Piémont.",
    auteur: "Alphonse Daudet, Les Étoiles (Lettres de mon moulin)",
    pointsVigilance: [
      { extrait: "gardais, restais", explication: "Imparfait, 1re personne du singulier : terminaison -ais." },
      { extrait: "âme qui vive", explication: "Expression figée : le verbe « vivre » est ici au subjonctif présent." },
      { extrait: "seul", explication: "Adjectif accordé avec le sujet « je », ici masculin." },
      { extrait: "passait", explication: "Imparfait, 3e personne du singulier, sujet « l'ermite »." },
      { extrait: "ou bien", explication: "« ou » (choix), à ne pas confondre avec « où » (lieu)." },
    ],
  },
  {
    niveau: "4eme",
    semaine: 5,
    titre: "Un mot sur Waterloo",
    texte:
      "S'il n'avait pas plu dans la nuit du 17 au 18 juin 1815, l'avenir de l'Europe était changé. Quelques gouttes d'eau de plus ou de moins ont fait pencher Napoléon. Pour que Waterloo fût la fin d'Austerlitz, la providence n'a eu besoin que d'un peu de pluie, et un nuage traversant le ciel à contre-sens de la saison a suffi pour l'écroulement d'un monde.",
    auteur: "Victor Hugo, Les Misérables",
    pointsVigilance: [
      { extrait: "n'avait pas plu", explication: "Plus-que-parfait du verbe impersonnel « pleuvoir » : le participe passé « plu » est invariable." },
      { extrait: "fût", explication: "Subjonctif imparfait du verbe être après « pour que », à ne pas confondre avec « fut » (passé simple, sans accent circonflexe)." },
      { extrait: "ont fait", explication: "Passé composé accordé avec le sujet « Quelques gouttes » (féminin pluriel)." },
      { extrait: "a suffi", explication: "Passé composé accordé avec le sujet singulier « un nuage »." },
      { extrait: "17 au 18 juin 1815", explication: "Les nombres qui composent une date sont invariables." },
    ],
  },
  {
    niveau: "4eme",
    semaine: 6,
    titre: "L'ennui d'Emma",
    texte:
      "Elle se demandait s'il n'y aurait pas eu moyen, par d'autres combinaisons du hasard, de rencontrer un autre homme ; et elle cherchait à imaginer quels eussent été ces événements non survenus, cette vie différente, ce mari qu'elle ne connaissait pas. Mais elle, sa vie était froide comme un grenier dont la lucarne est au nord, et l'ennui, araignée silencieuse, filait sa toile dans l'ombre à tous les coins de son cœur.",
    auteur: "Gustave Flaubert, Madame Bovary",
    pointsVigilance: [
      { extrait: "eussent été", explication: "Subjonctif plus-que-parfait, forme littéraire équivalente au conditionnel passé." },
      { extrait: "qu'elle ne connaissait pas", explication: "Pronom relatif COD « que » élidé devant une voyelle, verbe à l'imparfait." },
      { extrait: "dont", explication: "Pronom relatif complément du nom, qui remplace « de laquelle »." },
      { extrait: "filait", explication: "Imparfait, 3e personne du singulier, sujet « l'ennui »." },
      { extrait: "cœur", explication: "Orthographe avec le œ soudé (o et e collés)." },
    ],
  },

  // ---------- 3ème ----------
  {
    niveau: "3eme",
    semaine: 1,
    titre: "Georges Duroy sort du restaurant",
    texte:
      "Quand la caissière lui eut rendu la monnaie de sa pièce de cent sous, Georges Duroy sortit du restaurant. Comme il portait beau par nature et par pose d'ancien sous-officier, il cambra sa taille, frisa sa moustache d'un geste militaire et familier, et jeta sur les dîneurs attardés un regard rapide et circulaire, un de ces regards de joli garçon, qui s'étendent comme des coups d'épervier. Lorsqu'il fut sur le trottoir, il demeura un instant immobile, se demandant ce qu'il allait faire.",
    auteur: "Guy de Maupassant, Bel-Ami",
    pointsVigilance: [
      { extrait: "eut rendu", explication: "Passé antérieur (auxiliaire avoir au passé simple + participe passé) : exprime une action achevée juste avant une autre action au passé simple." },
      { extrait: "sortit, cambra, frisa, jeta, fut, demeura", explication: "Passé simple, 3e personne du singulier." },
      { extrait: "qui s'étendent", explication: "Accord avec l'antécédent « regards » (masculin pluriel), verbe au présent de vérité générale." },
      { extrait: "Lorsqu'il", explication: "Conjonction de subordination temporelle « lorsque », avec élision du e devant une voyelle." },
      { extrait: "se demandant", explication: "Gérondif d'un verbe pronominal, précédé de « en » sous-entendu." },
    ],
  },
  {
    niveau: "3eme",
    semaine: 2,
    titre: "Le château de Combourg",
    texte:
      "Le calme morne du château de Combourg était augmenté par l'humeur taciturne et insociable de mon père. Au lieu de resserrer sa famille et ses gens autour de lui, il les avait dispersés à toutes les aires de vent de l'édifice. Sa chambre à coucher était placée dans la petite tour de l'est, et son cabinet dans la petite tour de l'ouest. Les meubles de ce cabinet consistaient en trois chaises de cuir noir et une table couverte de titres et de parchemins.",
    auteur: "François-René de Chateaubriand, Mémoires d'outre-tombe",
    pointsVigilance: [
      { extrait: "était augmenté", explication: "Voix passive à l'imparfait, participe passé accordé avec le sujet « Le calme » (masculin singulier)." },
      { extrait: "avait dispersés", explication: "Plus-que-parfait : le participe passé s'accorde avec le COD « les » (mis pour « sa famille et ses gens »), placé avant l'auxiliaire avoir." },
      { extrait: "l'est, l'ouest", explication: "Points cardinaux employés comme noms communs, sans majuscule ici." },
      { extrait: "couverte", explication: "Participe passé adjectival, accordé avec « table » (féminin singulier)." },
      { extrait: "insociable", explication: "Un seul « s » après le préfixe « in- »." },
    ],
  },
  {
    niveau: "3eme",
    semaine: 3,
    titre: "Dans la plaine rase",
    texte:
      "Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Devant lui, il ne voyait même pas le sol noir, et il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues.",
    auteur: "Émile Zola, Germinal",
    pointsVigilance: [
      { extrait: "suivait", explication: "Imparfait de description, 3e personne du singulier, sujet « un homme »." },
      { extrait: "coupant", explication: "Participe présent, invariable, complément de « route »." },
      { extrait: "n'avait...que", explication: "Locution restrictive « ne... que », à ne pas confondre avec une négation totale." },
      { extrait: "glacées", explication: "Participe passé adjectival, accordé avec « rafales » (féminin pluriel)." },
      { extrait: "d'avoir balayé", explication: "Infinitif passé : le participe passé reste invariable, aucun COD n'est placé avant." },
    ],
  },
  {
    niveau: "3eme",
    semaine: 4,
    titre: "L'émeute de Meung",
    texte:
      "Le premier lundi du mois d'avril 1625, le bourg de Meung, où naquit l'auteur du Roman de la Rose, semblait être dans une révolution aussi entière que si les huguenots en fussent venus faire une seconde Rochelle. Plusieurs bourgeois, voyant s'enfuir les femmes du côté de la Grande-Rue, entendant les enfants crier sur le seuil des portes, se hâtaient d'endosser la cuirasse et, appuyant leur contenance quelque peu incertaine d'un mousquet ou d'une pertuisane, se dirigeaient vers l'hôtellerie du Franc Meunier, devant laquelle s'empressait, en grossissant de minute en minute, un groupe compact, bruyant et plein de curiosité.",
    auteur: "Alexandre Dumas, Les Trois Mousquetaires",
    pointsVigilance: [
      { extrait: "naquit", explication: "Passé simple irrégulier du verbe naître, 3e personne du singulier." },
      { extrait: "fussent venus", explication: "Subjonctif plus-que-parfait après « que si », par concordance des temps dans un récit au passé." },
      { extrait: "voyant, entendant, appuyant, grossissant", explication: "Participes présents, invariables." },
      { extrait: "se hâtaient", explication: "Verbe pronominal à l'imparfait ; ne pas oublier l'accent circonflexe du verbe « hâter »." },
      { extrait: "devant laquelle", explication: "Pronom relatif composé féminin singulier, reprend « l'hôtellerie »." },
    ],
  },
  {
    niveau: "3eme",
    semaine: 5,
    titre: "La petite ville de Verrières",
    texte:
      "La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches avec leurs toits pointus de tuiles rouges s'étendent sur la pente d'une colline, dont des touffes de vigoureux châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications bâties jadis par les Espagnols, et maintenant ruinées. Verrières est abritée du côté du nord par une haute montagne, c'est une des branches du Jura.",
    auteur: "Stendhal, Le Rouge et le Noir",
    pointsVigilance: [
      { extrait: "dont", explication: "Pronom relatif complément, à ne pas confondre avec le nom « don »." },
      { extrait: "bâties", explication: "Participe passé accordé avec « fortifications » (féminin pluriel)." },
      { extrait: "ruinées", explication: "Participe passé adjectival, coordonné à « bâties », même accord." },
      { extrait: "c'est", explication: "Contraction de « cela est », à ne pas confondre avec « s'est » ou « ses »." },
      { extrait: "au-dessous", explication: "Adverbe composé de lieu, qui s'écrit avec un trait d'union." },
    ],
  },
  {
    niveau: "3eme",
    semaine: 6,
    titre: "Le départ de Jeanne",
    texte:
      "Jeanne, ayant fini ses malles, s'approcha de la fenêtre, mais la pluie ne cessait pas. L'averse, toute la nuit, avait sonné contre les carreaux et les toits. Le ciel bas et chargé d'eau semblait crevé, se vidant sur la terre, la délayant en bouillie, la fondant comme du sucre. Des rafales passaient pleines d'une chaleur lourde. Le ronflement des ruisseaux débordés emplissait les rues désertes où les maisons, comme des éponges, buvaient l'humidité qui pénétrait au dedans et faisait suer les murs de la cave au grenier.",
    auteur: "Guy de Maupassant, Une Vie",
    pointsVigilance: [
      { extrait: "ayant fini", explication: "Participe présent composé, invariable, formé de « ayant » + participe passé." },
      { extrait: "toute la nuit", explication: "« toute » est un adjectif indéfini accordé au féminin singulier avec « nuit »." },
      { extrait: "se vidant, la délayant, la fondant", explication: "Participes présents coordonnés, invariables ; « la » est un pronom COD mis pour « la terre »." },
      { extrait: "où les maisons", explication: "Pronom relatif de lieu « où »." },
      { extrait: "débordés", explication: "Participe passé adjectival, accordé avec « ruisseaux » (masculin pluriel)." },
    ],
  },
];

export function dicteesDe(niveau: Niveau): Dictee[] {
  return DICTEES.filter((d) => d.niveau === niveau);
}
