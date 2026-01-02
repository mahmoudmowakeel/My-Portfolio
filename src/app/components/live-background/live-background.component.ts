import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-live-background',
  standalone: true,
  template: `<canvas #canvas style="position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1;"></canvas>`
})
export class LiveBackgroundComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;

  particles: Particle[] = [];
  particleCount = 120;
  width = 0;  // don't use window yet
  height = 0;

  ngAfterViewInit() {
    if (typeof window === 'undefined') return; // safety for SSR

    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.createParticles();
    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    if (typeof window === 'undefined') return; // safety
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.width, this.height));
    }
  }

  animate() {
    if (!this.ctx) return;

    // Fill background color
    this.ctx.fillStyle = '#212121'; // dark blue example
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw particles
    for (let p of this.particles) {
      p.update(this.width, this.height);
      p.draw(this.ctx);
    }

    requestAnimationFrame(() => this.animate());
  }
}


class Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  opacity: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 1 + 0.5;
    this.speedY = Math.random() * 0.5 + 0.2;
    this.opacity = Math.random() * 0.7 + 0.2;
  }

  update(width: number, height: number) {
    this.y += this.speedY;
    if (this.y > height) {
      this.y = 0;
      this.x = Math.random() * width;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }
}
