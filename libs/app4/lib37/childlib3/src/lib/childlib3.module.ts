import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib3component0Component } from './lib37childlib3component0/lib37childlib3component0.component';
import { Lib37childlib3component1Component } from './lib37childlib3component1/lib37childlib3component1.component';
import { Lib37childlib3parentComponent } from './lib37childlib3parent/lib37childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib3component0Component, Lib37childlib3component1Component, Lib37childlib3parentComponent],
  exports: [Lib37childlib3parentComponent],
})
export class Childlib3Module {}
