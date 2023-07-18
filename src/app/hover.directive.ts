import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  // this is used in html element like this: <input hinvHover color="lightBlue">
  // @Input()
  // color: string = 'red';

  // this is used in html element like this: <input hinvHover="lightBlue">
  @Input()
  hinvHover: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.element);
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.hinvHover);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }

}
