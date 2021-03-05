import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib1component0Component } from './lib29childlib1component0/lib29childlib1component0.component';
import { Lib29childlib1component1Component } from './lib29childlib1component1/lib29childlib1component1.component';
import { Lib29childlib1parentComponent } from './lib29childlib1parent/lib29childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib1component0Component, Lib29childlib1component1Component, Lib29childlib1parentComponent],
  exports: [Lib29childlib1parentComponent],
})
export class Childlib1Module {}
