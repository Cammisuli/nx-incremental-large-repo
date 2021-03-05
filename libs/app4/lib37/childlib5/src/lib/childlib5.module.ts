import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib5component0Component } from './lib37childlib5component0/lib37childlib5component0.component';
import { Lib37childlib5component1Component } from './lib37childlib5component1/lib37childlib5component1.component';
import { Lib37childlib5parentComponent } from './lib37childlib5parent/lib37childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib5component0Component, Lib37childlib5component1Component, Lib37childlib5parentComponent],
  exports: [Lib37childlib5parentComponent],
})
export class Childlib5Module {}
