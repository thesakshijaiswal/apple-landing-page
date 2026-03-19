import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About],
  templateUrl: './home.html',
})
export class Home {}
