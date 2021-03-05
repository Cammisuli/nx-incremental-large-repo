import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib3component0Component } from './lib38childlib3component0/lib38childlib3component0.component';
import { Lib38childlib3component1Component } from './lib38childlib3component1/lib38childlib3component1.component';
import { Lib38childlib3parentComponent } from './lib38childlib3parent/lib38childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib3component0Component, Lib38childlib3component1Component, Lib38childlib3parentComponent],
  exports: [Lib38childlib3parentComponent],
})
export class Childlib3Module {}
