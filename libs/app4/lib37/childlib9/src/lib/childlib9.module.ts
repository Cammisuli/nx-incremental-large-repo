import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib9component0Component } from './lib37childlib9component0/lib37childlib9component0.component';
import { Lib37childlib9component1Component } from './lib37childlib9component1/lib37childlib9component1.component';
import { Lib37childlib9parentComponent } from './lib37childlib9parent/lib37childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib9component0Component, Lib37childlib9component1Component, Lib37childlib9parentComponent],
  exports: [Lib37childlib9parentComponent],
})
export class Childlib9Module {}
