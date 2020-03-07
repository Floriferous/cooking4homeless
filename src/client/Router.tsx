import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import TutorialPage from '../pages/TutorialPage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';
import AdminPage from '../pages/AdminPage';
import SlotPage from '../pages/SlotPage/SlotPage';

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
        <Route path="/tutorial">
          <TutorialPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/account">
          <AccountPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/slots/:slotId">
          <SlotPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
