import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib1component0Component } from './lib33childlib1component0/lib33childlib1component0.component';
import { Lib33childlib1component1Component } from './lib33childlib1component1/lib33childlib1component1.component';
import { Lib33childlib1parentComponent } from './lib33childlib1parent/lib33childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib1component0Component, Lib33childlib1component1Component, Lib33childlib1parentComponent],
  exports: [Lib33childlib1parentComponent],
})
export class Childlib1Module {}
