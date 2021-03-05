import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib4component0Component } from './lib2childlib4component0/lib2childlib4component0.component';
import { Lib2childlib4component1Component } from './lib2childlib4component1/lib2childlib4component1.component';
import { Lib2childlib4parentComponent } from './lib2childlib4parent/lib2childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib4component0Component, Lib2childlib4component1Component, Lib2childlib4parentComponent],
  exports: [Lib2childlib4parentComponent],
})
export class Childlib4Module {}
