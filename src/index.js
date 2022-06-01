import './style.css';
import populate from './modules/populate.js';

const list = [
  {
    description: 'Cook food',
    completed: false,
    index: 0,
  },
  {
    description: 'Eat food',
    completed: false,
    index: 2,
  },
  {
    description: 'Eat more food',
    completed: false,
    index: 2,
  },
];

list.forEach(populate);
