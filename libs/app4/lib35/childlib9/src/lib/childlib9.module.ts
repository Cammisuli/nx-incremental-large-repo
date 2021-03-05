import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib9component0Component } from './lib35childlib9component0/lib35childlib9component0.component';
import { Lib35childlib9component1Component } from './lib35childlib9component1/lib35childlib9component1.component';
import { Lib35childlib9parentComponent } from './lib35childlib9parent/lib35childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib9component0Component, Lib35childlib9component1Component, Lib35childlib9parentComponent],
  exports: [Lib35childlib9parentComponent],
})
export class Childlib9Module {}
