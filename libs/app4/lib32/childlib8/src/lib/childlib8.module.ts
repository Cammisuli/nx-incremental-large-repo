import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib8component0Component } from './lib32childlib8component0/lib32childlib8component0.component';
import { Lib32childlib8component1Component } from './lib32childlib8component1/lib32childlib8component1.component';
import { Lib32childlib8parentComponent } from './lib32childlib8parent/lib32childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib8component0Component, Lib32childlib8component1Component, Lib32childlib8parentComponent],
  exports: [Lib32childlib8parentComponent],
})
export class Childlib8Module {}
