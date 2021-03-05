import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib8component0Component } from './lib34childlib8component0/lib34childlib8component0.component';
import { Lib34childlib8component1Component } from './lib34childlib8component1/lib34childlib8component1.component';
import { Lib34childlib8parentComponent } from './lib34childlib8parent/lib34childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib8component0Component, Lib34childlib8component1Component, Lib34childlib8parentComponent],
  exports: [Lib34childlib8parentComponent],
})
export class Childlib8Module {}
