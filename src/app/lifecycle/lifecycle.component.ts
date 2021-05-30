import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit {

  @Input()data:string="";
  @ViewChild('viewDiv',{static:false}) viewDiv!:ElementRef;
  @ContentChild('contentDiv',{static:false}) contentDiv!:ElementRef;
  
 
  constructor() {

    console.log("Constructor");
   }
  ngDoCheck(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {


  }

  ngOnInit(): void {
    
    console.log("On Init")

    console.log(`Before ViewInit ${this.viewDiv}`);
    console.log(`Before ContentInit ${this.contentDiv}`);
  }

 
  ngAfterViewInit(){

    console.log("View Init")
    console.log(`After ViewInit ${this.viewDiv}`);

  }
  ngAfterViewChecked(){

   

  }
  ngAfterContentChecked(){



  }
  ngAfterContentInit(){
    console.log(`After ContentInit ${this.contentDiv}`);

  

  }

  changeColor(){

    this.viewDiv.nativeElement.style.backgroundColor='red';

  }

  changeColorContentDiv(){

    this.contentDiv.nativeElement.style.backgroundColor="green";

  }

  

  

}
