import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import VulnerabilityTable from '../shared/VulnerabilityTable';
import vulnerabilityData from '../shared/Vulnerabilty-Data.json'; // Importing the JSON file directly

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid d-flex flex-row min-vh-100 p-md-10 mg-t-0">

          <div className="col-lg-12">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Tables</span>
              <span>Vulnerability Data</span>
            </div>
            <h2 className="az-content-title">Vulnerability Data</h2>

            {/* Vulnerability Data Table */}
            <div className="table-responsive">
              <VulnerabilityTable data={vulnerabilityData} />
            </div>

            <div className="ht-40"></div>
          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    );
  }
}

export default BasicTable;
