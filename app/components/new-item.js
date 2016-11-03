import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },

    saveItem1() {
      var happyUserValue = this.get('happy');
      var euphoricUserValue = this.get('euphoric');
      var relaxedUserValue = this.get('relaxed');
      var upliftedUserValue = this.get('uplifted');
      var creativeUserValue = this.get('creative');
      var params = {
        strain: this.get('strain'),
        type: this.get('type'),
        image: this.get('image'),
        pricePerGram: parseInt(this.get('pricePerGram')),
        pricePerEighth: parseInt(this.get('pricePerEighth')),
        pricePerOz: parseInt(this.get('pricePerOz')),
        effects: {
          happy: happyUserValue,
          euphoric: euphoricUserValue,
          relaxed: relaxedUserValue,
          uplifted: upliftedUserValue,
          creative: creativeUserValue
        },
        description: this.get('description'),
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem2', params);
    }
  }
});
