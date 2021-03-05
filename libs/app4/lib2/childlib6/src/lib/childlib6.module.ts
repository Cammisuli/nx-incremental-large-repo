import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib6component0Component } from './lib2childlib6component0/lib2childlib6component0.component';
import { Lib2childlib6component1Component } from './lib2childlib6component1/lib2childlib6component1.component';
import { Lib2childlib6parentComponent } from './lib2childlib6parent/lib2childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib6component0Component, Lib2childlib6component1Component, Lib2childlib6parentComponent],
  exports: [Lib2childlib6parentComponent],
})
export class Childlib6Module {}
