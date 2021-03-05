import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib5component0Component } from './lib19childlib5component0/lib19childlib5component0.component';
import { Lib19childlib5component1Component } from './lib19childlib5component1/lib19childlib5component1.component';
import { Lib19childlib5parentComponent } from './lib19childlib5parent/lib19childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib5component0Component, Lib19childlib5component1Component, Lib19childlib5parentComponent],
  exports: [Lib19childlib5parentComponent],
})
export class Childlib5Module {}
