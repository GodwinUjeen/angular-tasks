import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { NoEncapsulationComponent } from './view-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './view-encapsulation/shadow-dom-encapsulation.component';
import { EmulatedEncapsulationComponent } from './view-encapsulation/emulated-encapsulation.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ParentHookComponent } from './lifecycle-hooks/parent-hook/parent-hook.component';
import { ChildHookComponent } from './lifecycle-hooks/child-hook/child-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ViewEncapsulationComponent,
    DataBindingComponent,
    ComponentInteractionComponent,
    ChildComponent,
    ParentComponent,
    LifecycleHooksComponent,
    ParentHookComponent,
    ChildHookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
