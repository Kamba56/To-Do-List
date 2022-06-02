import { list } from './elements.js';

const removeTodo = (btn2, todo) => {
  btn2.parentElement.remove();
  const ind = list.indexOf(todo);
  list.splice(ind, 1);
  for (let i = ind; i < list.length; i += 1) {
    list[i].index -= 1;
  }
  localStorage.setItem('list', JSON.stringify(list));
};

export default removeTodo;