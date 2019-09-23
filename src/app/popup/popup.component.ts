import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  display = 'none';
  @Input() formValues: any = {}
  @Input() isModalWindow: boolean;
  @Output() isModalClose = new EventEmitter<boolean>();
  openModalWindow: boolean;
  constructor(private restoService: UserserviceService) {
    this.openModalWindow = true;
  }

  ngOnInit() {
  }

  onclosehandled() {
    this.isModalClose.emit(false);

  }
  addRestruarantSubmit(formdata) {
    console.log('formdata', formdata.form.value)
    //
    if (this.formValues && this.formValues.id) {
      let obj={
        "id":this.formValues.id,
       ...formdata.form.value
        }
      this.restoService.updateRestaurant(obj).subscribe(res=>{
        console.log(res);
        this.isModalClose.emit(false);

      })
    } else {
      this.restoService.addRestaurants(formdata.form.value).subscribe((reponse) => {
        console.log(reponse);
        this.isModalClose.emit(false);

      });
    }
  }
  

  
}
