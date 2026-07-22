import TrendChartClient from "./TrendChartClient";

/**
 * Composant serveur : récupère l'historique et la tendance d'un indicateur
 * auprès de l'API sinese (avec le token d'authentification côté serveur)
 * puis délègue le rendu au composant client.
 */
async function TrendChart({ indic }) {
  let historicalData = [];
  let trendData = [];
  let error = null;

  try {
    const baseParams = 'country=FRA&industry=TOTAL&aggregate=PRD';
    const headers = { 'Authorization': `Bearer ${process.env.SINESE_API_TOKEN}` };

    const [historicalResponse, trendResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/macro_fpt?${baseParams}&indic=${indic}`, { headers, cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/macrodata/macro_fpt_trd?${baseParams}&indic=${indic}`, { headers, cache: 'no-store' })
    ]);

    if (!historicalResponse.ok || !trendResponse.ok) {
      throw new Error('Erreur lors du chargement des données');
    }

    const [historicalResults, trendResults] = await Promise.all([
      historicalResponse.json(),
      trendResponse.json()
    ]);

    historicalData = historicalResults.data || [];
    trendData = trendResults.data || [];
  } catch (err) {
    error = err.message;
    console.error('Erreur de chargement:', err);
  }

  return (
    <TrendChartClient
      indic={indic}
      historicalData={historicalData}
      trendData={trendData}
      error={error}
    />
  );
}

export default TrendChart;
