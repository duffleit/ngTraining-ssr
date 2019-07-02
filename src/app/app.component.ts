import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private disclaimerVisibility = false;

  public toggleDisclaimer(): void {
    this.disclaimerVisibility = !this.disclaimerVisibility;
  }

  public get showDisclaimer(): boolean {
    return this.disclaimerVisibility;
  }
}
