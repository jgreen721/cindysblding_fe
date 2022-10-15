import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currUser:any={};

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    if(!document.cookie)this.router.navigate(["login"]);
    let cookieId = document.cookie.split("=")[1];
    console.log("CookieId",cookieId);
    this.authService.validateToken(cookieId).subscribe((data:any)=>{
      console.log("Data",data)
      this.currUser = data?.payload
    })
  }

  handleLogout=()=>{
    this.currUser = {};
    document.cookie = "name=;max-age=-9999999"
    this.router.navigate(["login"])
  }

}
