import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib1component0Component } from './lib4childlib1component0/lib4childlib1component0.component';
import { Lib4childlib1component1Component } from './lib4childlib1component1/lib4childlib1component1.component';
import { Lib4childlib1parentComponent } from './lib4childlib1parent/lib4childlib1parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib1component0Component, Lib4childlib1component1Component, Lib4childlib1parentComponent],
  exports: [Lib4childlib1parentComponent],
})
export class Childlib1Module {}
