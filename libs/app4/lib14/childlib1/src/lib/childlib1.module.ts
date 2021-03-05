import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib1component0Component } from './lib14childlib1component0/lib14childlib1component0.component';
import { Lib14childlib1component1Component } from './lib14childlib1component1/lib14childlib1component1.component';
import { Lib14childlib1parentComponent } from './lib14childlib1parent/lib14childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib1component0Component, Lib14childlib1component1Component, Lib14childlib1parentComponent],
  exports: [Lib14childlib1parentComponent],
})
export class Childlib1Module {}
