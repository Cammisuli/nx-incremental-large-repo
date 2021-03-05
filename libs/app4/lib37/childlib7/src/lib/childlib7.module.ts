import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib7component0Component } from './lib37childlib7component0/lib37childlib7component0.component';
import { Lib37childlib7component1Component } from './lib37childlib7component1/lib37childlib7component1.component';
import { Lib37childlib7parentComponent } from './lib37childlib7parent/lib37childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib7component0Component, Lib37childlib7component1Component, Lib37childlib7parentComponent],
  exports: [Lib37childlib7parentComponent],
})
export class Childlib7Module {}
