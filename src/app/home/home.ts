import {Component,OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home implements OnInit{
  cakes:any;
  constructor(public http: Http) {}
  ngOnInit() {
        this.http.get('http://localhost:8080/ShopCake/')
      .subscribe((res: Response) => {
        this.cakes = res.json();
      });
    }
}
