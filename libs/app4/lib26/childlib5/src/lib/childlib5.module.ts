import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib5component0Component } from './lib26childlib5component0/lib26childlib5component0.component';
import { Lib26childlib5component1Component } from './lib26childlib5component1/lib26childlib5component1.component';
import { Lib26childlib5parentComponent } from './lib26childlib5parent/lib26childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib5component0Component, Lib26childlib5component1Component, Lib26childlib5parentComponent],
  exports: [Lib26childlib5parentComponent],
})
export class Childlib5Module {}
