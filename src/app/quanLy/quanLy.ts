import {Component,OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'QL',
  styleUrls: ['./quanLy.css'],
  templateUrl: './quanLy.html'
})
export class QuanLy{
  cakes: any;
  constructor(public http: Http,private router: Router) {
     if (localStorage.getItem('admin')!=null) {
    this.http.get('http://localhost:8080/ShopCake/listCake')
      .subscribe((res: Response) => {
        this.cakes = res.json();
      });
     }else{
this.router.navigateByUrl('/login');
     }
  }
  search(nameCake:string){
    this.http.get('http://localhost:8080/ShopCake/searchCakeAdmin?nameCake='+nameCake)
      .subscribe((res: Response) => {
        this.cakes = res.json();
      });
  }
  }
