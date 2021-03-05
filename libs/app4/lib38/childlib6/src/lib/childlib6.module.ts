import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib6component0Component } from './lib38childlib6component0/lib38childlib6component0.component';
import { Lib38childlib6component1Component } from './lib38childlib6component1/lib38childlib6component1.component';
import { Lib38childlib6parentComponent } from './lib38childlib6parent/lib38childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib6component0Component, Lib38childlib6component1Component, Lib38childlib6parentComponent],
  exports: [Lib38childlib6parentComponent],
})
export class Childlib6Module {}
