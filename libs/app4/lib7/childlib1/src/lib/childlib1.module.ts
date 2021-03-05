import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib1component0Component } from './lib7childlib1component0/lib7childlib1component0.component';
import { Lib7childlib1component1Component } from './lib7childlib1component1/lib7childlib1component1.component';
import { Lib7childlib1parentComponent } from './lib7childlib1parent/lib7childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib1component0Component, Lib7childlib1component1Component, Lib7childlib1parentComponent],
  exports: [Lib7childlib1parentComponent],
})
export class Childlib1Module {}
