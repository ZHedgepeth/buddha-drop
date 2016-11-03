import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveItem3(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('index');
    },

    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          if(key !== "effects") {
            item.set(key,params[key]);
          }
        }
      });

      Object.keys(params.effects).forEach(function(key) {
        if(params.effects[key]!==undefined) {
          var effects = item.get('effects');
          var valueToUpdate = params.effects[key];
          console.log(effects);
          console.log(key);
          console.log(valueToUpdate);
          // item.set("effects", effects);
          Ember.set(effects, key, valueToUpdate);
          item.set('effects', effects);
          // console.log(item);
          // item.set(key, params.effects[key]);
        }
      });

      item.save();
      this.transitionTo('index');
    }
  }
});
