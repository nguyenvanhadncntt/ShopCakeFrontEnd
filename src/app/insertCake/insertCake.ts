import {Component,OnInit} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'insert',
  styleUrls: ['./insertCake.css'],
  templateUrl: './insertCake.html'
})
export class Insert {
  myForm:FormGroup;
  thongBao:string;
  filesToUpload: Array<File>;
  constructor(private http: Http,fb: FormBuilder, private router: Router) {
       if (localStorage.getItem('admin')!=null) {
      this.myForm = fb.group({
      'nCake': [''],
      'cCake': [''],
      'price': [''],
      'detail': ['']
    });
    this.thongBao="";
     this.filesToUpload = [];
       }
       else{
           this.router.navigateByUrl('/login');
       }
  }

    insert(formm:any) {
        this.makeFileRequest("http://localhost:8080/ShopCake/insertCake", [formm.cCake,formm.nCake,formm.price,formm.detail], this.filesToUpload).then((result) => {
         
        }, (error) => {
          this.thongBao=error;
            console.error(error);
        });
        if(this.thongBao===""){
          this.router.navigateByUrl('/quanly');
        }
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        // form.file=<Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, params: string[], files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("file", files[i], files[i].name);
            }
            formData.append("cCake",params[0]);
            formData.append("nCake",params[1]);
            formData.append("price",params[2]);
            formData.append("detail",params[3]);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.stringify(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
 
}
