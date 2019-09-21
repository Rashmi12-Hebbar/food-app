import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) {

   }
   addUser(obj) {
    return this.httpClient.post(environment.apiPostUser,obj, {
     headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
   })
}

addCard(obj) {
  return this.httpClient.post(environment.apiPostCard,obj, {
   headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
 })
}
loginUser(obj) {
  return this.httpClient.post(environment.apiPostToken,{
    ...obj
  } ,{
   headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
 })
}
}