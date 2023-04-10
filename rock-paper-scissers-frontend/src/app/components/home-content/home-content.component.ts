import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent {
  constructor(private router: Router) {}
  onClick() {
    this.router.navigate(['game']);
  }
}
