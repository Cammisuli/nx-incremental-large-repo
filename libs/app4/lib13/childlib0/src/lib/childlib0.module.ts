import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib0component0Component } from './lib13childlib0component0/lib13childlib0component0.component';
import { Lib13childlib0component1Component } from './lib13childlib0component1/lib13childlib0component1.component';
import { Lib13childlib0parentComponent } from './lib13childlib0parent/lib13childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib0component0Component, Lib13childlib0component1Component, Lib13childlib0parentComponent],
  exports: [Lib13childlib0parentComponent],
})
export class Childlib0Module {}
