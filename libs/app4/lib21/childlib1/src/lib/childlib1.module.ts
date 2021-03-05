import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib1component0Component } from './lib21childlib1component0/lib21childlib1component0.component';
import { Lib21childlib1component1Component } from './lib21childlib1component1/lib21childlib1component1.component';
import { Lib21childlib1parentComponent } from './lib21childlib1parent/lib21childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib1component0Component, Lib21childlib1component1Component, Lib21childlib1parentComponent],
  exports: [Lib21childlib1parentComponent],
})
export class Childlib1Module {}
