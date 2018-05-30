const Countries = require('./models/countries.js');
const CountriesListView = require('./views/countries_list_view.js');
const CountriesFormView = require('./views/countries_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

const countriesForm = document.querySelector('#countries-form');
const countriesFormView = new CountriesFormView(countriesForm);
countriesFormView.bindEvents();

const listViewElement = document.querySelector('#country-list-view');
const countriesListView = new CountriesListView(listViewElement);
countriesListView.bindEvents();

const url = 'http://localhost:3000/api/countriesNames';
const countries = new Countries(url);
countries.bindEvents();
countries.getData();





});
