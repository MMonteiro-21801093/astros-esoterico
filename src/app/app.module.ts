import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainComponent } from './layouts/main/main.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeModule } from './home/home.module';
import { ServicosModule } from './servicos/servicos.module';
import { ContatosModule } from './contatos/contatos.module';
import { ManuModule } from './manu/manu.module';
import { HttpClientModule } from '@angular/common/http';
import { ContatosService } from './contatos/contatos.service';
import { ToastrModule } from 'ngx-toastr';
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
    ServicosModule,
    ManuModule,
    ContatosModule,
    NgxSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [ContatosService],
  bootstrap: [MainComponent],
 
})
export class AppModule { }
