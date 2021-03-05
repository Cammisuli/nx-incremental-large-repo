import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib6component0Component } from './lib26childlib6component0/lib26childlib6component0.component';
import { Lib26childlib6component1Component } from './lib26childlib6component1/lib26childlib6component1.component';
import { Lib26childlib6parentComponent } from './lib26childlib6parent/lib26childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib6component0Component, Lib26childlib6component1Component, Lib26childlib6parentComponent],
  exports: [Lib26childlib6parentComponent],
})
export class Childlib6Module {}
