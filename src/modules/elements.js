const toDoList = document.querySelector('.to-do-list');
const form = document.querySelector('#add-form');
const list = JSON.parse(localStorage.getItem('list')) || [];

export { toDoList, form, list };