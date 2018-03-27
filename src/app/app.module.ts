import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";

import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {Login} from './login/login';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Menu} from './menu/menu';
import {InforCake} from './inforCake/inforCake';
import {QuanLy} from './quanLy/quanLy';
import {Insert} from './insertCake/insertCake';
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {Delete} from './deleteCake/deleteCake';
import {Edit} from './editCake/editCake';

@NgModule({
  declarations: [AppComponent, About, Home,Login,Menu,InforCake,QuanLy,Insert,FileSelectDirective,Delete,Edit],
  imports     : [BrowserModule, FormsModule, HttpModule,ReactiveFormsModule ,RouterModule.forRoot(rootRouterConfig)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
