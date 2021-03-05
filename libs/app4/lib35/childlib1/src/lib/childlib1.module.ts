import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib1component0Component } from './lib35childlib1component0/lib35childlib1component0.component';
import { Lib35childlib1component1Component } from './lib35childlib1component1/lib35childlib1component1.component';
import { Lib35childlib1parentComponent } from './lib35childlib1parent/lib35childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib1component0Component, Lib35childlib1component1Component, Lib35childlib1parentComponent],
  exports: [Lib35childlib1parentComponent],
})
export class Childlib1Module {}
