import Ember from 'ember';

export function itemPrice(params) {
  var pricePerGram = params[0].get('pricePerGram');

  if (pricePerGram >= 20){
    return '$$$$';
  } else if (pricePerGram >= 15){
    return '$$$';
  } else if (pricePerGram >= 10){
    return '$$';
  } else if (pricePerGram <= 9){
    return '$';
  }
}

export default Ember.Helper.helper(itemPrice);
