import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateItemForm: false,
  actions: {
      imageShow() {
        this.set('isImageShowing', true);
      },
      imageHide() {
        this.set('isImageShowing', false);
      },
      update(item, params) {
        this.sendAction('update', item, params);
      }
    }
  });
