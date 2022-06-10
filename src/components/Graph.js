import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LogarithmicScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useCallback } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LogarithmicScale,
    Title,
    Tooltip,
    Legend
);



function Graph({ indic, unit }) {

    let [title, setTitle] = useState('');
    let [serie, setSerie] = useState('');

    const fetchData = useCallback(() => {

        axios.get(`https://systema-api.azurewebsites.net/api/v2/serie?indic=${indic}&area=FRA&flow=GDP`)
            .then((response) => {
                setTitle(response.data.metaData.info);
                setSerie(response.data.serie);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [indic])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const options = {
        maintainAspectRatio: false ,
        plugins: {
            title: {
                display: true,
                text: title,
                color: "#191558",
                font: {
                    size: 12,
                    family: 'Raleway, sans-serif',
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                min: 0,
                title: {
                    display: true,
                    text: unit + '/€',
                    padding: 10,
                    font: {
                        size: 12,
                    }
                }
            }
        }
    };

    let result = Object.keys(serie).map((key) => [Number(key), serie[key]]);

    let labels = [];

    for (let i = 0; i < result.length; i++) {
        labels.push(result[i][0]);
    }

    const dataset = [];

    for (let i = 0; i < result.length; i++) {
        dataset.push(result[i][1].value);
    }
    const data = {
        labels,
        datasets: [
            {
                label: "Valeur",
                data: dataset,
                borderColor: 'rgba(250, 89, 103,0.5)',
                backgroundColor: 'rgba(250, 89, 103,1)',
            },

        ],
    };
    return (

        <Card>
            <Card.Body>
                <Line height={250}
                    data={data} options={options}
                />
            </Card.Body>
            <Card.Footer>
                <p className="source">
                    Source : Insee, Eurostat | Traitement : La Société Nouvelle
                </p>
            </Card.Footer>
        </Card>)
}

export default Graph