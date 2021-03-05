import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib6component0Component } from './lib31childlib6component0/lib31childlib6component0.component';
import { Lib31childlib6component1Component } from './lib31childlib6component1/lib31childlib6component1.component';
import { Lib31childlib6parentComponent } from './lib31childlib6parent/lib31childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib6component0Component, Lib31childlib6component1Component, Lib31childlib6parentComponent],
  exports: [Lib31childlib6parentComponent],
})
export class Childlib6Module {}
