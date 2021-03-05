import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib1component0Component } from './lib8childlib1component0/lib8childlib1component0.component';
import { Lib8childlib1component1Component } from './lib8childlib1component1/lib8childlib1component1.component';
import { Lib8childlib1parentComponent } from './lib8childlib1parent/lib8childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib1component0Component, Lib8childlib1component1Component, Lib8childlib1parentComponent],
  exports: [Lib8childlib1parentComponent],
})
export class Childlib1Module {}
