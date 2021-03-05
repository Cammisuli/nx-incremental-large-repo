import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib2component0Component } from './lib11childlib2component0/lib11childlib2component0.component';
import { Lib11childlib2component1Component } from './lib11childlib2component1/lib11childlib2component1.component';
import { Lib11childlib2parentComponent } from './lib11childlib2parent/lib11childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib2component0Component, Lib11childlib2component1Component, Lib11childlib2parentComponent],
  exports: [Lib11childlib2parentComponent],
})
export class Childlib2Module {}
