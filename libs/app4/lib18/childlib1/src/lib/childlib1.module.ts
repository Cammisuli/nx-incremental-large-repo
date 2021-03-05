import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib1component0Component } from './lib18childlib1component0/lib18childlib1component0.component';
import { Lib18childlib1component1Component } from './lib18childlib1component1/lib18childlib1component1.component';
import { Lib18childlib1parentComponent } from './lib18childlib1parent/lib18childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib1component0Component, Lib18childlib1component1Component, Lib18childlib1parentComponent],
  exports: [Lib18childlib1parentComponent],
})
export class Childlib1Module {}
