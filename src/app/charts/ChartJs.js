import React from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartJs = () => {
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: '# of Votes',
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: '#560bd0',
      borderColor: '#560bd0',
      borderWidth: 1,
      fill: false
    }]
  };

  const barChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 10,
          max: 80
        }
      },
      x: {
        barPercentage: 0.6,
        ticks: {
          fontSize: 11,
          beginAtZero: true,
        }
      }
    }
  };

  const horizontalBarChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: '# of Votes',
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00', '#f10075'],
      borderColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00', '#f10075'],
      borderWidth: 1,
      fill: false
    }]
  };

  const horizontalBarChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: 'y', // This makes the bar chart horizontal
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 10,
        }
      },
      x: {
        ticks: {
          beginAtZero: true,
          fontSize: 11,
          max: 80
        }
      }
    }
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
      borderColor: '#f10075',
      borderWidth: 1,
      fill: false
    }, {
      data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
      borderColor: '#007bff',
      borderWidth: 1,
      fill: false
    }]
  };

  const lineChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 10,
          max: 80
        }
      },
      x: {
        ticks: {
          fontSize: 11,
          beginAtZero: true,
        }
      }
    }
  };

  const doughnutPieData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00']
    }]
  };

  const doughnutPieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  return (
    <div>
      <div className="container d-flex p-md-0">
        <ComponentsSidebar />
        <div className="az-content-body pd-lg-l-40 d-flex flex-column">
          <div className="az-content-breadcrumb">
            <span>Components</span>
            <span>Charts</span>
            <span>ChartJS Charts</span>
          </div>
          <h2 className="az-content-title">ChartJS Charts</h2>

          <div className="az-content-label mg-b-5">Bar Chart</div>
          <p className="mg-b-20">Below is the basic bar chart example.</p>

          <div className="row row-sm">
            <div className="col-sm-8 col-md-6 col-xl-4">
              <div className="ht-200 ht-lg-250">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </div>{/* col-6 */}
          </div>{/* row */}

          <hr className="mg-y-30" />

          <div className="az-content-label mg-b-5">Horizontal Bar Chart</div>
          <p className="mg-b-20">Below is the horizontal bar chart example.</p>

          <div className="row row-sm">
            <div className="col-sm-8 col-md-6">
              <div className="chartjs-wrapper-demo">
                <Bar data={horizontalBarChartData} options={horizontalBarChartOptions} />
              </div>
            </div>{/* col-6 */}
          </div>{/* row */}

          <hr className="mg-y-30" />

          <div className="row row-sm">
            <div className="col-sm-8 col-md-6">
              <div className="az-content-label mg-b-5">Line Chart</div>
              <p className="mg-b-20">Below is the basic line chart example.</p>
              <div className="chartjs-wrapper-demo">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>{/* col-6 */}
          </div>{/* row */}

          <hr className="mg-y-30" />

          <div className="az-content-label mg-b-5">Pie &amp; Donut Chart</div>
          <p className="mg-b-20">Below are an example of data in a pie and donut chart.</p>

          <div className="d-md-flex">
            <div className="chartjs-wrapper-demo mg-b-20 mg-md-b-0 mg-md-r-30 mg-xl-r-40">
              <Doughnut data={doughnutPieData} options={doughnutPieOptions} />
            </div>
            <div className="chartjs-wrapper-demo">
              <Pie data={doughnutPieData} options={doughnutPieOptions} />
            </div>
          </div>

          <div className="ht-40"></div>

        </div>{/* az-content-body */}
      </div>{/* container */}
    </div>
  );
};

export default ChartJs;
