import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib2component0Component } from './lib1childlib2component0/lib1childlib2component0.component';
import { Lib1childlib2component1Component } from './lib1childlib2component1/lib1childlib2component1.component';
import { Lib1childlib2parentComponent } from './lib1childlib2parent/lib1childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib2component0Component, Lib1childlib2component1Component, Lib1childlib2parentComponent],
  exports: [Lib1childlib2parentComponent],
})
export class Childlib2Module {}
