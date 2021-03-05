import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6childlib1component0Component } from './lib6childlib1component0/lib6childlib1component0.component';
import { Lib6childlib1component1Component } from './lib6childlib1component1/lib6childlib1component1.component';
import { Lib6childlib1parentComponent } from './lib6childlib1parent/lib6childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib6childlib1component0Component, Lib6childlib1component1Component, Lib6childlib1parentComponent],
  exports: [Lib6childlib1parentComponent],
})
export class Childlib1Module {}
