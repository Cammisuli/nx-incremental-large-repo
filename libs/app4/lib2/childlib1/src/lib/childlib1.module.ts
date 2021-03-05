import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib1component0Component } from './lib2childlib1component0/lib2childlib1component0.component';
import { Lib2childlib1component1Component } from './lib2childlib1component1/lib2childlib1component1.component';
import { Lib2childlib1parentComponent } from './lib2childlib1parent/lib2childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib1component0Component, Lib2childlib1component1Component, Lib2childlib1parentComponent],
  exports: [Lib2childlib1parentComponent],
})
export class Childlib1Module {}
