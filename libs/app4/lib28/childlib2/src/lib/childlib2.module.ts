import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib2component0Component } from './lib28childlib2component0/lib28childlib2component0.component';
import { Lib28childlib2component1Component } from './lib28childlib2component1/lib28childlib2component1.component';
import { Lib28childlib2parentComponent } from './lib28childlib2parent/lib28childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib2component0Component, Lib28childlib2component1Component, Lib28childlib2parentComponent],
  exports: [Lib28childlib2parentComponent],
})
export class Childlib2Module {}
