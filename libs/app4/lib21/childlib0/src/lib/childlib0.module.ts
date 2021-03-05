import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib0component0Component } from './lib21childlib0component0/lib21childlib0component0.component';
import { Lib21childlib0component1Component } from './lib21childlib0component1/lib21childlib0component1.component';
import { Lib21childlib0parentComponent } from './lib21childlib0parent/lib21childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib0component0Component, Lib21childlib0component1Component, Lib21childlib0parentComponent],
  exports: [Lib21childlib0parentComponent],
})
export class Childlib0Module {}
