import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Http} from '@angular/http';
@Component({
  selector: 'menu',
    styleUrls: ['./menu.css'],
  templateUrl: './menu.html'
})
export class Menu {
  login:boolean;
  constructor(private router:Router,private http: Http){
    if(localStorage.getItem('admin')!=null){
      this.login=true;
    }else{
      this.login=false;
    }
  }

  logout(){
    localStorage.removeItem('admin');
    this.http.get("http://localhost:8080/ShopCake/logout");
    this.login=false;
    this.router.navigateByUrl("/login");
  }
}
