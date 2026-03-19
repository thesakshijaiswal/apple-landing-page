import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Solutions } from '../../components/solutions/solutions';
import { Clients } from '../../components/clients/clients';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Solutions, Clients],
  templateUrl: './home.html',
})
export class Home {}
