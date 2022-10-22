import { Component, Input, OnInit } from '@angular/core';
import { PostType, UserType } from 'src/app/models/types';


interface Post{
  id:number,
  post:string,
  postedBy:UserType,
  userid:number
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 @Input() post:PostType = {};
  constructor() { }

  ngOnInit(): void {
  }

}
