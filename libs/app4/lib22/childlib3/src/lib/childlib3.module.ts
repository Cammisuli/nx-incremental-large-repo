import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib3component0Component } from './lib22childlib3component0/lib22childlib3component0.component';
import { Lib22childlib3component1Component } from './lib22childlib3component1/lib22childlib3component1.component';
import { Lib22childlib3parentComponent } from './lib22childlib3parent/lib22childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib3component0Component, Lib22childlib3component1Component, Lib22childlib3parentComponent],
  exports: [Lib22childlib3parentComponent],
})
export class Childlib3Module {}
