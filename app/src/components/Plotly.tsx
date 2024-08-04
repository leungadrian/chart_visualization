// import React from "react";
// import Plotly from "plotly.js";
// import createPlotlyComponent from "react-plotly.js/factory";
// const Plot = createPlotlyComponent(Plotly);
import { useEffect, useRef } from "react";
import plotly from "plotly.js-dist-min";
import { Divider } from "@mantine/core";
import { PlotlyData } from "./hooks";

const {
  theme: { colors },
} = resolveConfig(tailwindConfig);

function PlotlyChart({
  title,
  data,
  layout = {},
}: {
  title: string;
  data: Plotly.Data[];
  layout?: Partial<Plotly.Layout>;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      plotly.newPlot(
        container.current,
        data,
        {
          ...dateRangeOptions,
          margin: { r: 0, b: 0, l: 50, t: 0 },
          height: 300,
          legend: { bgcolor: "transparent" },
          ...layout,
        },
        { setBackground: () => "transparent" }
      );
    }

    return () => {
      if (container.current) {
        plotly.purge(container.current);
      }
    };
  }, [data, layout]);

  return (
    <div className="tw-bg-blue-0 tw-rounded-lg tw-min-w-[40rem] tw-shadow-md">
      <h3 className="tw-text-center tw-p-4 tw-mb-0 tw-bg-blue-1 tw-rounded-t-lg tw-font-semibold">
        {title}
      </h3>
      <Divider className="tw-border-blue-3" />
      <div className="tw-p-4">
        <div ref={container} />
      </div>
    </div>
  );
}

const dateRangeOptions: Pick<Partial<Plotly.Layout>, "xaxis" | "yaxis"> = {
  xaxis: {
    title: "End Date",
    rangeselector: {
      bgcolor: "transparent",
      activecolor: colors.blue[2],
      bordercolor: colors.blue[3],
      borderwidth: 1,
      buttons: [
        {
          step: "month",
          stepmode: "backward",
          count: 1,
          label: "1m",
        },
        {
          step: "month",
          stepmode: "backward",
          count: 6,
          label: "6m",
        },
        {
          step: "year",
          stepmode: "todate",
          count: 1,
          label: "YTD",
        },
        {
          step: "year",
          stepmode: "backward",
          count: 1,
          label: "1y",
        },
        {
          step: "all",
        },
      ],
    },
    rangeslider: {
      bgcolor: "transparent",
    },
  },
  yaxis: {
    title: "Metric",
  },
};

export function PlotlyCharts({ data }: { data: PlotlyData }) {
  if (!data) return null;

  return (
    <div className="tw-flex tw-flex-wrap tw-gap-4">
      {data.map(({ analysis_name: analysis, metrics }) => (
        <PlotlyChart
          key={analysis}
          title={analysis}
          data={metrics.map(({ name, x_data: x, y_data: y }) => ({
            x,
            y,
            type: "scatter",
            name,
          }))}
        />
      ))}
    </div>
  );
}
