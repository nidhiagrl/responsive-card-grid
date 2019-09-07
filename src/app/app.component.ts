import { Component, OnInit } from '@angular/core';
import { DataFetchService } from './data-fetch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imgSrcData: any;
  constructor(private dfSer: DataFetchService) { }
  ngOnInit() {
    this.dfSer.getConfig().subscribe((data: object) => {
      this.imgSrcData = data;
      //console.log(this.imgSrcData);
    })
  }

  public performOperation(obj) {
    let pos = this.imgSrcData.map(function (x) { return x.image_url }).indexOf(obj.item.image_url);
    if (obj.operation == 'delete') {
      this.imgSrcData.splice(pos, 1);
      console.log("Item deleted!")
    }
    if (obj.operation == 'edit') {
      //console.log(obj.newValue);
      this.imgSrcData[pos].image_url = obj.newValue;
      console.log("Item modified!");
    }

  }
}
