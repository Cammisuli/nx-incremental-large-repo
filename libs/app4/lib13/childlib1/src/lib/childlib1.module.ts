import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib1component0Component } from './lib13childlib1component0/lib13childlib1component0.component';
import { Lib13childlib1component1Component } from './lib13childlib1component1/lib13childlib1component1.component';
import { Lib13childlib1parentComponent } from './lib13childlib1parent/lib13childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib1component0Component, Lib13childlib1component1Component, Lib13childlib1parentComponent],
  exports: [Lib13childlib1parentComponent],
})
export class Childlib1Module {}
