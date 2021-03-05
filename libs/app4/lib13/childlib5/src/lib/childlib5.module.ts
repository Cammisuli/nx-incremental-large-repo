import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib5component0Component } from './lib13childlib5component0/lib13childlib5component0.component';
import { Lib13childlib5component1Component } from './lib13childlib5component1/lib13childlib5component1.component';
import { Lib13childlib5parentComponent } from './lib13childlib5parent/lib13childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib5component0Component, Lib13childlib5component1Component, Lib13childlib5parentComponent],
  exports: [Lib13childlib5parentComponent],
})
export class Childlib5Module {}
