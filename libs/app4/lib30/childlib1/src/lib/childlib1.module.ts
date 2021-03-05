import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib1component0Component } from './lib30childlib1component0/lib30childlib1component0.component';
import { Lib30childlib1component1Component } from './lib30childlib1component1/lib30childlib1component1.component';
import { Lib30childlib1parentComponent } from './lib30childlib1parent/lib30childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib1component0Component, Lib30childlib1component1Component, Lib30childlib1parentComponent],
  exports: [Lib30childlib1parentComponent],
})
export class Childlib1Module {}
