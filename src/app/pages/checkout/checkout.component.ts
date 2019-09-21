import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  ngOnInit() {
  }

  // onUserFormSubmit(userforms){
  //   console.log('userforms',userforms)
  //   this.userservice.addCard(userforms.form.value).subscribe((reponse)=>{
  //     console.log(reponse);
  //    }); 
     


  //   }

//     demo(){
//       console.log('userforms')
//     }
// }
}
