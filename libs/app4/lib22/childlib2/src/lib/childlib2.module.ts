import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib2component0Component } from './lib22childlib2component0/lib22childlib2component0.component';
import { Lib22childlib2component1Component } from './lib22childlib2component1/lib22childlib2component1.component';
import { Lib22childlib2parentComponent } from './lib22childlib2parent/lib22childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib2component0Component, Lib22childlib2component1Component, Lib22childlib2parentComponent],
  exports: [Lib22childlib2parentComponent],
})
export class Childlib2Module {}
