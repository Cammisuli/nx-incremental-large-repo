import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib1component0Component } from './lib19childlib1component0/lib19childlib1component0.component';
import { Lib19childlib1component1Component } from './lib19childlib1component1/lib19childlib1component1.component';
import { Lib19childlib1parentComponent } from './lib19childlib1parent/lib19childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib1component0Component, Lib19childlib1component1Component, Lib19childlib1parentComponent],
  exports: [Lib19childlib1parentComponent],
})
export class Childlib1Module {}
