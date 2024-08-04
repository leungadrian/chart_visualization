import "./App.css";
import PlotlyPlot from "./components/PlotlyPlot";
import TimeSeriesChart from "./components/TimeSeriesChart";
import { mockData } from "./components/mock";

const d = [
  { date: "2017-02-01", price: 231 },
  { date: "2017-04-01", price: 453 },
  { date: "2017-16-01", price: 123 },
  { date: "2018-01-01", price: 234 },
  { date: "2018-04-01", price: 958 },
  { date: "2018-11-01", price: 163 },
  { date: "2018-11-02", price: 163 },
  { date: "2018-11-03", price: 163 },
  { date: "2018-11-04", price: 163 },
  { date: "2019-03-01", price: 293 },
  { date: "2019-10-01", price: 471 },
  { date: "2020-07-01", price: 881 },
  { date: "2020-09-01", price: 122 },
];

function App() {
  return (
    <>
      <h3>Recharts</h3>
      <div className="w-full">
        <TimeSeriesChart chartData={d} />
      </div>
      <div className="height-500 width-300">
        <h3>Plotly</h3>
        {/* <PlotlyCharts data={d} /> */}
        <PlotlyPlot
          data={mockData.data}
          layout={mockData.layout}
          config={mockData.config}
        />
      </div>
    </>
  );
}

export default App;
