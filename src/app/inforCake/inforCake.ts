import {Component,OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'inforCake',
  styleUrls: ['./inforCake.css'],
  templateUrl: './inforCake.html'
})
export class InforCake{
    cake:any={};
    cCake:any;
    loading:boolean;
    constructor(private http: Http,private route: ActivatedRoute) {
     this.getInforCake();
    }

    getInforCake(){
        this.route.params.subscribe(params => { this.cCake = params['cCake']; });
        this.http.get('http://localhost:8080/ShopCake/inforCake?cCake='+this.cCake)
      .subscribe((res: Response) => {
        this.cake = res.json();
        this.loading=true;
      });
    }
}
