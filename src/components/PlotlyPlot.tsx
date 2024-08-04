import { useEffect } from "react";
import plotly from "plotly.js-dist-min";
// import { safeDecodeAndParse } from "./helpers";

type PlotlyProps = {
  data: any;
  layout: any;
  config: any;
};

const PlotlyPlot = ({ data, layout, config }: PlotlyProps) => {
  useEffect(() => {
    console.log(data);
    console.log(layout);
    plotly.newPlot("plotly-div", data, layout, config);
  }, [data, layout, config]);

  return <div id="plotly-div" />;
};

export default PlotlyPlot;
