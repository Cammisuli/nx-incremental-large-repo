import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib2component0Component } from './lib3childlib2component0/lib3childlib2component0.component';
import { Lib3childlib2component1Component } from './lib3childlib2component1/lib3childlib2component1.component';
import { Lib3childlib2parentComponent } from './lib3childlib2parent/lib3childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib2component0Component, Lib3childlib2component1Component, Lib3childlib2parentComponent],
  exports: [Lib3childlib2parentComponent],
})
export class Childlib2Module {}
