import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    beerLookup() {
      var params = {
        name: this.get('name')
      };
    this.sendAction('beerLookup', params);
  }
}
});
