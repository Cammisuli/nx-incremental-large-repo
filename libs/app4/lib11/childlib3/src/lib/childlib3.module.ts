import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib3component0Component } from './lib11childlib3component0/lib11childlib3component0.component';
import { Lib11childlib3component1Component } from './lib11childlib3component1/lib11childlib3component1.component';
import { Lib11childlib3parentComponent } from './lib11childlib3parent/lib11childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib3component0Component, Lib11childlib3component1Component, Lib11childlib3parentComponent],
  exports: [Lib11childlib3parentComponent],
})
export class Childlib3Module {}
