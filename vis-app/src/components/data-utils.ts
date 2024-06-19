type Period = "Month" | "Quarter" | "Week";
type ChartType = "scatter" | "bar";
type PeriodGroup = Record<Period, { x: Date[]; y: number[]; type: ChartType; name: string }>;


export function getChartData<T extends { metric: number | string; period: string; end_date: number }>({
  data,
  groupBy
}: {
  data: T[];
  groupBy: string;
}) {
  let chartType: ChartType;
  data.sort((a, b) => a.end_date - b.end_date);
  const groupedData = data.reduce(
    (acc, obj) => {
        
      const { metric, end_date, ...rest } = obj;
      const period = rest.period as Period;

      if (!metric) return acc;

      const groupName: string = rest[groupBy];

      // Create key for grouping by 'metricName'
      if (!acc[groupName]) {
        acc[groupName] = {} as PeriodGroup;
      }

      // Create key for grouping by 'period' under each 'metricName'
      if (!acc[groupName][period]) {
        acc[groupName][period] = {
          x: [],
          y: [],
          get type() {
            return chartType;
          },
          name: groupName
        };
      }

      let formattedMetric = typeof metric === "number" ? metric : parseFloat(metric);
      if (typeof metric === "string" && metric.endsWith("%")) formattedMetric /= 100;

      // Push the object into the corresponding group
      acc[groupName][period].x.push(new Date(end_date));
      acc[groupName][period].y.push(formattedMetric);

      return acc;
    },
    {} as Record<string, PeriodGroup>
  );
  return ({ type, period }: { type: ChartType; period: Period }) => {
    chartType = type;
    return Object.values(groupedData).map((group) => group[period]);
  };
}