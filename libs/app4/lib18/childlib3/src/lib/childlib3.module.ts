import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib3component0Component } from './lib18childlib3component0/lib18childlib3component0.component';
import { Lib18childlib3component1Component } from './lib18childlib3component1/lib18childlib3component1.component';
import { Lib18childlib3parentComponent } from './lib18childlib3parent/lib18childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib3component0Component, Lib18childlib3component1Component, Lib18childlib3parentComponent],
  exports: [Lib18childlib3parentComponent],
})
export class Childlib3Module {}
