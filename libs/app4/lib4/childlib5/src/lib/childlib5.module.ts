import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib5component0Component } from './lib4childlib5component0/lib4childlib5component0.component';
import { Lib4childlib5component1Component } from './lib4childlib5component1/lib4childlib5component1.component';
import { Lib4childlib5parentComponent } from './lib4childlib5parent/lib4childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib5component0Component, Lib4childlib5component1Component, Lib4childlib5parentComponent],
  exports: [Lib4childlib5parentComponent],
})
export class Childlib5Module {}
