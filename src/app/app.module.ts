import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainComponent } from './layouts/main/main.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeModule } from './home/home.module';
import { AstrologaModule } from './astrologa/astrologa.module';
import { ServicosModule } from './servicos/servicos.module';
import { ContatosModule } from './contatos/contatos.module';
import { ManuModule } from './manu/manu.module';
@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    AstrologaModule,
    ServicosModule,
    ManuModule,
    ContatosModule,
    NgxSpinnerModule
 
  ],
  providers: [],
  bootstrap: [MainComponent],
 
})
export class AppModule { }
