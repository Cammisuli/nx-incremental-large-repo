import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib5component0Component } from './lib31childlib5component0/lib31childlib5component0.component';
import { Lib31childlib5component1Component } from './lib31childlib5component1/lib31childlib5component1.component';
import { Lib31childlib5parentComponent } from './lib31childlib5parent/lib31childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib5component0Component, Lib31childlib5component1Component, Lib31childlib5parentComponent],
  exports: [Lib31childlib5parentComponent],
})
export class Childlib5Module {}
