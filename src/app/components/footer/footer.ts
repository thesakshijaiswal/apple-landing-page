import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html'
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  quickLinks = [
    { label: 'Industries', path: '#solutions' },
    { label: 'Case Studies', path: '#' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms & Conditions', path: '#' },
    { label: 'Contact Us', path: '#contact' }
  ];

  socials = [
    { name: 'facebook', path: '#' },
    { name: 'instagram', path: '#' },
    { name: 'linkedin', path: '#' }
  ];
}