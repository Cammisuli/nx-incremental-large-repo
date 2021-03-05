import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib2component0Component } from './lib25childlib2component0/lib25childlib2component0.component';
import { Lib25childlib2component1Component } from './lib25childlib2component1/lib25childlib2component1.component';
import { Lib25childlib2parentComponent } from './lib25childlib2parent/lib25childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib2component0Component, Lib25childlib2component1Component, Lib25childlib2parentComponent],
  exports: [Lib25childlib2parentComponent],
})
export class Childlib2Module {}
