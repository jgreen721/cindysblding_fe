import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any[]=[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data:any)=>{
         this.posts = data.posts
        console.log(data.posts)
    })
  }

}
