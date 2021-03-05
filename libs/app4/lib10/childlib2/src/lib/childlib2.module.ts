import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib2component0Component } from './lib10childlib2component0/lib10childlib2component0.component';
import { Lib10childlib2component1Component } from './lib10childlib2component1/lib10childlib2component1.component';
import { Lib10childlib2parentComponent } from './lib10childlib2parent/lib10childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib2component0Component, Lib10childlib2component1Component, Lib10childlib2parentComponent],
  exports: [Lib10childlib2parentComponent],
})
export class Childlib2Module {}
