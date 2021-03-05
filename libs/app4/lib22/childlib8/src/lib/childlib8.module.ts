import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib8component0Component } from './lib22childlib8component0/lib22childlib8component0.component';
import { Lib22childlib8component1Component } from './lib22childlib8component1/lib22childlib8component1.component';
import { Lib22childlib8parentComponent } from './lib22childlib8parent/lib22childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib8component0Component, Lib22childlib8component1Component, Lib22childlib8parentComponent],
  exports: [Lib22childlib8parentComponent],
})
export class Childlib8Module {}
