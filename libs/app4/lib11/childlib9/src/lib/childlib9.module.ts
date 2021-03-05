import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib9component0Component } from './lib11childlib9component0/lib11childlib9component0.component';
import { Lib11childlib9component1Component } from './lib11childlib9component1/lib11childlib9component1.component';
import { Lib11childlib9parentComponent } from './lib11childlib9parent/lib11childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib9component0Component, Lib11childlib9component1Component, Lib11childlib9parentComponent],
  exports: [Lib11childlib9parentComponent],
})
export class Childlib9Module {}
