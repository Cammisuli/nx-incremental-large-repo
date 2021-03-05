import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib0component0Component } from './lib14childlib0component0/lib14childlib0component0.component';
import { Lib14childlib0component1Component } from './lib14childlib0component1/lib14childlib0component1.component';
import { Lib14childlib0parentComponent } from './lib14childlib0parent/lib14childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib0component0Component, Lib14childlib0component1Component, Lib14childlib0parentComponent],
  exports: [Lib14childlib0parentComponent],
})
export class Childlib0Module {}
