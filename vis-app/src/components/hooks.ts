export type PlotlyData = {
    analysis_name: string;
    metrics: {
      name: string;
      x_label: string;
      y_label: string;
      x_data: string[];
      y_data: number[];
    }[];
  }[];