import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib8component0Component } from './lib16childlib8component0/lib16childlib8component0.component';
import { Lib16childlib8component1Component } from './lib16childlib8component1/lib16childlib8component1.component';
import { Lib16childlib8parentComponent } from './lib16childlib8parent/lib16childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib8component0Component, Lib16childlib8component1Component, Lib16childlib8parentComponent],
  exports: [Lib16childlib8parentComponent],
})
export class Childlib8Module {}
