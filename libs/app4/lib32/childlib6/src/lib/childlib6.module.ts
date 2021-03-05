import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib6component0Component } from './lib32childlib6component0/lib32childlib6component0.component';
import { Lib32childlib6component1Component } from './lib32childlib6component1/lib32childlib6component1.component';
import { Lib32childlib6parentComponent } from './lib32childlib6parent/lib32childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib6component0Component, Lib32childlib6component1Component, Lib32childlib6parentComponent],
  exports: [Lib32childlib6parentComponent],
})
export class Childlib6Module {}
