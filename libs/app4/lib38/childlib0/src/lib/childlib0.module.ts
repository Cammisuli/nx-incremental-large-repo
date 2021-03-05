import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib0component0Component } from './lib38childlib0component0/lib38childlib0component0.component';
import { Lib38childlib0component1Component } from './lib38childlib0component1/lib38childlib0component1.component';
import { Lib38childlib0parentComponent } from './lib38childlib0parent/lib38childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib0component0Component, Lib38childlib0component1Component, Lib38childlib0parentComponent],
  exports: [Lib38childlib0parentComponent],
})
export class Childlib0Module {}
