import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib1component0Component } from './lib5childlib1component0/lib5childlib1component0.component';
import { Lib5childlib1component1Component } from './lib5childlib1component1/lib5childlib1component1.component';
import { Lib5childlib1parentComponent } from './lib5childlib1parent/lib5childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib1component0Component, Lib5childlib1component1Component, Lib5childlib1parentComponent],
  exports: [Lib5childlib1parentComponent],
})
export class Childlib1Module {}
