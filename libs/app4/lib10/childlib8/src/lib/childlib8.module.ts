import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib8component0Component } from './lib10childlib8component0/lib10childlib8component0.component';
import { Lib10childlib8component1Component } from './lib10childlib8component1/lib10childlib8component1.component';
import { Lib10childlib8parentComponent } from './lib10childlib8parent/lib10childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib8component0Component, Lib10childlib8component1Component, Lib10childlib8parentComponent],
  exports: [Lib10childlib8parentComponent],
})
export class Childlib8Module {}
