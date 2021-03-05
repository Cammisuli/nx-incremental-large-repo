import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib0component0Component } from './lib28childlib0component0/lib28childlib0component0.component';
import { Lib28childlib0component1Component } from './lib28childlib0component1/lib28childlib0component1.component';
import { Lib28childlib0parentComponent } from './lib28childlib0parent/lib28childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib0component0Component, Lib28childlib0component1Component, Lib28childlib0parentComponent],
  exports: [Lib28childlib0parentComponent],
})
export class Childlib0Module {}
