import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib2component0Component } from './lib23childlib2component0/lib23childlib2component0.component';
import { Lib23childlib2component1Component } from './lib23childlib2component1/lib23childlib2component1.component';
import { Lib23childlib2parentComponent } from './lib23childlib2parent/lib23childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib2component0Component, Lib23childlib2component1Component, Lib23childlib2parentComponent],
  exports: [Lib23childlib2parentComponent],
})
export class Childlib2Module {}
