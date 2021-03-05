import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib8component0Component } from './lib23childlib8component0/lib23childlib8component0.component';
import { Lib23childlib8component1Component } from './lib23childlib8component1/lib23childlib8component1.component';
import { Lib23childlib8parentComponent } from './lib23childlib8parent/lib23childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib8component0Component, Lib23childlib8component1Component, Lib23childlib8parentComponent],
  exports: [Lib23childlib8parentComponent],
})
export class Childlib8Module {}
