import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib8component0Component } from './lib6childlib8component0/lib6childlib8component0.component';
import { Lib6childlib8component1Component } from './lib6childlib8component1/lib6childlib8component1.component';
import { Lib6childlib8parentComponent } from './lib6childlib8parent/lib6childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib8component0Component, Lib6childlib8component1Component, Lib6childlib8parentComponent],
  exports: [Lib6childlib8parentComponent],
})
export class Childlib8Module {}
