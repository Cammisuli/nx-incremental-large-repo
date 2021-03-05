import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib1component0Component } from './lib15childlib1component0/lib15childlib1component0.component';
import { Lib15childlib1component1Component } from './lib15childlib1component1/lib15childlib1component1.component';
import { Lib15childlib1parentComponent } from './lib15childlib1parent/lib15childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib1component0Component, Lib15childlib1component1Component, Lib15childlib1parentComponent],
  exports: [Lib15childlib1parentComponent],
})
export class Childlib1Module {}
