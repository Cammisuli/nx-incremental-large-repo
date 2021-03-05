import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib5component0Component } from './lib38childlib5component0/lib38childlib5component0.component';
import { Lib38childlib5component1Component } from './lib38childlib5component1/lib38childlib5component1.component';
import { Lib38childlib5parentComponent } from './lib38childlib5parent/lib38childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib5component0Component, Lib38childlib5component1Component, Lib38childlib5parentComponent],
  exports: [Lib38childlib5parentComponent],
})
export class Childlib5Module {}
