import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib4component0Component } from './lib28childlib4component0/lib28childlib4component0.component';
import { Lib28childlib4component1Component } from './lib28childlib4component1/lib28childlib4component1.component';
import { Lib28childlib4parentComponent } from './lib28childlib4parent/lib28childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib4component0Component, Lib28childlib4component1Component, Lib28childlib4parentComponent],
  exports: [Lib28childlib4parentComponent],
})
export class Childlib4Module {}
