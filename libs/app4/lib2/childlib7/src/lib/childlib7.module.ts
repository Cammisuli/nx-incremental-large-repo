import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib7component0Component } from './lib2childlib7component0/lib2childlib7component0.component';
import { Lib2childlib7component1Component } from './lib2childlib7component1/lib2childlib7component1.component';
import { Lib2childlib7parentComponent } from './lib2childlib7parent/lib2childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib7component0Component, Lib2childlib7component1Component, Lib2childlib7parentComponent],
  exports: [Lib2childlib7parentComponent],
})
export class Childlib7Module {}
