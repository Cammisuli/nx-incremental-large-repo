import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib4component0Component } from './lib23childlib4component0/lib23childlib4component0.component';
import { Lib23childlib4component1Component } from './lib23childlib4component1/lib23childlib4component1.component';
import { Lib23childlib4parentComponent } from './lib23childlib4parent/lib23childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib4component0Component, Lib23childlib4component1Component, Lib23childlib4parentComponent],
  exports: [Lib23childlib4parentComponent],
})
export class Childlib4Module {}
