import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib3component0Component } from './lib31childlib3component0/lib31childlib3component0.component';
import { Lib31childlib3component1Component } from './lib31childlib3component1/lib31childlib3component1.component';
import { Lib31childlib3parentComponent } from './lib31childlib3parent/lib31childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib3component0Component, Lib31childlib3component1Component, Lib31childlib3parentComponent],
  exports: [Lib31childlib3parentComponent],
})
export class Childlib3Module {}
