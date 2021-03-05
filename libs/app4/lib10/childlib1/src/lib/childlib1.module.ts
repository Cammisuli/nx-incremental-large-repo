import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib1component0Component } from './lib10childlib1component0/lib10childlib1component0.component';
import { Lib10childlib1component1Component } from './lib10childlib1component1/lib10childlib1component1.component';
import { Lib10childlib1parentComponent } from './lib10childlib1parent/lib10childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib1component0Component, Lib10childlib1component1Component, Lib10childlib1parentComponent],
  exports: [Lib10childlib1parentComponent],
})
export class Childlib1Module {}
