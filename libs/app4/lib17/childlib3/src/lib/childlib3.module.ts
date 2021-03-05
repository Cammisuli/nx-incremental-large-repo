import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib3component0Component } from './lib17childlib3component0/lib17childlib3component0.component';
import { Lib17childlib3component1Component } from './lib17childlib3component1/lib17childlib3component1.component';
import { Lib17childlib3parentComponent } from './lib17childlib3parent/lib17childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib3component0Component, Lib17childlib3component1Component, Lib17childlib3parentComponent],
  exports: [Lib17childlib3parentComponent],
})
export class Childlib3Module {}
