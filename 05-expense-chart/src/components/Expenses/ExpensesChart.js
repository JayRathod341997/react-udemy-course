import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "July", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sept", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];

  console.log("In ExpensesChart => ", props.expenses);
  console.log("In ExpensesChart , chartDataPoints => ", chartDataPoints);
  for (const expense of props.expenses) {
    const expeseMonth = expense.date.getMonth();
    chartDataPoints[expeseMonth].value += expense.amount;
  }

  return <Chart datapoints={chartDataPoints} />;
};

export default ExpensesChart;
