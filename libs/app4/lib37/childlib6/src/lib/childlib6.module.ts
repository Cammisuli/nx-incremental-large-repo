import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib6component0Component } from './lib37childlib6component0/lib37childlib6component0.component';
import { Lib37childlib6component1Component } from './lib37childlib6component1/lib37childlib6component1.component';
import { Lib37childlib6parentComponent } from './lib37childlib6parent/lib37childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib6component0Component, Lib37childlib6component1Component, Lib37childlib6parentComponent],
  exports: [Lib37childlib6parentComponent],
})
export class Childlib6Module {}
