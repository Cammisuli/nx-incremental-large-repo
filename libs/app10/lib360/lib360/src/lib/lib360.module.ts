
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib360parentComponent } from './lib360parent/lib360parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib360parentComponent],
    exports: [Lib360parentComponent]
  })
  export class Lib360Module {}
  