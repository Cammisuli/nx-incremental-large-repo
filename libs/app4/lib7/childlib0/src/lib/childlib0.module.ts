import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib0component0Component } from './lib7childlib0component0/lib7childlib0component0.component';
import { Lib7childlib0component1Component } from './lib7childlib0component1/lib7childlib0component1.component';
import { Lib7childlib0parentComponent } from './lib7childlib0parent/lib7childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib0component0Component, Lib7childlib0component1Component, Lib7childlib0parentComponent],
  exports: [Lib7childlib0parentComponent],
})
export class Childlib0Module {}
