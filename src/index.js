import {Table} from './components/Table'
import './scss/index.scss'


const data = [
  {
    'headerCols':
      {'name': ''}
  },
  {
    'id': 223,
    'filmTitle': 'Mystic River',
    'year': 2003,
    'checkBox': false,
    'votes': 159.86,
    'type': {
      'text': 'text',
      'number': 'number',
      'dropDown': 'dropDown',
      'checkbox': 'checkbox'
    },
    'isDropdown': {
      'a': 1,
      'b': 2,
      'c': 3
    }
  }, {
    'id': 92,
    'filmTitle': 'Oldboy',
    'year': 2003,
    'checkBox': false,
    'votes': 133.65,
    'type': {
      'text': 'text',
      'number': 'number',
      'dropDown': 'dropDown',
      'checkbox': 'checkbox'
    },
    'isDropdown': {
      'a': 1,
      'b': 2,
      'c': 3
    }
  }]


const table = new Table('#app', {
  data
})
table.render()
