import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib2component0Component } from './lib35childlib2component0/lib35childlib2component0.component';
import { Lib35childlib2component1Component } from './lib35childlib2component1/lib35childlib2component1.component';
import { Lib35childlib2parentComponent } from './lib35childlib2parent/lib35childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib2component0Component, Lib35childlib2component1Component, Lib35childlib2parentComponent],
  exports: [Lib35childlib2parentComponent],
})
export class Childlib2Module {}
