import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib0component0Component } from './lib3childlib0component0/lib3childlib0component0.component';
import { Lib3childlib0component1Component } from './lib3childlib0component1/lib3childlib0component1.component';
import { Lib3childlib0parentComponent } from './lib3childlib0parent/lib3childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib0component0Component, Lib3childlib0component1Component, Lib3childlib0parentComponent],
  exports: [Lib3childlib0parentComponent],
})
export class Childlib0Module {}
