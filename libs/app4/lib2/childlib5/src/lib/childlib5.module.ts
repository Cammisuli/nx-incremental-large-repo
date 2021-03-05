import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib5component0Component } from './lib2childlib5component0/lib2childlib5component0.component';
import { Lib2childlib5component1Component } from './lib2childlib5component1/lib2childlib5component1.component';
import { Lib2childlib5parentComponent } from './lib2childlib5parent/lib2childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib5component0Component, Lib2childlib5component1Component, Lib2childlib5parentComponent],
  exports: [Lib2childlib5parentComponent],
})
export class Childlib5Module {}
