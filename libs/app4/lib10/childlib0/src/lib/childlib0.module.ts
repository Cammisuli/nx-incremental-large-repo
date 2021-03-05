import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib0component0Component } from './lib10childlib0component0/lib10childlib0component0.component';
import { Lib10childlib0component1Component } from './lib10childlib0component1/lib10childlib0component1.component';
import { Lib10childlib0parentComponent } from './lib10childlib0parent/lib10childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib0component0Component, Lib10childlib0component1Component, Lib10childlib0parentComponent],
  exports: [Lib10childlib0parentComponent],
})
export class Childlib0Module {}
