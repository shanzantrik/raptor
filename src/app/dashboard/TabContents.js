import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register components with ChartJS
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// Define chart data and options
const bounceRateChartData = {
  labels: Array.from({ length: 51 }, (_, i) => (i + 1).toString()),
  datasets: [{
    data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8, 12.9, 13.8, 10.2, 5.8, 7.6, 8.8, 5.6, 5.6, 6.3, 4.2, 3.6, 5.4, 6.5, 8.1, 10.9, 7.6, 9.7, 10.9, 9.5, 5.4, 4.9, .7, 2.3, 5.5, 10, 10.6, 8.3, 8.4, 8.5, 5.8],
    borderWidth: 2,
    fill: true,
    backgroundColor: 'rgba(0, 204, 212, .2)',
    borderColor: 'rgb(0, 204, 212)'
  }]
};

const bounceRateChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
    title: {
      display: false,
    }
  },
  scales: {
    y: {
      display: true,
      grid: {
        drawBorder: false,
        display: true,
        drawTicks: false,
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 40,
        stepSize: 10,
      }
    },
    x: {
      display: true,
      grid: {
        drawBorder: false,
        display: false,
        drawTicks: false,
      },
      ticks: {
        beginAtZero: true,
        color: "#a7afb7",
        padding: 10,
      }
    },
  }
};

const totalUsersChartData = {
  labels: Array.from({ length: 18 }, (_, i) => (i + 1).toString()),
  datasets: [{
    data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
    borderWidth: 1,
    fill: false,
    backgroundColor: '#007bff',
    borderColor: '#007bff'
  }]
};

const totalUsersChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    }
  },
  scales: {
    y: {
      display: true,
      grid: {
        drawBorder: false,
        display: false,
      }
    },
    x: {
      display: true,
      barThickness: 5.5,
      grid: {
        drawBorder: false,
        display: false,
      }
    }
  }
};

const TabContents = () => {
  return (
    <div className="row row-sm mg-b-20">
      <div className="col-lg-5 mg-t-20 mg-lg-t-0">
        <div className="row row-sm">
          <div className="col-sm-6">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>33.50% <i className="icon ion-md-trending-up tx-success"></i> <small>18.02%</small></h6>
                <p>Bounce Rate</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Line data={bounceRateChartData} options={bounceRateChartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mg-t-20 mg-sm-t-0">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                <p>Total Users</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mg-t-20 mg-sm-t-20">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                <p>Total Users</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mg-t-20 mg-sm-t-20">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                <p>Total Users</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 mg-t-20 mg-lg-t-0">
        <div className="row row-sm">
          <div className="col-sm-6 mg-t-20 mg-sm-t-0">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>33.50% <i className="icon ion-md-trending-up tx-success"></i> <small>18.02%</small></h6>
                <p>Bounce Rate</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Line data={bounceRateChartData} options={bounceRateChartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mg-t-20 mg-sm-t-0">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                <p>Total Users</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mg-t-20 mg-sm-t-20">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                <p>Total Users</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mg-t-20 mg-sm-t-20">
            <div className="card card-dashboard-two">
              <div className="card-header">
                <h6>86k <i className="icon ion-md-trending-down tx-danger"></i> <small>0.86%</small></h6>
                <p>Total Users</p>
              </div>
              <div className="card-body">
                <div className="chart-wrapper">
                  <Bar data={totalUsersChartData} options={totalUsersChartOptions} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-lg-2 mg-t-20 mg-lg-t-0">
        <div className="card card-dashboard-two">
          <div className="card-header">
            <h6>Activities</h6>
            <div className="az-list-item">
              <div>
                <p>Admin Home</p>
                <span>/demo/admin/index.html</span>
                <p className="tx-primary">7,755</p>
                <span>31.74% (-100.00%)</span>
              </div>
            </div>
            <div className="az-list-item">
              <div>
                <p>Form Elements</p>
                <span>/demo/admin/forms.html</span>
                <p className="tx-primary">5,215</p>
                <span>28.53% (-100.00%)</span>
              </div>
            </div>
            <div className="az-list-item">
              <div>
                <p>Form Elements</p>
                <span>/demo/admin/forms.html</span>
                <p className="tx-primary">5,215</p>
                <span>28.53% (-100.00%)</span>
              </div>
            </div>
              <div>
              <a href="#/">View All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContents;
