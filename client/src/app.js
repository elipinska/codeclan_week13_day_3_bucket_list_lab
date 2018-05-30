const Countries = require('./models/countries.js');
const CountriesListView = require('./views/countries_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
console.log("Yo yo yo ");

const listViewElement = document.querySelector('#country-list-view');
const countriesListView = new CountriesListView(listViewElement);

countriesListView.bindEvents();

const url = 'http://localhost:3000/api/countriesNames';
const countries = new Countries(url);
countries.getData();





});
