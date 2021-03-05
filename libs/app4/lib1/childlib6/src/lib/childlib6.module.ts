import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib6component0Component } from './lib1childlib6component0/lib1childlib6component0.component';
import { Lib1childlib6component1Component } from './lib1childlib6component1/lib1childlib6component1.component';
import { Lib1childlib6parentComponent } from './lib1childlib6parent/lib1childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib6component0Component, Lib1childlib6component1Component, Lib1childlib6parentComponent],
  exports: [Lib1childlib6parentComponent],
})
export class Childlib6Module {}
