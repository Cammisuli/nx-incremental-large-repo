import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib4component0Component } from './lib27childlib4component0/lib27childlib4component0.component';
import { Lib27childlib4component1Component } from './lib27childlib4component1/lib27childlib4component1.component';
import { Lib27childlib4parentComponent } from './lib27childlib4parent/lib27childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib4component0Component, Lib27childlib4component1Component, Lib27childlib4parentComponent],
  exports: [Lib27childlib4parentComponent],
})
export class Childlib4Module {}
