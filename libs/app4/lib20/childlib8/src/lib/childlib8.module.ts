import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib8component0Component } from './lib20childlib8component0/lib20childlib8component0.component';
import { Lib20childlib8component1Component } from './lib20childlib8component1/lib20childlib8component1.component';
import { Lib20childlib8parentComponent } from './lib20childlib8parent/lib20childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib8component0Component, Lib20childlib8component1Component, Lib20childlib8parentComponent],
  exports: [Lib20childlib8parentComponent],
})
export class Childlib8Module {}
