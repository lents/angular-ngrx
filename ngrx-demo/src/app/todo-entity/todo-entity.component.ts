import { Component, inject, signal, OnInit } from '@angular/core';
import { TodoEntityStore } from './store/todo-entity.store';

@Component({
  selector: 'app-todo-entity',
  standalone: false,
  templateUrl: './todo-entity.component.html',
  styleUrl: './todo-entity.component.scss',
  providers: [TodoEntityStore],
})
export class TodoEntityComponent implements OnInit {
  private readonly store = inject(TodoEntityStore);
  
  readonly todos = this.store.entities;
  readonly loading = this.store.loading;
  readonly todosCount = this.store.ids;
  
  readonly newTodoText = signal('');

  ngOnInit() {
    this.store.loadTodos();
  }

  updateNewTodoText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newTodoText.set(target.value);
  }

  addTodo() {
    const text = this.newTodoText().trim();
    if (text) {
      this.store.addTodo(text);
      this.newTodoText.set('');
    }
  }

  toggleTodo(id: number) {
    this.store.toggleTodo(id);
  }

  removeTodo(id: number) {
    this.store.removeTodo(id);
  }

  clearCompleted() {
    this.store.clearCompleted();
  }

  get completedCount() {
    return this.todos().filter(todo => todo.completed).length;
  }

  get activeCount() {
    return this.todos().filter(todo => !todo.completed).length;
  }
}