import { Component, OnInit } from '@angular/core';
// import { domainToUnicode } from 'url';
import {  Router } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public myModel = ''
  public mask = [ /\d/,/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]
  
}


