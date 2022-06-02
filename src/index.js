import './style.css';
import populate from './modules/populate.js';
import { list, form } from './modules/elements.js';
import addNew from './modules/add.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addNew();
  form.reset();
});

for (let i = 1; i <= list.length; i += 1) {
  list.forEach((listItem) => {
    if (listItem.index === i) {
      populate(listItem);
    }
  });
}
