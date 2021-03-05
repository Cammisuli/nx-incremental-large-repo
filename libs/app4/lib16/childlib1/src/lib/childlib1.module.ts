import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib1component0Component } from './lib16childlib1component0/lib16childlib1component0.component';
import { Lib16childlib1component1Component } from './lib16childlib1component1/lib16childlib1component1.component';
import { Lib16childlib1parentComponent } from './lib16childlib1parent/lib16childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib1component0Component, Lib16childlib1component1Component, Lib16childlib1parentComponent],
  exports: [Lib16childlib1parentComponent],
})
export class Childlib1Module {}
