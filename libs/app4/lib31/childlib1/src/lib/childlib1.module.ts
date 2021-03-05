import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib1component0Component } from './lib31childlib1component0/lib31childlib1component0.component';
import { Lib31childlib1component1Component } from './lib31childlib1component1/lib31childlib1component1.component';
import { Lib31childlib1parentComponent } from './lib31childlib1parent/lib31childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib1component0Component, Lib31childlib1component1Component, Lib31childlib1parentComponent],
  exports: [Lib31childlib1parentComponent],
})
export class Childlib1Module {}
