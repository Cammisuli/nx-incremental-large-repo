import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib1component0Component } from './lib12childlib1component0/lib12childlib1component0.component';
import { Lib12childlib1component1Component } from './lib12childlib1component1/lib12childlib1component1.component';
import { Lib12childlib1parentComponent } from './lib12childlib1parent/lib12childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib1component0Component, Lib12childlib1component1Component, Lib12childlib1parentComponent],
  exports: [Lib12childlib1parentComponent],
})
export class Childlib1Module {}
