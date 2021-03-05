import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib9component0Component } from './lib6childlib9component0/lib6childlib9component0.component';
import { Lib6childlib9component1Component } from './lib6childlib9component1/lib6childlib9component1.component';
import { Lib6childlib9parentComponent } from './lib6childlib9parent/lib6childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib9component0Component, Lib6childlib9component1Component, Lib6childlib9parentComponent],
  exports: [Lib6childlib9parentComponent],
})
export class Childlib9Module {}
