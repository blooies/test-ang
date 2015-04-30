import {Component, Template, bootstrap, Foreach, If} from 'angular2/angular2';
import {TodoStore} from 'services/TodoStore';

@Component({
  selector: 'todo-app',
  componentServices: [
      TodoStore
  ]
})

@Template({
  url: 'templates/todo.html',
  directives: [Foreach, If]
})


//controller for component
class TodoApp {

  todoStore : TodoStore;

  //dependency injection: injecting TodoStore service into our component
  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
    this.toDoEdit = null;
    this.currentToDo = null;
  }

  add($event,newtodo){
      if($event.which === 13){
        this.todoStore.add(newtodo.value);
        newtodo.value = '';
      }
  }

  toggleTodoState(todo){
    todo.done = !todo.done;
  }

  editTodo($event, todo) {
    this.toDoEdit = todo;
  }

  editing(todo) {
    if (this.toDoEdit == todo) {
      return true
    }
  }

  finishedEditing($event, todo) {
    if ($event.keyCode === 13 || $event.keyCode === 0) {
      todo.text = $event.target.value
      this.toDoEdit = null;
    }
  }

  removeTodo(todo) {
    this.todoStore.remove(todo);
  }

  showAction(todo) {
    this.currentToDo = todo;
  }

  removeAction() {
    console.log('removed')
    this.currentTodo = null;
  }

  currentTodo(todo) {
    if (this.currentToDo === todo) {
      return true;
    }
  }

}


bootstrap(Tod);