import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

import styles from './ExampleEcharts.module.css';
import EChartComponent from './EChartComponent';

function ExampleEcharts() : JSX.Element {
  const [once] = useState(1);
  const [option, setOption] = useState(null as echarts.EChartOption);

  useEffect(() => {
    setOption({
      title: {
        text: 'ECharts introductory example',
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.25)',
        },
      } as echarts.EChartOption.SeriesBar],
    });
  }, [once]);

  return (
    <EChartComponent className={styles.container} option={option} />
  );
}

export default ExampleEcharts;
