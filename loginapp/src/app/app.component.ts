import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginapp';

  constructor(private router: Router) {}

  logoutUser(): void {
    localStorage.removeItem('TOKEN_NUMBER');
    localStorage.removeItem('ROLE_TYPE');
    this.router.navigate(['/login']);
    alert('Succesfully logout');
  }
}
