import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib4component0Component } from './lib6childlib4component0/lib6childlib4component0.component';
import { Lib6childlib4component1Component } from './lib6childlib4component1/lib6childlib4component1.component';
import { Lib6childlib4parentComponent } from './lib6childlib4parent/lib6childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib4component0Component, Lib6childlib4component1Component, Lib6childlib4parentComponent],
  exports: [Lib6childlib4parentComponent],
})
export class Childlib4Module {}
