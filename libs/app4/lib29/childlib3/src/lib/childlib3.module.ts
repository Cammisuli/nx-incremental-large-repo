import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib3component0Component } from './lib29childlib3component0/lib29childlib3component0.component';
import { Lib29childlib3component1Component } from './lib29childlib3component1/lib29childlib3component1.component';
import { Lib29childlib3parentComponent } from './lib29childlib3parent/lib29childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib3component0Component, Lib29childlib3component1Component, Lib29childlib3parentComponent],
  exports: [Lib29childlib3parentComponent],
})
export class Childlib3Module {}
