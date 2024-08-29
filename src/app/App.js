import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Header from './shared/Header';
import Footer from './shared/Footer';

const App = () => {
  const location = useLocation();

  const isFullPageLayout = useMemo(() => {
    const fullPageLayoutRoutes = ['/general-pages/signin', '/general-pages/signup', '/general-pages/page-404'];
    return fullPageLayoutRoutes.includes(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    const contentWrapper = document.querySelector('.az-content-wrapper');
    if (contentWrapper) {
      if (isFullPageLayout) {
        contentWrapper.classList.add('p-0');
      } else {
        contentWrapper.classList.remove('p-0');
      }
    }
  }, [isFullPageLayout]);

  return (
    <div>
      {!isFullPageLayout && <Header />}
      <div className="az-content-wrapper">
        <AppRoutes />
      </div>
      {!isFullPageLayout && <Footer />}
    </div>
  );
};

export default App;
