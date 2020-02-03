import * as React from 'react';
import { AutoForm } from 'uniforms-antd';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import Button from '../../components/Button';
import { Locations } from '../../api/locations';
import { Slots } from '../../api/slots';

interface AdminPageProps {}

const locationSchema = new SimpleSchema({
  name: String,
  address1: String,
  address2: { type: String, optional: true },
  zipCode: { type: SimpleSchema.Integer, min: 1000, max: 9999 },
  city: String,
});
const slotSchema = new SimpleSchema({
  startDate: Date,
  endDate: Date,
  locationId: String,
});

const locationFormSchema = new SimpleSchema2Bridge(locationSchema);
const slotFormSchema = new SimpleSchema2Bridge(slotSchema);

const AdminPage: React.FunctionComponent<AdminPageProps> = props => {
  const [showLocationForm, setShowLocationForm] = React.useState(false);
  const [showSlotForm, setShowSlotForm] = React.useState(false);
  const { locations, slots } = useTracker(() => {
    return { locations: Locations.find().fetch(), slots: Slots.find().fetch() };
  });
  console.log('locations:', locations);

  return (
    <div className="admin-page">
      <h1>Gestion</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Gérer les endroits</h3>

          <div style={{ marginBottom: 16 }}>
            {locations.map(location => {
              return (
                <div style={{ padding: 8 }} key={location._id}>
                  <h4 style={{ margin: 0 }}>{location.name}</h4>
                  <span>{location.city}</span>
                </div>
              );
            })}
          </div>

          {!showLocationForm && (
            <Button onClick={() => setShowLocationForm(true)}>Ajouter</Button>
          )}
          {showLocationForm && (
            <AutoForm
              schema={locationFormSchema}
              onSubmit={location =>
                new Promise((resolve, reject) =>
                  Meteor.call('insertLocation', { location }, (err, res) =>
                    err ? reject(err) : resolve(res),
                  ),
                ).then(() => setShowLocationForm(false))
              }
            />
          )}
        </div>

        <div>
          <h3>Gérer les Slots</h3>

          <div style={{ marginBottom: 16 }}>
            {slots.map(slot => {
              const location = 'Genève';
              return (
                <div style={{ padding: 8 }} key={slot._id}>
                  <h4 style={{ margin: 0 }}>
                    {moment(slot.date).format('D MMMM YYYY')}
                  </h4>
                  <span>{location}</span>
                </div>
              );
            })}
          </div>

          {!showSlotForm && (
            <Button onClick={() => setShowSlotForm(true)}>Ajouter</Button>
          )}
          {showSlotForm && (
            <AutoForm
              schema={slotFormSchema}
              onSubmit={slot =>
                new Promise((resolve, reject) =>
                  Meteor.call('insertSlot', { slot }, (err, res) =>
                    err ? reject(err) : resolve(res),
                  ),
                ).then(() => setShowSlotForm(false))
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
