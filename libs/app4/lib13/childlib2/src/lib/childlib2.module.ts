import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib2component0Component } from './lib13childlib2component0/lib13childlib2component0.component';
import { Lib13childlib2component1Component } from './lib13childlib2component1/lib13childlib2component1.component';
import { Lib13childlib2parentComponent } from './lib13childlib2parent/lib13childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib2component0Component, Lib13childlib2component1Component, Lib13childlib2parentComponent],
  exports: [Lib13childlib2parentComponent],
})
export class Childlib2Module {}
