import {Component,} from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'delete',
  styleUrls: ['./deleteCake.css'],
  templateUrl: './deleteCake.html'
})
export class Delete  {
  cake:any={};
  cCake:string;
  constructor(public http: Http,private route: ActivatedRoute,private router:Router) {
   this.route.params.subscribe(params => { this.cCake = params['cCake']; });
   if(localStorage.getItem('admin')!=null){
      this.http.get('http://localhost:8080/ShopCake/loadDelete?cCake='+this.cCake)
      .subscribe((res: Response) => {
        this.cake = res.json();
      });
   }
      else{
      this.router.navigateByUrl('/login');
      }
  }
  deleteCake(cCake:string){
    this.http.delete('http://localhost:8080/ShopCake/deleteCake?cCake='+this.cCake)
      .subscribe((res: Response) => {
        this.router.navigateByUrl('/quanly');
      });
  }
 
}