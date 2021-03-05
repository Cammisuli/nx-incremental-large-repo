import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib6component0Component } from './lib14childlib6component0/lib14childlib6component0.component';
import { Lib14childlib6component1Component } from './lib14childlib6component1/lib14childlib6component1.component';
import { Lib14childlib6parentComponent } from './lib14childlib6parent/lib14childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib6component0Component, Lib14childlib6component1Component, Lib14childlib6parentComponent],
  exports: [Lib14childlib6parentComponent],
})
export class Childlib6Module {}
