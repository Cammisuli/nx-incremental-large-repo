import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib8component0Component } from './lib11childlib8component0/lib11childlib8component0.component';
import { Lib11childlib8component1Component } from './lib11childlib8component1/lib11childlib8component1.component';
import { Lib11childlib8parentComponent } from './lib11childlib8parent/lib11childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib8component0Component, Lib11childlib8component1Component, Lib11childlib8parentComponent],
  exports: [Lib11childlib8parentComponent],
})
export class Childlib8Module {}
