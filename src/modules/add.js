import ToDo from "./toDo.js";
import { form } from "./elements.js";
import populate from "./populate.js";

const list = [];

const addNew = () => {
  const todo = new ToDo();
  todo.description = form.new.value;
  list.push(todo);
  todo.index = list.length;
  populate(todo);
}

export { list, addNew};