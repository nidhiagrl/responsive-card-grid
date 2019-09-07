import { Component, OnInit } from '@angular/core';
import { DataFetchService } from './data-fetch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imgSrcData: any;
  value: any;
  constructor(private dfSer: DataFetchService) { }
  ngOnInit() {
    this.dfSer.getConfig().subscribe((data: object) => {
      this.imgSrcData = data;
      console.log(this.imgSrcData);
    })
  }

  public performOperation(obj) {
    this.value = obj.item;
    let pos = this.imgSrcData.map(function (obj) { return obj.image_url }).indexOf(this.value.image_url);
    if (obj.operation == 'delete') {
      this.imgSrcData.splice(pos, 1);
    }
    if (obj.operation == 'edit') {
      console.log(obj.item);
    }

  }
}
