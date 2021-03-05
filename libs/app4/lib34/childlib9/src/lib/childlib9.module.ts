import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib9component0Component } from './lib34childlib9component0/lib34childlib9component0.component';
import { Lib34childlib9component1Component } from './lib34childlib9component1/lib34childlib9component1.component';
import { Lib34childlib9parentComponent } from './lib34childlib9parent/lib34childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib9component0Component, Lib34childlib9component1Component, Lib34childlib9parentComponent],
  exports: [Lib34childlib9parentComponent],
})
export class Childlib9Module {}
