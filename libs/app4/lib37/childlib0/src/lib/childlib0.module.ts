import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib0component0Component } from './lib37childlib0component0/lib37childlib0component0.component';
import { Lib37childlib0component1Component } from './lib37childlib0component1/lib37childlib0component1.component';
import { Lib37childlib0parentComponent } from './lib37childlib0parent/lib37childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib0component0Component, Lib37childlib0component1Component, Lib37childlib0parentComponent],
  exports: [Lib37childlib0parentComponent],
})
export class Childlib0Module {}
