import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib3component0Component } from './lib1childlib3component0/lib1childlib3component0.component';
import { Lib1childlib3component1Component } from './lib1childlib3component1/lib1childlib3component1.component';
import { Lib1childlib3parentComponent } from './lib1childlib3parent/lib1childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib3component0Component, Lib1childlib3component1Component, Lib1childlib3parentComponent],
  exports: [Lib1childlib3parentComponent],
})
export class Childlib3Module {}
