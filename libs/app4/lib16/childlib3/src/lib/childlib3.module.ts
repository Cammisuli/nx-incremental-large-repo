import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib3component0Component } from './lib16childlib3component0/lib16childlib3component0.component';
import { Lib16childlib3component1Component } from './lib16childlib3component1/lib16childlib3component1.component';
import { Lib16childlib3parentComponent } from './lib16childlib3parent/lib16childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib3component0Component, Lib16childlib3component1Component, Lib16childlib3parentComponent],
  exports: [Lib16childlib3parentComponent],
})
export class Childlib3Module {}
