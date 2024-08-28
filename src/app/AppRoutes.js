import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
const Dashboard = lazy(() => import('./dashboard/Dashboard'))

const Signin = lazy(() => import('./general-pages/Signin'))
const Signup = lazy(() => import('./general-pages/Signup'))

const Buttons = lazy(() => import('./ui-elements/Buttons'))
const Dropdowns = lazy(() => import('./ui-elements/Dropdowns'))
const Icons = lazy(() => import('./ui-elements/Icons'))

const FormElements = lazy(() => import('./form/FormElements'))

const ChartJs = lazy(() => import('./charts/ChartJs'))

const BasicTable = lazy(() => import('./tables/BasicTable'))



export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback=''>
        <Switch>
          <Route exact path="/">
            <Redirect to="/general-pages/signin"></Redirect>
          </Route>
          <ProtectedRoute exact path="/dashboard" component={ Dashboard } />

          <Route exact path="/general-pages/signin" component={ Signin } />
          <Route exact path="/general-pages/signup" component={ Signup } />

          <ProtectedRoute exact path="/ui-elements/buttons" component={ Buttons } />
          <ProtectedRoute exact path="/ui-elements/dropdowns" component={ Dropdowns } />
          <ProtectedRoute exact path="/ui-elements/icons" component={ Icons } />

          <ProtectedRoute exact path="/form/form-elements" component={ FormElements } />

          <ProtectedRoute exact path="/charts/chartjs" component={ ChartJs } />

          <ProtectedRoute exact path="/tables/basic-table" component={ BasicTable } />

        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
