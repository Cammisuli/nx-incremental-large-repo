import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib4component0Component } from './lib17childlib4component0/lib17childlib4component0.component';
import { Lib17childlib4component1Component } from './lib17childlib4component1/lib17childlib4component1.component';
import { Lib17childlib4parentComponent } from './lib17childlib4parent/lib17childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib4component0Component, Lib17childlib4component1Component, Lib17childlib4parentComponent],
  exports: [Lib17childlib4parentComponent],
})
export class Childlib4Module {}
