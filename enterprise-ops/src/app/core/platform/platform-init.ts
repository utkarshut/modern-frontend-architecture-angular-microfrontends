import { inject } from '@angular/core';
import { EventBusService } from './event-bus';

export function initPlatform() {
  const eventBus = inject(EventBusService);

  (window as any).appPlatform = Object.freeze({
    events: {
      emit: (name: string, data: any) => {
        eventBus.emit(name, data);
      },
      on: (name: string, handler: (data: any) => void) => {
        return eventBus.on(name, handler);
      }
    }
  });
}