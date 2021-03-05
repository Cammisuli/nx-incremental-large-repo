import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib39childlib3component0Component } from './lib39childlib3component0/lib39childlib3component0.component';
import { Lib39childlib3component1Component } from './lib39childlib3component1/lib39childlib3component1.component';
import { Lib39childlib3parentComponent } from './lib39childlib3parent/lib39childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib39childlib3component0Component, Lib39childlib3component1Component, Lib39childlib3parentComponent],
  exports: [Lib39childlib3parentComponent],
})
export class Childlib3Module {}
