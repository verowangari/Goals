import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  constructor(private elem:ElementRef) { }
   private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
