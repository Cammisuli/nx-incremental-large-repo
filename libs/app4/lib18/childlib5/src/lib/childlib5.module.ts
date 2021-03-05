import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib5component0Component } from './lib18childlib5component0/lib18childlib5component0.component';
import { Lib18childlib5component1Component } from './lib18childlib5component1/lib18childlib5component1.component';
import { Lib18childlib5parentComponent } from './lib18childlib5parent/lib18childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib5component0Component, Lib18childlib5component1Component, Lib18childlib5parentComponent],
  exports: [Lib18childlib5parentComponent],
})
export class Childlib5Module {}
