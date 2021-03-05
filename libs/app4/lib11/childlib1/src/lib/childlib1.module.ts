import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib1component0Component } from './lib11childlib1component0/lib11childlib1component0.component';
import { Lib11childlib1component1Component } from './lib11childlib1component1/lib11childlib1component1.component';
import { Lib11childlib1parentComponent } from './lib11childlib1parent/lib11childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib1component0Component, Lib11childlib1component1Component, Lib11childlib1parentComponent],
  exports: [Lib11childlib1parentComponent],
})
export class Childlib1Module {}
