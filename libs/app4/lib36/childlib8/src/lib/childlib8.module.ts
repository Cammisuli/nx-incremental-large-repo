import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib8component0Component } from './lib36childlib8component0/lib36childlib8component0.component';
import { Lib36childlib8component1Component } from './lib36childlib8component1/lib36childlib8component1.component';
import { Lib36childlib8parentComponent } from './lib36childlib8parent/lib36childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib8component0Component, Lib36childlib8component1Component, Lib36childlib8parentComponent],
  exports: [Lib36childlib8parentComponent],
})
export class Childlib8Module {}
