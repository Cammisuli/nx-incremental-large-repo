import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib1component0Component } from './lib3childlib1component0/lib3childlib1component0.component';
import { Lib3childlib1component1Component } from './lib3childlib1component1/lib3childlib1component1.component';
import { Lib3childlib1parentComponent } from './lib3childlib1parent/lib3childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib1component0Component, Lib3childlib1component1Component, Lib3childlib1parentComponent],
  exports: [Lib3childlib1parentComponent],
})
export class Childlib1Module {}
