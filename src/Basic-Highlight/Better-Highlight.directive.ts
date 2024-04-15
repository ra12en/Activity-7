import { Directive, ElementRef,HostBinding,HostListener,Renderer2,OnInit,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string ='transparent';
  @Input() highlightColor: string ='blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue', false, false)
  }
  
  @HostListener('mouseenter') mouseover(evenData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue', false, false);
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(evenData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent', false, false);
    this.backgroundColor='transparent';
  }

}