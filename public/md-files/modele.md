# MODELE - INDICATEURS DE L'ESE

## LES TYPES D'INDICATEURS

L'Empreinte Sociétale de l'Entreprise regroupe 3 types d'indicateurs :  
* **Contribution** (en % de la valeur *i.e. en €/€*) : Part de la valeur fléchée vers des entreprises ou activités spécifiques, grandeur monétaire par unité de valeur  
    *Ex. : contribution à l'économie nationale, contribution à l'évolution des compétences, etc.*

* **Intensité** (en g/€, kJ/€, etc.) : Grandeur physique par unité de valeur  
    *Ex. : intensité d'émission de gaz à effet de serre (en gCO2e/€), intensité de consommation d'eau (en L/€)*

* **Indice** (*unité variable*) : Valeur indépendante du volume monéraire auquel elle est associée  
    *Ex. : Ecart de rémunérations F/H (en % du taux horaire brut moyen), Indice de répartition des rémunérations (sans unité)*

Ces trois formats sont désignés comme des **indicateurs de Qualité de la Valeur Economique** (IQVE) ; ils sont indépendants des volumes monétaires auxquels ils sont associés, et apportent une information sur les externalités liées à la production de la valeur économique en question (pression environnementales, conditions de production, etc.). Ils sont comparables et applicables à toute personne morale tenant une comptabilité.

Les indicateurs de type contribution et intensité peuvent être considérés comme des facteurs d’impacts monétaires : ils donnent à partir du volume monétaire, l’impact en valeur absolue de la valeur à laquelle ils sont associés (en euros pour les contributions et selon la grandeur physique utilisée pour les intensités). *Ce calcul n’est pas applicable pour les indices, qui ne sont pas exprimés par unité de valeur.*


## METHODE DE CALCUL

Les indicateurs de l’Empreinte Sociétale sont relatifs à la production d’une entreprise. Celle-ci est décomposée suivant les soldes intermédiaires ci-après : valeur ajoutée nette, consommations intermédiaires (charges externes) et dotations aux amortissements sur immobilisations. La valeur d’un indicateur correspond alors à une moyenne pondérée (pour les intensités et contributions, il est également possible de la voir comme une somme pondérée ramenée sur le chiffre d'affaires). 

Solde comptable | Valeurs des indicateurs
--------------- | -----------------------
Production vendue (Chiffre d'affaires) [1] | Déduites de 2 et 3
\+/- Production stockée/déstockée [2] | Identiques à 3 / Empreinte Sociétale de l'exercice précédent
\+ Production immobilisée | Identiques à 3
= Production [3] | Déduites de 4 et 5
\- Charges externes [4] | Empreinte Sociétale des entreprises sollicitées
= Valeur Ajoutée [5] | Déduites de 6 et 7
\- Dotations aux amortissements [6] | Empreinte Sociétale des entreprises sollicitées
Valeur Ajoutée nette [7] | Mesure à partir des données de l'entreprise
   
Pour chaque indicateur, **la mesure fait donc intervenir la qualité des fournisseurs – que ce soit au niveau des charges ou des dépenses d’investissements – et assure ainsi une dépendance le long de la chaine de valeur**. Cette caractéristique est essentielle pour réorienter efficacement les flux économiques vers les activités les plus performantes et inciter à la prise en comtpe des enjeux sociétaux dans les décisions d'achats. Une entreprise impacte toutes celles qui sont en aval de la chaine de valeur.

## OBTENTION DES DONNEES

### VALEUR AJOUTEE NETTE

La valeur des indicateurs relatifs à la valeur ajoutée nette de l'entreprise s'appuie sur les impacts directs de l'entreprise sur son périmètre opérationnel et sur la période considérée (par défaut, un exercice comptable). La méthodologie est donc spécifique pour chaque indicateur. La grandeur à mesurer est décrite au sein des fiches de présentation des indicateurs.

### CHARGES EXTERNES

Pour les charges externes, la qualité d'une dépense correspond à la qualité de la valeur produite de l'entreprise bénéficiaire. Les valeurs sont donc accessibles via l'API La Société Nouvelle [(api.lasocietenouvelle.org)](api.lasocietenouvelle.org) à partir du numéro de siren de l'entreprise. Les valeurs sont comptabilisées à hauteur du montant de la dépense.

Dans le cas où les données ne sont pas publiées par l'entreprise. Des données par défaut sont proposées.

### DOTATIONS AUX AMORTISSEMENTS SUR IMMOBILISATION

Pour les dotations aux amortissements, la qualité correspond à la qualité de la valeur produite de l'entreprise bénéficiaire de la dépense d'investissement, l'année de l'investissement initial. Les valeurs sont donc accessibles via l'API La Société Nouvelle [(api.lasocietenouvelle.org)](api.lasocietenouvelle.org) à partir du numéro de siren de l'entreprise. Les valeurs sont comptabilisées à hauteur de la dotation.

Dans le cas où les données ne sont pas publiées par l'entreprise, des données par défaut sont proposées.

## DONNEES PAR DEFAUT

Afin de pallier l'absence de données publiées, des valeurs par défaut sont proposées à partir des caractéristiques connues de l'entreprise : activité principale, taille, localisation, etc.

La description de l'obtention de ces données et les sources de données utilisées pour le traitement sont décrites au sein des fiches de présentation des indicateurs. Les valeurs proposées peuvent évoluer selon les données statistiques disponibles.

L'utilisation d'autres sources de données *par défaut* est autorisée.

Les données par défaut ne doivent pas être utilisées pour les dépenses pour lesquelles les entreprises bénéficiaires ont publié leur empreinte sociétale.

## INCERTITUDES - INTERVALLES DE CONFIANCE

L’incertitude est fournie en pourcentage de la valeur. **L’utilisation de données statistiques ne permet pas de définir une incertitude stricto sensu**, c’est-à-dire, un intervalle dans lequel la valeur se situe *obligatoirement*. Les valeurs obtenues à partir des données statistiques sont définies à des échelles macroéconomiques, et il n’existe pas, à ce jour, d’information sur la répartition de ces valeurs au sein des entreprises (écart-type, etc.).

Afin de fournir une appréciation sur les potentiels écarts, **il est déterminé, par étude des ordres de grandeurs, un intervalle dans lequel la valeur a de forte probabilité de se situer**. Cet intervalle est alors abusivement assimilé à une incertitude et **il est cependant important de noter qu’il existe une probabilité non nulle pour que la valeur réelle se situe hors de cette *incertitude***. 

Ces intervalles sont déterminés en fonction des valeurs minimales et maximales qui peuvent être *raisonnablement* atteintes. Les intervalles peuvent être étendus, et donc l’*incertitude* associée fortement élevée. Dans certains cas, notamment sur les dimensions environnementales où il existe peu de données à l’échelle des branches d’activités, elle peut atteindre 500%, voire 1000 % de la valeur, soit un facteur 5 ou 10. Les choix des intervalles de confiance sont détaillés le plus possible au sein des fiches de chaque indicateur. L’incertitude est, pour certains indicateurs, ajustée pour chaque unité légale selon les données spécifiques à l’unité légale disponibles.

La complétion de la base de données permettra au fur-et-à-mesure d’ajuster les intervalles de confiance grâce aux données disponibles. En parallèle des travaux statistiques ont vocation à proposer des modèles plus performants pour l’attribution des données par défaut et pour l’estimation des intervalles de confiance associés.

## COMPTABILITE NATIONALE

**Les indicateurs peuvent également s’appliquer à la comptabilité nationale** pour suivre l’évolution de la qualité de la production intérieure (PIB), de la production disponible (PIB + Importations) et de la valeur ajoutée et produite des différentes branches d’activités. Ils offrent une vue élargie de l’économie nationale et de ses externalités ; et peuvent être mis en lien direct avec les engagements sociaux et environnementaux tels que la neutralité carbone en 2050 ou la planification pluriannuelle de l’énergie.
Chaque entreprise est ainsi en mesure de savoir si ses activités sont *contributrices* ou non à une économie durable.
