import { Component, Input, ViewEncapsulation, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;
  public val;
  constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

  ngOnInit() {

    if (!this.id) {
            console.error('modal must have an id');
            return;
        }

   document.body.appendChild(this.element);

       
        this.element.addEventListener('click', el => {
            if (el.target.className === 'modal') {
                this.close();
            }
        });

        this.modalService.add(this);
  }


  ngOnDestroy(){
    this.modalService.remove(this.id);
        this.element.remove();
  }

  open(obj): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
        this.val = obj;
       // console.log("Here"+this.val);
    }

    
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

}