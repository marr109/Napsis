import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  private scriptLoaded = false;

  loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.scriptLoaded) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://www.google.com/recaptcha/api.js';
        scriptElement.onload = () => {
          this.scriptLoaded = true;
          resolve();
        };
        scriptElement.onerror = () => {
          reject();
        };
        document.body.appendChild(scriptElement);
      } else {
        resolve();
      }
    });
  }
}