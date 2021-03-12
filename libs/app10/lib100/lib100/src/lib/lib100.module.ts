
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib100parentComponent } from './lib100parent/lib100parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib100parentComponent],
    exports: [Lib100parentComponent]
  })
  export class Lib100Module {}
  