import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib9component0Component } from './lib3childlib9component0/lib3childlib9component0.component';
import { Lib3childlib9component1Component } from './lib3childlib9component1/lib3childlib9component1.component';
import { Lib3childlib9parentComponent } from './lib3childlib9parent/lib3childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib9component0Component, Lib3childlib9component1Component, Lib3childlib9parentComponent],
  exports: [Lib3childlib9parentComponent],
})
export class Childlib9Module {}
