import './style.css';
import populate from './modules/populate.js';
import {
  list, form, clear, toDoList,
} from './modules/elements.js';
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

clear.addEventListener('click', () => {
  const newlist = list.filter((element) => element.completed === true);
  newlist.forEach((element) => {
    if (list.includes(element)) {
      list.splice(list.indexOf(element), 1);
    }
  });
  let i = 1;
  list.forEach((element) => {
    element.index = i;
    i += 1;
  });
  toDoList.innerHTML = '';
  for (let i = 1; i <= list.length; i += 1) {
    list.forEach((listItem) => {
      if (listItem.index === i) {
        populate(listItem);
      }
    });
  }
  localStorage.setItem('list', JSON.stringify(list));
});
