import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib8component0Component } from './lib13childlib8component0/lib13childlib8component0.component';
import { Lib13childlib8component1Component } from './lib13childlib8component1/lib13childlib8component1.component';
import { Lib13childlib8parentComponent } from './lib13childlib8parent/lib13childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib8component0Component, Lib13childlib8component1Component, Lib13childlib8parentComponent],
  exports: [Lib13childlib8parentComponent],
})
export class Childlib8Module {}
