import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib0component0Component } from './lib33childlib0component0/lib33childlib0component0.component';
import { Lib33childlib0component1Component } from './lib33childlib0component1/lib33childlib0component1.component';
import { Lib33childlib0parentComponent } from './lib33childlib0parent/lib33childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib0component0Component, Lib33childlib0component1Component, Lib33childlib0parentComponent],
  exports: [Lib33childlib0parentComponent],
})
export class Childlib0Module {}
