import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib6component0Component } from './lib15childlib6component0/lib15childlib6component0.component';
import { Lib15childlib6component1Component } from './lib15childlib6component1/lib15childlib6component1.component';
import { Lib15childlib6parentComponent } from './lib15childlib6parent/lib15childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib6component0Component, Lib15childlib6component1Component, Lib15childlib6parentComponent],
  exports: [Lib15childlib6parentComponent],
})
export class Childlib6Module {}
