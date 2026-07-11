import type { Chapitre, MatiereId, Niveau } from "../types";

import ch_chinois_3eme_hsk4_culture from "./chinois--3eme--hsk4-culture";
import ch_chinois_3eme_hsk4_grammaire_avancee from "./chinois--3eme--hsk4-grammaire-avancee";
import ch_chinois_3eme_hsk4_redaction from "./chinois--3eme--hsk4-redaction";
import ch_chinois_3eme_hsk5_preparation from "./chinois--3eme--hsk5-preparation";
import ch_chinois_4eme_hsk3_comparaison from "./chinois--4eme--hsk3-comparaison";
import ch_chinois_4eme_hsk3_sentiments from "./chinois--4eme--hsk3-sentiments";
import ch_chinois_4eme_hsk3_voyages from "./chinois--4eme--hsk3-voyages";
import ch_chinois_4eme_hsk4_preparation from "./chinois--4eme--hsk4-preparation";
import ch_chinois_5eme_hsk2_achats from "./chinois--5eme--hsk2-achats";
import ch_chinois_5eme_hsk2_famille_ecole from "./chinois--5eme--hsk2-famille-ecole";
import ch_chinois_5eme_hsk2_quotidien from "./chinois--5eme--hsk2-quotidien";
import ch_chinois_5eme_hsk2_se_presenter from "./chinois--5eme--hsk2-se-presenter";
import ch_chinois_5eme_hsk3_preparation from "./chinois--5eme--hsk3-preparation";
import ch_espagnol_3eme_cultura_hispanica from "./espagnol--3eme--cultura-hispanica";
import ch_espagnol_3eme_futuro_planes from "./espagnol--3eme--futuro-planes";
import ch_espagnol_3eme_medio_ambiente from "./espagnol--3eme--medio-ambiente";
import ch_espagnol_3eme_subjuntivo_inicio from "./espagnol--3eme--subjuntivo-inicio";
import ch_espagnol_3eme_vacaciones_viajes from "./espagnol--3eme--vacaciones-viajes";
import ch_espagnol_4eme_la_ciudad from "./espagnol--4eme--la-ciudad";
import ch_espagnol_4eme_la_comida from "./espagnol--4eme--la-comida";
import ch_espagnol_4eme_preterito from "./espagnol--4eme--preterito";
import ch_espagnol_4eme_ropa_compras from "./espagnol--4eme--ropa-compras";
import ch_espagnol_4eme_rutina_diaria from "./espagnol--4eme--rutina-diaria";
import ch_espagnol_5eme_alfabeto_pronunciacion from "./espagnol--5eme--alfabeto-pronunciacion";
import ch_espagnol_5eme_el_instituto from "./espagnol--5eme--el-instituto";
import ch_espagnol_5eme_gustos_aficiones from "./espagnol--5eme--gustos-aficiones";
import ch_espagnol_5eme_la_familia from "./espagnol--5eme--la-familia";
import ch_espagnol_5eme_numeros_edad from "./espagnol--5eme--numeros-edad";
import ch_espagnol_5eme_saludos_presentarse from "./espagnol--5eme--saludos-presentarse";
import ch_francais_3eme_argumentation from "./francais--3eme--argumentation";
import ch_francais_3eme_autobiographie from "./francais--3eme--autobiographie";
import ch_francais_3eme_figures_de_style from "./francais--3eme--figures-de-style";
import ch_francais_3eme_grammaire_brevet from "./francais--3eme--grammaire-brevet";
import ch_francais_3eme_poesie_engagee from "./francais--3eme--poesie-engagee";
import ch_francais_3eme_recits_guerre from "./francais--3eme--recits-guerre";
import ch_francais_3eme_subjonctif_concordance from "./francais--3eme--subjonctif-concordance";
import ch_francais_3eme_theatre_tragique from "./francais--3eme--theatre-tragique";
import ch_francais_4eme_discours_direct_indirect from "./francais--4eme--discours-direct-indirect";
import ch_francais_4eme_lettre_journal_intime from "./francais--4eme--lettre-journal-intime";
import ch_francais_4eme_poesie_lyrique from "./francais--4eme--poesie-lyrique";
import ch_francais_4eme_presse_information from "./francais--4eme--presse-information";
import ch_francais_4eme_recit_fantastique from "./francais--4eme--recit-fantastique";
import ch_francais_4eme_roman_realiste from "./francais--4eme--roman-realiste";
import ch_francais_4eme_subordonnees from "./francais--4eme--subordonnees";
import ch_francais_4eme_voix_active_passive from "./francais--4eme--voix-active-passive";
import ch_francais_5eme_accords_sujet_verbe from "./francais--5eme--accords-sujet-verbe";
import ch_francais_5eme_classes_grammaticales from "./francais--5eme--classes-grammaticales";
import ch_francais_5eme_fonctions_grammaticales from "./francais--5eme--fonctions-grammaticales";
import ch_francais_5eme_imparfait_passe_simple from "./francais--5eme--imparfait-passe-simple";
import ch_francais_5eme_poesie_voyage from "./francais--5eme--poesie-voyage";
import ch_francais_5eme_recit_aventure from "./francais--5eme--recit-aventure";
import ch_francais_5eme_roman_chevalerie from "./francais--5eme--roman-chevalerie";
import ch_francais_5eme_theatre_comedie from "./francais--5eme--theatre-comedie";
import ch_histoire_danse_3eme_danse_contemporaine from "./histoire-danse--3eme--danse-contemporaine";
import ch_histoire_danse_3eme_danse_moderne from "./histoire-danse--3eme--danse-moderne";
import ch_histoire_danse_3eme_hip_hop_cultures_urbaines from "./histoire-danse--3eme--hip-hop-cultures-urbaines";
import ch_histoire_danse_4eme_ballet_romantique from "./histoire-danse--4eme--ballet-romantique";
import ch_histoire_danse_4eme_ballets_russes from "./histoire-danse--4eme--ballets-russes";
import ch_histoire_danse_4eme_grands_choregraphes_classiques from "./histoire-danse--4eme--grands-choregraphes-classiques";
import ch_histoire_danse_5eme_danses_anciennes from "./histoire-danse--5eme--danses-anciennes";
import ch_histoire_danse_5eme_naissance_ballet from "./histoire-danse--5eme--naissance-ballet";
import ch_histoire_danse_5eme_vocabulaire_classique from "./histoire-danse--5eme--vocabulaire-classique";
import ch_histoire_geo_3eme_amenagement_territoire from "./histoire-geo--3eme--amenagement-territoire";
import ch_histoire_geo_3eme_france_defaite_republique from "./histoire-geo--3eme--france-defaite-republique";
import ch_histoire_geo_3eme_guerre_froide from "./histoire-geo--3eme--guerre-froide";
import ch_histoire_geo_3eme_premiere_guerre_mondiale from "./histoire-geo--3eme--premiere-guerre-mondiale";
import ch_histoire_geo_3eme_regimes_totalitaires from "./histoire-geo--3eme--regimes-totalitaires";
import ch_histoire_geo_3eme_seconde_guerre_mondiale from "./histoire-geo--3eme--seconde-guerre-mondiale";
import ch_histoire_geo_3eme_union_europeenne from "./histoire-geo--3eme--union-europeenne";
import ch_histoire_geo_4eme_colonisation_xixe from "./histoire-geo--4eme--colonisation-xixe";
import ch_histoire_geo_4eme_industrialisation from "./histoire-geo--4eme--industrialisation";
import ch_histoire_geo_4eme_mondialisation_mers from "./histoire-geo--4eme--mondialisation-mers";
import ch_histoire_geo_4eme_revolution_francaise from "./histoire-geo--4eme--revolution-francaise";
import ch_histoire_geo_4eme_traites_negrieres from "./histoire-geo--4eme--traites-negrieres";
import ch_histoire_geo_4eme_urbanisation_monde from "./histoire-geo--4eme--urbanisation-monde";
import ch_histoire_geo_5eme_byzance_carolingiens from "./histoire-geo--5eme--byzance-carolingiens";
import ch_histoire_geo_5eme_croissance_demographique from "./histoire-geo--5eme--croissance-demographique";
import ch_histoire_geo_5eme_feodalite from "./histoire-geo--5eme--feodalite";
import ch_histoire_geo_5eme_grandes_decouvertes from "./histoire-geo--5eme--grandes-decouvertes";
import ch_histoire_geo_5eme_islam_medieval from "./histoire-geo--5eme--islam-medieval";
import ch_histoire_geo_5eme_ressources_eau_energie from "./histoire-geo--5eme--ressources-eau-energie";
import ch_maths_3eme_arithmetique from "./maths--3eme--arithmetique";
import ch_maths_3eme_calcul_litteral_factorisation from "./maths--3eme--calcul-litteral-factorisation";
import ch_maths_3eme_equations_inequations from "./maths--3eme--equations-inequations";
import ch_maths_3eme_fonctions from "./maths--3eme--fonctions";
import ch_maths_3eme_fonctions_lineaires_affines from "./maths--3eme--fonctions-lineaires-affines";
import ch_maths_3eme_homothetie from "./maths--3eme--homothetie";
import ch_maths_3eme_statistiques_probabilites from "./maths--3eme--statistiques-probabilites";
import ch_maths_3eme_theoreme_thales from "./maths--3eme--theoreme-thales";
import ch_maths_3eme_trigonometrie from "./maths--3eme--trigonometrie";
import ch_maths_3eme_volumes_sections from "./maths--3eme--volumes-sections";
import ch_maths_4eme_calcul_litteral_developpement from "./maths--4eme--calcul-litteral-developpement";
import ch_maths_4eme_equations from "./maths--4eme--equations";
import ch_maths_4eme_fractions_operations from "./maths--4eme--fractions-operations";
import ch_maths_4eme_probabilites from "./maths--4eme--probabilites";
import ch_maths_4eme_proportionnalite_pourcentages from "./maths--4eme--proportionnalite-pourcentages";
import ch_maths_4eme_puissances from "./maths--4eme--puissances";
import ch_maths_4eme_pyramides_cones from "./maths--4eme--pyramides-cones";
import ch_maths_4eme_relatifs_multiplication_division from "./maths--4eme--relatifs-multiplication-division";
import ch_maths_4eme_theoreme_pythagore from "./maths--4eme--theoreme-pythagore";
import ch_maths_4eme_translations_rotations from "./maths--4eme--translations-rotations";
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
import ch_physique_chimie_3eme_energie_cinetique from "./physique-chimie--3eme--energie-cinetique";
import ch_physique_chimie_3eme_gravitation_poids from "./physique-chimie--3eme--gravitation-poids";
import ch_physique_chimie_3eme_ions_ph from "./physique-chimie--3eme--ions-ph";
import ch_physique_chimie_3eme_puissance_energie_electrique from "./physique-chimie--3eme--puissance-energie-electrique";
import ch_physique_chimie_3eme_resistance_loi_ohm from "./physique-chimie--3eme--resistance-loi-ohm";
import ch_physique_chimie_3eme_signaux_information from "./physique-chimie--3eme--signaux-information";
import ch_physique_chimie_4eme_atomes_molecules from "./physique-chimie--4eme--atomes-molecules";
import ch_physique_chimie_4eme_combustions from "./physique-chimie--4eme--combustions";
import ch_physique_chimie_4eme_intensite_tension from "./physique-chimie--4eme--intensite-tension";
import ch_physique_chimie_4eme_pression from "./physique-chimie--4eme--pression";
import ch_physique_chimie_4eme_transformations_chimiques from "./physique-chimie--4eme--transformations-chimiques";
import ch_physique_chimie_4eme_vitesse_lumiere_son from "./physique-chimie--4eme--vitesse-lumiere-son";
import ch_physique_chimie_5eme_circuits_electriques from "./physique-chimie--5eme--circuits-electriques";
import ch_physique_chimie_5eme_etats_de_leau from "./physique-chimie--5eme--etats-de-leau";
import ch_physique_chimie_5eme_melanges_corps_purs from "./physique-chimie--5eme--melanges-corps-purs";
import ch_physique_chimie_5eme_mouvement_vitesse from "./physique-chimie--5eme--mouvement-vitesse";
import ch_physique_chimie_5eme_sources_lumiere from "./physique-chimie--5eme--sources-lumiere";
import ch_physique_chimie_5eme_systeme_solaire from "./physique-chimie--5eme--systeme-solaire";
import ch_russe_3eme_aspect_verbal from "./russe--3eme--aspect-verbal";
import ch_russe_3eme_cas_genitif_datif from "./russe--3eme--cas-genitif-datif";
import ch_russe_3eme_conversation_avancee from "./russe--3eme--conversation-avancee";
import ch_russe_3eme_vocabulaire_danse_3 from "./russe--3eme--vocabulaire-danse-3";
import ch_russe_4eme_cas_nominatif_accusatif from "./russe--4eme--cas-nominatif-accusatif";
import ch_russe_4eme_conversation_quotidien from "./russe--4eme--conversation-quotidien";
import ch_russe_4eme_verbes_mouvement from "./russe--4eme--verbes-mouvement";
import ch_russe_4eme_vocabulaire_danse_2 from "./russe--4eme--vocabulaire-danse-2";
import ch_russe_5eme_alphabet_cyrillique from "./russe--5eme--alphabet-cyrillique";
import ch_russe_5eme_nombres_age from "./russe--5eme--nombres-age";
import ch_russe_5eme_se_presenter from "./russe--5eme--se-presenter";
import ch_russe_5eme_vocabulaire_danse_1 from "./russe--5eme--vocabulaire-danse-1";
import ch_svt_3eme_evolution_especes from "./svt--3eme--evolution-especes";
import ch_svt_3eme_genetique from "./svt--3eme--genetique";
import ch_svt_3eme_responsabilite_sante from "./svt--3eme--responsabilite-sante";
import ch_svt_3eme_risques_geologiques from "./svt--3eme--risques-geologiques";
import ch_svt_3eme_systeme_immunitaire from "./svt--3eme--systeme-immunitaire";
import ch_svt_4eme_biodiversite_evolution from "./svt--4eme--biodiversite-evolution";
import ch_svt_4eme_meteo_climat from "./svt--4eme--meteo-climat";
import ch_svt_4eme_reproduction_humaine from "./svt--4eme--reproduction-humaine";
import ch_svt_4eme_seismes_volcans from "./svt--4eme--seismes-volcans";
import ch_svt_4eme_systeme_nerveux from "./svt--4eme--systeme-nerveux";
import ch_svt_5eme_besoins_organes from "./svt--5eme--besoins-organes";
import ch_svt_5eme_geologie_externe from "./svt--5eme--geologie-externe";
import ch_svt_5eme_nutrition_organismes from "./svt--5eme--nutrition-organismes";
import ch_svt_5eme_reproduction_vegetale from "./svt--5eme--reproduction-vegetale";
import ch_svt_5eme_respiration_milieux from "./svt--5eme--respiration-milieux";

export const CHAPITRES: Chapitre[] = [
  ch_chinois_3eme_hsk4_culture,
  ch_chinois_3eme_hsk4_grammaire_avancee,
  ch_chinois_3eme_hsk4_redaction,
  ch_chinois_3eme_hsk5_preparation,
  ch_chinois_4eme_hsk3_comparaison,
  ch_chinois_4eme_hsk3_sentiments,
  ch_chinois_4eme_hsk3_voyages,
  ch_chinois_4eme_hsk4_preparation,
  ch_chinois_5eme_hsk2_achats,
  ch_chinois_5eme_hsk2_famille_ecole,
  ch_chinois_5eme_hsk2_quotidien,
  ch_chinois_5eme_hsk2_se_presenter,
  ch_chinois_5eme_hsk3_preparation,
  ch_espagnol_3eme_cultura_hispanica,
  ch_espagnol_3eme_futuro_planes,
  ch_espagnol_3eme_medio_ambiente,
  ch_espagnol_3eme_subjuntivo_inicio,
  ch_espagnol_3eme_vacaciones_viajes,
  ch_espagnol_4eme_la_ciudad,
  ch_espagnol_4eme_la_comida,
  ch_espagnol_4eme_preterito,
  ch_espagnol_4eme_ropa_compras,
  ch_espagnol_4eme_rutina_diaria,
  ch_espagnol_5eme_alfabeto_pronunciacion,
  ch_espagnol_5eme_el_instituto,
  ch_espagnol_5eme_gustos_aficiones,
  ch_espagnol_5eme_la_familia,
  ch_espagnol_5eme_numeros_edad,
  ch_espagnol_5eme_saludos_presentarse,
  ch_francais_3eme_argumentation,
  ch_francais_3eme_autobiographie,
  ch_francais_3eme_figures_de_style,
  ch_francais_3eme_grammaire_brevet,
  ch_francais_3eme_poesie_engagee,
  ch_francais_3eme_recits_guerre,
  ch_francais_3eme_subjonctif_concordance,
  ch_francais_3eme_theatre_tragique,
  ch_francais_4eme_discours_direct_indirect,
  ch_francais_4eme_lettre_journal_intime,
  ch_francais_4eme_poesie_lyrique,
  ch_francais_4eme_presse_information,
  ch_francais_4eme_recit_fantastique,
  ch_francais_4eme_roman_realiste,
  ch_francais_4eme_subordonnees,
  ch_francais_4eme_voix_active_passive,
  ch_francais_5eme_accords_sujet_verbe,
  ch_francais_5eme_classes_grammaticales,
  ch_francais_5eme_fonctions_grammaticales,
  ch_francais_5eme_imparfait_passe_simple,
  ch_francais_5eme_poesie_voyage,
  ch_francais_5eme_recit_aventure,
  ch_francais_5eme_roman_chevalerie,
  ch_francais_5eme_theatre_comedie,
  ch_histoire_danse_3eme_danse_contemporaine,
  ch_histoire_danse_3eme_danse_moderne,
  ch_histoire_danse_3eme_hip_hop_cultures_urbaines,
  ch_histoire_danse_4eme_ballet_romantique,
  ch_histoire_danse_4eme_ballets_russes,
  ch_histoire_danse_4eme_grands_choregraphes_classiques,
  ch_histoire_danse_5eme_danses_anciennes,
  ch_histoire_danse_5eme_naissance_ballet,
  ch_histoire_danse_5eme_vocabulaire_classique,
  ch_histoire_geo_3eme_amenagement_territoire,
  ch_histoire_geo_3eme_france_defaite_republique,
  ch_histoire_geo_3eme_guerre_froide,
  ch_histoire_geo_3eme_premiere_guerre_mondiale,
  ch_histoire_geo_3eme_regimes_totalitaires,
  ch_histoire_geo_3eme_seconde_guerre_mondiale,
  ch_histoire_geo_3eme_union_europeenne,
  ch_histoire_geo_4eme_colonisation_xixe,
  ch_histoire_geo_4eme_industrialisation,
  ch_histoire_geo_4eme_mondialisation_mers,
  ch_histoire_geo_4eme_revolution_francaise,
  ch_histoire_geo_4eme_traites_negrieres,
  ch_histoire_geo_4eme_urbanisation_monde,
  ch_histoire_geo_5eme_byzance_carolingiens,
  ch_histoire_geo_5eme_croissance_demographique,
  ch_histoire_geo_5eme_feodalite,
  ch_histoire_geo_5eme_grandes_decouvertes,
  ch_histoire_geo_5eme_islam_medieval,
  ch_histoire_geo_5eme_ressources_eau_energie,
  ch_maths_3eme_arithmetique,
  ch_maths_3eme_calcul_litteral_factorisation,
  ch_maths_3eme_equations_inequations,
  ch_maths_3eme_fonctions,
  ch_maths_3eme_fonctions_lineaires_affines,
  ch_maths_3eme_homothetie,
  ch_maths_3eme_statistiques_probabilites,
  ch_maths_3eme_theoreme_thales,
  ch_maths_3eme_trigonometrie,
  ch_maths_3eme_volumes_sections,
  ch_maths_4eme_calcul_litteral_developpement,
  ch_maths_4eme_equations,
  ch_maths_4eme_fractions_operations,
  ch_maths_4eme_probabilites,
  ch_maths_4eme_proportionnalite_pourcentages,
  ch_maths_4eme_puissances,
  ch_maths_4eme_pyramides_cones,
  ch_maths_4eme_relatifs_multiplication_division,
  ch_maths_4eme_theoreme_pythagore,
  ch_maths_4eme_translations_rotations,
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
  ch_physique_chimie_3eme_energie_cinetique,
  ch_physique_chimie_3eme_gravitation_poids,
  ch_physique_chimie_3eme_ions_ph,
  ch_physique_chimie_3eme_puissance_energie_electrique,
  ch_physique_chimie_3eme_resistance_loi_ohm,
  ch_physique_chimie_3eme_signaux_information,
  ch_physique_chimie_4eme_atomes_molecules,
  ch_physique_chimie_4eme_combustions,
  ch_physique_chimie_4eme_intensite_tension,
  ch_physique_chimie_4eme_pression,
  ch_physique_chimie_4eme_transformations_chimiques,
  ch_physique_chimie_4eme_vitesse_lumiere_son,
  ch_physique_chimie_5eme_circuits_electriques,
  ch_physique_chimie_5eme_etats_de_leau,
  ch_physique_chimie_5eme_melanges_corps_purs,
  ch_physique_chimie_5eme_mouvement_vitesse,
  ch_physique_chimie_5eme_sources_lumiere,
  ch_physique_chimie_5eme_systeme_solaire,
  ch_russe_3eme_aspect_verbal,
  ch_russe_3eme_cas_genitif_datif,
  ch_russe_3eme_conversation_avancee,
  ch_russe_3eme_vocabulaire_danse_3,
  ch_russe_4eme_cas_nominatif_accusatif,
  ch_russe_4eme_conversation_quotidien,
  ch_russe_4eme_verbes_mouvement,
  ch_russe_4eme_vocabulaire_danse_2,
  ch_russe_5eme_alphabet_cyrillique,
  ch_russe_5eme_nombres_age,
  ch_russe_5eme_se_presenter,
  ch_russe_5eme_vocabulaire_danse_1,
  ch_svt_3eme_evolution_especes,
  ch_svt_3eme_genetique,
  ch_svt_3eme_responsabilite_sante,
  ch_svt_3eme_risques_geologiques,
  ch_svt_3eme_systeme_immunitaire,
  ch_svt_4eme_biodiversite_evolution,
  ch_svt_4eme_meteo_climat,
  ch_svt_4eme_reproduction_humaine,
  ch_svt_4eme_seismes_volcans,
  ch_svt_4eme_systeme_nerveux,
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
