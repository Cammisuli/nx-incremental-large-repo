import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib0component0Component } from './lib34childlib0component0/lib34childlib0component0.component';
import { Lib34childlib0component1Component } from './lib34childlib0component1/lib34childlib0component1.component';
import { Lib34childlib0parentComponent } from './lib34childlib0parent/lib34childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib0component0Component, Lib34childlib0component1Component, Lib34childlib0parentComponent],
  exports: [Lib34childlib0parentComponent],
})
export class Childlib0Module {}
