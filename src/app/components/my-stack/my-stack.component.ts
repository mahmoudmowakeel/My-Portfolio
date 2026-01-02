import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-my-stack',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './my-stack.component.html',
  styleUrl: './my-stack.component.css'
})
export class MyStackComponent  {
  // @ViewChild('mystack') box!: ElementRef;
  // ngAfterViewInit() {
  //   gsap.from(this.box.nativeElement, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.8,
  //     scrollTrigger: {
  //       trigger: this.box.nativeElement,
  //       start: 'top bottom',
  //       once: true,
  //     }
  //   });
  // }
}
