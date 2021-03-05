import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib3component0Component } from './lib7childlib3component0/lib7childlib3component0.component';
import { Lib7childlib3component1Component } from './lib7childlib3component1/lib7childlib3component1.component';
import { Lib7childlib3parentComponent } from './lib7childlib3parent/lib7childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib3component0Component, Lib7childlib3component1Component, Lib7childlib3parentComponent],
  exports: [Lib7childlib3parentComponent],
})
export class Childlib3Module {}
