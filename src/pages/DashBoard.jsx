import React from "react";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/dashboard_wrapper/Dashboard_wrapper";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../components/summary-box/SummaryBox";
import { Bar } from "react-chartjs-2";
import { colors, data } from "../constants";
import Box from "../components/box/Box";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from "../components/overall_list/Overall_list";
import RevenueList from "../components/revenue_list/RevenueList";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashBoard(props) {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div key={index} className="col-6 col-md-6 col-sm-12 mb">
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb-small">Overall</div>
        <div className="mb-medium">
          <OverallList />
        </div>
        <div className="title mb-small">Revenue by channel</div>
        <div className="mb-medium">
          <RevenueList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
}

export default DashBoard;

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <>
      <div className="title mb">Revenue by months</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  );
};
