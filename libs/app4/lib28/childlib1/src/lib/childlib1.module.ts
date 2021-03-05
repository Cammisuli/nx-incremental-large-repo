import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib1component0Component } from './lib28childlib1component0/lib28childlib1component0.component';
import { Lib28childlib1component1Component } from './lib28childlib1component1/lib28childlib1component1.component';
import { Lib28childlib1parentComponent } from './lib28childlib1parent/lib28childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib1component0Component, Lib28childlib1component1Component, Lib28childlib1parentComponent],
  exports: [Lib28childlib1parentComponent],
})
export class Childlib1Module {}
