import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib8component0Component } from './lib27childlib8component0/lib27childlib8component0.component';
import { Lib27childlib8component1Component } from './lib27childlib8component1/lib27childlib8component1.component';
import { Lib27childlib8parentComponent } from './lib27childlib8parent/lib27childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib8component0Component, Lib27childlib8component1Component, Lib27childlib8parentComponent],
  exports: [Lib27childlib8parentComponent],
})
export class Childlib8Module {}
