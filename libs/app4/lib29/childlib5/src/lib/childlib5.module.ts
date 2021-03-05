import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib5component0Component } from './lib29childlib5component0/lib29childlib5component0.component';
import { Lib29childlib5component1Component } from './lib29childlib5component1/lib29childlib5component1.component';
import { Lib29childlib5parentComponent } from './lib29childlib5parent/lib29childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib5component0Component, Lib29childlib5component1Component, Lib29childlib5parentComponent],
  exports: [Lib29childlib5parentComponent],
})
export class Childlib5Module {}
