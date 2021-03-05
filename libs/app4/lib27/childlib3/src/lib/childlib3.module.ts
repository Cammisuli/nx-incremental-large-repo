import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib3component0Component } from './lib27childlib3component0/lib27childlib3component0.component';
import { Lib27childlib3component1Component } from './lib27childlib3component1/lib27childlib3component1.component';
import { Lib27childlib3parentComponent } from './lib27childlib3parent/lib27childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib3component0Component, Lib27childlib3component1Component, Lib27childlib3parentComponent],
  exports: [Lib27childlib3parentComponent],
})
export class Childlib3Module {}
