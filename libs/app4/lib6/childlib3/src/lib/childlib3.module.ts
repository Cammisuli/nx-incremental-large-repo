import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib3component0Component } from './lib6childlib3component0/lib6childlib3component0.component';
import { Lib6childlib3component1Component } from './lib6childlib3component1/lib6childlib3component1.component';
import { Lib6childlib3parentComponent } from './lib6childlib3parent/lib6childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib3component0Component, Lib6childlib3component1Component, Lib6childlib3parentComponent],
  exports: [Lib6childlib3parentComponent],
})
export class Childlib3Module {}
