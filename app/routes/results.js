import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    debugger;
    var key = config.myApiKey;
    var url = 'http://api.brewerydb.com/v2/beers/?key=' + key + '&name=' + params.name;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.data;
    });
  }
});
