import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib1component0Component } from './lib22childlib1component0/lib22childlib1component0.component';
import { Lib22childlib1component1Component } from './lib22childlib1component1/lib22childlib1component1.component';
import { Lib22childlib1parentComponent } from './lib22childlib1parent/lib22childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib1component0Component, Lib22childlib1component1Component, Lib22childlib1parentComponent],
  exports: [Lib22childlib1parentComponent],
})
export class Childlib1Module {}
