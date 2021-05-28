//Referencias en HTML

import { Todo } from '../clases';
import { todoList } from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtTarea = document.querySelector('.new-todo');

// Funciones
export const crearTodoHtml = (todo) => {
  const htmlTodo = `
          <li class= "${todo.completado ? 'completed' : ''}" data-id="${
    todo.id
  }">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
`;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

const limpiarTxtTarea = () => {
  txtTarea.value = '';
};

//Eventos

txtTarea.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && txtTarea.value.length > 0) {
    const tareaTodo = new Todo(txtTarea.value);
    todoList.nuevoTodo(tareaTodo);
    crearTodoHtml(tareaTodo);
    limpiarTxtTarea();
  }
});

divTodoList.addEventListener('click', (event) => {
  const nombreEtiquetaLi = event.target.localName;
  const contenedorLiPadre = event.target.parentElement.parentElement;
  const contenedorLiPadreId = contenedorLiPadre.getAttribute('data-id');

  if (nombreEtiquetaLi.includes('input')) {
    todoList.marcarCompletado(contenedorLiPadreId);
    contenedorLiPadre.classList.toggle('completed');
  }
});
