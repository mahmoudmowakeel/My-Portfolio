import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Animate all direct children (or elements with .reveal if you prefer)
    const items = this.el.nativeElement.querySelectorAll('*');

    items.forEach((item: HTMLElement) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse', // 👈 key for replay
            markers: false,
          }
        }
      );
    });
  }
}
