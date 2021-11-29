import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';

export default class ExerciseComponent extends Component {
  @tracked
  correctQuery = true;

  get sparqlEndpoint() {
    return this.args.sparqlEndpoint ?? 'http://localhost:8890/sparql';
  }

  get validQuery() {
    return this.args.validQuery ?? 'SELECT * WHERE { ?s ?p ?o . } LIMIT 0';
  }

  @action
  async onQueryEventHandler(_instance, tab) {
    this.correctQuery = false;
    const query = tab.getQuery();
    console.log(query);
    console.log(this.validQuery);
    const response = await fetch(
      `/query-equivalence/equivalent?validQuery=${encodeURIComponent(
        this.validQuery
      )}&otherQuery=${encodeURIComponent(query)}`,
      {
        method: 'GET',
      }
    );
    const json = await response.json();
    this.correctQuery = json.data.attributes.equivalent;
  }
}
