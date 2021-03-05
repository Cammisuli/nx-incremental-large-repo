import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib8component0Component } from './lib7childlib8component0/lib7childlib8component0.component';
import { Lib7childlib8component1Component } from './lib7childlib8component1/lib7childlib8component1.component';
import { Lib7childlib8parentComponent } from './lib7childlib8parent/lib7childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib8component0Component, Lib7childlib8component1Component, Lib7childlib8parentComponent],
  exports: [Lib7childlib8parentComponent],
})
export class Childlib8Module {}
