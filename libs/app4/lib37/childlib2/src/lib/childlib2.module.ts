import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib2component0Component } from './lib37childlib2component0/lib37childlib2component0.component';
import { Lib37childlib2component1Component } from './lib37childlib2component1/lib37childlib2component1.component';
import { Lib37childlib2parentComponent } from './lib37childlib2parent/lib37childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib2component0Component, Lib37childlib2component1Component, Lib37childlib2parentComponent],
  exports: [Lib37childlib2parentComponent],
})
export class Childlib2Module {}
