import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib8component0Component } from './lib37childlib8component0/lib37childlib8component0.component';
import { Lib37childlib8component1Component } from './lib37childlib8component1/lib37childlib8component1.component';
import { Lib37childlib8parentComponent } from './lib37childlib8parent/lib37childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib8component0Component, Lib37childlib8component1Component, Lib37childlib8parentComponent],
  exports: [Lib37childlib8parentComponent],
})
export class Childlib8Module {}
