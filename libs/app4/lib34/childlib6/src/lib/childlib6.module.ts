import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib6component0Component } from './lib34childlib6component0/lib34childlib6component0.component';
import { Lib34childlib6component1Component } from './lib34childlib6component1/lib34childlib6component1.component';
import { Lib34childlib6parentComponent } from './lib34childlib6parent/lib34childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib6component0Component, Lib34childlib6component1Component, Lib34childlib6parentComponent],
  exports: [Lib34childlib6parentComponent],
})
export class Childlib6Module {}
