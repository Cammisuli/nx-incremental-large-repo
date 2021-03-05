import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib6component0Component } from './lib28childlib6component0/lib28childlib6component0.component';
import { Lib28childlib6component1Component } from './lib28childlib6component1/lib28childlib6component1.component';
import { Lib28childlib6parentComponent } from './lib28childlib6parent/lib28childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib6component0Component, Lib28childlib6component1Component, Lib28childlib6parentComponent],
  exports: [Lib28childlib6parentComponent],
})
export class Childlib6Module {}
