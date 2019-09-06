import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../modal/modal.service';

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
   newImgLink : string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.newImgLink = '';
  }

  public deleteItem(item) {
    //  console.log(item);
    this.selectedItem.emit({item, 'operation' :'delete'});
  }

  public modifyItem(item){
    // console.log(item);
    this.selectedItem.emit({item, 'operation': 'edit'});
  }
 
 openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

 

}