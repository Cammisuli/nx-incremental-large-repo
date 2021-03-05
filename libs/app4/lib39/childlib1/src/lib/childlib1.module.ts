import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib39childlib1component0Component } from './lib39childlib1component0/lib39childlib1component0.component';
import { Lib39childlib1component1Component } from './lib39childlib1component1/lib39childlib1component1.component';
import { Lib39childlib1parentComponent } from './lib39childlib1parent/lib39childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib39childlib1component0Component, Lib39childlib1component1Component, Lib39childlib1parentComponent],
  exports: [Lib39childlib1parentComponent],
})
export class Childlib1Module {}
