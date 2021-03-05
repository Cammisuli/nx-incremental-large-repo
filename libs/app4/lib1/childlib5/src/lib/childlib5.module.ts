import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib5component0Component } from './lib1childlib5component0/lib1childlib5component0.component';
import { Lib1childlib5component1Component } from './lib1childlib5component1/lib1childlib5component1.component';
import { Lib1childlib5parentComponent } from './lib1childlib5parent/lib1childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib5component0Component, Lib1childlib5component1Component, Lib1childlib5parentComponent],
  exports: [Lib1childlib5parentComponent],
})
export class Childlib5Module {}
