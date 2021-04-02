
export const eco_data = {
    libelle : 'Contribution à l\'Economie Nationale',
    odd_img : "/resources/odd_eco.png",
    description: 'Part de la valeur produite en France',
    code : 'ECO',
    unit : '% (de la valeur)',
    impactDirect : {
        mesure : 'Valeur nette créée sur le territoire français (en euros)',
        texte : 'La valeur nette créée correspond à la valeur créée réduite des dotations aux amortissements.',
    },
    donneesParDefaut : {
        texts : [
            'Les données disponibles sont ventilées par branche économique (NACE-Rev.2).',
            'Elles sont obtenues à partir des agrégats de la comptabilité nationale exprimés à l’échelle des branches économiques (Production, Valeur ajoutée, Consommations intermédiaires). La valeur ajoutée nette est par définition entièrement contributrice à l’économie française. La contribution des consommations intermédiaires domestiques (consommations hors importations) correspond à la part de la production intérieure dans la production disponible (production intérieure et importations).',
            'Le volume des importations directes de chaque branche s’appuie sur les données TEC (Trade in Goods Statistics by Entreprise Characteristics) pour les importations de biens ; et sur un taux d’importation de service, défini à l’échelle nationale, pour les importations de services. Il correspond à la part des importations de services sur le volume total des consommations intermédiaires hors importations de biens.',
            'Les valeurs affectées par défaut aux unités légales s’appuient sur leur activité principale (APE) attribuée par l’INSEE, enregistrée au sein du répertoire de SIRENE. Un ajustement de la contribution de la valeur ajoutée nette est effectué à partir de la localisation des établissements actifs de l’unité légale concernée, et de leur tranche d’effectifs.'
        ],
        sources : [
            {
                title : 'Données EUROSTAT',
                links : [ {
                        title : 'nama_10_a64',
                        ref : 'https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=nama_10_a64&lang=fr'
                    },{
                        title : 'ext_tec01',
                        ref : 'https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=ext_tec01&lang=fr'
                    }
                ]
            },{
                title : 'Données INSEE :',
                links : [ {
                        title : 'Tableau économie',
                        ref : 'https://www.insee.fr/fr/statistiques/4277775?sommaire=4318291'
                    },{
                        title : 'IR "Made in France"',
                        ref : 'https://www.insee.fr/fr/statistiques/2830182'
                    }
                ]
            }
        ]
    }
}

export const art_data = {
    libelle : "Contribution aux Métiers d'art & aux Savoir-faire",
    code : "ART",
    unit : "% (de la valeur)",
}