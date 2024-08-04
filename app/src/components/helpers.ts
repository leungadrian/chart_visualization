export type PlotlyParams = {
  data?: Plotly.Data[];
  layout?: Plotly.Layout;
  smallLayout?: Plotly.Layout;
  config?: Plotly.Config;
};

export function safeDecodeAndParse(content: string): PlotlyParams {
  if (!content) return {};
  try {
    const parsed = JSON.parse(atob(content));
    console.log(parsed);
    parsed.smallLayout = parsed["small-layout"];
    delete parsed["small-layout"];
    return parsed as PlotlyParams;
  } catch (error) {
    console.error(error);
    return {};
  }
}
