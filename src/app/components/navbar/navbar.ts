import { Component, ElementRef, HostListener } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  fragment: string;
  children?: { label: string; fragment: string }[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMobileMenuOpen = false;
  isDropdownOpen = false;
  activeSection = 'home';

  navItems: NavItem[] = [
    { label: 'Home', fragment: 'home' },
    { 
      label: 'Solution', 
      fragment: 'solutions', 
      children: [
        { label: 'Apple in Business', fragment: 'apple' },
        { label: 'Mac Does That', fragment: 'mac' },
        { label: 'Our Services', fragment: 'services' }
      ] 
    },
    { label: 'Products', fragment: 'products' },
    { label: 'Pricing', fragment: 'pricing' },
    { label: 'Contact', fragment: 'contact' },
  ];

  constructor(private eRef: ElementRef) {}

  setActive(fragment: string) {
    this.activeSection = fragment;
    this.isMobileMenuOpen = false; 
    this.isDropdownOpen = false; 
  }

  toggleMobileMenu() { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  toggleDropdown() { this.isDropdownOpen = !this.isDropdownOpen; }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}