import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib8component0Component } from './lib38childlib8component0/lib38childlib8component0.component';
import { Lib38childlib8component1Component } from './lib38childlib8component1/lib38childlib8component1.component';
import { Lib38childlib8parentComponent } from './lib38childlib8parent/lib38childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib8component0Component, Lib38childlib8component1Component, Lib38childlib8parentComponent],
  exports: [Lib38childlib8parentComponent],
})
export class Childlib8Module {}
