import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib7component0Component } from './lib32childlib7component0/lib32childlib7component0.component';
import { Lib32childlib7component1Component } from './lib32childlib7component1/lib32childlib7component1.component';
import { Lib32childlib7parentComponent } from './lib32childlib7parent/lib32childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib7component0Component, Lib32childlib7component1Component, Lib32childlib7parentComponent],
  exports: [Lib32childlib7parentComponent],
})
export class Childlib7Module {}
