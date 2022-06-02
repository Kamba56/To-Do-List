import { list } from "./add.js";

const editTask = (text, listItem, todo, btn, btn2) => {
  text.disabled = false;
  text.focus();
  text.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      text.disabled = true;
      listItem.classList.remove('yellow');
      todo.description = text.value;
      btn.style.display = 'block';
      btn2.style.display = 'none';
      console.log(list);
    }
  });
}

export default editTask;