import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib5component0Component } from './lib21childlib5component0/lib21childlib5component0.component';
import { Lib21childlib5component1Component } from './lib21childlib5component1/lib21childlib5component1.component';
import { Lib21childlib5parentComponent } from './lib21childlib5parent/lib21childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib5component0Component, Lib21childlib5component1Component, Lib21childlib5parentComponent],
  exports: [Lib21childlib5parentComponent],
})
export class Childlib5Module {}
