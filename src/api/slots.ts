import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export interface Slot {
  _id?: string;
  startDate: string;
  endDate: string;
  locationId: string;
  createdAt: Date;
  createdById: string;
  teamIds: string;
}

export const Slots = new Mongo.Collection<Slot>('slots');

Meteor.methods({
  insertSlot({ slot }) {
    return Slots.insert(slot);
  },
  removeSlot({ _id }) {
    return Slots.remove(_id);
  },
  updateSlot({ _id, update }) {
    return Slots.update(_id, { $set: update });
  },
});
