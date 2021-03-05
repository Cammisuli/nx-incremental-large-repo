import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib3component0Component } from './lib30childlib3component0/lib30childlib3component0.component';
import { Lib30childlib3component1Component } from './lib30childlib3component1/lib30childlib3component1.component';
import { Lib30childlib3parentComponent } from './lib30childlib3parent/lib30childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib3component0Component, Lib30childlib3component1Component, Lib30childlib3parentComponent],
  exports: [Lib30childlib3parentComponent],
})
export class Childlib3Module {}
