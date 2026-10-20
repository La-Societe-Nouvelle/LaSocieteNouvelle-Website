const STATS_API_URL = process.env.NEXT_PUBLIC_STATS_API_URL ?? "https://api.stats.lasocietenouvelle.org";

const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
                'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

// "2026-08" -> "août 2026"
export function formatMonth(mois) {
  const [year, month] = mois.split('-');
  return `${MONTHS[parseInt(month) - 1]} ${year}`;
}

export const BAROMETRE_GES_URL = `${STATS_API_URL}/barometre-ges`;

export async function fetchKeyFiguresData({ formatEmissionsPeriod = (mois) => mois, emissionsTooltip } = {}) {
  const urls = [
    `${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/macro_fpt?industry=TOTAL&country=FRA&aggregate=NVA&indic=GHG`,
    `${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/macro_fpt?industry=TOTAL&country=FRA&aggregate=NVA&indic=GEQ`,
    BAROMETRE_GES_URL,
  ];

  try {
    const responses = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          headers: url.startsWith(process.env.NEXT_PUBLIC_API_URL)
            ? { 'Authorization': `Bearer ${process.env.SINESE_API_TOKEN}` }
            : undefined,
        }).then(res => res.json())
      )
    );

    // Observed series (macro_fpt): keep the latest year available
    const latestPoint = (response) =>
      [...(response.data ?? [])].sort((a, b) => b.year.localeCompare(a.year))[0];
    const ghgPoint = latestPoint(responses[0]);
    const geqPoint = latestPoint(responses[1]);

    let data_emissions = "";
    let emissions_period = "";
    if (responses[2].header.code === 200 && responses[2].data.length > 0) {
      const sortedData = [...responses[2].data].sort((a, b) => a.mois.localeCompare(b.mois));
      const lastDataPoint = sortedData[sortedData.length - 1];
      data_emissions = lastDataPoint.valeur.toFixed(1);
      emissions_period = formatEmissionsPeriod(lastDataPoint.mois);
    }

    return [
      {
        id: 'ghg',
        period: ghgPoint ? ghgPoint.year : "",
        value: ghgPoint ? ghgPoint.value.toFixed(0) : "",
        unit: 'gCO₂e/€',
        title: "Intensité d'émission de gaz à effet de serre",
        icon: 'activity'
      },
      {
        id: 'emissions',
        period: emissions_period,
        value: data_emissions,
        unit: 'MtCO₂e',
        title: 'Emissions intérieures de gaz à effet de serre',
        icon: 'cloud-haze',
        href: '/databrowser/barometre-ges',
        tooltip: emissionsTooltip
      },
      {
        id: 'geq',
        period: geqPoint ? geqPoint.year : "",
        value: geqPoint ? geqPoint.value.toFixed(1) : "",
        unit: '%',
        title: 'Ecart de rémunération F/H',
        icon: 'gender-ambiguous'
      }
    ];
  } catch (error) {
    console.error('Error fetching key figures:', error);
    return [];
  }
}
