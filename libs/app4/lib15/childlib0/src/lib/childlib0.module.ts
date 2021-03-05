import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib0component0Component } from './lib15childlib0component0/lib15childlib0component0.component';
import { Lib15childlib0component1Component } from './lib15childlib0component1/lib15childlib0component1.component';
import { Lib15childlib0parentComponent } from './lib15childlib0parent/lib15childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib0component0Component, Lib15childlib0component1Component, Lib15childlib0parentComponent],
  exports: [Lib15childlib0parentComponent],
})
export class Childlib0Module {}
