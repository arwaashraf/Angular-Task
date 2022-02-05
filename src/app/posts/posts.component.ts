import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
interface IPost{
  id:number;
  title:string;
  body:string;
  
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[] =[];
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts)=>{
      this.posts=posts;
    });
}

}
