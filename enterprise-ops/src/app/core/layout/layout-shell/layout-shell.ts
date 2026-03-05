import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-shell.html',
  styleUrl: './layout-shell.scss'
})
export class LayoutShell {

  refreshReports() {
    (window as any).appPlatform.events.emit(
      'reports:refresh',
      { timestamp: Date.now() }
    );
  }
}