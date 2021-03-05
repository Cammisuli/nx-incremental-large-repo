import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib4component0Component } from './lib37childlib4component0/lib37childlib4component0.component';
import { Lib37childlib4component1Component } from './lib37childlib4component1/lib37childlib4component1.component';
import { Lib37childlib4parentComponent } from './lib37childlib4parent/lib37childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib4component0Component, Lib37childlib4component1Component, Lib37childlib4parentComponent],
  exports: [Lib37childlib4parentComponent],
})
export class Childlib4Module {}
