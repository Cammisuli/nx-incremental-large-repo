import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib4component0Component } from './lib19childlib4component0/lib19childlib4component0.component';
import { Lib19childlib4component1Component } from './lib19childlib4component1/lib19childlib4component1.component';
import { Lib19childlib4parentComponent } from './lib19childlib4parent/lib19childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib4component0Component, Lib19childlib4component1Component, Lib19childlib4parentComponent],
  exports: [Lib19childlib4parentComponent],
})
export class Childlib4Module {}
