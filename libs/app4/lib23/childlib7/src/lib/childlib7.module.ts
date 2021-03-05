import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib7component0Component } from './lib23childlib7component0/lib23childlib7component0.component';
import { Lib23childlib7component1Component } from './lib23childlib7component1/lib23childlib7component1.component';
import { Lib23childlib7parentComponent } from './lib23childlib7parent/lib23childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib7component0Component, Lib23childlib7component1Component, Lib23childlib7parentComponent],
  exports: [Lib23childlib7parentComponent],
})
export class Childlib7Module {}
