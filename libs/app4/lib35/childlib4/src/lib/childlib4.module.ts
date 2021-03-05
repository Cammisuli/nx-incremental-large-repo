import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib4component0Component } from './lib35childlib4component0/lib35childlib4component0.component';
import { Lib35childlib4component1Component } from './lib35childlib4component1/lib35childlib4component1.component';
import { Lib35childlib4parentComponent } from './lib35childlib4parent/lib35childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib4component0Component, Lib35childlib4component1Component, Lib35childlib4parentComponent],
  exports: [Lib35childlib4parentComponent],
})
export class Childlib4Module {}
