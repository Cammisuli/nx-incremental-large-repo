import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib3component0Component } from './lib4childlib3component0/lib4childlib3component0.component';
import { Lib4childlib3component1Component } from './lib4childlib3component1/lib4childlib3component1.component';
import { Lib4childlib3parentComponent } from './lib4childlib3parent/lib4childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib3component0Component, Lib4childlib3component1Component, Lib4childlib3parentComponent],
  exports: [Lib4childlib3parentComponent],
})
export class Childlib3Module {}
