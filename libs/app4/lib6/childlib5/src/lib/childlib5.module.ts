import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib5component0Component } from './lib6childlib5component0/lib6childlib5component0.component';
import { Lib6childlib5component1Component } from './lib6childlib5component1/lib6childlib5component1.component';
import { Lib6childlib5parentComponent } from './lib6childlib5parent/lib6childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib5component0Component, Lib6childlib5component1Component, Lib6childlib5parentComponent],
  exports: [Lib6childlib5parentComponent],
})
export class Childlib5Module {}
