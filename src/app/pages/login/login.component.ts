import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // hide=true;
  constructor(private userservice:UserserviceService,private router:Router) { }
  
  

  ngOnInit() {
    localStorage.clear();
  }
  UserFormSubmit(FormData) {
    console.log('FormData', FormData)
    this.userservice.addUser1(FormData.form.value).subscribe((reponse) => {
      console.log(reponse);
      if(reponse['result'].token) {
        localStorage.setItem('token',reponse['result'].token);
        this.router.navigate(['/restuarant'])
      }
     }); 


  }

}
