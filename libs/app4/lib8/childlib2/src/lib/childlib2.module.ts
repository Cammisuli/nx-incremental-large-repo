import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib2component0Component } from './lib8childlib2component0/lib8childlib2component0.component';
import { Lib8childlib2component1Component } from './lib8childlib2component1/lib8childlib2component1.component';
import { Lib8childlib2parentComponent } from './lib8childlib2parent/lib8childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib2component0Component, Lib8childlib2component1Component, Lib8childlib2parentComponent],
  exports: [Lib8childlib2parentComponent],
})
export class Childlib2Module {}
