import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponentStoreComponent } from './counter-component-store.component';

@NgModule({
  declarations: [CounterComponentStoreComponent],
  imports: [CommonModule],
  exports: [CounterComponentStoreComponent],
})
export class CounterComponentStoreModule {}
