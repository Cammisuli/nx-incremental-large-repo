import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib3component0Component } from './lib33childlib3component0/lib33childlib3component0.component';
import { Lib33childlib3component1Component } from './lib33childlib3component1/lib33childlib3component1.component';
import { Lib33childlib3parentComponent } from './lib33childlib3parent/lib33childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib3component0Component, Lib33childlib3component1Component, Lib33childlib3parentComponent],
  exports: [Lib33childlib3parentComponent],
})
export class Childlib3Module {}
