import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib8component0Component } from './lib2childlib8component0/lib2childlib8component0.component';
import { Lib2childlib8component1Component } from './lib2childlib8component1/lib2childlib8component1.component';
import { Lib2childlib8parentComponent } from './lib2childlib8parent/lib2childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib8component0Component, Lib2childlib8component1Component, Lib2childlib8parentComponent],
  exports: [Lib2childlib8parentComponent],
})
export class Childlib8Module {}
