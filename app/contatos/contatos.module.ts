import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {ContatosComponent} from './contatos.component';
import {CommonModule} from '@angular/common';
import {CONTATOS_ROUTE } from './contatos.route';

@NgModule({
    imports: [SharedModule, RouterModule.forChild([CONTATOS_ROUTE]), CommonModule],
  declarations: [ContatosComponent]
})
export class ContatosModule {}
