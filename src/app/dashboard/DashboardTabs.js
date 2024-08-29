import React, { useState, useEffect } from 'react';
import TabContents from './TabContents';
import ExecutiveView from './ExecutiveView';
import RiskView from './RiskView';

// Static data structure for different tabs
const staticData = {
  overview: {
    title: 'Overview Data',
    content: 'This is some static overview data. Replace with actual content.'
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
  const [data, setData] = useState(staticData.overview);

  // Update data based on the active tab
  useEffect(() => {
    setData(staticData[activeTab] || staticData.overview);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="az-dashboard-nav">
        <nav className="nav">
          {Object.keys(staticData).map((tab) => (
            <a
              key={tab}
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              href={`#${tab}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab);
              }}
            >
              {staticData[tab].title}
            </a>
          ))}
        </nav>
        <nav className="nav">
          <a className="nav-link" href="/dashboard"><i className="far fa-save"></i> Save Report</a>
          <a className="nav-link" href="/dashboard"><i className="far fa-file-pdf"></i> Export to PDF</a>
          <a className="nav-link" href="/dashboard"><i className="far fa-envelope"></i> Send to Email</a>
          <a className="nav-link" href="/dashboard"><i className="fas fa-ellipsis-h"></i></a>
        </nav>
      </div>
      <div className="tab-content">
        {activeTab === 'overview' && <TabContents />}
        {activeTab === 'executive' && <ExecutiveView />}
        {activeTab === 'risk' && <RiskView />}
        {activeTab === 'more' && <TabContents />}
        {Object.keys(staticData).indexOf(activeTab) === -1 && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTabs;
