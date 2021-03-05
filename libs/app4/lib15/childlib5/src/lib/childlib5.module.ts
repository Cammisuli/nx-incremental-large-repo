import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib5component0Component } from './lib15childlib5component0/lib15childlib5component0.component';
import { Lib15childlib5component1Component } from './lib15childlib5component1/lib15childlib5component1.component';
import { Lib15childlib5parentComponent } from './lib15childlib5parent/lib15childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib5component0Component, Lib15childlib5component1Component, Lib15childlib5parentComponent],
  exports: [Lib15childlib5parentComponent],
})
export class Childlib5Module {}
