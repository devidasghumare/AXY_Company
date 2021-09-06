import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanyListComponent } from './company-list/company-list.component'


const routes: Routes = [
  {path:'company-list', component:CompanyListComponent  },
  {path:'**', component:LoginComponent  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
