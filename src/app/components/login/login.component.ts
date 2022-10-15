import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username:string="";
    password:string="";
    msg:string=""
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(document.cookie){
      this.router.navigate([""])
    }
  }


  handleLogin=()=>{
    let user = {
      username:this.username,
      password:this.password
    }
    this.username = "";
    this.password = "";
    console.log("User",user);
    this.authService.login(user).subscribe(res=>{
      console.log("RES",res)
      if(res.status < 300){
        this.router.navigate([""])
      }
      else{
        this.msg = "Sorry, there was an error with the login! :("
        setTimeout(()=> this.msg = "",2000)
      }
     })

  }

}
