import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib7component0Component } from './lib4childlib7component0/lib4childlib7component0.component';
import { Lib4childlib7component1Component } from './lib4childlib7component1/lib4childlib7component1.component';
import { Lib4childlib7parentComponent } from './lib4childlib7parent/lib4childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib7component0Component, Lib4childlib7component1Component, Lib4childlib7parentComponent],
  exports: [Lib4childlib7parentComponent],
})
export class Childlib7Module {}
