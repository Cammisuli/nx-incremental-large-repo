import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib6component0Component } from './lib6childlib6component0/lib6childlib6component0.component';
import { Lib6childlib6component1Component } from './lib6childlib6component1/lib6childlib6component1.component';
import { Lib6childlib6parentComponent } from './lib6childlib6parent/lib6childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib6component0Component, Lib6childlib6component1Component, Lib6childlib6parentComponent],
  exports: [Lib6childlib6parentComponent],
})
export class Childlib6Module {}
