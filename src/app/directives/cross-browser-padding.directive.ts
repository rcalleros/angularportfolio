import { Directive, Renderer2, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[crossBrowserPadding]'
})
export class CrossBrowserPaddingDirective {

  constructor(
    private render: Renderer2,
    private el: ElementRef) { }
 
  ngAfterViewInit() {
    // console.log(this.render.selectRootElement(this.el.nativeElement));
    this.addStyle();
  }
  addStyle(){
    if(!this.hasPadding()){
      this.render.setStyle(this.el.nativeElement,'padding-left','20px');
    };
   
  }

  hasPadding = () =>{
    const elStyle = window.getComputedStyle(this.el.nativeElement);
    const padding = elStyle.getPropertyValue('padding-left');
    console.log(padding);
    return padding !== '0px'
  }

}
