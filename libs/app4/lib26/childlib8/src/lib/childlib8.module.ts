import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib8component0Component } from './lib26childlib8component0/lib26childlib8component0.component';
import { Lib26childlib8component1Component } from './lib26childlib8component1/lib26childlib8component1.component';
import { Lib26childlib8parentComponent } from './lib26childlib8parent/lib26childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib8component0Component, Lib26childlib8component1Component, Lib26childlib8parentComponent],
  exports: [Lib26childlib8parentComponent],
})
export class Childlib8Module {}
