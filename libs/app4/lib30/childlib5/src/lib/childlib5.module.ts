import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib5component0Component } from './lib30childlib5component0/lib30childlib5component0.component';
import { Lib30childlib5component1Component } from './lib30childlib5component1/lib30childlib5component1.component';
import { Lib30childlib5parentComponent } from './lib30childlib5parent/lib30childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib5component0Component, Lib30childlib5component1Component, Lib30childlib5parentComponent],
  exports: [Lib30childlib5parentComponent],
})
export class Childlib5Module {}
