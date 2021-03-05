import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib0component0Component } from './lib20childlib0component0/lib20childlib0component0.component';
import { Lib20childlib0component1Component } from './lib20childlib0component1/lib20childlib0component1.component';
import { Lib20childlib0parentComponent } from './lib20childlib0parent/lib20childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib0component0Component, Lib20childlib0component1Component, Lib20childlib0parentComponent],
  exports: [Lib20childlib0parentComponent],
})
export class Childlib0Module {}
