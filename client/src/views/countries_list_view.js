const PubSub = require('../helpers/pub_sub');
const CountryView = require('./country_view.js');

const CountriesListView = function(element) {
  this.element = element;
}

CountriesListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-loaded', (evt) => {
    console.log(evt.detail);
    this.render(evt.detail);
  })
};

CountriesListView.prototype.render = function (data) {
  this.element.innerHTML = '';
  const countryView = new CountryView(this.element);
  data.forEach((country) => {
    countryView.render(country);
  });
};


module.exports = CountriesListView;
