import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {AstrologaComponent} from './astrologa.component';
import {CommonModule} from '@angular/common';
import { ASTROLOGA_ROUTE } from './astrologa.route';

@NgModule({
    imports: [SharedModule, RouterModule.forChild([ASTROLOGA_ROUTE]), CommonModule],
  declarations: [AstrologaComponent]
})
export class AstrologaModule {}
