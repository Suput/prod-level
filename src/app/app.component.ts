import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  style_h1 = 'color: red; background-color: green;';

  text = '';

  name = '';
  age = 0;
  log() {
    alert('You"ve pressed');
  }
}
