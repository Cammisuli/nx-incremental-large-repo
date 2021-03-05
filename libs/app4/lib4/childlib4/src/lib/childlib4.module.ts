import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib4component0Component } from './lib4childlib4component0/lib4childlib4component0.component';
import { Lib4childlib4component1Component } from './lib4childlib4component1/lib4childlib4component1.component';
import { Lib4childlib4parentComponent } from './lib4childlib4parent/lib4childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib4component0Component, Lib4childlib4component1Component, Lib4childlib4parentComponent],
  exports: [Lib4childlib4parentComponent],
})
export class Childlib4Module {}
