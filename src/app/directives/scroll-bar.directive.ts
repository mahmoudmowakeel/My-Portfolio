import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollIndicator]',
  standalone: true
})
export class ScrollIndicatorDirective {

  private fillEl!: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    this.fillEl = this.el.nativeElement.querySelector('.fill')!;
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const percent = scrollTop / scrollHeight;

    this.fillEl.style.height = `${percent * 100}%`;
  }
}
