import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib8component0Component } from './lib15childlib8component0/lib15childlib8component0.component';
import { Lib15childlib8component1Component } from './lib15childlib8component1/lib15childlib8component1.component';
import { Lib15childlib8parentComponent } from './lib15childlib8parent/lib15childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib8component0Component, Lib15childlib8component1Component, Lib15childlib8parentComponent],
  exports: [Lib15childlib8parentComponent],
})
export class Childlib8Module {}
