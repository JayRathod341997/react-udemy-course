import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log(`Chart: `, props.datapoints);
  const dataPointValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(`Chart MAX : `, totalMaximum);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          maxValue={totalMaximum}
          lable={datapoint.lable}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
