import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib0component0Component } from './lib4childlib0component0/lib4childlib0component0.component';
import { Lib4childlib0component1Component } from './lib4childlib0component1/lib4childlib0component1.component';
import { Lib4childlib0parentComponent } from './lib4childlib0parent/lib4childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib0component0Component, Lib4childlib0component1Component, Lib4childlib0parentComponent],
  exports: [Lib4childlib0parentComponent],
})
export class Childlib0Module {}
