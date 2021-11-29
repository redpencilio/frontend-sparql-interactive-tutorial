import Component from '@glimmer/component';
import { action } from '@ember/object';
import Yasgui from '@triply/yasgui';

export default class YasguiComponent extends Component {
  yasgui;

  get sparqlEndpoint() {
    return this.args.sparqlEndpoint ?? 'http://localhost:8890/sparql';
  }

  get yasguiConfig() {
    return {
      requestConfig: {
        endpoint: this.sparqlEndpoint,
      },
      autofocus: false,
    };
  }

  @action
  create(element) {
    this.yasgui = new Yasgui(element, this.yasguiConfig);
    this.yasgui.on('query', this.args.onQueryEventHandler ?? (() => {}));
    this.yasgui.on(
      'queryResponse',
      this.args.onQueryResponseEventHandler ?? (() => {})
    );
  }
}
