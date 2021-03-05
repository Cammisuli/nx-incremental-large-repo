import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib8component0Component } from './lib33childlib8component0/lib33childlib8component0.component';
import { Lib33childlib8component1Component } from './lib33childlib8component1/lib33childlib8component1.component';
import { Lib33childlib8parentComponent } from './lib33childlib8parent/lib33childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib8component0Component, Lib33childlib8component1Component, Lib33childlib8parentComponent],
  exports: [Lib33childlib8parentComponent],
})
export class Childlib8Module {}
