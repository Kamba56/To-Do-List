import ToDo from './toDo.js';
import { list, form } from './elements.js';
import populate from './populate.js';

const addNew = () => {
  const todo = new ToDo();
  todo.description = form.new.value;
  list.push(todo);
  todo.index = list.length;
  populate(todo);
  localStorage.setItem('list', JSON.stringify(list));
};

export default addNew;