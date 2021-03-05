import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib8component0Component } from './lib3childlib8component0/lib3childlib8component0.component';
import { Lib3childlib8component1Component } from './lib3childlib8component1/lib3childlib8component1.component';
import { Lib3childlib8parentComponent } from './lib3childlib8parent/lib3childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib8component0Component, Lib3childlib8component1Component, Lib3childlib8parentComponent],
  exports: [Lib3childlib8parentComponent],
})
export class Childlib8Module {}
