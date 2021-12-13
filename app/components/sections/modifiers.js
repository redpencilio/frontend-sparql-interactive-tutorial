import Component from '@glimmer/component';

export default class SectionsModifiersComponent extends Component {
  peopleGraph = 'http://mu.semte.ch/graphs/people';
  booksGraph = 'http://mu.semte.ch/graphs/books';

  firstExampleQuery =
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'SELECT ?person ?name\n' +
    'WHERE {\n' +
    '  ?person foaf:name ?name \n.' +
    '}\n' +
    'ORDER BY ?name';

  secondExampleQuery =
    'PREFIX : <http://mu.semte.ch/graphs/people/>\n' +
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'SELECT DISTINCT ?nickName\n' +
    'WHERE {\n' +
    '  ?person :nickName ?nickName \n.' +
    '}';

  thirdExampleQuery =
    'PREFIX : <http://mu.semte.ch/graphs/people/>\n' +
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'SELECT DISTINCT ?person ?nickName\n' +
    'WHERE {\n' +
    '  ?person :nickName ?nickName \n.' +
    '}';

  fourthExampleQuery =
    'PREFIX : <http://mu.semte.ch/graphs/books/>\n' +
    'SELECT ?genre (SUM(?price) AS ?totalPrice)\n' +
    'WHERE {\n' +
    '  ?book :genre ?genre ;\n' +
    '        :price ?price .\n' +
    '}\n' +
    'GROUP BY ?genre';

  fifthExampleQuery =
    'PREFIX : <http://mu.semte.ch/graphs/books/>\n' +
    'SELECT ?genre (SUM(?price) AS ?totalPrice)\n' +
    'WHERE {\n' +
    '  ?book :genre ?genre ;\n' +
    '        :price ?price .\n' +
    '}\n' +
    'GROUP BY ?genre\n' +
    'HAVING (SUM(?price) > 10)';
}
