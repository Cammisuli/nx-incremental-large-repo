import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib0component0Component } from './lib12childlib0component0/lib12childlib0component0.component';
import { Lib12childlib0component1Component } from './lib12childlib0component1/lib12childlib0component1.component';
import { Lib12childlib0parentComponent } from './lib12childlib0parent/lib12childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib0component0Component, Lib12childlib0component1Component, Lib12childlib0parentComponent],
  exports: [Lib12childlib0parentComponent],
})
export class Childlib0Module {}
