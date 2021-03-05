import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib0component0Component } from './lib26childlib0component0/lib26childlib0component0.component';
import { Lib26childlib0component1Component } from './lib26childlib0component1/lib26childlib0component1.component';
import { Lib26childlib0parentComponent } from './lib26childlib0parent/lib26childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib0component0Component, Lib26childlib0component1Component, Lib26childlib0parentComponent],
  exports: [Lib26childlib0parentComponent],
})
export class Childlib0Module {}
