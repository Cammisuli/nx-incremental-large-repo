import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib4component0Component } from './lib18childlib4component0/lib18childlib4component0.component';
import { Lib18childlib4component1Component } from './lib18childlib4component1/lib18childlib4component1.component';
import { Lib18childlib4parentComponent } from './lib18childlib4parent/lib18childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib4component0Component, Lib18childlib4component1Component, Lib18childlib4parentComponent],
  exports: [Lib18childlib4parentComponent],
})
export class Childlib4Module {}
