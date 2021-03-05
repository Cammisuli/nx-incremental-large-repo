import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib2component0Component } from './lib34childlib2component0/lib34childlib2component0.component';
import { Lib34childlib2component1Component } from './lib34childlib2component1/lib34childlib2component1.component';
import { Lib34childlib2parentComponent } from './lib34childlib2parent/lib34childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib2component0Component, Lib34childlib2component1Component, Lib34childlib2parentComponent],
  exports: [Lib34childlib2parentComponent],
})
export class Childlib2Module {}
