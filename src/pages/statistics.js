import React, { useEffect, useState } from "react";
import {
	Col,
	Container,
	Row,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

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

const ApiNbQueriesChart = () => 
{
  // --------------------------------------------------
  // Data

  const chartData = {
		labels: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'],
		datasets: [
			{
				label: '2024',
				data: [8228,10401,14496,14130,223616,115899,11453,8928,43561,24165,43014,39175],
				backgroundColor: lightenColor('#191558', 0.8)
			},
			{
				label: '2025',
				data: [35269,30483,26768,53793],
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

const ApiEndpointUsageChart = () => 
{
	// --------------------------------------------------
	// Data

	const chartData = {
		labels: ['Empreinte d\'une unité légale','Empreinte par défaut','Données statistiques','Autres'],
		datasets: [
			{
				label: 'Nombre de requêtes',
				data: [442772,90663,125314,68270],
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

	const chartData = {
		labels: ['2024-05','2024-06','2024-07','2024-08','2024-09','2024-10','2024-11','2024-12','2025-01','2025-02','2025-03','2025-04'],
		datasets: [
			{
				label: 'Nombre de visites',
				data: [255,249,359,236,374,466,427,330,342,382,341,477],
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

const Statistics = () => 
{
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
					<h2>Utilisation de notre API Publique</h2>
					<Row style={{height: "300px"}}>
						<Col lg={8}>
							<ApiNbQueriesChart />
						</Col>
						<Col lg={4}>
							<ApiEndpointUsageChart />
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
