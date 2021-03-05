import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib3component0Component } from './lib2childlib3component0/lib2childlib3component0.component';
import { Lib2childlib3component1Component } from './lib2childlib3component1/lib2childlib3component1.component';
import { Lib2childlib3parentComponent } from './lib2childlib3parent/lib2childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib3component0Component, Lib2childlib3component1Component, Lib2childlib3parentComponent],
  exports: [Lib2childlib3parentComponent],
})
export class Childlib3Module {}
