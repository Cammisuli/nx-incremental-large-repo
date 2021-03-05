import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib1component0Component } from './lib9childlib1component0/lib9childlib1component0.component';
import { Lib9childlib1component1Component } from './lib9childlib1component1/lib9childlib1component1.component';
import { Lib9childlib1parentComponent } from './lib9childlib1parent/lib9childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib1component0Component, Lib9childlib1component1Component, Lib9childlib1parentComponent],
  exports: [Lib9childlib1parentComponent],
})
export class Childlib1Module {}
