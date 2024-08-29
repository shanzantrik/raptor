import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ComponentsSidebar = () => {
  const location = useLocation();

  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div>
      <div className="az-content-left az-content-left-components">
        <div className="component-item">
          <label>UI Elements</label>
          <nav className="nav flex-column">
            <Link to="/ui-elements/buttons" className={isPathActive('/ui-elements/buttons') ? "nav-link active" : "nav-link"}>Buttons</Link>
            <Link to="/ui-elements/dropdowns" className={isPathActive('/ui-elements/dropdowns') ? "nav-link active" : "nav-link"}>Dropdown</Link>
            <Link to="/ui-elements/icons" className={isPathActive('/ui-elements/icons') ? "nav-link active" : "nav-link"}>Icons</Link>
          </nav>

          <label>Forms</label>
          <nav className="nav flex-column">
            <Link to="/form/form-elements" className={isPathActive('/form/form-elements') ? "nav-link active" : "nav-link"}>Form Elements</Link>
          </nav>

          <label>Charts</label>
          <nav className="nav flex-column">
            <Link to="/charts/chartjs" className={isPathActive('/charts/chartjs') ? "nav-link active" : "nav-link"}>ChartJS</Link>
          </nav>

          <label>Tables</label>
          <nav className="nav flex-column">
            <Link to="/tables/basic-table" className={isPathActive('/tables/basic-table') ? "nav-link active" : "nav-link"}>Basic Tables</Link>
          </nav>
        </div>{/* component-item */}
      </div>{/* az-content-left */}
    </div>
  );
};

export default ComponentsSidebar;
