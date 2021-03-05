import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib1component0Component } from './lib34childlib1component0/lib34childlib1component0.component';
import { Lib34childlib1component1Component } from './lib34childlib1component1/lib34childlib1component1.component';
import { Lib34childlib1parentComponent } from './lib34childlib1parent/lib34childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib1component0Component, Lib34childlib1component1Component, Lib34childlib1parentComponent],
  exports: [Lib34childlib1parentComponent],
})
export class Childlib1Module {}
