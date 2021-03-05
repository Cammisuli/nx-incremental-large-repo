import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib5component0Component } from './lib23childlib5component0/lib23childlib5component0.component';
import { Lib23childlib5component1Component } from './lib23childlib5component1/lib23childlib5component1.component';
import { Lib23childlib5parentComponent } from './lib23childlib5parent/lib23childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib5component0Component, Lib23childlib5component1Component, Lib23childlib5parentComponent],
  exports: [Lib23childlib5parentComponent],
})
export class Childlib5Module {}
