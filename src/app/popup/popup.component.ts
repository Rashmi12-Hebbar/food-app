import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
display='none';

@Input() isModalWindow:boolean;
@Output() isModalClose = new EventEmitter<boolean>();
openModalWindow:boolean;
  constructor() {
    this.openModalWindow=true;
   }

  ngOnInit() {
  }
  
  onclosehandled()
  {
     this.isModalClose.emit(false);
   
  }

}
