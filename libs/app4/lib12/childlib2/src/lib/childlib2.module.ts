import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib2component0Component } from './lib12childlib2component0/lib12childlib2component0.component';
import { Lib12childlib2component1Component } from './lib12childlib2component1/lib12childlib2component1.component';
import { Lib12childlib2parentComponent } from './lib12childlib2parent/lib12childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib2component0Component, Lib12childlib2component1Component, Lib12childlib2parentComponent],
  exports: [Lib12childlib2parentComponent],
})
export class Childlib2Module {}
