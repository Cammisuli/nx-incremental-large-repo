import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib1component0Component } from './lib36childlib1component0/lib36childlib1component0.component';
import { Lib36childlib1component1Component } from './lib36childlib1component1/lib36childlib1component1.component';
import { Lib36childlib1parentComponent } from './lib36childlib1parent/lib36childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib1component0Component, Lib36childlib1component1Component, Lib36childlib1parentComponent],
  exports: [Lib36childlib1parentComponent],
})
export class Childlib1Module {}
