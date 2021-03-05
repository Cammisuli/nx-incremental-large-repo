import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib3component0Component } from './lib5childlib3component0/lib5childlib3component0.component';
import { Lib5childlib3component1Component } from './lib5childlib3component1/lib5childlib3component1.component';
import { Lib5childlib3parentComponent } from './lib5childlib3parent/lib5childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib3component0Component, Lib5childlib3component1Component, Lib5childlib3parentComponent],
  exports: [Lib5childlib3parentComponent],
})
export class Childlib3Module {}
