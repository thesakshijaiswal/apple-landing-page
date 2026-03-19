import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Solutions } from '../../components/solutions/solutions';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Solutions],
  templateUrl: './home.html',
})
export class Home {}
