import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib5component0Component } from './lib12childlib5component0/lib12childlib5component0.component';
import { Lib12childlib5component1Component } from './lib12childlib5component1/lib12childlib5component1.component';
import { Lib12childlib5parentComponent } from './lib12childlib5parent/lib12childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib5component0Component, Lib12childlib5component1Component, Lib12childlib5parentComponent],
  exports: [Lib12childlib5parentComponent],
})
export class Childlib5Module {}
