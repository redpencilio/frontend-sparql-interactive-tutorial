import Component from '@glimmer/component';
import { action } from '@ember/object';
import Yasgui from '@triply/yasgui';

export default class YasguiComponent extends Component {
  yasgui;
  sparqlEndpoint = this.args.sparqlEndpoint ?? '/sparql';
  yasguiConfig = {
    requestConfig: {
      endpoint: this.sparqlEndpoint,
    },
    autofocus: false,
  };

  @action
  create(yasguiElement) {
    this.yasgui = new Yasgui(yasguiElement, this.yasguiConfig);
    this.yasgui.on('query', this.args.onQueryEventHandler ?? (() => {}));
    this.yasgui.on(
      'queryResponse',
      this.args.onQueryResponseEventHandler ?? (() => {})
    );

    this.yasgui
      .getTab()
      .yasqe.setValue(
        this.args.defaultQuery ??
          'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
            'SELECT ?thing ?type\n' +
            'WHERE {\n' +
            '  ?subject ?predicate ?object .\n' +
            '}'
      );
    this.yasgui
      .getTab()
      .yasqe.setOption('readOnly', this.args.readOnly ?? false);

    // Workaround: clear Yasgui's localStorage entry each time to prevent saving queries.
    // Necessary because if a page contains multiple Yasgui instances, on refresh their query
    // will be overwritten by the last query to run, which is quite strange for a user
    localStorage.removeItem('yagui__config');
  }
}
