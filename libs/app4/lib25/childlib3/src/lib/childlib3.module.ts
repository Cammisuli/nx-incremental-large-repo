import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib3component0Component } from './lib25childlib3component0/lib25childlib3component0.component';
import { Lib25childlib3component1Component } from './lib25childlib3component1/lib25childlib3component1.component';
import { Lib25childlib3parentComponent } from './lib25childlib3parent/lib25childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib3component0Component, Lib25childlib3component1Component, Lib25childlib3parentComponent],
  exports: [Lib25childlib3parentComponent],
})
export class Childlib3Module {}
