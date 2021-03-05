import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib2component0Component } from './lib18childlib2component0/lib18childlib2component0.component';
import { Lib18childlib2component1Component } from './lib18childlib2component1/lib18childlib2component1.component';
import { Lib18childlib2parentComponent } from './lib18childlib2parent/lib18childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib2component0Component, Lib18childlib2component1Component, Lib18childlib2parentComponent],
  exports: [Lib18childlib2parentComponent],
})
export class Childlib2Module {}
