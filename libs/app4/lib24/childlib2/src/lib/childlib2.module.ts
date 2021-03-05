import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib2component0Component } from './lib24childlib2component0/lib24childlib2component0.component';
import { Lib24childlib2component1Component } from './lib24childlib2component1/lib24childlib2component1.component';
import { Lib24childlib2parentComponent } from './lib24childlib2parent/lib24childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib2component0Component, Lib24childlib2component1Component, Lib24childlib2parentComponent],
  exports: [Lib24childlib2parentComponent],
})
export class Childlib2Module {}
