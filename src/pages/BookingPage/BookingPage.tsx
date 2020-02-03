import * as React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

const BookingPage: React.FunctionComponent = () => {
  const { data, loading } = useTracker(() => {});

  return (
    <div>
      <h1>Booker un soir</h1>
    </div>
  );
};

export default BookingPage;
