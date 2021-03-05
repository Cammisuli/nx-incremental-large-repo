import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib1component0Component } from './lib0childlib1component0/lib0childlib1component0.component';
import { Lib0childlib1component1Component } from './lib0childlib1component1/lib0childlib1component1.component';
import { Lib0childlib1parentComponent } from './lib0childlib1parent/lib0childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib1component0Component, Lib0childlib1component1Component, Lib0childlib1parentComponent],
  exports: [Lib0childlib1parentComponent],
})
export class Childlib1Module {}
