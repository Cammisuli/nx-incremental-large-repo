import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib2component0Component } from './lib19childlib2component0/lib19childlib2component0.component';
import { Lib19childlib2component1Component } from './lib19childlib2component1/lib19childlib2component1.component';
import { Lib19childlib2parentComponent } from './lib19childlib2parent/lib19childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib2component0Component, Lib19childlib2component1Component, Lib19childlib2parentComponent],
  exports: [Lib19childlib2parentComponent],
})
export class Childlib2Module {}
