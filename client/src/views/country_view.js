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

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DESTROY!';
  deleteButton.value = country._id;
  countryContainer.appendChild(deleteButton);

  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('CountryView:delete-country', evt.target.value);
  });

  this.element.appendChild(countryContainer);

};



module.exports = CountryView;
