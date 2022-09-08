import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  interpolation:["((","))"],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-intrpolation';
}
