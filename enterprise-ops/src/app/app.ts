import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initPlatform } from './core/platform/platform-init';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {
  constructor() {
    initPlatform();
  }
}