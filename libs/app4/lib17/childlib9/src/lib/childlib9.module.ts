import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib9component0Component } from './lib17childlib9component0/lib17childlib9component0.component';
import { Lib17childlib9component1Component } from './lib17childlib9component1/lib17childlib9component1.component';
import { Lib17childlib9parentComponent } from './lib17childlib9parent/lib17childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib9component0Component, Lib17childlib9component1Component, Lib17childlib9parentComponent],
  exports: [Lib17childlib9parentComponent],
})
export class Childlib9Module {}
