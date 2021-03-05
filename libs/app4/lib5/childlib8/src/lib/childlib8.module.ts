import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib8component0Component } from './lib5childlib8component0/lib5childlib8component0.component';
import { Lib5childlib8component1Component } from './lib5childlib8component1/lib5childlib8component1.component';
import { Lib5childlib8parentComponent } from './lib5childlib8parent/lib5childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib8component0Component, Lib5childlib8component1Component, Lib5childlib8parentComponent],
  exports: [Lib5childlib8parentComponent],
})
export class Childlib8Module {}
