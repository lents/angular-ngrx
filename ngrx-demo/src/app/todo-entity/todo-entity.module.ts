import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEntityComponent } from './todo-entity.component';

@NgModule({
  declarations: [TodoEntityComponent],
  imports: [CommonModule],
  exports: [TodoEntityComponent],
})
export class TodoEntityModule {}