import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib8component0Component } from './lib1childlib8component0/lib1childlib8component0.component';
import { Lib1childlib8component1Component } from './lib1childlib8component1/lib1childlib8component1.component';
import { Lib1childlib8parentComponent } from './lib1childlib8parent/lib1childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib8component0Component, Lib1childlib8component1Component, Lib1childlib8parentComponent],
  exports: [Lib1childlib8parentComponent],
})
export class Childlib8Module {}
