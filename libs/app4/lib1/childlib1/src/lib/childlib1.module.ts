import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1childlib1component0Component } from './lib1childlib1component0/lib1childlib1component0.component';
import { Lib1childlib1component1Component } from './lib1childlib1component1/lib1childlib1component1.component';
import { Lib1childlib1parentComponent } from './lib1childlib1parent/lib1childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1childlib1component0Component, Lib1childlib1component1Component, Lib1childlib1parentComponent],
  exports: [Lib1childlib1parentComponent],
})
export class Childlib1Module {}
