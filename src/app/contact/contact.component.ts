import { Component, OnInit } from '@angular/core';
import { ProductService ,IMessage} from '../product.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: IMessage = {};
  constructor(private data : ProductService) { }

  ngOnInit() {
  }
  sendEmail(message: IMessage) {
    this.data.sendEmail(message).subscribe(res => console.log(res.json()),
     res => console.error(res))
  
  }
  
}
