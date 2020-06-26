import React, { useCallback } from 'react';
import * as echarts from 'echarts';

import styles from './ExampleEcharts.module.css';

function ExampleEcharts() : JSX.Element {
  const echartRef = useCallback((node) => {
    if (node !== null) {
      const myChart = echarts.init(node);
      // 绘制图表
      myChart.setOption({
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
        }],
      });
    }
  }, []);

  return (
    <div className={styles.container} ref={echartRef} />
  );
}

export default ExampleEcharts;
