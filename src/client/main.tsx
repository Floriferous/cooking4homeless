import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Router from './Router';

Meteor.startup(() => {
  render(<Router />, document.getElementById('react-target'));
});
