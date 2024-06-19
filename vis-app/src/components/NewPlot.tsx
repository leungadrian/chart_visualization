import { useEffect, useRef } from 'react';
import plotly from "plotly.js";

interface PlotProps {
data: plotly.Data[];
}
  

const Plot = ({ data }: PlotProps) => {
  const plotDiv = useRef(null);

  useEffect(() => {
    if (plotDiv.current) {
        plotly.newPlot(plotDiv.current, data);
    }
  }, [data]);

  return <div ref={plotDiv} />;
};

export default Plot;