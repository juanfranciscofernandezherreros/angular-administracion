import { Injectable } from '@angular/core';
import { User } from '../_models/index';
import { Contact } from '../_models/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacto:string = 'http://localhost:8085/sendMail';

  contact = new Contact();

  constructor(private http: HttpClient) { }


  sendMail(contact:Contact) {

    const headers = {
    }

    return this.http.post<Contact>(this.contacto,contact,{headers});
  }
}
