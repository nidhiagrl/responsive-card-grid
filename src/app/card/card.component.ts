import { Component, OnInit, Input } from '@angular/core';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() cardData :any;
   closeIcon = faTimes;
   editIcon = faPencilAlt;
  constructor() { }

  ngOnInit() {
  }

}