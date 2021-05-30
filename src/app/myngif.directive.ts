import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyngif]'
})
export class MyngifDirective implements OnChanges {

  @Input('appMyngif') condition:boolean=false;

  constructor(private viewContainter:ViewContainerRef,private temlpateRef:TemplateRef<any>) { }


  ngOnChanges(changes: SimpleChanges): void {
    
    
    if(changes.condition.currentValue!==changes.condition.previousValue)
    {
      if(changes.condition.currentValue===true)
      {
        this.viewContainter.createEmbeddedView(this.temlpateRef);
      }
      else
      {
        this.viewContainter.clear();
      }

    }
  }





}
