import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib0component0Component } from './lib6childlib0component0/lib6childlib0component0.component';
import { Lib6childlib0component1Component } from './lib6childlib0component1/lib6childlib0component1.component';
import { Lib6childlib0parentComponent } from './lib6childlib0parent/lib6childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib0component0Component, Lib6childlib0component1Component, Lib6childlib0parentComponent],
  exports: [Lib6childlib0parentComponent],
})
export class Childlib0Module {}
