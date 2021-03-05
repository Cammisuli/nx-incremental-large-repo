import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib0component0Component } from './lib24childlib0component0/lib24childlib0component0.component';
import { Lib24childlib0component1Component } from './lib24childlib0component1/lib24childlib0component1.component';
import { Lib24childlib0parentComponent } from './lib24childlib0parent/lib24childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib0component0Component, Lib24childlib0component1Component, Lib24childlib0parentComponent],
  exports: [Lib24childlib0parentComponent],
})
export class Childlib0Module {}
