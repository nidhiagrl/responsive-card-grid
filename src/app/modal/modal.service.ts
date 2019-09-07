import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {

 private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
        //console.log(this.modals);
    }

    remove(id: string) {
        let pos = this.modals.findIndex(x => x.id == id);
        this.modals.splice(pos,1);
    }

    open(id: string, obj) {
        const modal = this.modals.find(x => x.id === id);
        //console.log("Here");
        modal.open(obj);
    }

    close(id: string) {
       const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}