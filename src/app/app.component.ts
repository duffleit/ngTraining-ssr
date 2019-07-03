import { Component, Inject } from '@angular/core';
import { ENVIRONMENT_TOKEN } from 'src/environment-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private disclaimerVisibility = false;
  public date: string;

  constructor(@Inject(ENVIRONMENT_TOKEN) private token: string){
    this.date = new Date().toString();
  }

  public toggleDisclaimer(): void {
    this.disclaimerVisibility = !this.disclaimerVisibility;
  }

  public get showDisclaimer(): boolean {
    return this.disclaimerVisibility;
  }

  public get environment(): string{
    return this.token;
  }

}
