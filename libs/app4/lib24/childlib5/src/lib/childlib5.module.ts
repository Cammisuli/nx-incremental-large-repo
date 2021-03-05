import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib5component0Component } from './lib24childlib5component0/lib24childlib5component0.component';
import { Lib24childlib5component1Component } from './lib24childlib5component1/lib24childlib5component1.component';
import { Lib24childlib5parentComponent } from './lib24childlib5parent/lib24childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib5component0Component, Lib24childlib5component1Component, Lib24childlib5parentComponent],
  exports: [Lib24childlib5parentComponent],
})
export class Childlib5Module {}
