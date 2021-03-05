import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib1component0Component } from './lib20childlib1component0/lib20childlib1component0.component';
import { Lib20childlib1component1Component } from './lib20childlib1component1/lib20childlib1component1.component';
import { Lib20childlib1parentComponent } from './lib20childlib1parent/lib20childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib1component0Component, Lib20childlib1component1Component, Lib20childlib1parentComponent],
  exports: [Lib20childlib1parentComponent],
})
export class Childlib1Module {}
