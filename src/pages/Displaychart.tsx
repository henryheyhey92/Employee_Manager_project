import { ApexOptions } from 'apexcharts';
import React, { FC, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const [series, setSeries] = useState<ApexOptions['series']>([
        {
            data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
            data: [53, 32, 33, 52, 13, 44, 32]
        }
    ]);

    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'bar',
            height: 430
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
    });

    return <ReactApexChart series={series} options={options} width={'100%'} height={430} type="bar" />;
};

export default Chart;
