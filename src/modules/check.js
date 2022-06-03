const complete = (e, todo, text) => {
  if (e.target.checked) {
    todo.completed = true;
    text.style.textDecoration = 'line-through';
  } else {
    todo.completed = false;
    text.style.textDecoration = 'none';
  }
};

const checkCheck = (checkbox, todo, text) => {
  if (todo.completed) {
    checkbox.checked = true;
    text.style.textDecoration = 'line-through';
  }
};

export { complete, checkCheck };