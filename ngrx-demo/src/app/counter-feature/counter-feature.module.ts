import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CounterFeatureComponent } from './counter-feature.component';
import { counterFeature } from './store/counter-feature.store';

@NgModule({
  declarations: [CounterFeatureComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(counterFeature),
  ],
  exports: [CounterFeatureComponent],
})
export class CounterFeatureModule {}
