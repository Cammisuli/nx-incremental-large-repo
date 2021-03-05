
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { Childlib0Module } from '@largerepo/app4/lib15/childlib0';
import { Childlib1Module } from '@largerepo/app4/lib15/childlib1';
import { Childlib2Module } from '@largerepo/app4/lib15/childlib2';
import { Childlib3Module } from '@largerepo/app4/lib15/childlib3';
import { Childlib4Module } from '@largerepo/app4/lib15/childlib4';
import { Childlib5Module } from '@largerepo/app4/lib15/childlib5';
import { Childlib6Module } from '@largerepo/app4/lib15/childlib6';
import { Childlib7Module } from '@largerepo/app4/lib15/childlib7';
import { Childlib8Module } from '@largerepo/app4/lib15/childlib8';
import { Childlib9Module } from '@largerepo/app4/lib15/childlib9';
import { Lib15parentComponent } from './lib15parent/lib15parent.component';

  @NgModule({
    imports: [CommonModule, Childlib0Module, Childlib1Module, Childlib2Module, Childlib3Module, Childlib4Module, Childlib5Module, Childlib6Module, Childlib7Module, Childlib8Module, Childlib9Module],
    declarations: [Lib15parentComponent],
    exports: [Lib15parentComponent]
  })
  export class Lib15Module {}
  