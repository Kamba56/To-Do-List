import { list, toDoList } from './elements.js';
import editTask from './edit.js';
import removeTodo from './remove.js';
import { complete, checkCheck } from './check.js';

const populate = (todo) => {
  const listItem = document.createElement('li');
  listItem.classList.add('border', 'list-flex', 'flex');
  toDoList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-list');

  const text = document.createElement('input');
  text.value = todo.description;
  text.setAttribute('type', 'text');
  text.disabled = true;

  const div = document.createElement('div');
  div.append(checkbox, text);

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';

  const btn2 = document.createElement('button');
  btn2.setAttribute('type', 'button');
  btn2.innerHTML = '<i class="bi bi-trash-fill btn2"></i>';
  btn2.style.display = 'none';
  listItem.append(div, btn, btn2);

  let listelement = {};
  list.forEach((element) => {
    if (element === todo) {
      listelement = element;
    }
  });

  btn.addEventListener('click', () => {
    editTask(text, listItem, listelement, btn, btn2);
    listItem.classList.add('yellow');
    btn2.style.display = 'block';
    btn.style.display = 'none';
  });

  document.addEventListener('click', (e) => {
    const desc = Array.from(listItem.querySelectorAll('*'));
    if (!desc.includes(e.target) && !text.disabled) {
      text.disabled = true;
      listItem.classList.remove('yellow');
      listelement.description = text.value;
      localStorage.setItem('list', JSON.stringify(list));
      btn.style.display = 'block';
      btn2.style.display = 'none';
    }
  });

  btn2.addEventListener('click', () => {
    removeTodo(btn2, listelement);
  });

  checkCheck(checkbox, todo, text);

  checkbox.addEventListener('change', (e) => {
    complete(e, listelement, text);
    localStorage.setItem('list', JSON.stringify(list));
  });
};

export default populate;
