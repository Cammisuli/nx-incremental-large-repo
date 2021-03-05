import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib4component0Component } from './lib12childlib4component0/lib12childlib4component0.component';
import { Lib12childlib4component1Component } from './lib12childlib4component1/lib12childlib4component1.component';
import { Lib12childlib4parentComponent } from './lib12childlib4parent/lib12childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib4component0Component, Lib12childlib4component1Component, Lib12childlib4parentComponent],
  exports: [Lib12childlib4parentComponent],
})
export class Childlib4Module {}
