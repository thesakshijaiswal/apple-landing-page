import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero],
  templateUrl: './home.html',
})
export class Home {}
