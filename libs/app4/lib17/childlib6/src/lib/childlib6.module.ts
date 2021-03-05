import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib6component0Component } from './lib17childlib6component0/lib17childlib6component0.component';
import { Lib17childlib6component1Component } from './lib17childlib6component1/lib17childlib6component1.component';
import { Lib17childlib6parentComponent } from './lib17childlib6parent/lib17childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib6component0Component, Lib17childlib6component1Component, Lib17childlib6parentComponent],
  exports: [Lib17childlib6parentComponent],
})
export class Childlib6Module {}
