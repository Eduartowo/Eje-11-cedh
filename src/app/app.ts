import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mascota } from './components/mascota/mascota';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mascota],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eje-11-earn');
}
