import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib8component0Component } from './lib8childlib8component0/lib8childlib8component0.component';
import { Lib8childlib8component1Component } from './lib8childlib8component1/lib8childlib8component1.component';
import { Lib8childlib8parentComponent } from './lib8childlib8parent/lib8childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib8component0Component, Lib8childlib8component1Component, Lib8childlib8parentComponent],
  exports: [Lib8childlib8parentComponent],
})
export class Childlib8Module {}
