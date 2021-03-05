import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib0component0Component } from './lib11childlib0component0/lib11childlib0component0.component';
import { Lib11childlib0component1Component } from './lib11childlib0component1/lib11childlib0component1.component';
import { Lib11childlib0parentComponent } from './lib11childlib0parent/lib11childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib0component0Component, Lib11childlib0component1Component, Lib11childlib0parentComponent],
  exports: [Lib11childlib0parentComponent],
})
export class Childlib0Module {}
