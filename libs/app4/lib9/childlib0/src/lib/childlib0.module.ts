import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib0component0Component } from './lib9childlib0component0/lib9childlib0component0.component';
import { Lib9childlib0component1Component } from './lib9childlib0component1/lib9childlib0component1.component';
import { Lib9childlib0parentComponent } from './lib9childlib0parent/lib9childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib0component0Component, Lib9childlib0component1Component, Lib9childlib0parentComponent],
  exports: [Lib9childlib0parentComponent],
})
export class Childlib0Module {}
