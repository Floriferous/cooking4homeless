import { Mongo } from 'meteor/mongo';

export interface Recipe {
  _id?: string;
  title: string;
  ingredients: string;
  description: Date;
  cost: string;
}

export const Recipes = new Mongo.Collection<Recipe>('recipes');
