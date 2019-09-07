import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {

 private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
        //console.log(this.modals);
    }

    remove(id: string) {
        // remove modal from array of active modals
        let pos = this.modals.findIndex(x => x.id == id);
        this.modals.splice(pos,1);
    }

    open(id: string, obj) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        console.log("Here");
        modal.open(obj);
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}