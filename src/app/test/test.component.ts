import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  constructor() { 
    console.log("Test Constructor");
  }
  ngAfterViewChecked(): void {
    console.log("Test After View Checked");
  }
  ngAfterViewInit(): void {
    console.log("Test After View Init");
  }
  ngAfterContentChecked(): void {
    console.log("Test After Content Checked");
  }
  ngAfterContentInit(): void {
    console.log("Test After Content Init");
  }
  ngDoCheck(): void {
    console.log("Test Do Check");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Test On Changes");
  }

  ngOnInit(): void {
    console.log("Test On Init");
  }

}
