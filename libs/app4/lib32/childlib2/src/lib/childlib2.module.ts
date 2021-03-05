import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib2component0Component } from './lib32childlib2component0/lib32childlib2component0.component';
import { Lib32childlib2component1Component } from './lib32childlib2component1/lib32childlib2component1.component';
import { Lib32childlib2parentComponent } from './lib32childlib2parent/lib32childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib2component0Component, Lib32childlib2component1Component, Lib32childlib2parentComponent],
  exports: [Lib32childlib2parentComponent],
})
export class Childlib2Module {}
