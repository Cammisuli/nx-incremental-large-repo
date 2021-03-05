import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib1component0Component } from './lib17childlib1component0/lib17childlib1component0.component';
import { Lib17childlib1component1Component } from './lib17childlib1component1/lib17childlib1component1.component';
import { Lib17childlib1parentComponent } from './lib17childlib1parent/lib17childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib1component0Component, Lib17childlib1component1Component, Lib17childlib1parentComponent],
  exports: [Lib17childlib1parentComponent],
})
export class Childlib1Module {}
