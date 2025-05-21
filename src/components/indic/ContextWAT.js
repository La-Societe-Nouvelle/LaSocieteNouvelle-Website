import { DefaultBarChart } from "../charts/DefaultBarChart";

import metaData from "../../lib/metaData";
import { DefaultDoughnutChart } from "../charts/DefaultDoughnutChart";
import axios from "axios";
import { useEffect, useState } from "react";

const sections_a10 = [
  "A",
  "BE",
  "F",
  "GI",
  "J",
  "K",
  "L",
  "MN",
  "OQ",
  "RU"
]

export const ContextWAT = () => 
{
  const indicData = metaData.wat;

  const [macroFpt, setMacroFpt] = useState([]);
  const [metaIndustries, setMetaIndustries] = useState([]);

  const fetchMacroFpt = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_trd?indic=WAT&country=FRA&aggregate=PRD&year=2024`)
    if (res.data.header.code == 200) {
      setMacroFpt(res.data.data);
    }
  }

  const fetchMetadataIndustries = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/metadata/industries`)
    if (res.data.header.code == 200) {
      console.log(res.data);
      setMetaIndustries(res.data.meta);
    }
  }

  useEffect(() => {
    fetchMacroFpt();
    fetchMetadataIndustries();
  }, [])

  return (
    <>
      <h2>L'eau en France : état des lieux</h2>
      <h3>La ressource en eau</h3>
      <p>
        En France, en 2021, la ressource en eau renouvelable (volume des
        précipitations et des écoulements arrivant des pays limitrophes, diminué
        de l'évapotranspiration) représentait 241,4 milliards de m3 en France.
      </p>
      <p>
        Ce volume varie fortement entre chaque année : il était 33% inférieur à
        la moyenne en 2019, et 37% supérieur en 2020.
      </p>
      <div className="my-4 w-75 mx-auto">
        <p>en millions de m3</p>
        <DefaultBarChart
          labels={['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']}
          datasets={[{
            label: 'Ressource en eau renouvelable annuelle',
            data: [198.6,164.4,161.6,288.3,288.3,182.2,215.3,130.3,257.0,141.6,289.5,241.4],
            backgroundColor: indicData.primaryColor,
            unit: 'millions de m3'
          }]}
          options={{
            aspectRatio: 2.5
          }}
        />
      </div>
      <p>
        L'année 2022 a été marquée par une sécheresse historique, avec des
        précipitations inférieures de 25% aux normales saisonnières et des
        températures record. Cette situation a aggravé une tendance déjà
        constatée : entre 1990 et 2018, la ressource en eau renouvelable
        disponible en France a chuté de 14%.
      </p>
      <h3>Les prélèvements en eau</h3>
      <p>
        En 2022, les prélèvements d'eau douce en France métropolitaine (hors
        hydroélectricité) ont atteint 29,3 milliards de m³ (Banque nationale des
        prélèvements en eaux (BNPE), OFB. Traitements: SDES, 2025).
      </p>
      <p>
        Ces prélèvements se répartissent entre les usages suivants :
        <ul>
          <li>19 % pour la production d'eau potable</li>
          <li>12 % pour les usages agricoles</li>
          <li>8 % pour les usages industriels</li>
          <li>17 % pour l'alimentation des canaux</li>
          <li>45 % pour le refroidissement des centrales de production d'électricité
          </li>
        </ul>
      </p>
      <div className="my-4 w-75 mx-auto">
        <DefaultDoughnutChart
          labels={['Production d\'eau potable','Usages agricoles','Usages industriels','Alimentation des canaux','Refroidissement des centrales électriques']}
          datasets={[{
            label: 'Ressource en eau renouvelable annuelle',
            data: [19,12,8,17,45],
            backgroundColor: indicData.primaryColor
          }]}
          options={{
            aspectRatio: 2.5,
            legendDisplay: true,
            legendPosition: 'right'
          }}
        />
      </div>
      <h3>Les consommations d'eau</h3>
      <p>
        La consommation d'eau correspond à la part des prélèvements non
        restitués aux milieux aquatiques. Elle représente 4,1 milliards de m3 en
        2021 (soit 15% des prélèvements).
      </p>
      <p>
        La consommation d'eau se répartit entre les usages suivants :
        <ul>
          <li>26 % pour la production d'eau potable</li>
          <li>58 % pour les usages agricoles</li>
          <li>4 % pour les usages industriels</li>
          <li>
            12 % pour le refroidissement des centrales de production
            d'électricité
          </li>
        </ul>
      </p>
      <h2>Consommation d'eau des activités économiques</h2>
      <p>
        Répartition de la consommation directe d'eau par secteur d'activités (A*10)
      </p>
      <div className="my-4 w-75 mx-auto">
        <p>en L/€</p>
        <DefaultBarChart
          labels={macroFpt
            .filter((data) => sections_a10.includes(data.industry))
            .map((data) => data.industry)}
          datasets={[{
            label: 'Empreinte eau de la production',
            data: macroFpt
              .filter((data) => sections_a10.includes(data.industry))
              .map((data) => data.value),
            tooltipHeaders: macroFpt
              .filter((data) => sections_a10.includes(data.industry))
              .map((data) => metaIndustries.find((meta) => meta.code == data.industry))
              .map((meta) => meta.code+' - '+meta.label),
            backgroundColor: indicData.primaryColor,
            unit: 'L/€'
          }]}
          options={{
            aspectRatio: 2.5
          }}
        />
      </div>
      <h2>Engagements nationaux</h2>
      <p>
        Face à l'aggravation des tensions sur la ressource en eau, la France a
        renforcé son cadre réglementaire et stratégique avec le Plan Eau 2023,
        annoncé par le gouvernement en mars 2023. Ce plan vise à préparer le
        pays à une baisse structurelle de la ressource disponible, estimée de
        -10 à -40% d'ici 2050 (source: DRIAS / Météo-France).
      </p>
    </>
  );
}