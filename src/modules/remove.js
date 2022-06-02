import { list } from "./add.js";

const removeTodo = (btn2, todo) => {
  btn2.parentElement.remove();
  list.splice(list.indexOf(todo), 1);
  console.log(list);
}

export default removeTodo;