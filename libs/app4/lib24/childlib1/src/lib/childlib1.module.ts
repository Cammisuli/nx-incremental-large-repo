import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib1component0Component } from './lib24childlib1component0/lib24childlib1component0.component';
import { Lib24childlib1component1Component } from './lib24childlib1component1/lib24childlib1component1.component';
import { Lib24childlib1parentComponent } from './lib24childlib1parent/lib24childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib1component0Component, Lib24childlib1component1Component, Lib24childlib1parentComponent],
  exports: [Lib24childlib1parentComponent],
})
export class Childlib1Module {}
