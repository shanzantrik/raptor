import React, { useState, useEffect } from 'react';
import TabContents from './TabContents';
import ExecutiveView from './ExecutiveView';
import RiskView from './RiskView';
  const staticData = {
    overview: {
      title: 'Overview Data',
      content: 'This is some static executive view data. Replace with actual content.'
    },
    executive: {
      title: 'Executive View Data',
      content: 'This is some static executive view data. Replace with actual content.'
    },
    risk: {
      title: 'Risk & Vulnerability View Data',
      content: 'This is some static risk & vulnerability view data. Replace with actual content.'
    },
    more: {
      title: 'More Data',
      content: 'This is some static more data. Replace with actual content.'
    }
  };
const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState(null);

  // Load static data based on active tab
  useEffect(() => {
    if (activeTab !== 'overview') {
      setData(staticData[activeTab]);
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="az-dashboard-nav">
        <nav className="nav">
  <a
    className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
    href="#overview"
    onClick={() => handleTabClick('overview')}
  >
    Overview
  </a>
  <a
    className={`nav-link ${activeTab === 'executive' ? 'active' : ''}`}
    href="#executive"
    onClick={() => handleTabClick('executive')}
  >
    Executive View
  </a>
  <a
    className={`nav-link ${activeTab === 'risk' ? 'active' : ''}`}
    href="#risk"
    onClick={() => handleTabClick('risk')}
  >
    Risk & Vulnerability View
  </a>
  <a
    className={`nav-link ${activeTab === 'more' ? 'active' : ''}`}
    href="#more"
    onClick={() => handleTabClick('more')}
  >
    More
  </a>
</nav>
              <nav className="nav">
                <a className="nav-link" href="/dashboard"><i className="far fa-save"></i> Save Report</a>
                <a className="nav-link" href="/dashboard"><i className="far fa-file-pdf"></i> Export to PDF</a>
                <a className="nav-link" href="/dashboard"><i className="far fa-envelope"></i>Send to Email</a>
                <a className="nav-link" href="/dashboard"><i className="fas fa-ellipsis-h"></i></a>
              </nav>
      </div>
      <div className="tab-content">
        {activeTab === 'overview' && <TabContents />}
        {activeTab !== 'overview' && (
          <div>
            {data ? (
              <div>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
              </div>
            ) : (
              'Loading data...'
            )}
          </div>
        )}
      </div>
      <div className="tab-content">
        {activeTab === 'executive' && <ExecutiveView />}
        {/* {activeTab !== 'executive' && (
          <div>
            {data ? (
              <div>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
              </div>
            ) : (
              'Loading data...'
            )}
          </div>
        )} */}
      </div>
      <div className="tab-content">
        {activeTab === 'risk' && <RiskView />}
        {/* {activeTab !== 'risk' && (
          <div>
            {data ? (
              <div>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
              </div>
            ) : (
              'Loading data...'
            )}
          </div>
        )} */}
      </div>
      <div className="tab-content">
        {activeTab === 'more' && <TabContents />}
        {/* {activeTab !== 'more' && (
          <div>
            {data ? (
              <div>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
              </div>
            ) : (
              'Loading data...'
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};


export default DashboardTabs;
