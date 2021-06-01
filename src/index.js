import './styles.css';
/* import { Todo } from './clases/Todo.class';
import { TodoList } from './clases/Todo-List.class'; */

import { Todo, TodoList } from './clases'; // mediante esta forma, unificamaos todas las exportaciones en un único archivo que es el que se encarga de gestionar las classes a exportar
import { crearTodoHtml } from './componentes/componentes';

export const todoList = new TodoList();

todoList.todos.forEach((todo) => {
  crearTodoHtml(todo);
});
