import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  hide = true;
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
    localStorage.clear();
  }
  UserFormSubmit(FormData) {
    console.log('FormData', FormData)
    this.userservice.addUser1(FormData.form.value).subscribe((reponse) => {
      console.log(reponse);
      localStorage.setItem('token', reponse['result'].token)
    });


  }

}
