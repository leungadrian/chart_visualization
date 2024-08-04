import React from "react";
import PropTypes from "prop-types";
// import moment from "moment";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  // Scatter,
  // ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartDataItem = {
  date: string;
  price: number;
};

// Define the props for the TimeSeriesChart component
interface TimeSeriesChartProps {
  chartData: ChartDataItem[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ chartData }) => (
  <ResponsiveContainer width={800} height={500}>
    <LineChart data={chartData}>
      <XAxis dataKey="date" />
      <YAxis dataKey="price" name="Value" />

      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <Tooltip />
      <Legend />
      <CartesianGrid />
    </LineChart>
  </ResponsiveContainer>
);

export default TimeSeriesChart;
