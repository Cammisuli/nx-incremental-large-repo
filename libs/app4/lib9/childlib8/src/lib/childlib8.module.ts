import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib8component0Component } from './lib9childlib8component0/lib9childlib8component0.component';
import { Lib9childlib8component1Component } from './lib9childlib8component1/lib9childlib8component1.component';
import { Lib9childlib8parentComponent } from './lib9childlib8parent/lib9childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib8component0Component, Lib9childlib8component1Component, Lib9childlib8parentComponent],
  exports: [Lib9childlib8parentComponent],
})
export class Childlib8Module {}
