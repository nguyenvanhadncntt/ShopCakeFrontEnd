import {Component,OnInit} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'edit',
  styleUrls: ['./about.css'],
  templateUrl: './about.html'
})
export class About {
  myForm:FormGroup;
  thongBao:string="";
  filesToUpload: Array<File>;
  cake:any={};
  cCake:string;
  constructor(fb: FormBuilder,public http: Http,private route: ActivatedRoute,private router:Router) {
       
       this.route.params.subscribe(params => { this.cCake = params['cCake']; });
       if (localStorage.getItem('admin')!=null) {
       
      this.http.get("http://localhost:8080/ShopCake/loadEdit?cCake="+this.cCake).subscribe((res: Response) => {
        this.cake = res.json();
      });
    this.myForm = fb.group({
      'nCake': [''],
      'cCake': [''],
      'price': [''],
      'detail': ['']
    });
     this.filesToUpload = [];
       }else{
           this.router.navigateByUrl('/login');
       }
  }

    insert(ccCake:string,nCake:string,detail:string,price:string) {
        this.makeFileRequest("http://localhost:8080/ShopCake/editCake", [nCake,ccCake,price,detail], this.filesToUpload).then((result) => {
         
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
    }
 
    makeFileRequest(url: string, params: string[], files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("file", files[i], files[i].name);
            }
            formData.append("nCake",params[0]);
            formData.append("cCake",params[1]);
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
