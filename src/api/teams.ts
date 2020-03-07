import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export interface Team {
  _id?: string;
  status: string;
  users: Array<Record<string, any>>;
}

export const Teams = new Mongo.Collection<Team>('teams');

Meteor.methods({
  insertTeam({ team }) {
    return Teams.insert({ ...team, status: 'proposal' });
  },
  removeTeam({ _id }) {
    return Teams.remove(_id);
  },
  updateTeam({ _id, update }) {
    return Teams.update(_id, { $set: update });
  },
});
