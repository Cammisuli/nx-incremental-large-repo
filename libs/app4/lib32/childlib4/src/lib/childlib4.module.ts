import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib4component0Component } from './lib32childlib4component0/lib32childlib4component0.component';
import { Lib32childlib4component1Component } from './lib32childlib4component1/lib32childlib4component1.component';
import { Lib32childlib4parentComponent } from './lib32childlib4parent/lib32childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib4component0Component, Lib32childlib4component1Component, Lib32childlib4parentComponent],
  exports: [Lib32childlib4parentComponent],
})
export class Childlib4Module {}
