import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib0component0Component } from './lib16childlib0component0/lib16childlib0component0.component';
import { Lib16childlib0component1Component } from './lib16childlib0component1/lib16childlib0component1.component';
import { Lib16childlib0parentComponent } from './lib16childlib0parent/lib16childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib0component0Component, Lib16childlib0component1Component, Lib16childlib0parentComponent],
  exports: [Lib16childlib0parentComponent],
})
export class Childlib0Module {}
