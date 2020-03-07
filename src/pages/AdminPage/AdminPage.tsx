import * as React from 'react';
import { AutoForm } from 'uniforms-antd';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Locations } from '../../api/locations';
import { Slots } from '../../api/slots';

const { TabPane } = Tabs;

interface AdminPageProps {}

const locationSchema = new SimpleSchema({
  name: String,
  address1: String,
  address2: { type: String, optional: true },
  zipCode: { type: SimpleSchema.Integer, min: 1000, max: 9999 },
  city: String,
});
const getSlotSchema = ({ locations }) =>
  new SimpleSchema2Bridge(
    new SimpleSchema({
      startDate: Date,
      endDate: Date,
      locationId: {
        type: String,
        allowedValues: locations.map(({ _id }) => _id),
        uniforms: {
          transform: id => locations.find(({ _id }) => _id === id)?.name,
        },
      },
    }),
  );

const locationFormSchema = new SimpleSchema2Bridge(locationSchema);

const AdminPage: React.FunctionComponent<AdminPageProps> = props => {
  const [showLocationForm, setShowLocationForm] = React.useState(false);
  const [showSlotForm, setShowSlotForm] = React.useState(false);
  const { locations, slots } = useTracker(() => {
    return { locations: Locations.find().fetch(), slots: Slots.find().fetch() };
  });

  const slotFormSchema = React.useMemo(() => getSlotSchema({ locations }), [
    locations,
  ]);
  console.log('locations:', locations);

  return (
    <div className="admin-page">
      <h1>Gestion</h1>

      <Tabs type="card">
        <TabPane tab="Slots" key="1">
          <div>
            <h3>Gérer les Slots</h3>

            <div
              style={{
                marginBottom: 16,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {slots.map(slot => {
                const location = 'Genève';
                return (
                  <Link
                    style={{
                      padding: 8,
                      border: '1px solid grey',
                      margin: 8,
                      flexBasis: 200,
                    }}
                    key={slot._id}
                    to={`/slots/${slot._id}`}
                  >
                    <h4 style={{ margin: 0 }}>
                      {moment(slot.startDate).format('dddd D MMMM YYYY')}
                    </h4>
                    <div>{location}</div>
                    <div>Statut: OUVERT</div>
                  </Link>
                );
              })}
            </div>

            {!showSlotForm && (
              <Button type="primary" onClick={() => setShowSlotForm(true)}>
                Ajouter
              </Button>
            )}
            {showSlotForm && (
              <>
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
                <Button onClick={() => setShowSlotForm(false)}>Annuler</Button>
              </>
            )}
          </div>
        </TabPane>
        <TabPane tab="Lieux" key="2">
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
              <>
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
                <Button onClick={() => setShowLocationForm(false)}>
                  Annuler
                </Button>
              </>
            )}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminPage;
