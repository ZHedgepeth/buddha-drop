import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateItemForm: false,
  shoppingCart: Ember.inject.service(),

  actions: {
      imageShow() {
        this.set('isImageShowing', true);
      },
      imageHide() {
        this.set('isImageShowing', false);
      },
      update(item, params) {
        this.sendAction('update', item, params);
      },
      addToCart(item) {
        this.get('shoppingCart').add(item);
      }
    }
  });
