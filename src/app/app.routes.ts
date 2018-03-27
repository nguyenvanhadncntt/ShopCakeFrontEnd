import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Login} from './login/login';
import {InforCake} from './inforCake/inforCake';
import {QuanLy} from './quanLy/quanLy';
import {Insert} from './insertCake/insertCake';
import {Delete} from './deleteCake/deleteCake';
import {Edit} from './editCake/editCake';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'login', component: Login},
  {path:'inforCake/:cCake', component:InforCake},
  {path:'quanly', component:QuanLy},
  {path:'insert', component:Insert},
   {path:'deleteCake/:cCake', component:Delete},
   {path:'editCake/:cCake', component:Edit}
];

