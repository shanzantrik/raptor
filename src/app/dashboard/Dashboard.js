import React, { Component } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import DashboardTabs from './DashboardTabs';
import { Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
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
  state = {
    showHistoricalData: false,
    selectedPeriod: '',
  };

domainVulnerabilitiesData = {
  labels: ['example.com', 'sub.example.com', 'test.com', 'app.example.com'],
  datasets: [
    {
      label: 'Vulnerabilities',
      data: [45, 30, 15, 60],  // Example data for vulnerabilities
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      borderColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      borderWidth: 1,
    },
  ],
};

activeIpErrorsData = {
  labels: ['192.168.1.1', '192.168.1.2', '192.168.1.3', '192.168.1.4'],
  datasets: [
    {
      label: 'Errors and Warnings',
      data: [10, 25, 5, 15],  // Example data for errors and warnings
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderWidth: 1,
    },
  ],
};

netBlocksData = {
  labels: ['192.168.1.0/24', '10.0.0.0/8', '172.16.0.0/16'],
  datasets: [
    {
      label: 'Net Block Issues',
      data: [50, 30, 70],  // Example data for net block issues
      backgroundColor: '#ff9f40',
      borderColor: '#ff9f40',
      borderWidth: 1,
    },
  ],
};

applicationsVulnerabilitiesData = {
  labels: ['App 1', 'App 2', 'App 3', 'App 4'],
  datasets: [
    {
      label: 'Vulnerabilities',
      data: [15, 25, 35, 45],  // Example data for vulnerabilities in applications
      backgroundColor: '#4bc0c0',
      borderColor: '#4bc0c0',
      borderWidth: 1,
    },
  ],
};

openCredentialsData = {
  labels: ['Credential 1', 'Credential 2', 'Credential 3'],
  datasets: [
    {
      label: 'Open Credentials',
      data: [5, 10, 3],  // Example data for open credentials
      backgroundColor: '#9966ff',
      borderColor: '#9966ff',
      borderWidth: 1,
    },
  ],
};

openPortsData = {
  labels: ['Port 22', 'Port 80', 'Port 443'],
  datasets: [
    {
      label: 'Open Ports',
      data: [30, 50, 20],  // Example data for open ports
      backgroundColor: '#ff6384',
      borderColor: '#ff6384',
      borderWidth: 1,
    },
  ],
};

leakedCredentialsData = {
  labels: ['Credential Set 1', 'Credential Set 2'],
  datasets: [
    {
      label: 'Leaked Credentials',
      data: [7, 12],  // Example data for leaked credentials
      backgroundColor: '#ffcd56',
      borderColor: '#ffcd56',
      borderWidth: 1,
    },
  ],
};

apiVulnerabilitiesData = {
  labels: ['API 1', 'API 2', 'API 3'],
  datasets: [
    {
      label: 'API Vulnerabilities',
      data: [12, 9, 15],  // Example data for API vulnerabilities
      backgroundColor: '#36a2eb',
      borderColor: '#36a2eb',
      borderWidth: 1,
    },
  ],
};


//---------------------old--------------
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
acquisitionChart1Data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  acquisitionChart1Options = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }]

    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

acquisitionChart2Data = {
  labels: ['1', '2', '3', '4', '5'],  // X-axis labels
  datasets: [
    {
      label: 'Dataset 1',  // Optional: A label for the dataset (useful if you have multiple datasets)
      data: [5, 2, 3, 5, 1.5],  // Data points corresponding to the labels
      borderWidth: 1,  // Thickness of the border lines of the bars
      fill: false,  // Whether the area under the line is filled (relevant for line charts)
      backgroundColor: '#ff6384',  // Background color of the bars (or line points)
      borderColor: '#ff6384',  // Border color of the bars (or line)
    },
  ],
};


  acquisitionChart2Options = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }]

    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
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
  sessionsChart1Data = {
    labels: ['Search', 'Email'],
    datasets: [{
      data: [40,60],
      backgroundColor: ['#007bff', '#cad0e8'],
      borderColor: ['#007bff', '#cad0e8'],
    }]
  };

  sessionsChart1Options = {
    cutoutPercentage: 78,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  sessionsChart2Data = {
    labels: ['Search', 'Email'],
    datasets: [{
      data: [25,75],
      backgroundColor: ['#00cccc', '#cad0e8'],
      borderColor: ['#00cccc', '#cad0e8']
    }]
  };

  sessionsChart2Options = {
    cutoutPercentage: 78,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
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
  allSessionsChartData = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 4, 10, 20, 45, 40, 35, 18],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#560bd0'
    },
    {
      label: '# of Rate',
      data: [3, 6, 15, 35, 50, 45, 35, 25],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#cad0e8'
    }
  ]
};

allSessionsChartOptions = {
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
      },
      ticks: {
        beginAtZero: true,
        font: {
          size: 11,
        },
        max: 80
      }
    },
    x: {
      barPercentage: 0.6,
      grid: {
        color: 'rgba(0,0,0,0.08)',
        drawBorder: false
      },
      ticks: {
        beginAtZero: true,
        font: {
          size: 11,
        },
        display: false
      }
    }
  }
};

lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

lineChartOptions = {
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Sales Data',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
areaChartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [65, 59, 80, 81, 56],
      fill: true,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
    },
  ],
};

areaChartOptions = {
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Revenue Data',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

  handleDropdownChange = (event) => {
    const selectedPeriod = event.target.value;
    this.setState({
      selectedPeriod,
      showHistoricalData: true, // Show the hidden div when a dropdown option is selected
    });
  };

  handleReset = () => {
    this.setState({ selectedPeriod: '' });
  };
  render() {
    return (
      <div>
        <div className="container-fluid d-flex flex-column min-vh-100 p-md-10 mg-t-0">
          <div className="az-content-body">
            <div>
              <h2 className="az-dashboard-title">Hi, welcome back!</h2>
              <h6>Inventory Overview</h6>
            </div>
            <div className="az-dashboard-one-title d-flex  flex-wrap justify-content-between align-items-center">
              <div className="az-content-header-right d-flex  flex-wrap">
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

              {/* Dropdown button for selecting period */}
          <div className="dropdown dropdown-inline d-flex flex-row">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <ThreeDotsVertical />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handleDropdownChange({ target: { value: '7 Days' } })}>
                Last 7 Days
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleDropdownChange({ target: { value: 'Month' } })}>
                Last Month
              </Dropdown.Item>
            <Dropdown.Item onClick={this.handleReset}>
              Reset
            </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
            </div>
{/* Hidden div with historical data */}
            {this.state.selectedPeriod && (
            <div>
              <div className="az-dashboard-one-title d-flex justify-content-between align-items-center">
                <div className="az-content-header-right d-flex">
                <div className="media">
                  <div className="media-body">
                    <h6>29</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <h6>15</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <h6>16</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <h6>15</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <h6>6</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">

                    <h6>38</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <h6>25</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">

                    <h6>35</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">

                    <h6>15</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">

                    <h6>105</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
              </div>
              </div>
            </div>
            )}
            <div className="az-dashboard-nav">
              <DashboardTabs />
            </div>
<div className="row row-sm mg-b-20 mg-sm-t-20">
          <div className="col-lg-8 mg-t-20 mg-lg-t-0">
                    <div className="card card-dashboard-three">
                      <div className="card-header">
                        <p>Domain Vulnerabilities</p>
                        <h6>1654 <small className="tx-success"><i className="icon ion-md-arrow-up"></i> 2.87%</small></h6>
                        <small>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</small>
                      </div>{/* card-header */}
                      <div className="card-body">
                        <div className="chart d-flex align-items-end">
                          <Bar data={this.allSessionsChartData} options={this.allSessionsChartOptions} />
                        </div>
                      </div>
                    </div>
                  </div>
        <div className="col-lg-4">
          <div className="az-content-label mg-b-5">Vulnerability Overview</div>
            <p className="mg-b-20">Below is the basic line chart example.</p>
            <div className="chartjs-wrapper-demo">
              <Line data={this.lineChartData} options={this.lineChartOptions} />
              <Line data={this.areaChartData} options={this.areaChartOptions} />
            </div>
          </div>
</div>
            <div className="row row-sm mg-b-20 mg-sm-t-20">
              <div className="col-lg-4">
                <div className="card card-dashboard-pageviews">
                  <div className="card-header">
                    <h6 className="card-title">Page Views by Page Title</h6>
                    <p className="card-text">This report is based on 100% of sessions.</p>
                  </div>
                  <div className="card-body">
                    <div className="az-list-item">
                      <div>
                        <h6>Admin Home</h6>
                        <span>/demo/admin/index.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">7,755</h6>
                        <span>31.74% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Form Elements</h6>
                        <span>/demo/admin/forms.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">5,215</h6>
                        <span>28.53% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Utilities</h6>
                        <span>/demo/admin/util.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">4,848</h6>
                        <span>25.35% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Form Validation</h6>
                        <span>/demo/admin/validation.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">3,275</h6>
                        <span>23.17% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <h6>Modals</h6>
                        <span>/demo/admin/modals.html</span>
                      </div>
                      <div>
                        <h6 className="tx-primary">3,003</h6>
                        <span>22.21% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                  </div>{/* card-body */}
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
                        <div>
                          <span>Organic Search</span>
                          <span>1,320 <span>(25%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-purple wd-25p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Email</span>
                          <span>987 <span>(20%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-primary wd-20p" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Referral</span>
                          <span>2,010 <span>(30%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-info wd-30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Social</span>
                          <span>654 <span>(15%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-teal wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                      <div className="az-traffic-detail-item">
                        <div>
                          <span>Other</span>
                          <span>400 <span>(10%)</span></span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar bg-gray-500 wd-10p" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>{/* progress */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Your dashboard content */}
            <div className="row row-sm mg-b-20 mg-lg-b-0">
              <div className="col-lg-5 col-xl-4">
                <div className="row g-3">
  <div className="col-md-6 col-lg-12 mb-4 mb-md-0 mb-lg-2">
    <div className="card card-dashboard-five">
      <div className="card-header">
        <h6 className="card-title">Acquisition</h6>
        <span className="card-text">
          Tells you where your visitors originated from, such as search engines, social networks, or website referrals.
        </span>
      </div>
      {/* card-header */}
      <div className="card-body row g-3">
        <div className="col-6 d-flex align-items-center">
          <div className="card-chart bg-white acquisition-chart">
<div className="me-3" style={{ width: '50px', height: '40px' }}>
          <Bar data={this.acquisitionChart1Data} options={this.acquisitionChart1Options} />
</div>
          </div>
          <div>
            <label>Bounce Rate</label>
            <h4>33.50%</h4>
          </div>
        </div>
        {/* col */}
        <div className="col-6 d-flex align-items-center">
          <div className="card-chart bg-white acquisition-chart">
<div className="me-3" style={{ width: '50px', height: '40px' }}>
          <Bar data={this.acquisitionChart2Data} options={this.acquisitionChart2Options} />
</div>
          </div>
          <div>
            <label>Sessions</label>
            <h4>9,065</h4>
          </div>
        </div>
        {/* col */}
      </div>
      {/* card-body */}
    </div>
    {/* card-dashboard-five */}
  </div>
  {/* col */}
  <div className="col-md-6 col-lg-12">
    <div className="card card-dashboard-five">
      <div className="card-header">
        <h6 className="card-title">Sessions</h6>
        <span className="card-text">
          A session is the period time a user is actively engaged with your website, app, etc.
        </span>
      </div>
      {/* card-header */}
      <div className="card-body row g-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <div className="me-3" style={{ width: '50px', height: '40px' }}>
              <Pie data={this.sessionsChart1Data} options={this.sessionsChart1Options} />
            </div>
            <div>
              <label>% New Sessions</label>
              <h4>26.80%</h4>
            </div>
          </div>
        </div>
        {/* col */}
        <div className="col-6">
          <div className="d-flex align-items-center">
            <div className="me-3" style={{ width: '50px', height: '40px' }}>
              <Pie data={this.sessionsChart2Data} options={this.sessionsChart2Options} />
            </div>
            <div>
              <label>Pages/Session</label>
              <h4>1,005</h4>
            </div>
          </div>
        </div>
        {/* col */}
      </div>
      {/* card-body */}
    </div>
    {/* card-dashboard-five */}
  </div>
  {/* col */}
</div>
{/* row */}

              </div>{/* col-lg-3 */}
              <div className="col-lg-7 col-xl-8 mg-t-20 mg-lg-t-0">
                <div className="card card-table-one">
                  <h6 className="card-title">What pages do your users visit</h6>
                  <p className="az-content-text mg-b-20">Part of this date range occurs before the new users metric had been calculated, so the old users metric is displayed.</p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="wd-5p">&nbsp;</th>
                          <th className="wd-45p">Country</th>
                          <th>Entrances</th>
                          <th>Bounce Rate</th>
                          <th>Exits</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><i className="flag-icon flag-icon-us flag-icon-squared"></i></td>
                          <td><strong>United States</strong></td>
                          <td><strong>134</strong> (1.51%)</td>
                          <td>33.58%</td>
                          <td>15.47%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-gb flag-icon-squared"></i></td>
                          <td><strong>United Kingdom</strong></td>
                          <td><strong>290</strong> (3.30%)</td>
                          <td>9.22%</td>
                          <td>7.99%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-in flag-icon-squared"></i></td>
                          <td><strong>India</strong></td>
                          <td><strong>250</strong> (3.00%)</td>
                          <td>20.75%</td>
                          <td>2.40%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-ca flag-icon-squared"></i></td>
                          <td><strong>Canada</strong></td>
                          <td><strong>216</strong> (2.79%)</td>
                          <td>32.07%</td>
                          <td>15.09%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-fr flag-icon-squared"></i></td>
                          <td><strong>France</strong></td>
                          <td><strong>216</strong> (2.79%)</td>
                          <td>32.07%</td>
                          <td>15.09%</td>
                        </tr>
                        <tr>
                          <td><i className="flag-icon flag-icon-ph flag-icon-squared"></i></td>
                          <td><strong>Philippines</strong></td>
                          <td><strong>197</strong> (2.12%)</td>
                          <td>32.07%</td>
                          <td>15.09%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{/* table-responsive */}
                </div>{/* card */}
              </div>{/* col-lg */}

            </div>{/* row */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
