import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib5component0Component } from './lib27childlib5component0/lib27childlib5component0.component';
import { Lib27childlib5component1Component } from './lib27childlib5component1/lib27childlib5component1.component';
import { Lib27childlib5parentComponent } from './lib27childlib5parent/lib27childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib5component0Component, Lib27childlib5component1Component, Lib27childlib5parentComponent],
  exports: [Lib27childlib5parentComponent],
})
export class Childlib5Module {}
