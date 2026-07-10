import type { Chapitre, MatiereId, Niveau } from "../types";

import ch_chinois_3eme_hsk4_culture from "./chinois--3eme--hsk4-culture";
import ch_chinois_4eme_hsk3_voyages from "./chinois--4eme--hsk3-voyages";
import ch_chinois_5eme_hsk2_achats from "./chinois--5eme--hsk2-achats";
import ch_chinois_5eme_hsk2_famille_ecole from "./chinois--5eme--hsk2-famille-ecole";
import ch_chinois_5eme_hsk2_quotidien from "./chinois--5eme--hsk2-quotidien";
import ch_chinois_5eme_hsk2_se_presenter from "./chinois--5eme--hsk2-se-presenter";
import ch_chinois_5eme_hsk3_preparation from "./chinois--5eme--hsk3-preparation";
import ch_francais_3eme_autobiographie from "./francais--3eme--autobiographie";
import ch_francais_4eme_recit_fantastique from "./francais--4eme--recit-fantastique";
import ch_francais_5eme_accords_sujet_verbe from "./francais--5eme--accords-sujet-verbe";
import ch_francais_5eme_classes_grammaticales from "./francais--5eme--classes-grammaticales";
import ch_francais_5eme_fonctions_grammaticales from "./francais--5eme--fonctions-grammaticales";
import ch_francais_5eme_imparfait_passe_simple from "./francais--5eme--imparfait-passe-simple";
import ch_francais_5eme_poesie_voyage from "./francais--5eme--poesie-voyage";
import ch_francais_5eme_recit_aventure from "./francais--5eme--recit-aventure";
import ch_francais_5eme_roman_chevalerie from "./francais--5eme--roman-chevalerie";
import ch_francais_5eme_theatre_comedie from "./francais--5eme--theatre-comedie";
import ch_histoire_danse_3eme_danse_moderne from "./histoire-danse--3eme--danse-moderne";
import ch_histoire_danse_4eme_ballet_romantique from "./histoire-danse--4eme--ballet-romantique";
import ch_histoire_danse_5eme_danses_anciennes from "./histoire-danse--5eme--danses-anciennes";
import ch_histoire_danse_5eme_naissance_ballet from "./histoire-danse--5eme--naissance-ballet";
import ch_histoire_danse_5eme_vocabulaire_classique from "./histoire-danse--5eme--vocabulaire-classique";
import ch_histoire_geo_3eme_premiere_guerre_mondiale from "./histoire-geo--3eme--premiere-guerre-mondiale";
import ch_histoire_geo_4eme_revolution_francaise from "./histoire-geo--4eme--revolution-francaise";
import ch_histoire_geo_5eme_byzance_carolingiens from "./histoire-geo--5eme--byzance-carolingiens";
import ch_histoire_geo_5eme_croissance_demographique from "./histoire-geo--5eme--croissance-demographique";
import ch_histoire_geo_5eme_feodalite from "./histoire-geo--5eme--feodalite";
import ch_histoire_geo_5eme_grandes_decouvertes from "./histoire-geo--5eme--grandes-decouvertes";
import ch_histoire_geo_5eme_islam_medieval from "./histoire-geo--5eme--islam-medieval";
import ch_histoire_geo_5eme_ressources_eau_energie from "./histoire-geo--5eme--ressources-eau-energie";
import ch_maths_3eme_fonctions from "./maths--3eme--fonctions";
import ch_maths_4eme_puissances from "./maths--4eme--puissances";
import ch_maths_5eme_aires_perimetres from "./maths--5eme--aires-perimetres";
import ch_maths_5eme_calcul_litteral_initiation from "./maths--5eme--calcul-litteral-initiation";
import ch_maths_5eme_enchainements_operations from "./maths--5eme--enchainements-operations";
import ch_maths_5eme_fractions from "./maths--5eme--fractions";
import ch_maths_5eme_nombres_relatifs from "./maths--5eme--nombres-relatifs";
import ch_maths_5eme_parallelogrammes from "./maths--5eme--parallelogrammes";
import ch_maths_5eme_proportionnalite from "./maths--5eme--proportionnalite";
import ch_maths_5eme_statistiques from "./maths--5eme--statistiques";
import ch_maths_5eme_symetrie_centrale from "./maths--5eme--symetrie-centrale";
import ch_maths_5eme_triangles from "./maths--5eme--triangles";
import ch_physique_chimie_3eme_gravitation_poids from "./physique-chimie--3eme--gravitation-poids";
import ch_physique_chimie_4eme_atomes_molecules from "./physique-chimie--4eme--atomes-molecules";
import ch_physique_chimie_5eme_circuits_electriques from "./physique-chimie--5eme--circuits-electriques";
import ch_physique_chimie_5eme_etats_de_leau from "./physique-chimie--5eme--etats-de-leau";
import ch_physique_chimie_5eme_melanges_corps_purs from "./physique-chimie--5eme--melanges-corps-purs";
import ch_physique_chimie_5eme_mouvement_vitesse from "./physique-chimie--5eme--mouvement-vitesse";
import ch_physique_chimie_5eme_sources_lumiere from "./physique-chimie--5eme--sources-lumiere";
import ch_physique_chimie_5eme_systeme_solaire from "./physique-chimie--5eme--systeme-solaire";
import ch_russe_3eme_conversation_avancee from "./russe--3eme--conversation-avancee";
import ch_russe_4eme_conversation_quotidien from "./russe--4eme--conversation-quotidien";
import ch_russe_5eme_alphabet_cyrillique from "./russe--5eme--alphabet-cyrillique";
import ch_russe_5eme_nombres_age from "./russe--5eme--nombres-age";
import ch_russe_5eme_se_presenter from "./russe--5eme--se-presenter";
import ch_russe_5eme_vocabulaire_danse_1 from "./russe--5eme--vocabulaire-danse-1";
import ch_svt_3eme_genetique from "./svt--3eme--genetique";
import ch_svt_4eme_seismes_volcans from "./svt--4eme--seismes-volcans";
import ch_svt_5eme_besoins_organes from "./svt--5eme--besoins-organes";
import ch_svt_5eme_geologie_externe from "./svt--5eme--geologie-externe";
import ch_svt_5eme_nutrition_organismes from "./svt--5eme--nutrition-organismes";
import ch_svt_5eme_reproduction_vegetale from "./svt--5eme--reproduction-vegetale";
import ch_svt_5eme_respiration_milieux from "./svt--5eme--respiration-milieux";

export const CHAPITRES: Chapitre[] = [
  ch_chinois_3eme_hsk4_culture,
  ch_chinois_4eme_hsk3_voyages,
  ch_chinois_5eme_hsk2_achats,
  ch_chinois_5eme_hsk2_famille_ecole,
  ch_chinois_5eme_hsk2_quotidien,
  ch_chinois_5eme_hsk2_se_presenter,
  ch_chinois_5eme_hsk3_preparation,
  ch_francais_3eme_autobiographie,
  ch_francais_4eme_recit_fantastique,
  ch_francais_5eme_accords_sujet_verbe,
  ch_francais_5eme_classes_grammaticales,
  ch_francais_5eme_fonctions_grammaticales,
  ch_francais_5eme_imparfait_passe_simple,
  ch_francais_5eme_poesie_voyage,
  ch_francais_5eme_recit_aventure,
  ch_francais_5eme_roman_chevalerie,
  ch_francais_5eme_theatre_comedie,
  ch_histoire_danse_3eme_danse_moderne,
  ch_histoire_danse_4eme_ballet_romantique,
  ch_histoire_danse_5eme_danses_anciennes,
  ch_histoire_danse_5eme_naissance_ballet,
  ch_histoire_danse_5eme_vocabulaire_classique,
  ch_histoire_geo_3eme_premiere_guerre_mondiale,
  ch_histoire_geo_4eme_revolution_francaise,
  ch_histoire_geo_5eme_byzance_carolingiens,
  ch_histoire_geo_5eme_croissance_demographique,
  ch_histoire_geo_5eme_feodalite,
  ch_histoire_geo_5eme_grandes_decouvertes,
  ch_histoire_geo_5eme_islam_medieval,
  ch_histoire_geo_5eme_ressources_eau_energie,
  ch_maths_3eme_fonctions,
  ch_maths_4eme_puissances,
  ch_maths_5eme_aires_perimetres,
  ch_maths_5eme_calcul_litteral_initiation,
  ch_maths_5eme_enchainements_operations,
  ch_maths_5eme_fractions,
  ch_maths_5eme_nombres_relatifs,
  ch_maths_5eme_parallelogrammes,
  ch_maths_5eme_proportionnalite,
  ch_maths_5eme_statistiques,
  ch_maths_5eme_symetrie_centrale,
  ch_maths_5eme_triangles,
  ch_physique_chimie_3eme_gravitation_poids,
  ch_physique_chimie_4eme_atomes_molecules,
  ch_physique_chimie_5eme_circuits_electriques,
  ch_physique_chimie_5eme_etats_de_leau,
  ch_physique_chimie_5eme_melanges_corps_purs,
  ch_physique_chimie_5eme_mouvement_vitesse,
  ch_physique_chimie_5eme_sources_lumiere,
  ch_physique_chimie_5eme_systeme_solaire,
  ch_russe_3eme_conversation_avancee,
  ch_russe_4eme_conversation_quotidien,
  ch_russe_5eme_alphabet_cyrillique,
  ch_russe_5eme_nombres_age,
  ch_russe_5eme_se_presenter,
  ch_russe_5eme_vocabulaire_danse_1,
  ch_svt_3eme_genetique,
  ch_svt_4eme_seismes_volcans,
  ch_svt_5eme_besoins_organes,
  ch_svt_5eme_geologie_externe,
  ch_svt_5eme_nutrition_organismes,
  ch_svt_5eme_reproduction_vegetale,
  ch_svt_5eme_respiration_milieux,
];

export function trouverChapitre(
  matiere: MatiereId,
  niveau: Niveau,
  slug: string
): Chapitre | undefined {
  return CHAPITRES.find(
    (c) => c.matiere === matiere && c.niveau === niveau && c.slug === slug
  );
}

export function chapitresDisponibles(matiere: MatiereId, niveau: Niveau): Chapitre[] {
  return CHAPITRES.filter((c) => c.matiere === matiere && c.niveau === niveau);
}
