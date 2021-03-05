import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib7component0Component } from './lib36childlib7component0/lib36childlib7component0.component';
import { Lib36childlib7component1Component } from './lib36childlib7component1/lib36childlib7component1.component';
import { Lib36childlib7parentComponent } from './lib36childlib7parent/lib36childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib7component0Component, Lib36childlib7component1Component, Lib36childlib7parentComponent],
  exports: [Lib36childlib7parentComponent],
})
export class Childlib7Module {}
