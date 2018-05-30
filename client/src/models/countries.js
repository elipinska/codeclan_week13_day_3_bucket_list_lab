const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function (url) {
  this.url = url;
};

Countries.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((countriesData) => {
      // console.log(countriesData);
      PubSub.publish("Countries:data-loaded", countriesData);
    })
    .catch(console.error);
};


module.exports = Countries;
