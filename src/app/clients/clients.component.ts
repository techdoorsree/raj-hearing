import { Component, OnInit } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
   constructor() { }
  public imagesUrl;
  
  ngOnInit() {
   


   
      this.imagesUrl = [
        "assets/images/b/a.png",
        "assets/images/b/b.png",
        "assets/images/b/c.png",
        "assets/images/b/d.png",
        "assets/images/b/e.png",
        "assets/images/b/f.png",
        "assets/images/b/g1.png",
        "assets/images/b/k.png"
  
  
        ];
  }

}
