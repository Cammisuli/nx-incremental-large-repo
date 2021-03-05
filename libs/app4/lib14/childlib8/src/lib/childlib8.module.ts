import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib8component0Component } from './lib14childlib8component0/lib14childlib8component0.component';
import { Lib14childlib8component1Component } from './lib14childlib8component1/lib14childlib8component1.component';
import { Lib14childlib8parentComponent } from './lib14childlib8parent/lib14childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib8component0Component, Lib14childlib8component1Component, Lib14childlib8parentComponent],
  exports: [Lib14childlib8parentComponent],
})
export class Childlib8Module {}
