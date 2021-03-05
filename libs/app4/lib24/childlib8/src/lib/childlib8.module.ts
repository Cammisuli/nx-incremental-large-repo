import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib8component0Component } from './lib24childlib8component0/lib24childlib8component0.component';
import { Lib24childlib8component1Component } from './lib24childlib8component1/lib24childlib8component1.component';
import { Lib24childlib8parentComponent } from './lib24childlib8parent/lib24childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib8component0Component, Lib24childlib8component1Component, Lib24childlib8parentComponent],
  exports: [Lib24childlib8parentComponent],
})
export class Childlib8Module {}
