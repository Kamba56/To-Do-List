import './style.css';
import populate from './modules/populate.js';

const list = [
  {
    description: 'Cook food',
    completed: false,
    index: 2,
  },
  {
    description: 'Eat food',
    completed: false,
    index: 0,
  },
  {
    description: 'Eat more food',
    completed: false,
    index: 1,
  },
];

for (let i = 0; i < list.length; i += 1) {
  list.forEach((listItem) => {
    if (listItem.index === i) {
      populate(listItem);
    }
  });
}
