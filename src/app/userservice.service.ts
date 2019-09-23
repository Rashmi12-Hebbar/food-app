import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


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
addRestaurants(obj){
  return this.httpClient.post(environment.apiPostRestuarants,obj,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  })
}
getRestaurants(): Observable<any> {
  return this.httpClient.get(environment. apiGetRestuarants,  {headers: new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('token'),
    
  })});
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