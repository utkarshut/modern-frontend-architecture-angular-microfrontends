import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports-entry',
  imports: [CommonModule],
  templateUrl: './reports-entry.html',
  styleUrl: './reports-entry.scss',
})
export class ReportsEntry {
  selectedUser = signal<string | null>(null);
  private unsubscribe?: () => void;
  private route = inject(ActivatedRoute);
  lastRefresh = signal<string>('Never');

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const userId = params.get('userId');
      this.selectedUser.set(userId);
    });
  }

  ngOnInit() {
    const platform = (window as any).appPlatform;
    if (platform?.events) {
      this.unsubscribe = platform.events.on(
        'user:selected',
        (data: { userId: string }) => {
          console.log(data);
          this.selectedUser.set(data.userId);
        }
      );
    }
    if (platform?.events) {
      this.unsubscribe = platform.events.on(
        'reports:refresh',
        () => {
          this.lastRefresh.set(new Date().toLocaleTimeString());
        }
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribe?.();
  }
}
