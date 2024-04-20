import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CryptoChart = ({ data, color }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
if (!data || data.length === 0) return;

const chart = createChart(chartContainerRef.current, {
  width: chartContainerRef.current.clientWidth,
  height: 300,
  layout: {
    backgroundColor: '#ffffff',
    textColor: 'rgba(0, 0, 0, 0.9)',
  },
  grid: {
    vertLines: {
      color: 'rgba(197, 203, 206, 0.5)',
    },
    horzLines: {
      color: 'rgba(197, 203, 206, 0.5)',
    },
  },
  crosshair: {
    mode: 'normal',
  },
  priceScale: {
    borderColor: 'rgba(197, 203, 206, 0.8)',
  },
  timeScale: {
    borderColor: 'rgba(197, 203, 206, 0.8)',
  },
});

const lineSeries = chart.addLineSeries();
lineSeries.setData(data.map(dataPoint => ({
  time: dataPoint.time,
  value: parseFloat(dataPoint.value),
})));
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default CryptoChart;
