import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import EditProfile from "./customers-list/CustomerCard";

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/customer-card/:id`} component={EditProfile} />
      <Route path={`${match.url}/customers-list`} component={lazy(() => import(`./customers-list`))} />
    </Switch>
  </Suspense>
);

export default Pages;