import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointsValues=props.dataPoints.map(datapoint =>datapoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
