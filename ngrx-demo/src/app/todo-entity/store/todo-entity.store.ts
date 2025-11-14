import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { withEntities, addEntity, updateEntity, removeEntity, setAllEntities } from '@ngrx/signals/entities';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Learn NgRx Signals', completed: false },
  { id: 2, text: 'Build Angular App', completed: true },
  { id: 3, text: 'Master Entity Store', completed: false },
];

export const TodoEntityStore = signalStore(
  withEntities<Todo>(),
  withState({ loading: false }),
  withMethods((store) => ({
    loadTodos: () => {
      patchState(store, { loading: true });
      // Simulate API call
      setTimeout(() => {
        patchState(store, setAllEntities(initialTodos), { loading: false });
      }, 1000);
    },
    addTodo: (text: string) => {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      patchState(store, addEntity(newTodo));
    },
    toggleTodo: (id: number) => {
      patchState(
        store,
        updateEntity({ id, changes: (todo) => ({ completed: !todo.completed }) })
      );
    },
    updateTodoText: (id: number, text: string) => {
      patchState(store, updateEntity({ id, changes: { text } }));
    },
    removeTodo: (id: number) => {
      patchState(store, removeEntity(id));
    },
    clearCompleted: () => {
      const completedIds = store.entities().filter(todo => todo.completed).map(todo => todo.id);
      completedIds.forEach(id => patchState(store, removeEntity(id)));
    },
  }))
);