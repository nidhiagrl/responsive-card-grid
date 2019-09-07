import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../modal';
import { ModalComponent} from '../modal/modal.component'


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() cardData :any;
   @Output() private selectedItem = new EventEmitter<any>();
   @ViewChild(ModalComponent) child : ModalComponent;
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

  public modifyItem(url){
     let item = { 'image_url' : url};
     //console.log('Try '+this.newImgLink);
    this.selectedItem.emit({ item, 'newValue': this.newImgLink, 'operation': 'edit'});
  }
 
 openModal(id: string, obj) {
        this.modalService.open(id,obj);
        //console.log("LEila"+obj);
    }

    closeModal(id: string) {
        this.modalService.close(id);
        this.newImgLink='';
    }

 

}