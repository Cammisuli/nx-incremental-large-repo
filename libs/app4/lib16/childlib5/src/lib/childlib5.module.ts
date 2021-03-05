import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib5component0Component } from './lib16childlib5component0/lib16childlib5component0.component';
import { Lib16childlib5component1Component } from './lib16childlib5component1/lib16childlib5component1.component';
import { Lib16childlib5parentComponent } from './lib16childlib5parent/lib16childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib5component0Component, Lib16childlib5component1Component, Lib16childlib5parentComponent],
  exports: [Lib16childlib5parentComponent],
})
export class Childlib5Module {}
