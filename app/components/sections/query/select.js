import Component from '@glimmer/component';

export default class SectionsQuerySelectComponent extends Component {
  defaultGraph = 'http://mu.semte.ch/graphs/music';

  firstExampleQuery =
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'SELECT ?thing ?type\n' +
    'WHERE {\n' +
    '  ?thing rdf:type ?type .\n' +
    '}';

  secondExampleQuery =
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'SELECT ?idles\n' +
    'WHERE {\n' +
    '  ?idles foaf:name "IDLES" .\n' +
    '  ?idles a mo:MusicGroup .\n' +
    '}';

  firstExerciseValidQuery =
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'SELECT DISTINCT ?type\n' +
    'WHERE {\n' +
    '  ?subject rdf:type ?type .\n' +
    '}';

  secondExerciseValidQuery =
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'SELECT DISTINCT ?predicate\n' +
    'WHERE {\n' +
    '  ?musicArtist rdf:type mo:MusicArtist .\n' +
    '  ?musicArtist ?predicate ?object .\n' +
    '}';

  thirdExerciseValidQuery =
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'SELECT ?massiveAttack\n' +
    'WHERE {\n' +
    '  ?massiveAttack rdf:type mo:MusicArtist .\n' +
    '  ?massiveAttack foaf:name "Massive Attack" .\n' +
    '}';

  fourthExerciseValidQuery =
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n' +
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n' +
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'SELECT ?member\n' +
    'WHERE {\n' +
    '  ?massiveAttack rdf:type mo:MusicArtist .\n' +
    '  ?massiveAttack foaf:name "Massive Attack" .\n' +
    '  ?member mo:member_of ?massiveAttack .\n' +
    '}';
}
