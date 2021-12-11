import { IContatos } from './contatos.model';
import { Injectable } from '@angular/core';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class ContatosService {
 constructor(private http: HttpClient,    private toastr: ToastrService){}

PostMessage(data: any):void{
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/maylpkpk',

    { name: data.name, replyto: data.email, subject: data._subject, message: data.message },
    { 'headers': headers }).subscribe(
      response => {

        this.toastr.success('Email enviado com sucesso', 'Suceess');
       // this.toastr.success('Email enviado com sucesso', 'Suceess');
      },
       error=> {

        this.toastr.error('Erro no envio do email', 'Error');
       // this.toastr.success('Email enviado com sucesso', 'Suceess');
      }
    );
 
  }
}