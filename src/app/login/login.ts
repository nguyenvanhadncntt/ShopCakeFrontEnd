import {Component,OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  styleUrls: ['./login.css'],
  templateUrl: './login.html'
})
export class Login {
  user:any;
  myForm:FormGroup;
  thongBao:string;
  constructor(private http: Http,fb: FormBuilder, private router: Router) {
     if(localStorage.getItem('admin')==null){
      this.myForm = fb.group({
      'username': [''],
      'password': ['']
    });
     }
     else{
       router.navigateByUrl("/quanly");
     }
  }
    login(formm: any) {
        this.http.get('http://localhost:8080/ShopCake/checkLogin?username='+formm.username+'&password='+formm.password)
      .subscribe((res: Response) => {
        this.user = res.json();
        if(this.user.username==null){
            this.thongBao="Ten dang nhap hoac mat khau bi sai";
        }else{
           localStorage.setItem('admin', JSON.stringify(this.user));
            this.router.navigate(['/quanly']);
        }
      });
    }
}
