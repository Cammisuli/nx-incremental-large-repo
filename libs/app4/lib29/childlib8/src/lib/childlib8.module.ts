import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib8component0Component } from './lib29childlib8component0/lib29childlib8component0.component';
import { Lib29childlib8component1Component } from './lib29childlib8component1/lib29childlib8component1.component';
import { Lib29childlib8parentComponent } from './lib29childlib8parent/lib29childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib8component0Component, Lib29childlib8component1Component, Lib29childlib8parentComponent],
  exports: [Lib29childlib8parentComponent],
})
export class Childlib8Module {}
