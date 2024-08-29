import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import DashboardTabs from './DashboardTabs';
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

// Register necessary components with Chart.js
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

export class Dashboard extends Component {
  websiteAudienceChartData = {
    labels: [...Array(150).keys()].map(i => (i + 1).toString()),
    datasets: [
      {
        label: 'This week',
        data: [36.57, 38.9, 42.3, 41.8, 37.4, 32.5, 28.1, /* ... */],
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgb(0, 123, 255)',
      },
      {
        label: 'Current week',
        data: [53, 50.3, 49.4, 47.7, 49, 50.6, 48.7, /* ... */],
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(86, 11, 208, .05)',
        borderColor: 'rgb(86, 11, 208)',
      },
    ],
  };

  websiteAudienceChartOptions = {
    scales: {
      y: {
        display: true,
        grid: {
          drawBorder: false,
          display: true,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 22,
          padding: 10,
        },
      },
      x: {
        display: false,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          color: "#a7afb7",
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(2, 171, 254, 1)',
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0,
      },
    },
  };

  bounceRateChartData = {
    labels: [...Array(51).keys()].map(i => (i + 1).toString()),
    datasets: [
      {
        data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, /* ... */],
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(0, 204, 212, .2)',
        borderColor: 'rgb(0, 204, 212)',
      },
    ],
  };

  bounceRateChartOptions = {
    scales: {
      y: {
        display: false,
        grid: {
          drawBorder: false,
          display: true,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 40,
          stepSize: 10,
        },
      },
      x: {
        display: false,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          color: "#a7afb7",
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(2, 171, 254, 1)',
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0,
      },
    },
  };

  // Define data and options for Pie chart
  sessionsChannelChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3'], // Example labels
    datasets: [{
      data: [300, 500, 200], // Example data
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'], // Example colors
      hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
    }]
  };

  sessionsChannelChartOptions = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        backgroundColor: 'rgba(2, 171, 254, 1)',
      },
    },
  };

  render() {
    return (
      <div>
        <div className="container p-md-0">
          <div className="az-content-body">
            <div>
              <h2 className="az-dashboard-title">Hi, welcome back!</h2>
              <p className="az-dashboard-text">Inventory Overview</p>
            </div>
            <div className="az-dashboard-one-title">
             <div className="az-content-header-right">
                <div className="media">
                  <div className="media-body">
                    <label>Domains</label>
                    <h4>30</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Sub Domains</label>
                    <h4>15</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Active IP<small>s</small></label>
                    <h4>26</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Net Blocks</label>
                    <h4>10</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Open Ports</label>
                    <h4>3</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Applications</label>
                    <h4>38</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>DNS Records</label>
                    <h4>25</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Leaked Credentials</label>
                    <h4>10</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>API<small>s</small></label>
                    <h4>17</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Active Vulnerbilities</label>
                    <h4>65</h4>
                  </div>{/* media-body */}
                </div>{/* media */}
              </div>
                <a href="#/" className="btn btn-primary">Details</a>
            </div>
            <div className="az-dashboard-nav">
              <DashboardTabs />
            </div>
            <div className="row row-sm mg-b-20">
              <div className="col-lg-4">
                <div className="card card-dashboard-pageviews">
                  <div className="card-header">
                    <h6 className="card-title">Page Views by Page Title</h6>
                    <p className="card-text">This report is based on 100% of sessions.</p>
                  </div>
                  <div className="card-body">
                    {/* Your page view content */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mg-t-20 mg-lg-t-0">
                <div className="card card-dashboard-four">
                  <div className="card-header">
                    <h6 className="card-title">Vulnerabilities by Status</h6>
                  </div>
                  <div className="card-body row">
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="chart">
                        <Pie data={this.sessionsChannelChartData} options={this.sessionsChannelChartOptions} />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0">
                      <div className="az-traffic-detail-item">
                        {/* Your traffic detail content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional dashboard content */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
