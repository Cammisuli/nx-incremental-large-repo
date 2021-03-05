import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib6component0Component } from './lib3childlib6component0/lib3childlib6component0.component';
import { Lib3childlib6component1Component } from './lib3childlib6component1/lib3childlib6component1.component';
import { Lib3childlib6parentComponent } from './lib3childlib6parent/lib3childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib6component0Component, Lib3childlib6component1Component, Lib3childlib6parentComponent],
  exports: [Lib3childlib6parentComponent],
})
export class Childlib6Module {}
