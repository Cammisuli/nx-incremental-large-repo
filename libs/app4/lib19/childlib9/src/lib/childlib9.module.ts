import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib9component0Component } from './lib19childlib9component0/lib19childlib9component0.component';
import { Lib19childlib9component1Component } from './lib19childlib9component1/lib19childlib9component1.component';
import { Lib19childlib9parentComponent } from './lib19childlib9parent/lib19childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib9component0Component, Lib19childlib9component1Component, Lib19childlib9parentComponent],
  exports: [Lib19childlib9parentComponent],
})
export class Childlib9Module {}
