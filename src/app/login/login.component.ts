import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorLoginMsg:boolean = false;

  constructor(private fb: FormBuilder, public cmServ:CommonService,  private router: Router) {}
  
  loginForm = this.fb.group({
    firstname: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])]
  });

 
  onSubmit(data) {
    if(this.loginForm.invalid)
      return;
   
    this.cmServ.loginUser(data.firstname, data.email).subscribe(
      (data:any)=>{
        if(data.length){
         this.router.navigate(['/company-list'])
        }
        else{
          console.log("Error");
        }
      },
      (error:any)=>{
        console.log("Error");
      }
    )
  }

  ngOnInit(): void {
    
  }

}
