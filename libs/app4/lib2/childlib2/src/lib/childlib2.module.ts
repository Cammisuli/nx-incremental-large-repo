import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib2component0Component } from './lib2childlib2component0/lib2childlib2component0.component';
import { Lib2childlib2component1Component } from './lib2childlib2component1/lib2childlib2component1.component';
import { Lib2childlib2parentComponent } from './lib2childlib2parent/lib2childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib2component0Component, Lib2childlib2component1Component, Lib2childlib2parentComponent],
  exports: [Lib2childlib2parentComponent],
})
export class Childlib2Module {}
