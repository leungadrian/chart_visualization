import mockData from "../mocks/mock-data.json";
import { PlotlyChart } from "./plotly";
import { getChartData } from "./data-utils";

const mockData1 = getChartData({ data: mockData, groupBy: "metric_name" });

const LineChart = () => {
  return (
    <div>
        <div>Plotly Chart</div>
        <PlotlyChart title="Monthly Sample" data={mockData1({ type: "scatter", period: "Month" })} />
    </div>
  )
}

export default LineChart