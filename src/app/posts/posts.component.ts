import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../Services/posts.service';
/////////////////day 4
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
  postId:any;
  constructor(private postService:PostsService , private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    ///////////////////day 4
    this.postService.getAllPosts().subscribe((posts)=>{
      this.posts=posts;
      /////////////////day 5
    this.activateRoute.paramMap.subscribe((params:ParamMap)=>{
      this.postId=params.get('id');
    })
  });
}
/////////////////day 5
  isSelected(post:any){
    return parseInt(post.id)==(this.postId)
  }

}
