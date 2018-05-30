const PubSub = require('../helpers/pub_sub');

const CountriesFormView = function (element){
  this.element = element;
}

CountriesFormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

CountriesFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newCountry = this.createCountry(evt.target);
  PubSub.publish('CountriesFormView:country-submitted', newCountry);
  evt.target.reset();
};

CountriesFormView.prototype.createCountry = function (element) {
  const newCountry = {
    country:{
      name: element[0].value
    }
  }
  return newCountry;
};

module.exports = CountriesFormView;
