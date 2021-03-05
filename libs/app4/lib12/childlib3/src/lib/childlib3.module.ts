import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib3component0Component } from './lib12childlib3component0/lib12childlib3component0.component';
import { Lib12childlib3component1Component } from './lib12childlib3component1/lib12childlib3component1.component';
import { Lib12childlib3parentComponent } from './lib12childlib3parent/lib12childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib3component0Component, Lib12childlib3component1Component, Lib12childlib3parentComponent],
  exports: [Lib12childlib3parentComponent],
})
export class Childlib3Module {}
