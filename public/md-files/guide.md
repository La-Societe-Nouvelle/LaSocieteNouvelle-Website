# GUIDE METHODOLOGIQUE - MESURE ESE

Ce document a pour objectif de fournir les lignes directrices pour la mesure de l'Empreinte Sociétale de l'Entreprise.

## ETAPE 1 - OBTENTION DES SOLDES COMPTABLES

La mesure des indicateurs s'appuie sur une traçabilité de la valeur produite, et s'appuie donc sur des soldes intermédiaires comptables.

4 soldes doivent être extraits de la comptabilité :
* **Production vendue** (Chiffre d'Affaires)
* **Production totale**
* **Consommations intermédiaires** (montant total des charges externes)
* **Dotations aux amortissements sur immobilisations**

Il est alors possible d'obtenir la valeur ajoutée nette, production totale réduite des consommations intermédiaires et des dotations aux amortissements sur immobilisations.

*Lorsqu'une mesure a été réalisée sur l'exercice précédent, il convient d'extraire également la production déstockée (produite sur l'exercice précédent).*

## ETAPE 2 - OBTENTION DES VALEURS RELATIVES A LA VALEUR AJOUTEE NETTE

Les valeurs relatives à la valeur ajoutée nette résultent de l'association des impacts directs de l'entreprise à la valeur qu'elle crée. Les méthodologies de mesure dépendent alors de l'indicateur concerné. Le périmètre de la mesure est celui de la comptabilité, avec un approche opérationnelle (exploitation).

### Cas des contributions

Pour les contributions, la valeur correspond au rapport d'une grandeur monétaire sur la valeur ajoutée nette. La grandeur monétaire est obtenue selon les critères définis par l'indicateur concerné (Ex. Pour la contribution à l'économie nationale, il s'agit de la valeur créée en France). Elle ne peut être supérieure à la valeur ajoutée nette de l'entreprise.

La valeur est ensuite communément exprimée en pourcentage.

### Cas des intensités

Pour les intensités, la valeur correspond au rapport d'une grandeur physique sur la valeur ajoutée nette. La valeur de la grandeur physique est déterminé par l'indicateur concerné (Ex. Pour l'intensité d'émission de gaz à effet de serre, il s'agit des émissions directs de gaz à effet de serre).

La valeur est exprimée dans les unités adéquates selon la grandeur physique mesurée.

### Cas des indices

Pour les indices, la valeur est indépendante de la valeur ajoutée nette. Elle est obtenue directement à partir du résultat de la méthodologie de l'indicateur concerné (Ex. Pour l'indice de répartition des rémunérations, la valeur correspond à l'indice de GINI obtenu).

## ETAPE 3 - OBTENTION DES VALEURS RELATIVES AUX CONSOMMATIONS INTERMEDIAIRES

Les valeurs relatives aux consommations intermédiaires correspondent aux valeurs relatives au chiffre d'affaires (production vendue) des entreprises sollicitées.
Les valeurs sont disponibles au sein de la base de données La Société Nouvelle. En l'absence de données publiées, des données par défaut sont proposées à partir de statistiques macroéconomiques, de données publiques et des caractéristiques connues de l'entreprise.

### Extraction des données comptables

Afin de réaliser cette mesure, il est nécessaire d'obtenir la liste des fournisseurs et leur numéro de siren (ou siret ou numéro de TVA), et le montant des dépenses associées sur l'exercice. Le numéro de siren permet de faire le lien direct avec les valeurs disponibles au sein de la base de données.

### Affectation des valeurs

Pour chaque fournisseur, les valeurs disponibles sont associées au montant.

### Agrégation

La valeur d'un indicateur, relative aux consommations intermédiaires correspond à une moyenne pondérée des valeurs pour chaque founisseur par le montant associé.

Fournisseur | Montant | Valeur | Impact absolu*
----------- | ------: | -----: | ------------:
Entreprise A | 100 € | 100 gCO2e/€ | 10 kgCO2e
Entreprise B | 50 € | 100 gCO2e/€ | 5 kgCO2e
Entreprise C | 100 € | 10 gCO2e/€ | 1 kgCO2e
**TOTAL** | **250 €** | **64 gCO2e/€** | **16 kgCO2e**

*Uniquement défini pour les contributions et intensités. L'impact absolu n'est pas applicable pour les indices : la multiplication de la valeur par une grandeur monétaire n'a alors pas de sens.

*Détails : ((100€ x 100gCO2e) + (50€ x 100gCO2e) + (100€ x 10gCO2e))/(100€ + 50€ + 100€) = (16 kgCO2e)/(250€) = 64 gCO2e*

### METRIZ

Un executable directement relié à l'API est (bientôt) disponible pour facilier le traitement des données.

## ETAPE 4 - OBTENTION DES VALEURS RELATIVES AUX AMORTISSEMENTS

Les valeurs relatives aux dotations aux amortissements sur immobilisations (DAI) suivent une logique similaire aux consommations intermédiaires : les valeurs correspondent aux valeurs relatives au chiffre d'affaires (production vendue) des entreprises sollicitées, elles sont cependant comptabilités à hauteur de la dotation à l'amortissement et non de la dépense initiale d'investissement. Lorsque cela est possible, la valeur retenue doit être celle en date de l'investissement.

Les valeurs sont donc disponibles au sein de la base de données La Société Nouvelle, avec en l'absence de données publiées, des données par défaut.

### Extraction des données comptables

Afin de réaliser cette mesure, il est nécessaire d'extraire la liste des fournisseurs (des immobilisations) et leur numéro de siren (ou siret ou numéro de TVA), et la dotation à l'amortissement sur l'exercice. Le numéro de siren permet de faire le lien direct avec les valeurs disponibles au sein de la base de données.

### Affectation des valeurs

Pour chaque fournisseur, les valeurs disponibles sont associées à la dotation.

### Agrégation

La valeur d'un indicateur, relative aux dotationx aux amortissements sur immobilisations correspond à une moyenne pondérée des valeurs pour chaque founisseur par le montant associé.

Fournisseur | Année de l'investissement | Dotation à l'amortissement | Valeur | Impact absolu
----------- | :-----------------------: | ------: | -----: | ------------:
Entreprise A | 2015 | 50 € | 100 gCO2e/€ | 5 kgCO2e
Entreprise B | 2018 | 10 € | 200 gCO2e/€ | 2 kgCO2e
**TOTAL** | - | **60 €** | **117 gCO2e/€** | **7 kgCO2e**

*Détails : ((50€ x 100gCO2e) + (10€ x 200gCO2e))/(50€ + 10€) = (7 kgCO2e)/(60€) = 117 gCO2e*

### METRIZ

Un executable directement relié à l'API est (bientôt) disponible pour facilier le traitement des données.

## ETAPE 5 - OBTENTION DE L'EMPREINTE SOCIETALE DE L'ENTREPRISE

L'ESE correspond aux valeurs exprimés pour le chiffre d'affaires.

### Obtention des valeurs relatives à la production totale

Solde comptable | Montant | Valeur | Impact absolu
----------- | ------: | -----: | ------------:
Valeur Ajoutée Nette | 300 € | 50 gCO2e/€<sup>1</sup> | 15 kgCO2e
Consomamtions intermédiaires | 250 € | 64 gCO2e/€<sup>2</sup> | 16 kgCO2e
Dotations aux amortissements | 60 € | 117 gCO2e/€<sup>3</sup> | 7 kgCO2e
**Production totale** | **610 €** | **62 gCO2e** | **38 kgCO2e**

*Détails : (15kgCO2e + (250€ x 64gCO2e) + (60€ x 117gCO2e))/(300€ + 250€ + 60€) = (38 kgCO2e)/(610€) = 62 gCO2e*  
*<sup>1</sup> Valeur obtenue par la mesure des impacts directs (cf. étape 2)*  
*<sup>2</sup> Valeur relative aux consommations (cf. étape 3)*  
*<sup>3</sup> Valeur relative aux amortissements (cf. étape 4)*  

**La valeur relative à la production totale est ensuite affectée à la production vendue (chiffre d'affaires).**

Lorsqu'une mesure a été réalisée sur l'exercice précédent il convient d'ajuste la valeur relative à la production vendue en prenant en compte la production déstockée (et produite sur l'exercice précédent).

## ETAPE 6 - PUBLICATION DES DONNEES

La publication s'effectue via un formulaire en ligne sur lasocietenouvelle.org : [*lien vers le formulaire*](http://lasocietenouvelle.org/publication)

La publication est soumise à une tarification libre *id est* gratuite avec une possibilité de contribuer à l'hébergement, la maintenance, et au développement de la base de données et des ressources mises à disposition.

La publication sera également possible, directement à partir de l'executable METRIZ (à venir)

