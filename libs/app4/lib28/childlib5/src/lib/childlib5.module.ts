import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib5component0Component } from './lib28childlib5component0/lib28childlib5component0.component';
import { Lib28childlib5component1Component } from './lib28childlib5component1/lib28childlib5component1.component';
import { Lib28childlib5parentComponent } from './lib28childlib5parent/lib28childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib5component0Component, Lib28childlib5component1Component, Lib28childlib5parentComponent],
  exports: [Lib28childlib5parentComponent],
})
export class Childlib5Module {}
