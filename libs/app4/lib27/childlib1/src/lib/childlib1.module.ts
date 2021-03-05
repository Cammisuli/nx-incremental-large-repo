import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib1component0Component } from './lib27childlib1component0/lib27childlib1component0.component';
import { Lib27childlib1component1Component } from './lib27childlib1component1/lib27childlib1component1.component';
import { Lib27childlib1parentComponent } from './lib27childlib1parent/lib27childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib1component0Component, Lib27childlib1component1Component, Lib27childlib1parentComponent],
  exports: [Lib27childlib1parentComponent],
})
export class Childlib1Module {}
