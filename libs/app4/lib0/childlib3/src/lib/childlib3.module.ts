import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib3component0Component } from './lib0childlib3component0/lib0childlib3component0.component';
import { Lib0childlib3component1Component } from './lib0childlib3component1/lib0childlib3component1.component';
import { Lib0childlib3parentComponent } from './lib0childlib3parent/lib0childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib3component0Component, Lib0childlib3component1Component, Lib0childlib3parentComponent],
  exports: [Lib0childlib3parentComponent],
})
export class Childlib3Module {}
