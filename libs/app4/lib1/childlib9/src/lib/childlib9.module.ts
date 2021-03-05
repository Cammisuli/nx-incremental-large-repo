import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib9component0Component } from './lib1childlib9component0/lib1childlib9component0.component';
import { Lib1childlib9component1Component } from './lib1childlib9component1/lib1childlib9component1.component';
import { Lib1childlib9parentComponent } from './lib1childlib9parent/lib1childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib9component0Component, Lib1childlib9component1Component, Lib1childlib9parentComponent],
  exports: [Lib1childlib9parentComponent],
})
export class Childlib9Module {}
