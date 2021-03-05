import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib2component0Component } from './lib36childlib2component0/lib36childlib2component0.component';
import { Lib36childlib2component1Component } from './lib36childlib2component1/lib36childlib2component1.component';
import { Lib36childlib2parentComponent } from './lib36childlib2parent/lib36childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib2component0Component, Lib36childlib2component1Component, Lib36childlib2parentComponent],
  exports: [Lib36childlib2parentComponent],
})
export class Childlib2Module {}
