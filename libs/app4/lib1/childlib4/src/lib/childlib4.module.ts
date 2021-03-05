import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib4component0Component } from './lib1childlib4component0/lib1childlib4component0.component';
import { Lib1childlib4component1Component } from './lib1childlib4component1/lib1childlib4component1.component';
import { Lib1childlib4parentComponent } from './lib1childlib4parent/lib1childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib4component0Component, Lib1childlib4component1Component, Lib1childlib4parentComponent],
  exports: [Lib1childlib4parentComponent],
})
export class Childlib4Module {}
