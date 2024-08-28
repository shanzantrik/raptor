// ExecutiveView.js
import React from 'react';
import { Line } from 'react-chartjs-2';

// Define chart data and options at the top level
const lineChartData = {
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

const lineChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Define area chart data and options
const areaChartData = {
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

const areaChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Other chart data and options can also be defined here

const ExecutiveView = () => {
  return (
    <div className="row row-lg mg-b-20">
      <div className="col-lg-10 mg-t-20 mg-lg-t-0">
        <div className="row row-sm">
          <div className="col-sm-8 col-md-6">
            <div className="az-content-label mg-b-5">Vulnerability Overview</div>
            <p className="mg-b-20">Below is the basic line chart example.</p>
            <div className="chartjs-wrapper-demo">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
          <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
            <div className="az-content-label mg-b-5">Issues & Alerts</div>
            <p className="mg-b-20">Below is the basic area chart example.</p>
            <div className="chartjs-wrapper-demo">
              <Line data={areaChartData} options={areaChartOptions} />
            </div>
          </div>
          {/* Add the other charts as you did before */}
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

export default ExecutiveView;
