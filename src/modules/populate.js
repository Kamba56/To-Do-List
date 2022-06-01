import toDoList from './elements.js';

const populate = ({ description }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('border', 'list-flex');
  toDoList.appendChild(listItem);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-list');

  const text = document.createElement('input');
  text.setAttribute('placeholder', description);
  text.setAttribute('type', 'text');
  text.setAttribute('disabled', '');

  const div = document.createElement('div');
  div.append(checkbox, text);

  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.innerHTML = '<i class="bi bi-three-dots-vertical"></i>';
  listItem.append(div, btn);
};

export default populate;
