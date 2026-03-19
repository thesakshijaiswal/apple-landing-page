import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  label: string;
  value: number;
  currentValue: number;
  suffix: string;
  bgColor: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class About implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  stats: Stat[] = [
    { label: 'Apple Experts', value: 100, currentValue: 0, suffix: '+', bgColor: 'bg-gradient-to-b from-orange-100 to-transparent' },
    { label: 'Active Customers', value: 1000, currentValue: 0, suffix: '+', bgColor: 'bg-gradient-to-b from-blue-100 to-transparent' },
    { label: 'Devices Deployed', value: 700, currentValue: 0, suffix: 'k', bgColor: 'bg-gradient-to-b from-pink-100 to-transparent' },
    { label: 'Years of experience', value: 40, currentValue: 0, suffix: '+', bgColor: 'bg-gradient-to-b from-green-100 to-transparent' }
  ];

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateCounters();
          this.hasAnimated = true;
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.observer.observe(this.statsSection.nativeElement);
  }

  private animateCounters() {
    this.stats.forEach((stat, index) => {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const newValue = Math.floor(easedProgress * stat.value);
        this.stats = this.stats.map((s, i) =>
          i === index ? { ...s, currentValue: newValue } : s
        );
        this.cdr.detectChanges();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.stats = this.stats.map((s, i) =>
            i === index ? { ...s, currentValue: s.value } : s
          );
          this.cdr.detectChanges();
        }
      };

      requestAnimationFrame(animate);
    });
  }
}