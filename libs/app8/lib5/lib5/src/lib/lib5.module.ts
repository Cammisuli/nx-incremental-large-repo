
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib5parentComponent } from './lib5parent/lib5parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib5parentComponent],
    exports: [Lib5parentComponent]
  })
  export class Lib5Module {}
  