import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-httpcomponent',
  templateUrl: './httpcomponent.component.html',
  styleUrls: ['./httpcomponent.component.scss']
})
export class HttpcomponentComponent implements OnInit {



  posts:any;


  constructor(private http:HttpClient) { 

    console.log("Http Constructor");
  }

  ngOnInit(): void {

    console.log("HTTP OnInit")

    this.getPosts();
  }


  getPosts()
  {
    
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response)=>{

      this.posts = response;
     
    })
   
  }


}
