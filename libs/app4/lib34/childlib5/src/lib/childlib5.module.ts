import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib5component0Component } from './lib34childlib5component0/lib34childlib5component0.component';
import { Lib34childlib5component1Component } from './lib34childlib5component1/lib34childlib5component1.component';
import { Lib34childlib5parentComponent } from './lib34childlib5parent/lib34childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib5component0Component, Lib34childlib5component1Component, Lib34childlib5parentComponent],
  exports: [Lib34childlib5parentComponent],
})
export class Childlib5Module {}
