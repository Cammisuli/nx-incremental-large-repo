import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib7component0Component } from './lib6childlib7component0/lib6childlib7component0.component';
import { Lib6childlib7component1Component } from './lib6childlib7component1/lib6childlib7component1.component';
import { Lib6childlib7parentComponent } from './lib6childlib7parent/lib6childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib7component0Component, Lib6childlib7component1Component, Lib6childlib7parentComponent],
  exports: [Lib6childlib7parentComponent],
})
export class Childlib7Module {}
