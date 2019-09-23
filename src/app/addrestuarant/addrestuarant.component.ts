import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-addrestuarant',
  templateUrl: './addrestuarant.component.html',
  styleUrls: ['./addrestuarant.component.css']
})
export class AddrestuarantComponent implements OnInit {
isModalWindow:boolean;
  addrestuarants=[]
  constructor(private Service: UserserviceService) { }

  onModalToggle(){
    this.isModalWindow=true;
  }

  onModalClose(isModalClose){
    this.isModalWindow=isModalClose;
  }
  ngOnChanges(change:SimpleChange){
    console.log("simplechanges", change);
  }
  ngOnInit() {
    this.ongetRestaurants();
  }

  ongetRestaurants() {
    this.Service.getRestaurants().subscribe((res) => {
      console.log('Res', res);
      this.addrestuarants=res;
      console.log(this.addrestuarants);
      // this.restaurants= res.result;
    });



  }
addRestruarantSubmit(FormData){
    console.log('FormData',FormData.form.value ),
    

    this.Service.addRestaurants(FormData.form.value).subscribe((reponse) => {
      console.log(reponse);
    
      

    });
    
  }
 
}
