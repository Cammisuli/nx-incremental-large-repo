import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib5component0Component } from './lib17childlib5component0/lib17childlib5component0.component';
import { Lib17childlib5component1Component } from './lib17childlib5component1/lib17childlib5component1.component';
import { Lib17childlib5parentComponent } from './lib17childlib5parent/lib17childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib5component0Component, Lib17childlib5component1Component, Lib17childlib5parentComponent],
  exports: [Lib17childlib5parentComponent],
})
export class Childlib5Module {}
