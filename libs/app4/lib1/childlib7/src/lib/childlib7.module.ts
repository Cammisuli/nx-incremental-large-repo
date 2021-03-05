import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib7component0Component } from './lib1childlib7component0/lib1childlib7component0.component';
import { Lib1childlib7component1Component } from './lib1childlib7component1/lib1childlib7component1.component';
import { Lib1childlib7parentComponent } from './lib1childlib7parent/lib1childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib7component0Component, Lib1childlib7component1Component, Lib1childlib7parentComponent],
  exports: [Lib1childlib7parentComponent],
})
export class Childlib7Module {}
