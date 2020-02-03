import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export interface Location {
  _id?: string;
  name: string;
  address1: string;
  address2: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  contactIds: string;
}

export const Locations = new Mongo.Collection<Location>('locations');

Meteor.methods({
  insertLocation({ location }) {
    return Locations.insert(location);
  },
  removeLocation({ _id }) {
    return Locations.remove(_id);
  },
  updateLocation({ _id, update }) {
    return Locations.update(_id, { $set: update });
  },
});
