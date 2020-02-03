import * as React from 'react';
import { Accounts } from 'meteor/epotek:accounts-ui';
import { T9n } from 'meteor-accounts-t9n';
import { fr } from 'meteor-accounts-t9n/build/fr'; // Choose the language you need here
import { useHistory } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

T9n.map('fr', fr);
T9n.setLanguage('fr');

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  minimumPasswordLength: 5,
  onSignedInHook: () => {},
});

interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = props => {
  const history = useHistory();

  if (Meteor.userId()) {
    history.push('/account');
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Accounts.ui.LoginForm
        onSignedInHook={() => {
          history.push('/account');
        }}
      />
    </div>
  );
};

export default LoginPage;
