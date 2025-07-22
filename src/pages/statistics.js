// La Société Nouvelle

//-- React & hooks
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

//-- Bootstrap
import {
	Col,
	Container,
	Row,
} from "react-bootstrap";

//-- Charts
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

//-- Components
import PageHeader from "../components/PageHeader";
import dayjs from "dayjs";
import _ from "lodash";

const lightenColor = (colorHex, lumFactor) => 
{
	let r = parseInt(colorHex.substr(1,2), 16);
	let g = parseInt(colorHex.substr(3,2), 16);
	let b = parseInt(colorHex.substr(5,2), 16);
	let total = r+g+b;

	let lighten_r = parseInt(r + ((255-r)/(765-total))*(lumFactor*(765-total)));
	let lighten_g = parseInt(g + ((255-g)/(765-total))*(lumFactor*(765-total)));
	let lighten_b = parseInt(b + ((255-b)/(765-total))*(lumFactor*(765-total)));

	const ligtenColor = "#"+lighten_r.toString(16)+lighten_g.toString(16)+lighten_b.toString(16);
	return ligtenColor;
}

const printDate = (date) => {
	if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(date)) {
		return dayjs(date).format("DD/MM/YYYY");
	} else {
		return ''
	}
}

/** Statistiques d'usage
 * 	
 * 	API Publique :
 * 		- Total depuis début année 2025
 * 		- Nombre de requêtes (mensuel)
 * 		- Répartition des requêtes par endpoint
 * 		- Nombre de recherches ?
 * 
 * 	Répertoire SINESE :
 * 		- Nombre d'indicateurs publiés
 * 		- Nombre d'empreintes estimées
 * 	
 * 	
 */

const ApiNbQueriesChart = ({analytics}) => 
{
  // --------------------------------------------------
  // Data

	const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  const chartData = {
		labels: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'],
		datasets: [
			{
				label: '2024',
				data: months.map((month) => analytics?.nombre_requetes_par_mois?.find((item) => item.month == '2024-'+month)?.nombre_requetes ?? 0),
				backgroundColor: lightenColor('#191558', 0.8)
			},
			{
				label: '2025',
				data: months.map((month) => analytics?.nombre_requetes_par_mois?.find((item) => item.month == '2025-'+month)?.nombre_requetes ?? 0),
				backgroundColor: '#191558'
			}
		]
	};

  // --------------------------------------------------
  // Options

  const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
        text: 'Nombre de requêtes reçues par l\'API Publique',
      },
			legend: {
				display: false
			}
    }
	};

  // --------------------------------------------------

  return (
    <Bar
      id={"apî-usage"}
      data={chartData}
      options={chartOptions}
			className="mh-100 mw-100"
    />
  );
};

const ApiEndpointUsageChart = ({analytics}) => 
{
	// --------------------------------------------------
	// Data

	const endpoints = [
		'legalunitfootprint',
		'defaultfootprint',
		'macrodata'
	]

	let total_requetes = _.sumBy(analytics?.nombre_requetes_par_endpoint || {}, 'nombre_requetes');
	let nombre_requetes_legalunit_footprint = analytics?.nombre_requetes_par_endpoint?.find((item) => item.endpoint == 'legalunitfootprint')?.nombre_requetes || 0;
	let nombre_requetes_default_footprint = analytics?.nombre_requetes_par_endpoint?.find((item) => item.endpoint == 'defaultfootprint')?.nombre_requetes || 0;
	let nombre_requetes_macrodata = analytics?.nombre_requetes_par_endpoint?.find((item) => item.endpoint == 'macrodata')?.nombre_requetes || 0;

	const data = [
		nombre_requetes_legalunit_footprint,
		nombre_requetes_default_footprint,
		nombre_requetes_macrodata,
		total_requetes - (nombre_requetes_legalunit_footprint+nombre_requetes_default_footprint+nombre_requetes_macrodata)
	]

	const chartData = {
		labels: ['Empreinte d\'une unité légale','Empreinte par défaut','Données statistiques','Autres'],
		datasets: [
			{
				label: 'Nombre de requêtes',
				data: data,
				backgroundColor: ['#191558',lightenColor('#191558',0.25),lightenColor('#191558',0.50),lightenColor('#191558',0.75)]
			}
		]
	};

	// --------------------------------------------------
	// Options

	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Données utilisées via l\'API Publique',
			},
			legend: {
				display: true
			}
		}
	};

	// --------------------------------------------------

	return (
		<Doughnut
			id={"apî-endpoints"}
			data={chartData}
			options={chartOptions}
			className="mh-100 mw-100"
		/>
	);
};

const WebsiteNbVisitsChart = () => 
{
	// --------------------------------------------------
	// Data

	// '2024-05','2024-06'
	// 255,249

	const chartData = {
		labels: ['2024-07','2024-08','2024-09','2024-10','2024-11','2024-12','2025-01','2025-02','2025-03','2025-04','2025-05','2025-06'],
		datasets: [
			{
				label: 'Nombre de visites',
				data: [359,236,374,466,427,330,342,382,341,477,356,325],
				backgroundColor: '#191558',
				borderColor: '#191558'
			}
		]
	};

	// --------------------------------------------------
	// Options

	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Visites mensuelles sur notre site web',
			},
			legend: {
				display: false
			}
		},
		tension: 0.4
	};

	// --------------------------------------------------

	return (
		<Line
			id={"apî-usage"}
			data={chartData}
			options={chartOptions}
			className="mh-100 mw-100"
		/>
	);
};

const PackageLsnStatChart = () => 
{
	// --------------------------------------------------
	// Data

	const chartData = {
		labels: ['2024-01','2024-02','2024-03','2024-04','2024-05','2024-06','2024-07','2024-08','2024-09','2024-10','2024-11','2024-12','2025-01','2025-02'],
		datasets: [
			{
				label: 'Nombre de téléchargements',
				data: [330,110,163,178,165,116,190,157,259,175,161,137,220,182],
				backgroundColor: '#191558'
			}
		]
	};

	// --------------------------------------------------
	// Options

	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Nombre de téléchargements mensuels',
	},
			legend: {
				display: false
			}
	}
	};

	// --------------------------------------------------

	return (
		<Bar
			id={"apî-usage"}
			data={chartData}
			options={chartOptions}
			className="mh-100 mw-100"
		/>
	);
};

const AvailableFootprintDataKeyFigure = ({analytics}) => 
{
	return (
		<Col className="statistic-item mx-0 p-0 border-light shadow-sm">
			<div className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
				<p>Au {analytics.date ? printDate(analytics.date) : '-'}</p>
				<p className="text-center my-4">
					<span className="h1">
						<data>{analytics?.nombre_empreintes?.toLocaleString('fr-FR')}</data>
					</span>
				</p>
				<p className="text-center my-3 text-primary">Empreintes disponibles</p>
			</div>
		</Col>
	);
};

const AvailableDataKeyFigure = ({analytics}) => 
{
	return (
		<Col className="statistic-item mx-0 p-0 border-light shadow-sm">
			<div className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
				<p>Au {analytics.date ? printDate(analytics.date) : '-'}</p>
				<p className="text-center my-4">
					<span className="h1">
						<data>{analytics?.nombre_donnees?.toLocaleString('fr-FR')}</data>
					</span>
				</p>
				<p className="text-center my-3 text-primary">Données extra-financières disponibles</p>
			</div>
		</Col>
	);
};

const DefaultFootprintKeyFigure = ({analytics}) => 
{
	return (
		<Col className="statistic-item mx-0 p-0 border-light shadow-sm">
			<div className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
				<p>Au {analytics.date ? printDate(analytics.date) : '-'}</p>
				<p className="text-center my-4">
					<span className="h1">
						<data>{analytics?.nombre_donnees_defaut?.toLocaleString('fr-FR')}</data>
					</span>
				</p>
				<p className="text-center my-3 text-primary">Empreintes par défaut</p>
			</div>
		</Col>
	);
};

const LegalUnitKeyFigure = ({analytics}) => 
{
	return (
		<Col className="statistic-item mx-0 p-0 border-light shadow-sm">
			<div className="w-100 py-4 mx-auto" style={{height: "200px", position: "relative"}}>
				<p>Au {analytics.date ? printDate(analytics.date) : '-'}</p>
				<p className="text-center my-4">
					<span className="h1">
						<data>{analytics?.nombre_unites_legales?.toLocaleString('fr-FR') ?? '-'}</data>
					</span>
				</p>
				<p className="text-center my-3 text-primary">Unités légales concernées</p>
			</div>
		</Col>
	);
};

const Statistics = () => 
{
	// --------------------------------------------------
	// States

	const [analytics, setAnalytics] = useState({})

	// --------------------------------------------------
	// Effects

	useEffect(() => {
		fetchAnalytics();
	}, [])

	const fetchAnalytics = async () => 
	{
		// Url
		const url = `https://api.lasocietenouvelle.org/analytics`;	

		try {
			// fetch data
			const res = await fetch(url);

			if (res.ok) {
				const results = await res.json();
				if (results.header?.code == 200) {
					setAnalytics(results.body);
				} else {
					setAnalytics(null)
				}
			} else {
				setAnalytics(null);
			}
		} catch (error) {
			console.log(error);
			setAnalytics(null)
		}
	};

	// --------------------------------------------------

	return (
		<>
			<Helmet>
				<title>La Société Nouvelle | Statistiques</title>
			</Helmet>
			<PageHeader
				title={"Statistiques d'usage"}
				path={"statistics"}
				hasBreadcrumbs={false}
			/>
			<section>
				<Container>
					<h2>Données disponibles</h2>
					<Row style={{height: "200px"}}>
						<Col lg={3}>
							<LegalUnitKeyFigure analytics={analytics} />
						</Col>
						<Col lg={3}>
							<AvailableFootprintDataKeyFigure analytics={analytics} />
						</Col>
						<Col lg={3}>
							<AvailableDataKeyFigure analytics={analytics} />
						</Col>
						<Col lg={3}>
							<DefaultFootprintKeyFigure analytics={analytics} />
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<h2>Utilisation de notre API Publique</h2>
					<Row style={{height: "300px"}}>
						<Col lg={8}>
							<ApiNbQueriesChart analytics={analytics} />
						</Col>
						<Col lg={4}>
							<ApiEndpointUsageChart analytics={analytics} />
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<h2>Visites sur notre site web</h2>					
					<Row style={{height: "300px"}}>
						<Col lg={12}>
							<WebsiteNbVisitsChart />
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<h2>Téléchargement de notre package CRAN (Données statistiques)</h2>
					<Row style={{height: "300px"}}>
						<Col lg={6}>
							<PackageLsnStatChart />
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Statistics;
