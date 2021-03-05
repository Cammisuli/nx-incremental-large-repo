import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib5component0Component } from './lib10childlib5component0/lib10childlib5component0.component';
import { Lib10childlib5component1Component } from './lib10childlib5component1/lib10childlib5component1.component';
import { Lib10childlib5parentComponent } from './lib10childlib5parent/lib10childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib5component0Component, Lib10childlib5component1Component, Lib10childlib5parentComponent],
  exports: [Lib10childlib5parentComponent],
})
export class Childlib5Module {}
