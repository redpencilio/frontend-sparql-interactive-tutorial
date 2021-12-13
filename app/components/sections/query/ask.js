import Component from '@glimmer/component';

export default class SectionsQueryAskComponent extends Component {
  defaultGraph = 'http://mu.semte.ch/graphs/music';

  exampleQuery =
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'ASK {\n' +
    '  [a mo:MusicArtist] foaf:made [a mo:Record] .\n' +
    '}';

  exerciseValidQuery =
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'ASK\n' +
    '{\n' +
    '  ?artist foaf:based_near "Belgium" .\n' +
    '  ?artist foaf:name "Blackwave" .\n' +
    '}';
}
