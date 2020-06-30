import React, { useState, useEffect, useCallback } from 'react';
import * as echarts from 'echarts';

interface EChartComponentProps {
  option: echarts.EChartOption;
  className?: string;
}

function EChartComponent({ className, option } : EChartComponentProps) : JSX.Element {
  const [chartInst, setChartInst] = useState(null as echarts.ECharts);

  // Init instance
  const echartRef = useCallback((node) => {
    if (node) {
      const inst = echarts.init(node);
      setChartInst(inst);
    }
  }, []);

  // Set option
  useEffect(() => {
    if (chartInst && option) {
      chartInst.setOption(option);
    }
  }, [chartInst, option]);

  // Clean up
  useEffect(() => () => {
    if (chartInst) {
      echarts.dispose(chartInst);
      setChartInst(null);
    }
  }, [chartInst]);

  return (
    <div className={className} ref={echartRef} />
  );
}

export default EChartComponent;
