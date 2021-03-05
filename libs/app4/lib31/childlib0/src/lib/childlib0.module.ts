import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib0component0Component } from './lib31childlib0component0/lib31childlib0component0.component';
import { Lib31childlib0component1Component } from './lib31childlib0component1/lib31childlib0component1.component';
import { Lib31childlib0parentComponent } from './lib31childlib0parent/lib31childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib0component0Component, Lib31childlib0component1Component, Lib31childlib0parentComponent],
  exports: [Lib31childlib0parentComponent],
})
export class Childlib0Module {}
