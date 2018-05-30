const PubSub = require('../helpers/pub_sub');

const CountryView = function (element) {
  this.element = element;
}

CountryView.prototype.render = function (country) {
  const countryContainer = document.createElement('div');
  countryContainer.id = 'country';
  const countryName = document.createElement('h3');
  countryName.id = 'country-name';
  countryName.textContent = country.name;
  countryContainer.appendChild(countryName);
  this.element.appendChild(countryContainer);
};

module.exports = CountryView;
