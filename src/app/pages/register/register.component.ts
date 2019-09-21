import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  ngOnInit() {
    
  }
  onUserFormSubmit(FormData){
    console.log('FormData',FormData)
    let requestobj={
      ...FormData.form.value,userType:"1"
    }

    this.userservice.addUser(requestobj).subscribe((reponse)=>{
      console.log(reponse);
     }); 


  }

}

