import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'profile';
  @Input() reactValue = '';

  inputValue = '';
  onKey(event: any) {
    this.inputValue = event.target.value;
    document.dispatchEvent(
      new CustomEvent('angular-input-event', { detail: event.target.value })
    );
  }
}
