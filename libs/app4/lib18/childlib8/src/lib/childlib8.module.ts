import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib8component0Component } from './lib18childlib8component0/lib18childlib8component0.component';
import { Lib18childlib8component1Component } from './lib18childlib8component1/lib18childlib8component1.component';
import { Lib18childlib8parentComponent } from './lib18childlib8parent/lib18childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib8component0Component, Lib18childlib8component1Component, Lib18childlib8parentComponent],
  exports: [Lib18childlib8parentComponent],
})
export class Childlib8Module {}
