import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib0component0Component } from './lib30childlib0component0/lib30childlib0component0.component';
import { Lib30childlib0component1Component } from './lib30childlib0component1/lib30childlib0component1.component';
import { Lib30childlib0parentComponent } from './lib30childlib0parent/lib30childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib0component0Component, Lib30childlib0component1Component, Lib30childlib0parentComponent],
  exports: [Lib30childlib0parentComponent],
})
export class Childlib0Module {}
