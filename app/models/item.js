import DS from 'ember-data';

export default DS.Model.extend({
  strain: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  pricePerGram: DS.attr(),
  pricePerEighth: DS.attr(),
  pricePerOz: DS.attr(),
  effects: DS.attr(),
  description: DS.attr(),
  // reviews: DS.hasMany('review', { async:true })
});
