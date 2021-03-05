import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib1component0Component } from './lib38childlib1component0/lib38childlib1component0.component';
import { Lib38childlib1component1Component } from './lib38childlib1component1/lib38childlib1component1.component';
import { Lib38childlib1parentComponent } from './lib38childlib1parent/lib38childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib1component0Component, Lib38childlib1component1Component, Lib38childlib1parentComponent],
  exports: [Lib38childlib1parentComponent],
})
export class Childlib1Module {}
