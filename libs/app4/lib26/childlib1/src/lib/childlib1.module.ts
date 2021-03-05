import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib1component0Component } from './lib26childlib1component0/lib26childlib1component0.component';
import { Lib26childlib1component1Component } from './lib26childlib1component1/lib26childlib1component1.component';
import { Lib26childlib1parentComponent } from './lib26childlib1parent/lib26childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib1component0Component, Lib26childlib1component1Component, Lib26childlib1parentComponent],
  exports: [Lib26childlib1parentComponent],
})
export class Childlib1Module {}
