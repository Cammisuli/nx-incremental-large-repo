import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib1component0Component } from './lib25childlib1component0/lib25childlib1component0.component';
import { Lib25childlib1component1Component } from './lib25childlib1component1/lib25childlib1component1.component';
import { Lib25childlib1parentComponent } from './lib25childlib1parent/lib25childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib1component0Component, Lib25childlib1component1Component, Lib25childlib1parentComponent],
  exports: [Lib25childlib1parentComponent],
})
export class Childlib1Module {}
