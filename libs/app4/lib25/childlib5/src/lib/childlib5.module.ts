import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib5component0Component } from './lib25childlib5component0/lib25childlib5component0.component';
import { Lib25childlib5component1Component } from './lib25childlib5component1/lib25childlib5component1.component';
import { Lib25childlib5parentComponent } from './lib25childlib5parent/lib25childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib5component0Component, Lib25childlib5component1Component, Lib25childlib5parentComponent],
  exports: [Lib25childlib5parentComponent],
})
export class Childlib5Module {}
