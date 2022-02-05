import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments:any[]=[];
  post:any={};
  constructor(private postService:PostsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
    this.getComment();
  }
  getPost(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getSinPost(id).subscribe((post)=>{
    this.post=post;
    });
  }
  getComment(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getComments(id).subscribe((comments)=>{
    this.comments=comments;
    });
  }


}
