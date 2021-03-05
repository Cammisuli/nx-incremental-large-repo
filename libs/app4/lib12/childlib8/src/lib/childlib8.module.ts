import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib8component0Component } from './lib12childlib8component0/lib12childlib8component0.component';
import { Lib12childlib8component1Component } from './lib12childlib8component1/lib12childlib8component1.component';
import { Lib12childlib8parentComponent } from './lib12childlib8parent/lib12childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib8component0Component, Lib12childlib8component1Component, Lib12childlib8parentComponent],
  exports: [Lib12childlib8parentComponent],
})
export class Childlib8Module {}
