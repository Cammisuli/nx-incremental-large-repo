import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib0component0Component } from './lib5childlib0component0/lib5childlib0component0.component';
import { Lib5childlib0component1Component } from './lib5childlib0component1/lib5childlib0component1.component';
import { Lib5childlib0parentComponent } from './lib5childlib0parent/lib5childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib0component0Component, Lib5childlib0component1Component, Lib5childlib0parentComponent],
  exports: [Lib5childlib0parentComponent],
})
export class Childlib0Module {}
