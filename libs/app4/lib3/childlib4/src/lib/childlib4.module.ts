import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib4component0Component } from './lib3childlib4component0/lib3childlib4component0.component';
import { Lib3childlib4component1Component } from './lib3childlib4component1/lib3childlib4component1.component';
import { Lib3childlib4parentComponent } from './lib3childlib4parent/lib3childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib4component0Component, Lib3childlib4component1Component, Lib3childlib4parentComponent],
  exports: [Lib3childlib4parentComponent],
})
export class Childlib4Module {}
