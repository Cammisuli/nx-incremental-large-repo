import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib4component0Component } from './lib10childlib4component0/lib10childlib4component0.component';
import { Lib10childlib4component1Component } from './lib10childlib4component1/lib10childlib4component1.component';
import { Lib10childlib4parentComponent } from './lib10childlib4parent/lib10childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib4component0Component, Lib10childlib4component1Component, Lib10childlib4parentComponent],
  exports: [Lib10childlib4parentComponent],
})
export class Childlib4Module {}
