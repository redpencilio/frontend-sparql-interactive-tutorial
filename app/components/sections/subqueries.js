import Component from '@glimmer/component';

export default class SectionsSubqueriesComponent extends Component {
  defaultQuery =
    'PREFIX : <http://mu.semte.ch/graphs/books/>\n' +
    'SELECT ?genre ?price (?price / SAMPLE(?totalPrice) * 100 AS ?ration)\n' +
    'WHERE {\n' +
    '  ?book :genre ?genre;\n' +
    '        :price ?price.\n' +
    '  {\n' +
    '    SELECT (SUM(?p) AS ?totalPrice)\n' +
    '    WHERE {\n' +
    '      ?book :price ?p.\n' +
    '    }\n' +
    '  }\n' +
    '}\n' +
    'GROUP BY ?genre';
}
