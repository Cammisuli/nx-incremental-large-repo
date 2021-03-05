import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib8component0Component } from './lib31childlib8component0/lib31childlib8component0.component';
import { Lib31childlib8component1Component } from './lib31childlib8component1/lib31childlib8component1.component';
import { Lib31childlib8parentComponent } from './lib31childlib8parent/lib31childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib8component0Component, Lib31childlib8component1Component, Lib31childlib8parentComponent],
  exports: [Lib31childlib8parentComponent],
})
export class Childlib8Module {}
