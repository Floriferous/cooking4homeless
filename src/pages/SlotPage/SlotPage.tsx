import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { Locations } from '../../api/locations';
import { Slots } from '../../api/slots';
import { Teams } from '../../api/teams';
import Button from '../../components/Button';

const SlotPage = () => {
  const { slotId } = useParams();
  const { location, slot, teams = [] } = useTracker(() => {
    const s = Slots.findOne({ _id: slotId });
    let l;
    let t;

    if (s?.locationId) {
      l = Locations.findOne({ _id: s.locationId });
    }

    if (s?.teamIds?.length > 0) {
      t = Teams.find({ _id: { $in: s.teamIds } });
    }

    return { slot: s, location: l, teams: t };
  });

  if (!slot || !location) {
    return <h1>Loading</h1>;
  }

  return (
    <div style={{ padding: 16 }}>
      <Link to="/admin">
        <Button>Retour</Button>
      </Link>

      <br />
      <h1 style={{ marginBottom: 0 }}>
        Slot du {moment(slot?.startDate).format('dddd D MMMM YYYY')}
      </h1>
      <h2 style={{ opacity: 0.5 }}>{location?.name}</h2>
      <div>Statut: {slot.status}</div>
      <br />
      <div>
        <h3>Équipes inscrites</h3>
        {teams.length === 0 && <span>Aucune pour l'instant</span>}
      </div>
    </div>
  );
};

export default SlotPage;
