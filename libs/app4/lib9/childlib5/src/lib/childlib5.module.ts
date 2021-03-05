import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib5component0Component } from './lib9childlib5component0/lib9childlib5component0.component';
import { Lib9childlib5component1Component } from './lib9childlib5component1/lib9childlib5component1.component';
import { Lib9childlib5parentComponent } from './lib9childlib5parent/lib9childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib5component0Component, Lib9childlib5component1Component, Lib9childlib5parentComponent],
  exports: [Lib9childlib5parentComponent],
})
export class Childlib5Module {}
