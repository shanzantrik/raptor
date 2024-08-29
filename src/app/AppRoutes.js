import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Signin = lazy(() => import('./general-pages/Signin'));
const Signup = lazy(() => import('./general-pages/Signup'));
const Buttons = lazy(() => import('./ui-elements/Buttons'));
const Dropdowns = lazy(() => import('./ui-elements/Dropdowns'));
const Icons = lazy(() => import('./ui-elements/Icons'));
const FormElements = lazy(() => import('./form/FormElements'));
const ChartJs = lazy(() => import('./charts/ChartJs'));
const BasicTable = lazy(() => import('./tables/BasicTable'));

const AppRoutes = () => {
  return (
    <Suspense fallback=''>
      <Routes>
        <Route path="/" element={<Navigate to="/general-pages/signin" replace />} />
        <Route path="/general-pages/signin" element={<Signin />} />
        <Route path="/general-pages/signup" element={<Signup />} />

        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route path="/ui-elements/buttons" element={<ProtectedRoute component={Buttons} />} />
        <Route path="/ui-elements/dropdowns" element={<ProtectedRoute component={Dropdowns} />} />
        <Route path="/ui-elements/icons" element={<ProtectedRoute component={Icons} />} />
        <Route path="/form/form-elements" element={<ProtectedRoute component={FormElements} />} />
        <Route path="/charts/chartjs" element={<ProtectedRoute component={ChartJs} />} />
        <Route path="/tables/basic-table" element={<ProtectedRoute component={BasicTable} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
