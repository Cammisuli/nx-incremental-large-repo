import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib6component0Component } from './lib20childlib6component0/lib20childlib6component0.component';
import { Lib20childlib6component1Component } from './lib20childlib6component1/lib20childlib6component1.component';
import { Lib20childlib6parentComponent } from './lib20childlib6parent/lib20childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib6component0Component, Lib20childlib6component1Component, Lib20childlib6parentComponent],
  exports: [Lib20childlib6parentComponent],
})
export class Childlib6Module {}
