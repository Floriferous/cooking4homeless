import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

const Router: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/booking">
          <BookingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
