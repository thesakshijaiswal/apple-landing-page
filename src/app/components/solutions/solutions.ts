import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Industry {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './solutions.html',
})
export class Solutions {
  industries: Industry[] = [
    { name: 'Retail', icon: 'shopping-cart', description: 'Next-gen POS and inventory.' },
    { name: 'BFSI', icon: 'trending-up', description: 'Secure digital banking flows.' },
    { name: 'Pharma', icon: 'heart-pulse', description: 'Compliance-ready mobility.' },
    { name: 'Startups', icon: 'rocket', description: 'Scale fast with Apple tech.' },
    { name: 'Manufacturing', icon: 'settings', description: 'Smart factory floor solutions.' },
    { name: 'GCCs / ITES', icon: 'globe', description: 'Global infrastructure sync.' },
  ];
}