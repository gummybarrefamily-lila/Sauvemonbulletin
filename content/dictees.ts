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
  {
    "niveau": "5eme",
    "semaine": 1,
    "titre": "La chèvre de M. Seguin",
    "texte": "M. Seguin n'avait jamais eu de bonheur avec ses chèvres. Il les perdait toutes de la même façon : un beau matin, elles cassaient leur corde, s'en allaient dans la montagne, et là-haut le loup les mangeait.",
    "auteur": "Alphonse Daudet, La Chèvre de M. Seguin (Lettres de mon moulin)",
    "pointsVigilance": [
      {
        "extrait": "n'avait jamais eu",
        "explication": "Négation « ne... jamais » encadrant l'auxiliaire avoir à l'imparfait suivi du participe passé (plus-que-parfait)."
      },
      {
        "extrait": "ses chèvres",
        "explication": "Déterminant possessif pluriel « ses », à ne pas confondre avec le démonstratif « ces »."
      },
      {
        "extrait": "cassaient, s'en allaient",
        "explication": "Imparfait, 3e personne du pluriel : terminaison -aient, accord avec « elles »."
      },
      {
        "extrait": "et",
        "explication": "Conjonction de coordination, à ne pas confondre avec « est » (verbe être)."
      },
      {
        "extrait": "là-haut",
        "explication": "Adverbe composé de lieu qui s'écrit avec un trait d'union."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 2,
    "titre": "Un événement bizarre",
    "texte": "L'année 1866 fut marquée par un événement bizarre, un phénomène inexpliqué et inexplicable que personne n'a sans doute oublié. Sans parler des rumeurs qui agitaient les populations des ports et surexcitaient l'esprit public à l'intérieur des continents, les gens de mer furent particulièrement émus.",
    "auteur": "Jules Verne, Vingt mille lieues sous les mers",
    "pointsVigilance": [
      {
        "extrait": "fut marquée",
        "explication": "Passé simple du verbe être suivi d'un participe passé accordé avec le sujet « L'année » (féminin singulier)."
      },
      {
        "extrait": "qui agitaient",
        "explication": "Le verbe s'accorde avec l'antécédent du pronom relatif « qui », ici « rumeurs » (féminin pluriel)."
      },
      {
        "extrait": "furent",
        "explication": "Passé simple du verbe être, 3e personne du pluriel."
      },
      {
        "extrait": "émus",
        "explication": "Participe passé employé comme adjectif, accordé avec « les gens » (masculin pluriel)."
      },
      {
        "extrait": "n'a...oublié",
        "explication": "Négation avec « personne », sans « pas » : passé composé du verbe oublier."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 3,
    "titre": "La poupée de cire",
    "texte": "Ma bonne, ma bonne, dit un jour Sophie en accourant dans sa chambre, venez vite ouvrir une caisse que papa m'a envoyée de Paris ; je crois que c'est une poupée de cire, car il m'en a promis une.",
    "auteur": "Comtesse de Ségur, Les Malheurs de Sophie",
    "pointsVigilance": [
      {
        "extrait": "dit",
        "explication": "Verbe dire au passé simple, 3e personne du singulier : pas de « s » final."
      },
      {
        "extrait": "m'a envoyée",
        "explication": "Participe passé avec l'auxiliaire avoir, accordé avec le COD « que » (mis pour « une caisse », féminin singulier) placé avant le verbe."
      },
      {
        "extrait": "c'est",
        "explication": "Contraction de « cela est », à ne pas confondre avec « s'est » ou le possessif « ses »."
      },
      {
        "extrait": "papa",
        "explication": "Nom commun employé sans majuscule, même utilisé comme un prénom familier."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 4,
    "titre": "Cosette dans la forêt",
    "texte": "Elle était harassée de fatigue et n'était pas encore sortie de la forêt. Parvenue près d'un vieux châtaignier qu'elle connaissait, elle fit une dernière halte plus longue que les autres pour se bien reposer, puis elle rassembla toutes ses forces, reprit le seau et se remit à marcher courageusement.",
    "auteur": "Victor Hugo, Les Misérables",
    "pointsVigilance": [
      {
        "extrait": "harassée",
        "explication": "Participe passé employé comme adjectif, accordé avec « Elle » (féminin singulier)."
      },
      {
        "extrait": "Parvenue",
        "explication": "Participe passé en début de phrase, accordé avec le sujet féminin « elle » qu'il annonce."
      },
      {
        "extrait": "fit, rassembla, reprit, remit",
        "explication": "Passé simple, 3e personne du singulier, verbes du 3e groupe."
      },
      {
        "extrait": "toutes ses forces",
        "explication": "Accord de « toutes » (féminin pluriel) avec le nom « forces »."
      },
      {
        "extrait": "courageusement",
        "explication": "Adverbe en -ment formé sur l'adjectif féminin « courageuse »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 5,
    "titre": "Le Corbeau et le Renard",
    "texte": "Maître Corbeau, sur un arbre perché, tenait en son bec un fromage. Maître Renard, par l'odeur alléché, lui tint à peu près ce langage : Hé ! bonjour, Monsieur du Corbeau. Que vous êtes joli ! que vous me semblez beau ! Sans mentir, si votre ramage se rapporte à votre plumage, vous êtes le phénix des hôtes de ces bois.",
    "auteur": "Jean de La Fontaine, Fables",
    "pointsVigilance": [
      {
        "extrait": "perché",
        "explication": "Participe passé employé comme adjectif, accordé avec « Corbeau » (masculin singulier)."
      },
      {
        "extrait": "alléché",
        "explication": "Participe passé adjectival accordé avec « Renard » ; attention à l'accent aigu du é."
      },
      {
        "extrait": "tint",
        "explication": "Passé simple du verbe tenir, 3e personne du singulier."
      },
      {
        "extrait": "Que vous êtes joli !",
        "explication": "« Que » exclamatif ici, à ne pas confondre avec le pronom relatif « que »."
      },
      {
        "extrait": "ces bois",
        "explication": "Déterminant démonstratif pluriel, à ne pas confondre avec le possessif « ses »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 6,
    "titre": "Le château de la Misère",
    "texte": "Sur le revers d'une de ces collines décharnées qui bossuent les Landes, entre Dax et Mont-de-Marsan, s'élevait, sous le règne de Louis XIII, une de ces gentilhommières si communes en Gascogne.",
    "auteur": "Théophile Gautier, Le Capitaine Fracasse",
    "pointsVigilance": [
      {
        "extrait": "s'élevait",
        "explication": "Le sujet réel « une de ces gentilhommières » est placé après le verbe : c'est une phrase à sujet inversé."
      },
      {
        "extrait": "décharnées",
        "explication": "Participe passé adjectival accordé avec « collines » (féminin pluriel)."
      },
      {
        "extrait": "qui bossuent",
        "explication": "Le verbe s'accorde avec l'antécédent « collines » (pluriel)."
      },
      {
        "extrait": "Louis XIII",
        "explication": "Les numéraux de souverains s'écrivent en chiffres romains, sans point."
      },
      {
        "extrait": "communes",
        "explication": "Accord de l'adjectif avec « gentilhommières » (féminin pluriel)."
      }
    ]
  },
  {
    "niveau": "4eme",
    "semaine": 1,
    "titre": "Le Horla, 8 mai",
    "texte": "8 mai. – Quelle journée admirable ! J'ai passé toute la matinée étendu sur l'herbe, devant ma maison, sous l'énorme platane qui la couvre, l'abrite et l'ombrage tout entière. J'aime ma maison où j'ai grandi. De mes fenêtres, je vois la Seine qui coule, le long de mon jardin, derrière la route, presque chez moi, la grande et large Seine, qui va de Rouen au Havre, couverte de bateaux qui passent.",
    "auteur": "Guy de Maupassant, Le Horla",
    "pointsVigilance": [
      {
        "extrait": "j'ai passé",
        "explication": "Passé composé : le participe passé reste invariable, aucun COD n'est placé avant le verbe."
      },
      {
        "extrait": "où j'ai grandi",
        "explication": "Pronom relatif de lieu « où », à ne pas confondre avec la conjonction « ou »."
      },
      {
        "extrait": "couvre, l'abrite, l'ombrage",
        "explication": "Verbes au présent, 3e personne du singulier, accordés avec « platane »."
      },
      {
        "extrait": "couverte",
        "explication": "Participe passé adjectival, accordé avec « Seine » (féminin singulier)."
      },
      {
        "extrait": "qui passent",
        "explication": "Accord avec l'antécédent « bateaux » (masculin pluriel)."
      }
    ]
  },
  {
    "niveau": "4eme",
    "semaine": 2,
    "titre": "Gervaise attend Lantier",
    "texte": "Gervaise avait attendu Lantier jusqu'à deux heures du matin. Puis, toute frissonnante d'être restée en camisole à l'air vif de la fenêtre, elle s'était assoupie, jetée en travers du lit, fiévreuse, les joues trempées de larmes. Depuis huit jours, au sortir du Veau à deux têtes, où ils mangeaient, il l'envoyait se coucher avec les enfants et ne reparaissait que tard dans la nuit, en racontant qu'il cherchait du travail.",
    "auteur": "Émile Zola, L'Assommoir",
    "pointsVigilance": [
      {
        "extrait": "avait attendu",
        "explication": "Plus-que-parfait : pas d'accord du participe passé, aucun COD n'est placé avant le verbe."
      },
      {
        "extrait": "s'était assoupie",
        "explication": "Verbe pronominal au plus-que-parfait, accordé avec le sujet « elle »."
      },
      {
        "extrait": "jetée, trempées",
        "explication": "Participes passés adjectivaux, accordés respectivement avec « elle » et « les joues »."
      },
      {
        "extrait": "l'envoyait",
        "explication": "« l' » est un pronom COD mis pour « elle » (Gervaise), placé avant un verbe à l'imparfait."
      },
      {
        "extrait": "ne...que",
        "explication": "Locution restrictive, à ne pas confondre avec une négation classique « ne... pas »."
      }
    ]
  },
  {
    "niveau": "4eme",
    "semaine": 3,
    "titre": "Le labour",
    "texte": "Dans le haut du champ, un vieillard poussait gravement son areau de forme antique, traîné par deux bœufs tranquilles, à la robe jaune pâle, véritables patriarches de la prairie, hauts de taille, un peu maigres, les cornes longues et rabattues, de ces vieux travailleurs qu'une longue habitude a rendus frères, comme on les appelle dans nos campagnes, et qui, privés l'un de l'autre, se refusent au travail avec un nouveau compagnon et se laissent mourir de chagrin.",
    "auteur": "George Sand, La Mare au diable",
    "pointsVigilance": [
      {
        "extrait": "traîné",
        "explication": "Participe passé accordé avec « areau » (masculin singulier)."
      },
      {
        "extrait": "a rendus",
        "explication": "Participe passé avec avoir, accordé avec le COD « qu' » (mis pour « vieux travailleurs », masculin pluriel), placé avant l'auxiliaire."
      },
      {
        "extrait": "privés",
        "explication": "Participe passé adjectival, accordé avec « qui » (masculin pluriel)."
      },
      {
        "extrait": "se laissent mourir",
        "explication": "Verbe pronominal suivi d'un infinitif ; « se » est le pronom réfléchi."
      },
      {
        "extrait": "on les appelle",
        "explication": "Le pronom indéfini « on » est toujours suivi d'un verbe conjugué au singulier."
      }
    ]
  },
  {
    "niveau": "4eme",
    "semaine": 4,
    "titre": "Les Étoiles",
    "texte": "Du temps que je gardais les bêtes sur le Luberon, je restais des semaines entières sans voir âme qui vive, seul dans le pâturage avec mon chien Labri et mes ouailles. De temps en temps l'ermite du Mont-de-l'Ure passait par là pour chercher des simples ou bien j'apercevais la face noire de quelque charbonnier du Piémont.",
    "auteur": "Alphonse Daudet, Les Étoiles (Lettres de mon moulin)",
    "pointsVigilance": [
      {
        "extrait": "gardais, restais",
        "explication": "Imparfait, 1re personne du singulier : terminaison -ais."
      },
      {
        "extrait": "âme qui vive",
        "explication": "Expression figée : le verbe « vivre » est ici au subjonctif présent."
      },
      {
        "extrait": "seul",
        "explication": "Adjectif accordé avec le sujet « je », ici masculin."
      },
      {
        "extrait": "passait",
        "explication": "Imparfait, 3e personne du singulier, sujet « l'ermite »."
      },
      {
        "extrait": "ou bien",
        "explication": "« ou » (choix), à ne pas confondre avec « où » (lieu)."
      }
    ]
  },
  {
    "niveau": "4eme",
    "semaine": 5,
    "titre": "Un mot sur Waterloo",
    "texte": "S'il n'avait pas plu dans la nuit du 17 au 18 juin 1815, l'avenir de l'Europe était changé. Quelques gouttes d'eau de plus ou de moins ont fait pencher Napoléon. Pour que Waterloo fût la fin d'Austerlitz, la providence n'a eu besoin que d'un peu de pluie, et un nuage traversant le ciel à contre-sens de la saison a suffi pour l'écroulement d'un monde.",
    "auteur": "Victor Hugo, Les Misérables",
    "pointsVigilance": [
      {
        "extrait": "n'avait pas plu",
        "explication": "Plus-que-parfait du verbe impersonnel « pleuvoir » : le participe passé « plu » est invariable."
      },
      {
        "extrait": "fût",
        "explication": "Subjonctif imparfait du verbe être après « pour que », à ne pas confondre avec « fut » (passé simple, sans accent circonflexe)."
      },
      {
        "extrait": "ont fait",
        "explication": "Passé composé accordé avec le sujet « Quelques gouttes » (féminin pluriel)."
      },
      {
        "extrait": "a suffi",
        "explication": "Passé composé accordé avec le sujet singulier « un nuage »."
      },
      {
        "extrait": "17 au 18 juin 1815",
        "explication": "Les nombres qui composent une date sont invariables."
      }
    ]
  },
  {
    "niveau": "4eme",
    "semaine": 6,
    "titre": "L'ennui d'Emma",
    "texte": "Elle se demandait s'il n'y aurait pas eu moyen, par d'autres combinaisons du hasard, de rencontrer un autre homme ; et elle cherchait à imaginer quels eussent été ces événements non survenus, cette vie différente, ce mari qu'elle ne connaissait pas. Mais elle, sa vie était froide comme un grenier dont la lucarne est au nord, et l'ennui, araignée silencieuse, filait sa toile dans l'ombre à tous les coins de son cœur.",
    "auteur": "Gustave Flaubert, Madame Bovary",
    "pointsVigilance": [
      {
        "extrait": "eussent été",
        "explication": "Subjonctif plus-que-parfait, forme littéraire équivalente au conditionnel passé."
      },
      {
        "extrait": "qu'elle ne connaissait pas",
        "explication": "Pronom relatif COD « que » élidé devant une voyelle, verbe à l'imparfait."
      },
      {
        "extrait": "dont",
        "explication": "Pronom relatif complément du nom, qui remplace « de laquelle »."
      },
      {
        "extrait": "filait",
        "explication": "Imparfait, 3e personne du singulier, sujet « l'ennui »."
      },
      {
        "extrait": "cœur",
        "explication": "Orthographe avec le œ soudé (o et e collés)."
      }
    ]
  },
  {
    "niveau": "3eme",
    "semaine": 1,
    "titre": "Georges Duroy sort du restaurant",
    "texte": "Quand la caissière lui eut rendu la monnaie de sa pièce de cent sous, Georges Duroy sortit du restaurant. Comme il portait beau par nature et par pose d'ancien sous-officier, il cambra sa taille, frisa sa moustache d'un geste militaire et familier, et jeta sur les dîneurs attardés un regard rapide et circulaire, un de ces regards de joli garçon, qui s'étendent comme des coups d'épervier. Lorsqu'il fut sur le trottoir, il demeura un instant immobile, se demandant ce qu'il allait faire.",
    "auteur": "Guy de Maupassant, Bel-Ami",
    "pointsVigilance": [
      {
        "extrait": "eut rendu",
        "explication": "Passé antérieur (auxiliaire avoir au passé simple + participe passé) : exprime une action achevée juste avant une autre action au passé simple."
      },
      {
        "extrait": "sortit, cambra, frisa, jeta, fut, demeura",
        "explication": "Passé simple, 3e personne du singulier."
      },
      {
        "extrait": "qui s'étendent",
        "explication": "Accord avec l'antécédent « regards » (masculin pluriel), verbe au présent de vérité générale."
      },
      {
        "extrait": "Lorsqu'il",
        "explication": "Conjonction de subordination temporelle « lorsque », avec élision du e devant une voyelle."
      },
      {
        "extrait": "se demandant",
        "explication": "Gérondif d'un verbe pronominal, précédé de « en » sous-entendu."
      }
    ]
  },
  {
    "niveau": "3eme",
    "semaine": 2,
    "titre": "Le château de Combourg",
    "texte": "Le calme morne du château de Combourg était augmenté par l'humeur taciturne et insociable de mon père. Au lieu de resserrer sa famille et ses gens autour de lui, il les avait dispersés à toutes les aires de vent de l'édifice. Sa chambre à coucher était placée dans la petite tour de l'est, et son cabinet dans la petite tour de l'ouest. Les meubles de ce cabinet consistaient en trois chaises de cuir noir et une table couverte de titres et de parchemins.",
    "auteur": "François-René de Chateaubriand, Mémoires d'outre-tombe",
    "pointsVigilance": [
      {
        "extrait": "était augmenté",
        "explication": "Voix passive à l'imparfait, participe passé accordé avec le sujet « Le calme » (masculin singulier)."
      },
      {
        "extrait": "avait dispersés",
        "explication": "Plus-que-parfait : le participe passé s'accorde avec le COD « les » (mis pour « sa famille et ses gens »), placé avant l'auxiliaire avoir."
      },
      {
        "extrait": "l'est, l'ouest",
        "explication": "Points cardinaux employés comme noms communs, sans majuscule ici."
      },
      {
        "extrait": "couverte",
        "explication": "Participe passé adjectival, accordé avec « table » (féminin singulier)."
      },
      {
        "extrait": "insociable",
        "explication": "Un seul « s » après le préfixe « in- »."
      }
    ]
  },
  {
    "niveau": "3eme",
    "semaine": 3,
    "titre": "Dans la plaine rase",
    "texte": "Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Devant lui, il ne voyait même pas le sol noir, et il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues.",
    "auteur": "Émile Zola, Germinal",
    "pointsVigilance": [
      {
        "extrait": "suivait",
        "explication": "Imparfait de description, 3e personne du singulier, sujet « un homme »."
      },
      {
        "extrait": "coupant",
        "explication": "Participe présent, invariable, complément de « route »."
      },
      {
        "extrait": "n'avait...que",
        "explication": "Locution restrictive « ne... que », à ne pas confondre avec une négation totale."
      },
      {
        "extrait": "glacées",
        "explication": "Participe passé adjectival, accordé avec « rafales » (féminin pluriel)."
      },
      {
        "extrait": "d'avoir balayé",
        "explication": "Infinitif passé : le participe passé reste invariable, aucun COD n'est placé avant."
      }
    ]
  },
  {
    "niveau": "3eme",
    "semaine": 4,
    "titre": "L'émeute de Meung",
    "texte": "Le premier lundi du mois d'avril 1625, le bourg de Meung, où naquit l'auteur du Roman de la Rose, semblait être dans une révolution aussi entière que si les huguenots en fussent venus faire une seconde Rochelle. Plusieurs bourgeois, voyant s'enfuir les femmes du côté de la Grande-Rue, entendant les enfants crier sur le seuil des portes, se hâtaient d'endosser la cuirasse et, appuyant leur contenance quelque peu incertaine d'un mousquet ou d'une pertuisane, se dirigeaient vers l'hôtellerie du Franc Meunier, devant laquelle s'empressait, en grossissant de minute en minute, un groupe compact, bruyant et plein de curiosité.",
    "auteur": "Alexandre Dumas, Les Trois Mousquetaires",
    "pointsVigilance": [
      {
        "extrait": "naquit",
        "explication": "Passé simple irrégulier du verbe naître, 3e personne du singulier."
      },
      {
        "extrait": "fussent venus",
        "explication": "Subjonctif plus-que-parfait après « que si », par concordance des temps dans un récit au passé."
      },
      {
        "extrait": "voyant, entendant, appuyant, grossissant",
        "explication": "Participes présents, invariables."
      },
      {
        "extrait": "se hâtaient",
        "explication": "Verbe pronominal à l'imparfait ; ne pas oublier l'accent circonflexe du verbe « hâter »."
      },
      {
        "extrait": "devant laquelle",
        "explication": "Pronom relatif composé féminin singulier, reprend « l'hôtellerie »."
      }
    ]
  },
  {
    "niveau": "3eme",
    "semaine": 5,
    "titre": "La petite ville de Verrières",
    "texte": "La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches avec leurs toits pointus de tuiles rouges s'étendent sur la pente d'une colline, dont des touffes de vigoureux châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications bâties jadis par les Espagnols, et maintenant ruinées. Verrières est abritée du côté du nord par une haute montagne, c'est une des branches du Jura.",
    "auteur": "Stendhal, Le Rouge et le Noir",
    "pointsVigilance": [
      {
        "extrait": "dont",
        "explication": "Pronom relatif complément, à ne pas confondre avec le nom « don »."
      },
      {
        "extrait": "bâties",
        "explication": "Participe passé accordé avec « fortifications » (féminin pluriel)."
      },
      {
        "extrait": "ruinées",
        "explication": "Participe passé adjectival, coordonné à « bâties », même accord."
      },
      {
        "extrait": "c'est",
        "explication": "Contraction de « cela est », à ne pas confondre avec « s'est » ou « ses »."
      },
      {
        "extrait": "au-dessous",
        "explication": "Adverbe composé de lieu, qui s'écrit avec un trait d'union."
      }
    ]
  },
  {
    "niveau": "3eme",
    "semaine": 6,
    "titre": "Le départ de Jeanne",
    "texte": "Jeanne, ayant fini ses malles, s'approcha de la fenêtre, mais la pluie ne cessait pas. L'averse, toute la nuit, avait sonné contre les carreaux et les toits. Le ciel bas et chargé d'eau semblait crevé, se vidant sur la terre, la délayant en bouillie, la fondant comme du sucre. Des rafales passaient pleines d'une chaleur lourde. Le ronflement des ruisseaux débordés emplissait les rues désertes où les maisons, comme des éponges, buvaient l'humidité qui pénétrait au dedans et faisait suer les murs de la cave au grenier.",
    "auteur": "Guy de Maupassant, Une Vie",
    "pointsVigilance": [
      {
        "extrait": "ayant fini",
        "explication": "Participe présent composé, invariable, formé de « ayant » + participe passé."
      },
      {
        "extrait": "toute la nuit",
        "explication": "« toute » est un adjectif indéfini accordé au féminin singulier avec « nuit »."
      },
      {
        "extrait": "se vidant, la délayant, la fondant",
        "explication": "Participes présents coordonnés, invariables ; « la » est un pronom COD mis pour « la terre »."
      },
      {
        "extrait": "où les maisons",
        "explication": "Pronom relatif de lieu « où »."
      },
      {
        "extrait": "débordés",
        "explication": "Participe passé adjectival, accordé avec « ruisseaux » (masculin pluriel)."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 7,
    "titre": "Le Petit Chaperon rouge",
    "texte": "Il était une fois une petite fille de village, la plus jolie qu'on eût su voir : sa mère en était folle, et sa mère-grand plus folle encore. Cette bonne femme lui fit faire un petit chaperon rouge qui lui seyait si bien que partout on l'appelait le Petit Chaperon rouge.",
    "auteur": "Charles Perrault, Le Petit Chaperon rouge (Contes de ma mère l'Oye)",
    "pointsVigilance": [
      {
        "extrait": "qu'on eût su voir",
        "explication": "Subjonctif plus-que-parfait dans une tournure superlative littéraire, après « la plus jolie que »."
      },
      {
        "extrait": "sa mère-grand",
        "explication": "Nom composé ancien pour « grand-mère », qui s'écrit avec un trait d'union."
      },
      {
        "extrait": "fit faire",
        "explication": "Passé simple du verbe faire (3e pers. du singulier) suivi d'un infinitif : construction causative."
      },
      {
        "extrait": "seyait",
        "explication": "Imparfait du verbe rare « seoir » (convenir), à ne pas confondre avec « s'asseyait »."
      },
      {
        "extrait": "si bien que",
        "explication": "Locution exprimant la conséquence, à ne pas confondre avec « ainsi que »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 8,
    "titre": "La Cigale et la Fourmi",
    "texte": "La Cigale, ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue : pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine, la priant de lui prêter quelque grain pour subsister jusqu'à la saison nouvelle.",
    "auteur": "Jean de La Fontaine, Fables (La Cigale et la Fourmi)",
    "pointsVigilance": [
      {
        "extrait": "ayant chanté",
        "explication": "Participe présent composé (auxiliaire « ayant » + participe passé), toujours invariable."
      },
      {
        "extrait": "fut venue",
        "explication": "Passé simple du verbe être suivi d'un participe passé accordé avec « bise » (féminin singulier)."
      },
      {
        "extrait": "dépourvue",
        "explication": "Participe passé adjectival accordé avec « Cigale » (féminin singulier)."
      },
      {
        "extrait": "alla",
        "explication": "Passé simple du verbe aller, 3e personne du singulier."
      },
      {
        "extrait": "la priant",
        "explication": "« la » est un pronom COD mis pour « la Fourmi », devant un participe présent invariable."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 9,
    "titre": "Un enfant trouvé",
    "texte": "Je suis un enfant trouvé. Mais jusqu'à l'âge de huit ans, j'ai cru comme les autres enfants que j'avais moi aussi une mère, car, lorsque je pleurais, il y avait une femme qui me serrait si tendrement dans ses bras que mes larmes s'arrêtaient bien vite.",
    "auteur": "Hector Malot, Sans Famille",
    "pointsVigilance": [
      {
        "extrait": "j'ai cru",
        "explication": "Passé composé du verbe croire : le participe passé reste invariable, aucun COD placé avant."
      },
      {
        "extrait": "qui me serrait",
        "explication": "Le verbe s'accorde avec l'antécédent du pronom relatif « qui », ici « une femme »."
      },
      {
        "extrait": "si tendrement...que",
        "explication": "Locution exprimant la conséquence, encadrant un adverbe en -ment."
      },
      {
        "extrait": "s'arrêtaient",
        "explication": "Verbe pronominal à l'imparfait, accordé avec le sujet « mes larmes » (pluriel)."
      },
      {
        "extrait": "lorsque",
        "explication": "Conjonction de subordination temporelle, à ne pas confondre avec « lors que » en deux mots."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 10,
    "titre": "Le retour du Pharaon",
    "texte": "Le 24 février 1815, la vigie de Notre-Dame de la Garde signala le trois-mâts le Pharaon, venant de Smyrne, Trieste et Naples. Comme d'habitude, un pilote côtier partit aussitôt du port, rasa le château d'If, et alla accoster le navire entre le cap de Morgion et l'île de Rion.",
    "auteur": "Alexandre Dumas, Le Comte de Monte-Cristo",
    "pointsVigilance": [
      {
        "extrait": "signala, partit, rasa, alla",
        "explication": "Passé simple, 3e personne du singulier, verbes du 1er groupe et du 3e groupe."
      },
      {
        "extrait": "trois-mâts",
        "explication": "Nom composé invariable même employé au singulier ici pour désigner un seul navire."
      },
      {
        "extrait": "24 février 1815",
        "explication": "Dans une date, les nombres sont invariables et le nom du mois ne prend pas de majuscule."
      },
      {
        "extrait": "château d'If",
        "explication": "Nom propre : l'article « le » s'élide devant la voyelle du nom « If »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 11,
    "titre": "Le maquis corse",
    "texte": "En sortant de Porto-Vecchio et se dirigeant au nord-ouest vers l'intérieur de l'île, on voit le terrain s'élever assez rapidement, et, après trois heures de marche par des sentiers tortueux, obstrués par de gros quartiers de roche, on se trouve sur le bord d'un maquis très étendu.",
    "auteur": "Prosper Mérimée, Mateo Falcone",
    "pointsVigilance": [
      {
        "extrait": "En sortant, se dirigeant",
        "explication": "Gérondif et participe présent, formes invariables."
      },
      {
        "extrait": "obstrués",
        "explication": "Participe passé adjectival accordé avec « sentiers » (masculin pluriel)."
      },
      {
        "extrait": "on voit, on se trouve",
        "explication": "Le pronom indéfini « on » est toujours suivi d'un verbe conjugué au singulier."
      },
      {
        "extrait": "très étendu",
        "explication": "Accord de l'adjectif « étendu » avec le nom masculin singulier « maquis »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 12,
    "titre": "La dernière classe",
    "texte": "Ce matin-là, j'étais très en retard pour aller à l'école, et j'avais grand-peur d'être grondé, d'autant que M. Hamel nous avait dit qu'il nous interrogerait sur les participes, et je n'en savais pas le premier mot.",
    "auteur": "Alphonse Daudet, La Dernière Classe (Contes du lundi)",
    "pointsVigilance": [
      {
        "extrait": "j'étais, j'avais",
        "explication": "Imparfait, 1re personne du singulier, terminaison -ais."
      },
      {
        "extrait": "d'être grondé",
        "explication": "Infinitif passif : « grondé » s'accorde avec le sujet masculin « je »."
      },
      {
        "extrait": "interrogerait",
        "explication": "Conditionnel présent employé pour exprimer un futur dans le passé, dans le discours indirect."
      },
      {
        "extrait": "n'en savais pas",
        "explication": "Négation « ne...pas » encadrant le verbe, avec le pronom « en »."
      },
      {
        "extrait": "Ce matin-là",
        "explication": "Adverbe composé qui s'écrit avec un trait d'union."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 13,
    "titre": "Une jolie fille",
    "texte": "C'était une de ces jolies et charmantes filles, nées, comme par une erreur du destin, dans une famille d'employés. Elle n'avait pas de dot, pas d'espérances, aucun moyen d'être connue, comprise, aimée, épousée par un homme riche et distingué, et elle se laissa marier avec un petit commis du ministère.",
    "auteur": "Guy de Maupassant, La Parure",
    "pointsVigilance": [
      {
        "extrait": "nées",
        "explication": "Participe passé adjectival accordé avec « filles » (féminin pluriel)."
      },
      {
        "extrait": "connue, comprise, aimée, épousée",
        "explication": "Participes passés adjectivaux coordonnés, tous accordés au féminin singulier avec « elle »."
      },
      {
        "extrait": "se laissa marier",
        "explication": "Passé simple d'un verbe pronominal suivi d'un infinitif."
      },
      {
        "extrait": "aucun moyen",
        "explication": "Déterminant négatif « aucun », toujours suivi d'un nom au singulier."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 14,
    "titre": "Le jour des cloches",
    "texte": "Il y a aujourd'hui trois cent quarante-huit ans, six mois et dix-neuf jours, que les Parisiens s'éveillèrent au bruit de toutes les cloches sonnant à grande volée dans la triple enceinte de la Cité, de l'Université et de la Ville.",
    "auteur": "Victor Hugo, Notre-Dame de Paris",
    "pointsVigilance": [
      {
        "extrait": "trois cent quarante-huit",
        "explication": "« cent » reste invariable ici car il est suivi d'un autre nombre."
      },
      {
        "extrait": "s'éveillèrent",
        "explication": "Passé simple d'un verbe pronominal, 3e personne du pluriel, accordé avec « les Parisiens »."
      },
      {
        "extrait": "sonnant",
        "explication": "Participe présent, invariable, complément de « cloches »."
      },
      {
        "extrait": "que",
        "explication": "Conjonction reprenant la tournure « Il y a...que » pour exprimer la durée."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 15,
    "titre": "La servante Félicité",
    "texte": "Pendant un demi-siècle, les bourgeoises de Pont-l'Évêque envièrent à Mme Aubain sa servante Félicité. Pour cent francs par an, elle faisait la cuisine et le ménage, cousait, lavait, repassait, savait brider un cheval, engraisser les volailles, battre le beurre, et resta fidèle à sa maîtresse, qui n'était pas une personne agréable.",
    "auteur": "Gustave Flaubert, Un cœur simple (Trois Contes)",
    "pointsVigilance": [
      {
        "extrait": "envièrent",
        "explication": "Passé simple, 3e personne du pluriel, du verbe envier (1er groupe)."
      },
      {
        "extrait": "faisait, cousait, lavait, repassait, savait",
        "explication": "Imparfait, 3e personne du singulier, même sujet « elle » répété par ellipse."
      },
      {
        "extrait": "resta",
        "explication": "Passé simple qui rompt la série de verbes à l'imparfait pour marquer une action ponctuelle."
      },
      {
        "extrait": "qui n'était pas",
        "explication": "Pronom relatif sujet suivi d'un verbe à l'imparfait et d'une négation."
      },
      {
        "extrait": "cœur",
        "explication": "Orthographe avec le œ soudé (o et e collés)."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 16,
    "titre": "La pension Vauquer",
    "texte": "Cette pièce est dans tout son lustre au moment où, vers sept heures du matin, le chat de madame Vauquer précède sa maîtresse, sautant sur les buffets, y flairant le lait que contiennent plusieurs jattes couvertes d'assiettes, et faisant entendre son ronron matinal.",
    "auteur": "Honoré de Balzac, Le Père Goriot",
    "pointsVigilance": [
      {
        "extrait": "précède",
        "explication": "Présent de narration, 3e personne du singulier, sujet « le chat »."
      },
      {
        "extrait": "sautant, flairant, faisant",
        "explication": "Participes présents, invariables, coordonnés."
      },
      {
        "extrait": "que contiennent plusieurs jattes",
        "explication": "Sujet inversé : « plusieurs jattes » (pluriel) est placé après le verbe « contiennent »."
      },
      {
        "extrait": "couvertes",
        "explication": "Participe passé adjectival accordé avec « jattes » (féminin pluriel)."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 17,
    "titre": "Phileas Fogg",
    "texte": "Mr. Phileas Fogg habitait, en 1872, la maison du n° 7, Saville-row, Burlington Gardens, maison dans laquelle Sheridan mourut en 1814. C'était le personnage le plus énigmatique et le plus remarquable du Reform-Club, bien qu'il semblât prendre à tâche de ne rien faire qui pût attirer l'attention.",
    "auteur": "Jules Verne, Le Tour du monde en quatre-vingts jours",
    "pointsVigilance": [
      {
        "extrait": "mourut",
        "explication": "Passé simple irrégulier du verbe mourir, 3e personne du singulier."
      },
      {
        "extrait": "bien qu'il semblât",
        "explication": "Subjonctif imparfait après la conjonction « bien que »."
      },
      {
        "extrait": "pût",
        "explication": "Subjonctif imparfait du verbe pouvoir, avec un accent circonflexe sur le u."
      },
      {
        "extrait": "dans laquelle",
        "explication": "Pronom relatif composé féminin singulier, mis pour « maison »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 18,
    "titre": "Le Lac",
    "texte": "Ainsi, toujours poussés vers de nouveaux rivages, dans la nuit éternelle emportés sans retour, ne pourrons-nous jamais sur l'océan des âges jeter l'ancre un seul jour ? Ô lac ! l'année à peine a fini sa carrière, et près des flots chéris qu'elle devait revoir, je viens seul m'asseoir sur cette pierre où tu la vis s'asseoir !",
    "auteur": "Alphonse de Lamartine, Méditations poétiques (Le Lac)",
    "pointsVigilance": [
      {
        "extrait": "poussés, emportés",
        "explication": "Participes passés adjectivaux, accordés au masculin pluriel avec le sujet « nous » sous-entendu."
      },
      {
        "extrait": "pourrons-nous",
        "explication": "Futur avec inversion du sujet dans une phrase interrogative."
      },
      {
        "extrait": "a fini",
        "explication": "Passé composé, 3e personne du singulier, sujet « l'année »."
      },
      {
        "extrait": "qu'elle devait revoir",
        "explication": "Pronom relatif COD « que » élidé, suivi d'un verbe à l'imparfait."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 19,
    "titre": "L'arrivée de Denise",
    "texte": "Denise était venue à pied de la gare Saint-Lazare, où un train de Cherbourg l'avait débarquée avec ses deux frères, après une nuit passée sur la dure banquette d'un wagon de troisième classe. Elle cherchait la rue de la Michodière, où son oncle Baudu demeurait, et elle n'osait se hasarder, embarrassée de son maigre paquet.",
    "auteur": "Émile Zola, Au Bonheur des Dames",
    "pointsVigilance": [
      {
        "extrait": "était venue",
        "explication": "Plus-que-parfait avec l'auxiliaire être, participe passé accordé avec « Denise » (féminin singulier)."
      },
      {
        "extrait": "l'avait débarquée",
        "explication": "Plus-que-parfait avec avoir : le participe passé s'accorde avec le COD « l' » (Denise) placé avant l'auxiliaire."
      },
      {
        "extrait": "passée",
        "explication": "Participe passé adjectival accordé avec « nuit » (féminin singulier)."
      },
      {
        "extrait": "où",
        "explication": "Pronom relatif de lieu, employé deux fois, à ne pas confondre avec « ou »."
      },
      {
        "extrait": "n'osait",
        "explication": "Imparfait avec négation, 3e personne du singulier, sujet « elle »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 20,
    "titre": "L'empire de la France",
    "texte": "La France possédait autrefois, dans l'Amérique septentrionale, un vaste empire qui s'étendait depuis le Labrador jusqu'aux Florides, et depuis les rivages de l'Atlantique jusqu'aux lacs les plus reculés du haut Canada. Quatre grands fleuves, ayant leurs sources dans les mêmes montagnes, divisaient ces vastes régions.",
    "auteur": "François-René de Chateaubriand, Atala",
    "pointsVigilance": [
      {
        "extrait": "qui s'étendait",
        "explication": "Le verbe s'accorde avec l'antécédent du pronom relatif « qui », ici « empire » (masculin singulier)."
      },
      {
        "extrait": "ayant leurs sources",
        "explication": "Participe présent composé, invariable."
      },
      {
        "extrait": "divisaient",
        "explication": "Imparfait, 3e personne du pluriel, accordé avec le sujet « Quatre grands fleuves »."
      },
      {
        "extrait": "jusqu'aux",
        "explication": "Contraction de « jusque » et de la préposition contractée « aux » (à + les)."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 21,
    "titre": "La douleur de Calypso",
    "texte": "Calypso ne pouvait se consoler du départ d'Ulysse. Dans sa douleur, elle se trouvait malheureuse d'être immortelle, et sa grotte ne résonnait plus de son chant : les nymphes qui la servaient n'osaient lui parler, et elle demeurait seule la plupart du temps sur le rivage de la mer, où elle versait des ruisseaux de larmes.",
    "auteur": "Fénelon, Les Aventures de Télémaque",
    "pointsVigilance": [
      {
        "extrait": "ne pouvait se consoler",
        "explication": "Imparfait suivi d'un verbe pronominal à l'infinitif, après un modal."
      },
      {
        "extrait": "résonnait",
        "explication": "Imparfait, 3e personne du singulier, sujet « sa grotte »."
      },
      {
        "extrait": "qui la servaient",
        "explication": "Le verbe s'accorde avec l'antécédent « les nymphes » (féminin pluriel) ; « la » est un pronom COD mis pour Calypso."
      },
      {
        "extrait": "n'osaient",
        "explication": "Négation à l'imparfait, 3e personne du pluriel."
      },
      {
        "extrait": "où elle versait",
        "explication": "Pronom relatif de lieu « où », à ne pas confondre avec la conjonction « ou »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 22,
    "titre": "Phileas Fogg",
    "texte": "Mr. Phileas Fogg habitait, en 1872, la maison numéro sept, Saville-row, Burlington Gardens, maison dans laquelle Sheridan mourut en 1814. C'était un des membres les plus notables et les plus singuliers du Reform-Club de Londres, bien qu'il semblât toujours prendre à tâche de ne rien faire qui pût attirer l'attention.",
    "auteur": "Jules Verne, Le Tour du monde en quatre-vingts jours",
    "pointsVigilance": [
      {
        "extrait": "Saville-row",
        "explication": "Nom propre étranger composé, avec trait d'union et majuscule uniquement au premier mot."
      },
      {
        "extrait": "mourut",
        "explication": "Passé simple du verbe mourir, 3e personne du singulier."
      },
      {
        "extrait": "semblât",
        "explication": "Imparfait du subjonctif après « bien que », terminaison en -ât avec accent circonflexe."
      },
      {
        "extrait": "qui pût attirer",
        "explication": "Subjonctif imparfait du verbe pouvoir, avec accent circonflexe sur le u."
      },
      {
        "extrait": "Reform-Club",
        "explication": "Nom propre composé anglais conservé tel quel, avec majuscules aux deux éléments."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 23,
    "titre": "Le professeur Lidenbrock",
    "texte": "Le 24 mai 1863, un dimanche, mon oncle, le professeur Lidenbrock, revint précipitamment vers sa petite maison, sise au numéro 19 de Königstrasse, l'une des plus anciennes rues du vieux quartier de Hambourg. La bonne Marthe dut se croire fort en retard, car le dîner commençait à peine à chanter sur le fourneau de la cuisine.",
    "auteur": "Jules Verne, Voyage au centre de la Terre",
    "pointsVigilance": [
      {
        "extrait": "revint",
        "explication": "Passé simple du verbe revenir, 3e personne du singulier."
      },
      {
        "extrait": "sise",
        "explication": "Participe passé rare du verbe seoir, accordé au féminin singulier avec « maison »."
      },
      {
        "extrait": "dut",
        "explication": "Passé simple du verbe devoir, avec accent circonflexe sur le u."
      },
      {
        "extrait": "commençait",
        "explication": "Imparfait avec cédille sous le c devant a, pour conserver le son [s]."
      },
      {
        "extrait": "dîner",
        "explication": "Nom commun avec accent circonflexe sur le i."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 24,
    "titre": "La leçon de la tortue",
    "auteur": "Jean de La Fontaine, Le Lièvre et la Tortue",
    "texte": "Rien ne sert de courir ; il faut partir à point. Le lièvre et la tortue en sont un témoignage. Gageons, dit celle-ci, que vous n'atteindrez point sitôt que moi ce but. Sitôt ? Êtes-vous sage ? repartit l'animal léger. Ma commère, il vous faut purger avec quatre grains d'ellébore.",
    "pointsVigilance": [
      {
        "extrait": "Rien ne sert",
        "explication": "Verbe « servir » : « sert » avec un t final (il sert), à ne pas confondre avec « serre » du verbe serrer."
      },
      {
        "extrait": "partir à point",
        "explication": "« à » préposition prend un accent grave ; « a » sans accent serait le verbe avoir."
      },
      {
        "extrait": "n'atteindrez point",
        "explication": "« point » est ici une négation littéraire (= pas) ; « atteindrez » prend deux t."
      },
      {
        "extrait": "Êtes-vous",
        "explication": "Accent circonflexe sur « Êtes » (verbe être) et trait d'union dans la question inversée."
      },
      {
        "extrait": "témoignage",
        "explication": "Attention à l'orthographe : t-é-m-o-i-g-n-a-g-e."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 25,
    "titre": "Les cloches de Paris",
    "texte": "Il y a aujourd'hui trois cent quarante-huit ans six mois et dix-neuf jours que les Parisiens s'éveillèrent au bruit de toutes les cloches sonnant à grande volée dans la triple enceinte de la Cité, de l'Université et de la Ville. Ce n'est cependant pas un jour dont l'histoire ait gardé souvenir que le 6 janvier 1482.",
    "auteur": "Victor Hugo, Notre-Dame de Paris",
    "pointsVigilance": [
      {
        "extrait": "trois cent quarante-huit",
        "explication": "« Cent » reste invariable ici car il est suivi d'un autre nombre (quarante-huit)."
      },
      {
        "extrait": "s'éveillèrent",
        "explication": "Passé simple d'un verbe pronominal, 3e personne du pluriel, sujet « les Parisiens »."
      },
      {
        "extrait": "sonnant",
        "explication": "Participe présent, toujours invariable, complément de « cloches »."
      },
      {
        "extrait": "dont",
        "explication": "Pronom relatif complément, à ne pas confondre avec le nom « don »."
      },
      {
        "extrait": "ait gardé",
        "explication": "Subjonctif passé après la tournure emphatique « ce n'est... que »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 26,
    "titre": "Le père Barbeau",
    "texte": "Le père Barbeau de la Cosse n'était pas mal dans ses affaires, à preuve qu'il était du conseil municipal de sa commune. Il avait deux champs qui lui donnaient la nourriture de sa famille, et du profit par-dessus le marché.",
    "auteur": "George Sand, La Petite Fadette",
    "pointsVigilance": [
      {
        "extrait": "n'était pas mal",
        "explication": "Négation classique « ne... pas » avec l'imparfait du verbe être."
      },
      {
        "extrait": "à preuve qu'il était",
        "explication": "Locution figée introduisant une justification, suivie de l'indicatif."
      },
      {
        "extrait": "qui lui donnaient",
        "explication": "Le verbe s'accorde avec l'antécédent « champs » (masculin pluriel)."
      },
      {
        "extrait": "par-dessus le marché",
        "explication": "Expression figée qui s'écrit avec un trait d'union entre « par » et « dessus »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 27,
    "titre": "Naissance du Petit Chose",
    "texte": "Je suis né le 13 mai 18…, dans une ville du Languedoc où l'on trouve, comme dans toutes les villes du Midi, beaucoup de soleil, pas mal de poussière, un couvent de Carmélites et deux ou trois monuments romains. Mon père, M. Eyssette, qui faisait à cette époque le commerce des foulards, avait, aux portes de la ville, une grande fabrique.",
    "auteur": "Alphonse Daudet, Le Petit Chose",
    "pointsVigilance": [
      {
        "extrait": "né",
        "explication": "Participe passé du verbe naître, employé avec l'auxiliaire être, accordé avec « je » (masculin)."
      },
      {
        "extrait": "où l'on trouve",
        "explication": "Pronom relatif de lieu « où », suivi du pronom indéfini « on » précédé d'un l' euphonique."
      },
      {
        "extrait": "pas mal de",
        "explication": "Locution familière signifiant « beaucoup de », suivie d'un nom sans article."
      },
      {
        "extrait": "qui faisait",
        "explication": "Pronom relatif sujet, verbe à l'imparfait accordé avec « M. Eyssette »."
      },
      {
        "extrait": "avait...une grande fabrique",
        "explication": "Verbe avoir à l'imparfait, dont le complément encadre l'incise « aux portes de la ville »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 28,
    "titre": "L'héritage du meunier",
    "auteur": "Charles Perrault, Le Chat botté",
    "texte": "Un meunier ne laissa pour tous biens, à trois enfants qu'il avait, que son moulin, son âne et son chat. Les partages furent bientôt faits : ni le notaire ni le procureur n'y furent appelés. Ils auraient eu bientôt mangé tout le pauvre patrimoine.",
    "pointsVigilance": [
      {
        "extrait": "laissa",
        "explication": "Passé simple du verbe laisser : « il laissa », avec deux s et sans accent."
      },
      {
        "extrait": "pour tous biens",
        "explication": "« tous » et « biens » au pluriel : l'ensemble de ses possessions."
      },
      {
        "extrait": "qu'il avait",
        "explication": "Élision de « que » devant « il », avec apostrophe."
      },
      {
        "extrait": "furent",
        "explication": "Passé simple du verbe être à la 3e personne du pluriel : ils furent."
      },
      {
        "extrait": "ni le notaire ni le procureur",
        "explication": "Négation double « ni... ni... » : chaque élément est précédé de « ni »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 29,
    "titre": "L'enfant trouvé",
    "texte": "Je suis un enfant trouvé. Mais jusqu'à huit ans j'ai cru que, comme tous les autres enfants, j'avais une mère, car lorsque je pleurais, il y avait une femme qui me serrait si doucement dans ses bras, en me berçant, que mes larmes s'arrêtaient de couler.",
    "auteur": "Hector Malot, Sans Famille",
    "pointsVigilance": [
      {
        "extrait": "j'ai cru",
        "explication": "Passé composé, participe passé invariable du verbe croire, sans COD placé avant."
      },
      {
        "extrait": "lorsque je pleurais",
        "explication": "Conjonction de subordination temporelle suivie de l'imparfait."
      },
      {
        "extrait": "qui me serrait",
        "explication": "Pronom relatif sujet, verbe à l'imparfait accordé avec « une femme »."
      },
      {
        "extrait": "en me berçant",
        "explication": "Gérondif formé de « en » + participe présent, invariable."
      },
      {
        "extrait": "s'arrêtaient",
        "explication": "Verbe pronominal à l'imparfait, accordé avec « mes larmes » (féminin pluriel)."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 30,
    "titre": "La tempête en ballon",
    "texte": "Remontons-nous ? Non ! Au contraire ! Nous descendons ! Pis que cela, monsieur Cyrus ! Nous tombons ! Au nom du ciel ! Jetez du lest ! Voilà le dernier sac vidé ! Le ballon se relève-t-il ? Non ! J'entends comme un clapotement de vagues ! La mer est sous la nacelle ! Elle ne peut être à cinq cents pieds de nous !",
    "auteur": "Jules Verne, L'Île mystérieuse",
    "pointsVigilance": [
      {
        "extrait": "Remontons-nous ?",
        "explication": "Inversion du sujet à la forme interrogative, avec trait d'union."
      },
      {
        "extrait": "Jetez",
        "explication": "Impératif présent, 2e personne du pluriel du verbe jeter."
      },
      {
        "extrait": "vidé",
        "explication": "Participe passé employé comme adjectif, accordé avec « sac » (masculin singulier)."
      },
      {
        "extrait": "se relève-t-il",
        "explication": "Forme interrogative avec « t » euphonique entre le verbe et le pronom sujet inversé."
      },
      {
        "extrait": "cinq cents pieds",
        "explication": "« Cents » prend un s car il n'est suivi d'aucun autre nombre."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 31,
    "titre": "La villa de Tartarin",
    "texte": "Ma première visite à Tartarin de Tarascon est restée dans ma vie comme une date inoubliable ; il y a douze ou quinze ans de cela, mais je m'en souviens mieux que d'hier. L'intrépide Tartarin habitait alors, à l'entrée de la ville, la troisième maison à main gauche sur le chemin d'Avignon.",
    "auteur": "Alphonse Daudet, Tartarin de Tarascon",
    "pointsVigilance": [
      {
        "extrait": "est restée",
        "explication": "Passé composé avec l'auxiliaire être, participe passé accordé avec le sujet « visite » (féminin)."
      },
      {
        "extrait": "je m'en souviens",
        "explication": "Verbe pronominal au présent, avec le pronom « en » placé avant le verbe."
      },
      {
        "extrait": "L'intrépide",
        "explication": "Élision du déterminant devant une voyelle."
      },
      {
        "extrait": "habitait",
        "explication": "Imparfait, 3e personne du singulier, terminaison -ait."
      },
      {
        "extrait": "à main gauche",
        "explication": "Expression figée sans article devant « main »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 32,
    "titre": "Le cardinal songeur",
    "texte": "Dans une chambre du palais Cardinal que nous connaissons déjà, près d'une table à coins de vermeil, chargée de papiers et de livres, un homme était assis la tête appuyée dans ses deux mains. Derrière lui était une vaste cheminée, rouge de feu, et dont les tisons enflammés s'écroulaient sur de larges chenets dorés.",
    "auteur": "Alexandre Dumas, Vingt ans après",
    "pointsVigilance": [
      {
        "extrait": "chargée",
        "explication": "Participe passé adjectival, accordé avec « table » (féminin singulier)."
      },
      {
        "extrait": "appuyée",
        "explication": "Participe passé adjectival, accordé avec « tête » (féminin singulier)."
      },
      {
        "extrait": "dont",
        "explication": "Pronom relatif complément, mis pour « de laquelle » (la cheminée)."
      },
      {
        "extrait": "enflammés",
        "explication": "Participe passé adjectival, accordé avec « tisons » (masculin pluriel)."
      },
      {
        "extrait": "s'écroulaient",
        "explication": "Verbe pronominal à l'imparfait, 3e personne du pluriel."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 33,
    "titre": "Le portrait de Quasimodo",
    "texte": "Il baptisa son enfant adoptif, et le nomma Quasimodo, soit qu'il voulût marquer par là le jour où il l'avait trouvé, soit qu'il voulût caractériser par ce nom à quel point la pauvre petite créature était incomplète et à peine ébauchée. En effet, Quasimodo, borgne, bossu, cagneux, n'était guère qu'un à peu près.",
    "auteur": "Victor Hugo, Notre-Dame de Paris",
    "pointsVigilance": [
      {
        "extrait": "baptisa, nomma",
        "explication": "Passé simple, 3e personne du singulier, verbes du premier groupe."
      },
      {
        "extrait": "soit qu'il voulût...soit qu'il voulût",
        "explication": "Imparfait du subjonctif répété après la locution « soit que... soit que »."
      },
      {
        "extrait": "où il l'avait trouvé",
        "explication": "Plus-que-parfait, participe passé invariable car le COD « l' » représente Quasimodo (masculin)."
      },
      {
        "extrait": "borgne, bossu, cagneux",
        "explication": "Adjectifs juxtaposés séparés par des virgules, tous accordés au masculin singulier."
      },
      {
        "extrait": "n'était guère qu'",
        "explication": "Locution restrictive équivalente à « ne... que », à ne pas confondre avec une négation totale."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 34,
    "titre": "Le village de Chavanon",
    "texte": "Mon village, ou pour parler plus justement, le village où j'ai été élevé, car je n'ai pas eu de village à moi, pas de lieu de naissance, pas plus que je n'ai eu de père et de mère, le village enfin où j'ai passé mon enfance se nomme Chavanon ; c'est l'un des plus pauvres du centre de la France.",
    "auteur": "Hector Malot, Sans Famille",
    "pointsVigilance": [
      {
        "extrait": "où j'ai été élevé",
        "explication": "Passé composé à la voix passive, participe passé accordé avec le sujet « je » (masculin)."
      },
      {
        "extrait": "n'ai pas eu",
        "explication": "Passé composé négatif du verbe avoir, participe passé invariable « eu »."
      },
      {
        "extrait": "pas plus que",
        "explication": "Locution comparative de négation."
      },
      {
        "extrait": "se nomme",
        "explication": "Verbe pronominal au présent, 3e personne du singulier."
      },
      {
        "extrait": "c'est",
        "explication": "Contraction de « cela est », à ne pas confondre avec « s'est » ou « ses »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 35,
    "titre": "Le jour de marché",
    "texte": "Sur toutes les routes autour de Goderville, les paysans et leurs femmes s'en venaient vers le bourg ; car c'était jour de marché. Les mâles allaient, à pas tranquilles, tout le corps en avant à chaque mouvement de leurs longues jambes torses, déformées par les rudes travaux, par la pesée sur la charrue.",
    "auteur": "Guy de Maupassant, La Ficelle",
    "pointsVigilance": [
      {
        "extrait": "s'en venaient",
        "explication": "Verbe pronominal à l'imparfait, avec le pronom « en » incorporé."
      },
      {
        "extrait": "car c'était",
        "explication": "Conjonction de coordination « car », à ne pas confondre avec le nom « char »."
      },
      {
        "extrait": "allaient",
        "explication": "Imparfait du verbe aller, 3e personne du pluriel."
      },
      {
        "extrait": "déformées",
        "explication": "Participe passé adjectival, accordé avec « jambes » (féminin pluriel)."
      },
      {
        "extrait": "torses",
        "explication": "Adjectif accordé au féminin pluriel, signifiant ici « tordues »."
      }
    ]
  },
  {
    "niveau": "5eme",
    "semaine": 36,
    "titre": "Le naufrage du ballon",
    "texte": "La nacelle avait contenu cinq passagers, plus un chien, et le ballon n'en jetait que quatre sur le rivage. Le passager manquant avait évidemment été enlevé par le coup de mer qui venait de frapper le filet.",
    "auteur": "Jules Verne, L'Île mystérieuse",
    "pointsVigilance": [
      {
        "extrait": "avait contenu",
        "explication": "Plus-que-parfait, participe passé invariable, aucun COD placé avant l'auxiliaire."
      },
      {
        "extrait": "n'en jetait que",
        "explication": "Locution restrictive « ne... que » associée au pronom « en »."
      },
      {
        "extrait": "avait...été enlevé",
        "explication": "Plus-que-parfait à la voix passive, participe passé accordé avec le sujet « le passager manquant »."
      },
      {
        "extrait": "qui venait de frapper",
        "explication": "Pronom relatif sujet suivi du passé récent à l'imparfait « venait de »."
      }
    ]
  }
] as Dictee[];

export function dicteesDe(niveau: Niveau): Dictee[] {
  return DICTEES.filter((d) => d.niveau === niveau);
}
