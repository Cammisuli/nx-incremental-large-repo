import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib7component0Component } from './lib35childlib7component0/lib35childlib7component0.component';
import { Lib35childlib7component1Component } from './lib35childlib7component1/lib35childlib7component1.component';
import { Lib35childlib7parentComponent } from './lib35childlib7parent/lib35childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib7component0Component, Lib35childlib7component1Component, Lib35childlib7parentComponent],
  exports: [Lib35childlib7parentComponent],
})
export class Childlib7Module {}
