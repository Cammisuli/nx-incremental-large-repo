import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib8component0Component } from './lib21childlib8component0/lib21childlib8component0.component';
import { Lib21childlib8component1Component } from './lib21childlib8component1/lib21childlib8component1.component';
import { Lib21childlib8parentComponent } from './lib21childlib8parent/lib21childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib8component0Component, Lib21childlib8component1Component, Lib21childlib8parentComponent],
  exports: [Lib21childlib8parentComponent],
})
export class Childlib8Module {}
