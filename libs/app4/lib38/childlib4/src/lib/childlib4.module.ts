import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib4component0Component } from './lib38childlib4component0/lib38childlib4component0.component';
import { Lib38childlib4component1Component } from './lib38childlib4component1/lib38childlib4component1.component';
import { Lib38childlib4parentComponent } from './lib38childlib4parent/lib38childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib4component0Component, Lib38childlib4component1Component, Lib38childlib4parentComponent],
  exports: [Lib38childlib4parentComponent],
})
export class Childlib4Module {}
