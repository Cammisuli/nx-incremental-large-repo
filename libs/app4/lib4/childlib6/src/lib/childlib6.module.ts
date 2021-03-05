import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib6component0Component } from './lib4childlib6component0/lib4childlib6component0.component';
import { Lib4childlib6component1Component } from './lib4childlib6component1/lib4childlib6component1.component';
import { Lib4childlib6parentComponent } from './lib4childlib6parent/lib4childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib6component0Component, Lib4childlib6component1Component, Lib4childlib6parentComponent],
  exports: [Lib4childlib6parentComponent],
})
export class Childlib6Module {}
