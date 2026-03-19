import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './clients.html',
  styles: [`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes scroll-reverse {
      0% { transform: translateX(-50%); } 
      100% { transform: translateX(0); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: scroll 30s linear infinite;
    }
    .animate-marquee-reverse {
      display: flex;
      width: max-content;
      animation: scroll-reverse 30s linear infinite;
    }
  `]
})
export class Clients {
  clientIcons = [
    { name: 'Shield-Check', label: 'Security' },
    { name: 'Zap', label: 'Energy' },
    { name: 'Globe', label: 'Global' },
    { name: 'Layers', label: 'Architecture' },
    { name: 'Cpu', label: 'Tech' },
    { name: 'Award', label: 'Quality' },
    { name: 'Coins', label: 'Finance' },
    { name: 'Activity', label: 'Healthcare' },
    { name: 'Box', label: 'Logistics' },
    { name: 'Briefcase', label: 'Enterprise' },
  ];
}

