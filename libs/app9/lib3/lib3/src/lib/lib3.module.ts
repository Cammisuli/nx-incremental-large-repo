
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib3parentComponent } from './lib3parent/lib3parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib3parentComponent],
    exports: [Lib3parentComponent]
  })
  export class Lib3Module {}
  