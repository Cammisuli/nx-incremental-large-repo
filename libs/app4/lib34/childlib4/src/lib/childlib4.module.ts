import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib4component0Component } from './lib34childlib4component0/lib34childlib4component0.component';
import { Lib34childlib4component1Component } from './lib34childlib4component1/lib34childlib4component1.component';
import { Lib34childlib4parentComponent } from './lib34childlib4parent/lib34childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib4component0Component, Lib34childlib4component1Component, Lib34childlib4parentComponent],
  exports: [Lib34childlib4parentComponent],
})
export class Childlib4Module {}
