import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    beerLookup(params) {
      this.transitionTo('results', params.name);
    }
  }
});
