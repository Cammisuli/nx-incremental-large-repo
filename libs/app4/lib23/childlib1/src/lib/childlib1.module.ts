import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib1component0Component } from './lib23childlib1component0/lib23childlib1component0.component';
import { Lib23childlib1component1Component } from './lib23childlib1component1/lib23childlib1component1.component';
import { Lib23childlib1parentComponent } from './lib23childlib1parent/lib23childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib1component0Component, Lib23childlib1component1Component, Lib23childlib1parentComponent],
  exports: [Lib23childlib1parentComponent],
})
export class Childlib1Module {}
