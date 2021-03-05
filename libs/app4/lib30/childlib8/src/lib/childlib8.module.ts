import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib8component0Component } from './lib30childlib8component0/lib30childlib8component0.component';
import { Lib30childlib8component1Component } from './lib30childlib8component1/lib30childlib8component1.component';
import { Lib30childlib8parentComponent } from './lib30childlib8parent/lib30childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib8component0Component, Lib30childlib8component1Component, Lib30childlib8parentComponent],
  exports: [Lib30childlib8parentComponent],
})
export class Childlib8Module {}
