import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib5component0Component } from './lib36childlib5component0/lib36childlib5component0.component';
import { Lib36childlib5component1Component } from './lib36childlib5component1/lib36childlib5component1.component';
import { Lib36childlib5parentComponent } from './lib36childlib5parent/lib36childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib5component0Component, Lib36childlib5component1Component, Lib36childlib5parentComponent],
  exports: [Lib36childlib5parentComponent],
})
export class Childlib5Module {}
