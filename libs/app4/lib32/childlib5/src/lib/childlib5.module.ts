import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib5component0Component } from './lib32childlib5component0/lib32childlib5component0.component';
import { Lib32childlib5component1Component } from './lib32childlib5component1/lib32childlib5component1.component';
import { Lib32childlib5parentComponent } from './lib32childlib5parent/lib32childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib5component0Component, Lib32childlib5component1Component, Lib32childlib5parentComponent],
  exports: [Lib32childlib5parentComponent],
})
export class Childlib5Module {}
