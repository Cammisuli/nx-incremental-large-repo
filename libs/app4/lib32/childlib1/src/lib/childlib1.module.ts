import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib1component0Component } from './lib32childlib1component0/lib32childlib1component0.component';
import { Lib32childlib1component1Component } from './lib32childlib1component1/lib32childlib1component1.component';
import { Lib32childlib1parentComponent } from './lib32childlib1parent/lib32childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib1component0Component, Lib32childlib1component1Component, Lib32childlib1parentComponent],
  exports: [Lib32childlib1parentComponent],
})
export class Childlib1Module {}
