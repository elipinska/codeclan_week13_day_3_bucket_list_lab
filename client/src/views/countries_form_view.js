const PubSub = require('../helpers/pub_sub');

const CountriesFormView = function (element){
  this.element = element;
}

CountriesFormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });

  this.populateDropdown();
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

CountriesFormView.prototype.populateDropdown = function () {
  PubSub.subscribe('Countries:dropdown-api-loaded', (evt) => {
    this.createDropdown(evt.detail);
  });
};

CountriesFormView.prototype.createDropdown = function(countriesData) {
  const selectElement = document.querySelector('select#country-list')

  countriesData.forEach((country) => {
    const newOption = document.createElement('option');
    newOption.textContent = country.name;
    newOption.value = country.name;
    selectElement.appendChild(newOption);
  });

}

module.exports = CountriesFormView;
