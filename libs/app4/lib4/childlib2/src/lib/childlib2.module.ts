import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib2component0Component } from './lib4childlib2component0/lib4childlib2component0.component';
import { Lib4childlib2component1Component } from './lib4childlib2component1/lib4childlib2component1.component';
import { Lib4childlib2parentComponent } from './lib4childlib2parent/lib4childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib2component0Component, Lib4childlib2component1Component, Lib4childlib2parentComponent],
  exports: [Lib4childlib2parentComponent],
})
export class Childlib2Module {}
