import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
httpRequest:HttpRequest<any>;
  constructor(private httpClient: HttpClient) {

  }
  addUser(obj) {
    return this.httpClient.post(environment.apiPostUser, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

  addCard(obj) {
    return this.httpClient.post(environment.apiPostCard, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }
  addRestaurants(obj) {
    return this.httpClient.post(environment.apiPostRestuarants, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }
  getRestaurants(): Observable<any> {
    return this.httpClient.get(environment.apiGetRestuarants, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),

      })
    });
  }
  updateRestaurant(obj){
    return this.httpClient.post(environment.apiPutResturants,obj,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),

      })
    });
}
deleteResturant(id){
  // return this.httpClient.delete(environment.apiPutResturants+id,{
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + localStorage.getItem('token'),

  //   })
  // });
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),

  })

  return this.httpClient
  .get<any>(environment.apiDeleteResturants
    
  )
  .toPromise();


}

  loginUser(obj) {
    return this.httpClient.post(environment.apiPostToken, {
      ...obj
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }
}