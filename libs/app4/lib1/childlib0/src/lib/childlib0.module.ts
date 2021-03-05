import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib0component0Component } from './lib1childlib0component0/lib1childlib0component0.component';
import { Lib1childlib0component1Component } from './lib1childlib0component1/lib1childlib0component1.component';
import { Lib1childlib0parentComponent } from './lib1childlib0parent/lib1childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib0component0Component, Lib1childlib0component1Component, Lib1childlib0parentComponent],
  exports: [Lib1childlib0parentComponent],
})
export class Childlib0Module {}
