import { Component,OnInit } from '@angular/core';
import { DataFetchService } from './data-fetch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  imgSrcData : any;
 constructor(private dfSer : DataFetchService){}
    ngOnInit(){
      this.dfSer.getConfig().subscribe((data:object) => {
      this.imgSrcData = data;
      console.log(this.imgSrcData);
      })
   }
}
