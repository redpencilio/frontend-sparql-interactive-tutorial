import Component from '@glimmer/component';

export default class SectionsQueryDescribeComponent extends Component {
  firstExampleQuery =
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' + 'DESCRIBE mo:MusicArtist';

  secondExampleQuery =
    'PREFIX mo: <http://purl.org/ontology/mo/>\n' +
    'DESCRIBE ?artist\n' +
    'WHERE {\n' +
    '  ?artist a mo:MusicArtist .\n' +
    '}\n' +
    'LIMIT 1';
}
