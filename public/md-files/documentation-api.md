# API - LA SOCIETE NOUVELLE

Cette documentation concerne la version 2 de l’API La Société Nouvelle

## Conditions d’Utilisation

Réutilisation libre, à des fins commerciales ou non, sous réserve de mentionner la paternité et la dernière date de mise à jour de l’information.

## Service - Interrogation unitaire par siren

Le service d’interrogation unitaire permet d’obtenir les données disponibles du siren demandé.

## Appel du service

Il s’agit d’un service web de type REST. L’invocation du service se fait par l’envoi d’une requête HTTPS de type GET. Le résultat est communiqué dans le contenu de la réponse HTTPS sous format JSON.

URL d’accès au service pour une interrogation unitaire :
https://api.lasocietenouvelle.org/api/v2/siren/{siren}

où {siren} est un numéro à 9 chiffres.

*Les numéros de siret (identifiant à 14 chiffres pour les établissements) et les numéros de TVA ne sont pas acceptés pour le moment.*

## Résultat

Le résultat est fourni au format JSON.
Il est structuré en 3 parties :
* Le header : il contient le code retour, le message d’erreur et autres informations relatives au traitement de la requête
* Le profil, qui comprend :
  * La description de l’unité légale
  * L’empreinte sociétale avec les données relatives à chaque indicateur
* Les metadonnées

## Statut

Pour chaque indicateur de l’empreinte sociétale, les informations suivante sont founies :

Statut
Les codes renvoyés par les services sont les suivants :
* 200 – OK : siren trouvé
* 400 – mauvaise requête (numéro de siren mal formé)
* 404 – siren non trouvé ou non accessible
* 500 – erreur interne du serveur
* 503 – service indisponible

Les codes ci-dessus concernent le traitement interne de la requête par l’API et se situent dans le header de la réponse JSON. Ils ne concernent pas la disponibilité de l’API.
 
## Variables

#### Variables de la réponse – Description de l’Unité légale

Variable | Type | Longueur | Contenu
-------- | :--: | :------: | ----------
siren | string | 9 | Numéro de siren
categorieJuridique | string | 4 | Code catégorie juridique (cf. codification INSEE)
denomination | string | - | Dénomination sociale ou concaténation nom et prénom
denominationUsuelle | string | - | Dénomination usuelle
sigle | string | - | Sigle
codePostalSiege | string | 5 | Code postal de l’établissement siège
activitePrincipale | string | 6 | Code de l'activité principale (APE)
activitePrincipaleLibelle | string | - | Libellé de l'activité principale
trancheEffectifs | string | 2 | Code de la tranche d’effectifs
isEconomieSocialeSolidaire | booléen | - | Varibale du répertoire SIRENE sur l'appartenance à l'ESS
communeSiege | string | - | Libellé de la commune du siège
employeur | booléen | - | Caractère employeur de l'unité légale

#### Variables de la réponse – Indicateurs de l’Empreinte Sociétale

Variable | Type | Contenu
-------- | :--: | -------
code | string | Code de l’indicateur
libelle | string | Libellé de l’indicateur
unit | string | Unité de l’indicateur (symbole)
value | numeric | Valeur de l’indicateur
flag | character | Indicateur d’appréciation de la valeur (cf. métadonnées)
uncertainty | numeric | incertitude liée à l'utilisation de la valeur (en %)
year | string | Année de référence de la valeur
source | string | Origine de la valeur
info | string | Information(s) complémentaire(s) sur la valeur (hypothèses, etc.)
valueReference | numeric | Valeur de référence (agrégat macroéconomique le plus proche)
valueReferenceYear | string | Année de la valeur de référence
valueReferenceSource | string | Origine de la la valeur de référence
valueReferenceFlag | character | Indicateur d'appréciation de la valeur (cf. metadonnées)
valueReferenceInfo | string | Information(s) complémentaire(s) sur la valeur de référence (hypothèses, etc.)
valueDeclared | booléen | Caractère publiée de la valeur (ou valeur par défaut)
libelleFlag | string | Libellé de l'indicateur d'appréciation

## Metadonnées

#### Flag - Origine de la valeur

code | description
:--: | -----------
"p" | Valeur publiée
"h" | Valeur publiée (procédure simplifiée)
"r" | Valeur publique (reporting de l'entreprise, bases de données publiques)
"e" | Valeur estimée à partir de données publiques
"a" | Valeur ajustée, utilisation de données publiques (insuffisantes à l'échelle de la production)
"s" | Valeur par défaut sectorielle, dans la majorité des cas, relative à la branche économique à laquelle l'entreprise appartient
"d" | Valeur par défaut, dans la majorité des cas, relative à la production disponible en France
"n" | Valeur non applicable (indicateur non pertinent, confidentialité, etc.)

## Exemple de réponse

```json
{
  "header":{
    "statut":200,
    "message":"OK",
    "tempsReponse":"300 ms"
  },
  "profil":{
    "descriptionUniteLegale":{
      "identifiant":"889182770",
      "denomination":"LA SOCIETE NOUVELLE",
      "codePostalSiege":"59000",
      "activitePrincipale":"70.22Z",
      "activitePrincipaleLibelle":"Conseil en gestion",
      "trancheEffectifs":"21",
      "communeSiege":"LILLE"
    },
    "empreinteSocietale":[
      {
        "code":"ECO",
        "libelle":"Contribution à l’économie nationale",
        "unit":"%",
        "value":89.0,
        "flag":"m",
        "year":"2020",
        "source":"Diagnostic – La Société Nouvelle",
        "info":"",
        "libelleFlag":"précision modérée"
      },
      {
        "code":"GHG",
        "libelle":"Intensité d’émission de gaz à effet de serre",
        "unit":"gCO2e/€",
        "value":14.7,
        "flag":"h",
        "year":"2020",
        "source":"Diagnostic – La Société Nouvelle",
        "info":"",
        "libelleFlag":"précision haute"
      },
      ...
    ]
  }
}
```

## Code Source

Le code source de l'API est disponible ici : [*lien répertoire GitHub*](https://github.com/SylvainH-LSN/LaSocieteNouvelle-API)

## Hébergement

L'API est hébergée chez Microsoft AZURE
