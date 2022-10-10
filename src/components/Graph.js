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



function Graph({ indic }) {

    let [title, setTitle] = useState('');
    let [serie, setSerie] = useState('');
    let [source, setSource] = useState();
    let [unit, setUnit] = useState();
let [error, setError] = useState(false);

    const fetchData = useCallback(() => {


            axios
            .get(`https://api.test.lasocietenouvelle.org/serie/MACRO_${indic}_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`)
            .then((response) => {
              if (response.data.header.code == 200) {
                setTitle(response.data.meta.label);
                setSerie(response.data.data);
                setSource(response.data.meta.source);
                setUnit(response.data.meta.unitSymbol);
              } else {
                setError(response.data.header);
              }
            })
            .catch((error) => {
              console.log(error);
            });

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
                    text: unit ,
                    padding: 10,
                    font: {
                        size: 12,
                    }
                }
            }
        }
    };
console.log(serie);
    //let result = Object.keys(serie).map((key) => [Number(key), serie[key]]);
    let labels = [];
    const dataset = [];

    for (let i = 0; i < serie.length; i++) {
        labels.push(serie[i].year);
        dataset.push(serie[i].value.toFixed(2));
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
                    Source : {source} 
                </p>
                <p className="source">
                     Traitement : La Société Nouvelle
                </p>
            </Card.Footer>
        </Card>)
}

export default Graph