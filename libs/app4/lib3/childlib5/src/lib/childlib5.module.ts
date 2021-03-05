import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib5component0Component } from './lib3childlib5component0/lib3childlib5component0.component';
import { Lib3childlib5component1Component } from './lib3childlib5component1/lib3childlib5component1.component';
import { Lib3childlib5parentComponent } from './lib3childlib5parent/lib3childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib5component0Component, Lib3childlib5component1Component, Lib3childlib5parentComponent],
  exports: [Lib3childlib5parentComponent],
})
export class Childlib5Module {}
