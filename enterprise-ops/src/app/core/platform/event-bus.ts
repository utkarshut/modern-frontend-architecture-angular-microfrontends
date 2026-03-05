import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventBusService {

  private eventTarget = new EventTarget();

  emit<T>(eventName: string, data: T): void {
    const event = new CustomEvent<T>(eventName, { detail: data });
    this.eventTarget.dispatchEvent(event);
  }

  on<T>(eventName: string, handler: (data: T) => void): () => void {
    const listener = (event: Event) => {
      handler((event as CustomEvent<T>).detail);
    };

    this.eventTarget.addEventListener(eventName, listener);

    return () => {
      this.eventTarget.removeEventListener(eventName, listener);
    };
  }
}