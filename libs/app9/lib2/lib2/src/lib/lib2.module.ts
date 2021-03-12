
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib2parentComponent } from './lib2parent/lib2parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib2parentComponent],
    exports: [Lib2parentComponent]
  })
  export class Lib2Module {}
  