import { Component,OnInit } from '@angular/core';
import { DataFetchService } from './data-fetch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  imgSrcData : any;
  value : any;
 constructor(private dfSer : DataFetchService){}
    ngOnInit(){
      this.dfSer.getConfig().subscribe((data:object) => {
      this.imgSrcData = data;
      console.log(this.imgSrcData);
      })
   }

   public deleteData(item)
   { 
    //  console.log(`Here ${item.name}`);
    this.value = item;
    let pos = this.imgSrcData.map(function(obj)
    { return obj.image_url}).indexOf(item.image_url);
    console.log(pos);
    this.imgSrcData.splice(pos,1);
  }
}
