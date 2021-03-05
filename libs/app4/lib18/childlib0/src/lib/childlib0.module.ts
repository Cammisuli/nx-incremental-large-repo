import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib0component0Component } from './lib18childlib0component0/lib18childlib0component0.component';
import { Lib18childlib0component1Component } from './lib18childlib0component1/lib18childlib0component1.component';
import { Lib18childlib0parentComponent } from './lib18childlib0parent/lib18childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib0component0Component, Lib18childlib0component1Component, Lib18childlib0parentComponent],
  exports: [Lib18childlib0parentComponent],
})
export class Childlib0Module {}
