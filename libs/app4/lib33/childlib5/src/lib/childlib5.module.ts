import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib5component0Component } from './lib33childlib5component0/lib33childlib5component0.component';
import { Lib33childlib5component1Component } from './lib33childlib5component1/lib33childlib5component1.component';
import { Lib33childlib5parentComponent } from './lib33childlib5parent/lib33childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib5component0Component, Lib33childlib5component1Component, Lib33childlib5parentComponent],
  exports: [Lib33childlib5parentComponent],
})
export class Childlib5Module {}
