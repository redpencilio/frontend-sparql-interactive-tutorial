import Component from '@glimmer/component';

export default class SectionsSubqueriesComponent extends Component {
  defaultQuery =
    'PREFIX : <http://mu.semte.ch/graphs/books/>\n' +
    'SELECT ?genre (SUM(?p) AS ?price) (SUM(?p) / xsd:float(SAMPLE(?totalPrice)) * 100 AS ?ratio)\n' +
    'WHERE {\n' +
    '  ?book :genre ?genre ;\n' +
    '        :price ?p .\n' +
    '  {\n' +
    '    SELECT (SUM(?p) AS ?totalPrice)\n' +
    '    WHERE {\n' +
    '      ?book :price ?p.\n' +
    '    }\n' +
    '  }\n' +
    '}\n' +
    'GROUP BY ?genre';
}
