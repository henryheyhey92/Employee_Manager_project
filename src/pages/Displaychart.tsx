import { ApexOptions } from 'apexcharts';
import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Employee } from '../Constant/constants';
interface ChartProps {
    employeeData: Employee[] | any;
    setEmployeeData: React.Dispatch<React.SetStateAction<Employee[] | any>>;
}

const Chart = (props: ChartProps) => {
    const { employeeData, setEmployeeData } = props;
    const [tenYears, setTenYears] = useState<any>([]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const pastYears: Array<number> = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];
        const numberOfEmployee: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        // for (let i = 0; i < 10; i++) {
        //     pastYears.push(Number(currentYear - i));
        // }

        for (let i = 0; i < employeeData.length; i++) {
            const joinRecordDate = new Date(employeeData[i].joinDate);
            const joinYear = Number(joinRecordDate.getFullYear());
            const index = currentYear - joinYear;
            numberOfEmployee[index] += 1;
        }

        setOptions({
            ...options,
            xaxis: {
                categories: pastYears,
                title: {
                    text: 'Number of employees'
                },
                labels: {
                    formatter: (value) => {
                        const text = parseInt(value);
                        return text.toFixed(0).toString();
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Year'
                },
                labels: {
                    formatter: (value) => {
                        return value.toFixed(0);
                    }
                }
            }
        });
        setSeries([
            {
                data: numberOfEmployee
            }
        ]);
    }, []);
    const [series, setSeries] = useState<ApexOptions['series']>([
        {
            data: []
        }
    ]);

    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'bar',
            height: 500
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
            // categories: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
            categories: []
        }
    });

    return <ReactApexChart series={series} options={options} width={'100%'} height={430} type="bar" />;
};

export default Chart;
