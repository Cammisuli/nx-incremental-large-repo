import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib5component0Component } from './lib35childlib5component0/lib35childlib5component0.component';
import { Lib35childlib5component1Component } from './lib35childlib5component1/lib35childlib5component1.component';
import { Lib35childlib5parentComponent } from './lib35childlib5parent/lib35childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib5component0Component, Lib35childlib5component1Component, Lib35childlib5parentComponent],
  exports: [Lib35childlib5parentComponent],
})
export class Childlib5Module {}
