import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib4component0Component } from './lib25childlib4component0/lib25childlib4component0.component';
import { Lib25childlib4component1Component } from './lib25childlib4component1/lib25childlib4component1.component';
import { Lib25childlib4parentComponent } from './lib25childlib4parent/lib25childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib4component0Component, Lib25childlib4component1Component, Lib25childlib4parentComponent],
  exports: [Lib25childlib4parentComponent],
})
export class Childlib4Module {}
