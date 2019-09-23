import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-addrestuarant',
  templateUrl: './addrestuarant.component.html',
  styleUrls: ['./addrestuarant.component.css']
})
export class AddrestuarantComponent implements OnInit {
  isModalWindow: boolean;
  addrestuarants = [];
  selectedResto = null;
  constructor(private Service: UserserviceService) { }

  onModalToggle(addrestuarant) {
    this.isModalWindow = true;
    this.selectedResto = JSON.parse(JSON.stringify(addrestuarant));
  }
  addRestuarant() {
    this.isModalWindow = true;
    this.selectedResto={}
  }
  
  onModalClose(isModalClose) {
    this.isModalWindow = isModalClose;
  }
  ngOnChanges(change: SimpleChange) {
    console.log("simplechanges", change);
  }
  ngOnInit() {
    this.ongetRestaurants();
  }

  ongetRestaurants() {
    this.Service.getRestaurants().subscribe((res) => {
      console.log('Res', res);
      this.addrestuarants = res;
      console.log(this.addrestuarants);
      // this.restaurants= res.result;
    });



  }
  addRestruarantSubmit(formdata) {
    console.log('formdata', formdata.form.value)
      // this.Service.addRestaurants(formdata.form.value).subscribe((reponse) => {
      //   console.log(reponse);
      // });
  }
  deleteResturant(id){
    this.Service.deleteResturant(id).then(res=>{
      console.log(res);

    });

  }
}
