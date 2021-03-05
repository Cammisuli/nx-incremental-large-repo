import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib7component0Component } from './lib19childlib7component0/lib19childlib7component0.component';
import { Lib19childlib7component1Component } from './lib19childlib7component1/lib19childlib7component1.component';
import { Lib19childlib7parentComponent } from './lib19childlib7parent/lib19childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib7component0Component, Lib19childlib7component1Component, Lib19childlib7parentComponent],
  exports: [Lib19childlib7parentComponent],
})
export class Childlib7Module {}
