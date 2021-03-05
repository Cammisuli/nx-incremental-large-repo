import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib37childlib1component0Component } from './lib37childlib1component0/lib37childlib1component0.component';
import { Lib37childlib1component1Component } from './lib37childlib1component1/lib37childlib1component1.component';
import { Lib37childlib1parentComponent } from './lib37childlib1parent/lib37childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib37childlib1component0Component, Lib37childlib1component1Component, Lib37childlib1parentComponent],
  exports: [Lib37childlib1parentComponent],
})
export class Childlib1Module {}
