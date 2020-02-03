import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

interface AccountPageProps {}

const AccountPage: React.FunctionComponent<AccountPageProps> = props => {
  return (
    <div>
      <h1>Mon Compte</h1>

      <Link to="/admin">
        <Button>Admin</Button>
      </Link>
    </div>
  );
};

export default AccountPage;
