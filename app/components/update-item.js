import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
        var happyUserValue = this.get('happy');
        var euphoricUserValue = this.get('euphoric');
        var relaxedUserValue = this.get('relaxed');
        var upliftedUserValue = this.get('uplifted');
        var creativeUserValue = this.get('creative');
        var params = {
          strain: this.get('strain'),
          type: this.get('type'),
          image: this.get('image'),
          pricePerGram: this.get('pricePerGram'),
          pricePerEighth: this.get('pricePerEighth'),
          pricePerOz: this.get('pricePerOz'),
          effects: {
            happy: happyUserValue,
            euphoric: euphoricUserValue,
            relaxed: relaxedUserValue,
            uplifted: upliftedUserValue,
            creative: creativeUserValue
          },
          description: this.get('description'),
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    }
  }
});
