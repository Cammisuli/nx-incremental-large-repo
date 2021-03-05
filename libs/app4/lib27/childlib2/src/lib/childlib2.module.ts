import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib2component0Component } from './lib27childlib2component0/lib27childlib2component0.component';
import { Lib27childlib2component1Component } from './lib27childlib2component1/lib27childlib2component1.component';
import { Lib27childlib2parentComponent } from './lib27childlib2parent/lib27childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib2component0Component, Lib27childlib2component1Component, Lib27childlib2parentComponent],
  exports: [Lib27childlib2parentComponent],
})
export class Childlib2Module {}
