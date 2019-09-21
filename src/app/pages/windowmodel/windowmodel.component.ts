import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-windowmodel',
  templateUrl: './windowmodel.component.html',
  styleUrls: ['./windowmodel.component.css']
})
export class WindowmodelComponent implements OnInit, OnChanges {

  @Input() ismodel: boolean;
  @Output() myevent = new EventEmitter<boolean>();
  @Input() totalprice : any;
  res;
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
  }

  ngOnChanges()  {
    console.log("v", this.totalprice);
  }

  eventfunction() {
    this.myevent.emit(false);
  }

  onUserFormSubmit(userforms) {
    console.log('userforms', userforms)
    this.userservice.addCard(userforms.form.value).subscribe((reponse) => {
      this.res = reponse;
      if(this.res.statusCode== 200)
           alert("sucessfull payment")
          else{
      alert("unsucessfull")
          }
      console.log(reponse);
    });



  }
  demo() {
    console.log('userforms')
  }
}
