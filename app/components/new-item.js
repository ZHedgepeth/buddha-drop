// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   addNewItem: false,
//   actions: {
//     itemFormShow() {
//       this.set('addNewItem', true);
//     },
//
//     saveItem1() {
//       var params = {
//         strain: this.get('strain'),
//         type: this.get('type'),
//         image: this.get('image'),
//         pricePerGram: this.get('pricePerGram'),
//         pricePerEighth: this.get('pricePerEighth'),
//         pricePerOz: this.get('pricePerOz'),
//         effects: this.get([
//           happy: this.get("happy"),
//           euphoric: this.get("euphoric"),
//           relaxed: this.get("relaxed"),
//           uplifted: this.get("uplifted"),
//           creative: this.get("creative")
//         ]),
//         description: this.get('description'),
//       };
//       this.set('addNewItem', false);
//       this.sendAction('saveItem2', params);
//     }
//   }
// });
