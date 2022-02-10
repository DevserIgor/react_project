import React from "react";
import { Switch, Route } from 'react-router-dom';
// import { Dashboard } from "../pages/Dashboard";
// import { Repo } from "../pages/Repo";

const Dashboard = React.lazy(
  () => import(
    /* webpackPrefetch: true */
    /* webpackChunkName: "dashboard" */
    '../pages/Dashboard'
  ));

const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "Repo" */
      "../pages/Repo"
    )
);

export const Routes: React.FC = () => {
  return (
    <Switch>
      <React.Suspense fallback={'Loading...'}>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" exact />
      </React.Suspense>
    </Switch>
  );
};
