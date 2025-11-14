import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CounterOldModule } from './counter-old/counter-old.module';
import { counterOldReducer } from './counter-old/store/counter-old.reducer';
import { CounterModernModule } from './counter-modern/counter-modern.module';
import { counterModernReducer } from './counter-modern/store/counter-modern.reducer';
import { CounterFeatureModule } from './counter-feature/counter-feature.module';
import { CounterComponentStoreModule } from './counter-component-store/counter-component-store.module';
import { CounterSignalsModule } from './counter-signals/counter-signals.module';
import { TodoEntityModule } from './todo-entity/todo-entity.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterOldModule,
    CounterModernModule,
    CounterFeatureModule,
    CounterComponentStoreModule,
    CounterSignalsModule,
    TodoEntityModule,
    StoreModule.forRoot({ counterOld: counterOldReducer, counterModern: counterModernReducer })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
