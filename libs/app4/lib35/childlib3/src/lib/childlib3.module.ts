import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib3component0Component } from './lib35childlib3component0/lib35childlib3component0.component';
import { Lib35childlib3component1Component } from './lib35childlib3component1/lib35childlib3component1.component';
import { Lib35childlib3parentComponent } from './lib35childlib3parent/lib35childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib3component0Component, Lib35childlib3component1Component, Lib35childlib3parentComponent],
  exports: [Lib35childlib3parentComponent],
})
export class Childlib3Module {}
