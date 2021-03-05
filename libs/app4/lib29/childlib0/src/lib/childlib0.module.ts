import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib0component0Component } from './lib29childlib0component0/lib29childlib0component0.component';
import { Lib29childlib0component1Component } from './lib29childlib0component1/lib29childlib0component1.component';
import { Lib29childlib0parentComponent } from './lib29childlib0parent/lib29childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib0component0Component, Lib29childlib0component1Component, Lib29childlib0parentComponent],
  exports: [Lib29childlib0parentComponent],
})
export class Childlib0Module {}
