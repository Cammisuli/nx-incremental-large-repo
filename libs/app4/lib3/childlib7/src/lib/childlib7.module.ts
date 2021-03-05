import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib7component0Component } from './lib3childlib7component0/lib3childlib7component0.component';
import { Lib3childlib7component1Component } from './lib3childlib7component1/lib3childlib7component1.component';
import { Lib3childlib7parentComponent } from './lib3childlib7parent/lib3childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib7component0Component, Lib3childlib7component1Component, Lib3childlib7parentComponent],
  exports: [Lib3childlib7parentComponent],
})
export class Childlib7Module {}
