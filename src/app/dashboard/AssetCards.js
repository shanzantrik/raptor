import React from 'react';
import { FaNetworkWired, FaDesktop, FaMobileAlt, FaCloud, FaDatabase, FaSatelliteDish, } from 'react-icons/fa';

const AssetCards = () => {
  return (
    <div className="row">
      <div className="col-md-2">
        <div className="card text-center" style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <div className="card-body">
            <FaDatabase size={40} className="mb-2" />
            <h5 className="card-title">Total Assets</h5>
            <h2>624</h2>
            <button className="btn btn-outline-info btn-sm">Low Risk</button>
            <p className="mt-2">30</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-center">
          <div className="card-body">
            <FaNetworkWired size={40} className="mb-2" />
            <h5 className="card-title">Network Assets</h5>
            <h2>330</h2>
            <button className="btn btn-outline-warning btn-sm">Medium Risk</button>
            <p className="mt-2">40</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-center">
          <div className="card-body">
            <FaDesktop size={40} className="mb-2" />
            <h5 className="card-title">Web Assets</h5>
            <h2>265</h2>
            <button className="btn btn-outline-warning btn-sm">Medium Risk</button>
            <p className="mt-2">40</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-center">
          <div className="card-body">
            <FaMobileAlt size={40} className="mb-2" />
            <h5 className="card-title">Mobile Assets</h5>
            <h2>2</h2>
            <button className="btn btn-outline-warning btn-sm">Medium Risk</button>
            <p className="mt-2">42</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-center">
          <div className="card-body">
            <FaCloud size={40} className="mb-2" />
            <h5 className="card-title">Cloud Assets</h5>
            <h2>27</h2>
            <button className="btn btn-outline-info btn-sm">Info Risk</button>
            <p className="mt-2">0</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-center" style={{ backgroundColor: '#c8cedb' }}>
          <div className="card-body">
            <FaSatelliteDish size={40} className="mb-2" />
            <h5 className="card-title">Social Media Assets</h5>
            <h2>10</h2>
            <button className="btn btn-outline-primary btn-sm">Info Risk</button>
            <p className="mt-2">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCards;
