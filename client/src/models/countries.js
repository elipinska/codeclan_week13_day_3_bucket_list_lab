const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function (url) {
  this.url = url;
};

Countries.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((countriesData) => {
    PubSub.publish('Countries:data-loaded', countriesData);
  })
  .catch(console.error);
};

Countries.prototype.getDataForDropdown = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get()
  .then((apiCountriesData) => {
    console.log(apiCountriesData);
    PubSub.publish('Countries:dropdown-api-loaded', apiCountriesData);
  })
  .catch(console.error);
};



Countries.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesFormView:country-submitted', (evt) => {
    this.postCountry(evt.detail);
  });

  this.deleteCountry();
};

Countries.prototype.postCountry = function (country) {
  const request = new Request(this.url);
  request.post(country)
  .then((countries) => {
      this.getData();
  })
};

Countries.prototype.deleteCountry = function () {
  PubSub.subscribe('CountryView:delete-country', (evt) => {
    const request = new Request(this.url);
    request.delete(evt.detail)
      .then((countriesData) =>  {
        this.getData();
      });
  })
}

module.exports = Countries;
