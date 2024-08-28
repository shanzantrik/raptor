// TabContents.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const TabContents = () => {
  // Static data for charts
  const bounceRateChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'],
    datasets: [{
      data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8, 12.9, 13.8, 10.2, 5.8, 7.6, 8.8, 5.6, 5.6, 6.3, 4.2, 3.6, 5.4, 6.5, 8.1, 10.9, 7.6, 9.7, 10.9, 9.5, 5.4, 4.9, .7, 2.3, 5.5, 10, 10.6, 8.3, 8.4, 8.5, 5.8 ],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(0, 204, 212, .2)'],
      borderColor: ['rgb(0, 204, 212)']
    }]
  };
  const bounceRateChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 40,
          stepSize: 10,
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };
  const totalUsersChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    datasets: [{
      data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#007bff',
      borderColor: '#007bff'
    }]
  };
  const totalUsersChartOptions = {
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
  const allSessionsChartData = {
    labels: [0,1,2,3,4,5,6,7],
    datasets: [{
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
    }]
  };
  const allSessionsChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          max: 80
        },
        gridLines: {
          drawBorder: false,
        }
      }],
      xAxes: [{
        barPercentage: 0.6,
        gridLines: {
          color: 'rgba(0,0,0,0.08)',
          drawBorder: false
        },
        ticks: {
          beginAtZero:true,
          fontSize: 11,
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
          <div className="col-sm-12 mg-t-20">
            <div className="card card-dashboard-three">
              <div className="card-header">
                <p>All Sessions</p>
                <h6>16,869 <small className="tx-success"><i className="icon ion-md-arrow-up"></i> 2.87%</small></h6>
                <small>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</small>
              </div>
              <div className="card-body">
                <div className="chart d-flex align-items-end">
                  <Bar data={allSessionsChartData} options={allSessionsChartOptions} />
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
                        </div>{/* list-group-item */}
                    <div className="az-list-item">
                      <div>
                        <p>Form Elements</p>
                        <span>/demo/admin/forms.html</span>
                        <p className="tx-primary">5,215</p>
                        <span>28.53% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}
                  <div className="az-list-item">
                      <div>
                        <p>Form Elements</p>
                        <span>/demo/admin/forms.html</span>
                        <p className="tx-primary">5,215</p>
                        <span>28.53% (-100.00%)</span>
                      </div>
                    </div>{/* list-group-item */}


                  </div>{/* card-body */}
                </div>{/* card */}

      </div>{/*col */}
    </div>
  );
};

export default TabContents;
