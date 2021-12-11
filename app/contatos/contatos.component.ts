import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ContatosService} from '../contatos/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  constructor(
    protected activatedRoute: ActivatedRoute,
    private contatosService: ContatosService,
    private formBuilder: FormBuilder,

    private router: Router) {
  }
  resultado:String;
  sendEmailForm: FormGroup;
  isSendingEmail: boolean;
  public show = false;
  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
    this.sendEmailForm = new FormGroup({
      name:   new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      _subject: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      message: new FormControl('', [Validators.required]),
    });
  }

  sendEmail(sendMailForm){
  this.isSendingEmail = true;
  console.log(sendMailForm)
    this.contatosService.PostMessage(sendMailForm) 
 
   
  
   
 
  }
}
