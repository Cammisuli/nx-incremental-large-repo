import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib6component0Component } from './lib5childlib6component0/lib5childlib6component0.component';
import { Lib5childlib6component1Component } from './lib5childlib6component1/lib5childlib6component1.component';
import { Lib5childlib6parentComponent } from './lib5childlib6parent/lib5childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib6component0Component, Lib5childlib6component1Component, Lib5childlib6parentComponent],
  exports: [Lib5childlib6parentComponent],
})
export class Childlib6Module {}
