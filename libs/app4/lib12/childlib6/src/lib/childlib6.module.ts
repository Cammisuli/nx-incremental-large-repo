import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib6component0Component } from './lib12childlib6component0/lib12childlib6component0.component';
import { Lib12childlib6component1Component } from './lib12childlib6component1/lib12childlib6component1.component';
import { Lib12childlib6parentComponent } from './lib12childlib6parent/lib12childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib6component0Component, Lib12childlib6component1Component, Lib12childlib6parentComponent],
  exports: [Lib12childlib6parentComponent],
})
export class Childlib6Module {}
