import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() cardData :any;
   @Output() private selectedItem = new EventEmitter<any>();
   closeIcon = faTimes;
   editIcon = faPencilAlt;
  constructor() { }

  ngOnInit() {
  }

  public deleteItem(item) {
    //  console.log(item);
    this.selectedItem.emit({item, 'operation' :'delete'});
  }

  public modifyItem(item){
    // console.log(item);
    this.selectedItem.emit({item, 'operation': 'edit'});
  }


 

}