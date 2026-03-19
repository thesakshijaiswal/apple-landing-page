import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoPlayInterval: any;

  slides: Slide[] = [
    {
      title: 'Empowering GCCs with Apple.',
      subtitle: 'Learn More >',
      image: 'images/hero-1.webp',
      link: '#solutions'
    },
    {
      title: 'Seamless Integration for Business.',
      subtitle: 'View Products >',
      image: 'images/hero-2.webp',
      link: '#products'
    },
    {
      title: 'Legacy-Free Performance for Modern Teams',
      subtitle: 'Contact Us >',
      image: 'images/hero-3.avif',
      link: '#contact'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  next(event?: Event) {
    if (event) event.stopPropagation();
    this.incrementSlide();
    this.resetTimer();
  }

  prev(event?: Event) {
    if (event) event.stopPropagation();
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetTimer();
  }

  private incrementSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.cdr.detectChanges(); 
  }

  private startAutoPlay() {
    if (this.autoPlayInterval) return; 
    this.autoPlayInterval = setInterval(() => {
      this.incrementSlide();
    }, 5000); 
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  private resetTimer() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}