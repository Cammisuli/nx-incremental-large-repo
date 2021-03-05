import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib8component0Component } from './lib0childlib8component0/lib0childlib8component0.component';
import { Lib0childlib8component1Component } from './lib0childlib8component1/lib0childlib8component1.component';
import { Lib0childlib8parentComponent } from './lib0childlib8parent/lib0childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib8component0Component, Lib0childlib8component1Component, Lib0childlib8parentComponent],
  exports: [Lib0childlib8parentComponent],
})
export class Childlib8Module {}
