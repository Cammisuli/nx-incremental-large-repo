import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib3component0Component } from './lib32childlib3component0/lib32childlib3component0.component';
import { Lib32childlib3component1Component } from './lib32childlib3component1/lib32childlib3component1.component';
import { Lib32childlib3parentComponent } from './lib32childlib3parent/lib32childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib3component0Component, Lib32childlib3component1Component, Lib32childlib3parentComponent],
  exports: [Lib32childlib3parentComponent],
})
export class Childlib3Module {}
