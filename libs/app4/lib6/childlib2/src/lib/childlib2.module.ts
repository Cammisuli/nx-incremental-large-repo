import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib2component0Component } from './lib6childlib2component0/lib6childlib2component0.component';
import { Lib6childlib2component1Component } from './lib6childlib2component1/lib6childlib2component1.component';
import { Lib6childlib2parentComponent } from './lib6childlib2parent/lib6childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib2component0Component, Lib6childlib2component1Component, Lib6childlib2parentComponent],
  exports: [Lib6childlib2parentComponent],
})
export class Childlib2Module {}
